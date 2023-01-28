import { Layout, theme, Space, Button, Badge, Avatar,Spin , Typography, Dropdown, notification,Popover } from 'antd'
import React, { useState, useEffect } from 'react'
import logo from '../assets/images/p3f-logo.png'
import {CloudDownloadOutlined, AmazonOutlined, UserOutlined, SearchOutlined, BellOutlined, QuestionOutlined, PoweroffOutlined } from '@ant-design/icons';
import { Link, navigate } from '@reach/router';
import { Auth } from 'aws-amplify';
import { useSelector, useDispatch } from 'react-redux';
import { changeAgentAvailibility } from '../store/reducers/settings';
import { logoutUser, updateUser } from '../store/reducers/user';

const AgentMainHeader = (props) => {
    const { useToken } = theme;
    const { token } = useToken();
    const dispatch=useDispatch()
    const user = useSelector((state) => state.user)
    const settings = useSelector((state) => state.settings)
    const [state, setState] = useState({user,settings  })

    const { token: { colorBgContainer }, } = theme.useToken();
    const { Header } = Layout
    useEffect(() => setState({user,settings }), [user,settings])
    const getUserName = () => {
        let result = ""
        if (state.user.isLoggedin) {
            result = state.user.attributes?.email && state.user.attributes?.email?.split("@")[0].toUpperCase()
        }
        return result
    }
    
    const items = [{
        key: '1',
        icon: <UserOutlined />,
        label: 'Profile',
        onClick: () => { }
    }, {
        key: '2',
        icon: <PoweroffOutlined />,
        label: 'SignOut',
        onClick: () => {
            notification.warning({
                message: 'SignOut',
                description: 'Are you sure you want to signout?',
                placement: 'topRight',
                btn: <Button type='primary' onClick={() => {
                    Auth.signOut()
                        .then(data => {
                            dispatch(logoutUser())
                            console.log(data);
                            navigate('/login')
                        })
                        .catch(err => console.log(err));
                }}>Yes, Signout</Button>
            })


        }
    }]

    // numbers to hh:mm:ss
    const formatTime = (seconds) => {
        if(seconds){

            let date = new Date(null);
            date.setSeconds(seconds); // specify value for SECONDS here
            let result = date.toISOString().substr(11, 8);
            return result
        }
        return seconds
    }




    const setAgentAvailibility=({ agentState })=>{
        connect.agent((agent) => {
            agent.setState(agentState)
            notification.success({
                message: `changed status to ${agentState.name} `
            })
            setTimeout(() => {
                let currentState = agent.getStatus()
                dispatch(changeAgentAvailibility(currentState))
            }, 1000);

        })
    }

    return (
        <section>
            {
                state.user.isLoggedin ?
                    //Header renders when user session  is active
                    <Header className="main" style={{ background: colorBgContainer }}>
                        <div className='primary-items'>
                            <div className="logo" > <Link to="/"><img width={180} src={logo} alt="logo" /></Link></div>
                            <div className='dialer-status'>
                                <Space size={24}>
                                    <Button shape='round' type='default' icon={<PoweroffOutlined color='red' />} >{formatTime(state.settings.contactDuration)}</Button>

                                    {/*  <Button shape='round' type='default' icon={<AmazonOutlined />} >Connected</Button> */}
                                    <Popover placement='bottom' showArrow
                                        content={
                                            <Space direction='vertical'>
                                                <div>&nbsp;</div>
                                                <Space space={20} >
                                                    {
                                                        state.user.info?.agentStates?.length > 0 &&  state.user.info?.agentStates.map((states, index) =>
                                                            <Button key={index} onClick={() => setAgentAvailibility({ agentState: states })} shape='round' type='default'  danger={states.name == 'Offline'}
                                                            size='small' block>{states.name}</Button>
                                                        ) ||
                                                        <Space>
                                                            <Typography.Text>Please wait</Typography.Text>
                                                            <Spin />
                                                        </Space>
                                                    }
                                                </Space>
                                                <div>&nbsp;</div>
                                                
                                            </Space>
                                        }
                                        title="Change Availibility"
                                        trigger="click"
                                        open={state.showAvailibilityPopup}
                                        onOpenChange={() => setState({ ...state, showAvailibilityPopup: !state.showAvailibilityPopup })}
                                    >

                                        <Button disabled={!state.settings.ccpInitiated}   onClick={() => setState({ ...state, showAvailibilityPopup: !state.showAvailibilityPopup })} shape='round' icon={<CloudDownloadOutlined />}  type={state.settings.agentStatus.name =='Offline' ? 'dashed' :'primary'}> {state.settings.agentStatus.name}</Button>
                                    </Popover>

                                </Space>
                            </div>
                        </div>
                        <div className='secondary-items'>
                            <Space size={20}>
                                <Button icon={<SearchOutlined />} type='text' />
                                <Button icon={<QuestionOutlined />} type='text' />
                                <Badge count={5}>
                                    <Button icon={<BellOutlined />} type='text' />
                                </Badge>
                                <Dropdown menu={{ items }}>
                                    <Space>
                                        <Avatar style={{ backgroundColor: token.colorPrimary }} icon={<UserOutlined />} />
                                        <Typography.Text strong>{getUserName()}</Typography.Text>
                                    </Space>
                                </Dropdown>
                            </Space>
                        </div>
                    </Header>
                    : //Header renders when user session is not active
                    <Header className="main" style={{ background: colorBgContainer }}>
                        <div className='primary-items'>
                            <div className="logo" >
                                <Link to="/"><img width={132} src={logo} alt="logo" /></Link>
                            </div>
                        </div>
                    </Header>
            }
        </section>
    )
}

export default AgentMainHeader