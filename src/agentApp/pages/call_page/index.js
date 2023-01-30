import { Result, Tabs } from 'antd';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import '../../assets/stylesheet/customer360.less';
import DialerSection from './dialerSection';
import  RenderCustomer360  from './renderCustomer360';
import CallMainPage from './mainPage';

const ActiveCallPage = (props) => {

    const activeCall =  props.userProfile ?  props : useSelector((state) => state.activeCall) //props
    const { userProfile } = activeCall;

    const [state, setState] = useState({
        isActive: false,
    })
    const items = [
        {
            key: '1',
            label: `Customer 360`,
            children: <CallMainPage 
            recentHistory={activeCall.userProfile.recentHistory} 
            activeProducts={activeCall.userProfile.activeProducts}
            />,
        },
        {
            key: '2',
            label: `History`,
            children: <RenderCustomer360 recentHistory={activeCall.userProfile.recentHistory} customer360={activeCall.userProfile.customer360} />,
        },
        {
            key: '3',
            label: `Active Policy Details`,
            children: <RenderCustomer360 recentHistory={activeCall.userProfile.recentHistory} customer360={activeCall.userProfile.customer360} />,
        },
        {
            key: '4',
            label: `Activities`,
            children: <RenderCustomer360 recentHistory={activeCall.userProfile.recentHistory} customer360={activeCall.userProfile.customer360} />,
        },
    ];
    useEffect(() => {
        setState({ isActive: true })
    }, [activeCall.isActive])

    return (
        <section>
            {
                state.isActive ?
                    <section className='main-content'>
                        <DialerSection activeCall={activeCall} />
                        <div className='content-section'>
                            <Tabs size='small' defaultActiveKey="1" items={items} />
                        </div>
                    </section>
                    :
                    <Result title="Please wait loading . . ." />
            }
        </section>
    )
}


export default ActiveCallPage