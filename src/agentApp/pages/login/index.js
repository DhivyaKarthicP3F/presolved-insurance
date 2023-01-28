import React, { useEffect, useState } from 'react'
import { Layout, Typography, Space, Avatar, Card, Divider, Button, Spin, Row, Col } from 'antd';
import { VscUnlock } from "react-icons/vsc";
import { RxPerson } from 'react-icons/rx';
import { Auth, Hub, Amplify, } from "aws-amplify";
import oldAwsConfig from '../../../aws-exports'
import '../../assets/stylesheet/login.less'
import { useDispatch } from 'react-redux';
import { updateUser } from '../../store/reducers/user';
import { navigate } from '@gatsbyjs/reach-router';
import logo from '../../assets/images/p3f-logo.png'
const isLocalhost = Boolean(
    window.location.hostname === "localhost" ||
    // [::1] is the IPv6 localhost address.
    window.location.hostname === "[::1]" ||
    // 127.0.0.1/8 is considered localhost for IPv4.
    window.location.hostname.match(
        /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
    )
);

let oauth = {
    domain: "presolvedtenant.auth.us-east-1.amazoncognito.com",
    scope: [
        "aws.cognito.signin.user.admin",
        "email",
        "openid",
        "phone",
        "profile",
    ],
    redirectSignIn: 'https://localhost:3000/login/,https://develop.d1nla2nbfpliwq.amplifyapp.com/',
    redirectSignOut: 'https://localhost:3000/login/,https://develop.d1nla2nbfpliwq.amplifyapp.com/',
    responseType: "code",
    identityProvider: "CognitoSAML",
}
const [localRedirectSignIn, productionRedirectSignIn] = oauth?.redirectSignIn.split(",") || 'https://d36z7vqpuzrikl.cloudfront.net';
const [localRedirectSignOut, productionRedirectSignOut] = oauth?.redirectSignOut.split(",") || 'https://d36z7vqpuzrikl.cloudfront.net';


let awsConfig = {
    ...oldAwsConfig,
    oauth: oauth
}


let updatedAwsConfig = {
    ...awsConfig,
    oauth: {
        ...oauth,
        redirectSignIn: isLocalhost ? localRedirectSignIn : productionRedirectSignIn,
        redirectSignOut: isLocalhost ? localRedirectSignOut : productionRedirectSignOut,
    },
};


const AgentSAMLPage = () => {

    const dispatch = useDispatch()
    const [state, setState] = useState({
        showLoginProgress: false,
        isLoggedin: false,
        user: null,
    });

    useEffect(() => {
        Amplify.configure(updatedAwsConfig);

        Auth.currentAuthenticatedUser()
            .then((login) => {
                setState({ ...state, isLoggedin: true });
                dispatch(updateUser({ ...login }));
                navigate("/");
            })
            .catch((err) => {
                console.log("Error is ", err);
            });
    }, [state.isLoggedin]);

    Hub.listen("auth", (data) => {
        const event = data.payload.event;
        if (event === "signIn") {
            setState({ ...state, isLoggedin: true });
        }
    });


    return (


        <Layout className='signup-page'>
            <main className='login-container'>

                <section className='main'>

                    <div className='main-container'>

                        <Card >
                            <div className='userinfo'>
                                <Row style={{ margin: 30 }} align='middle' justify='center'>
                                    <Col flex={1} >
                                        <img src={logo} height={52} />
                                    </Col>
                                </Row>
                                <Divider />
                                <Space size={20}>
                                    <Avatar icon={<RxPerson />} size={60} />
                                    <Space direction='vertical' size={0} align="start">
                                        <Typography.Title level={2}>Hi Guest</Typography.Title>
                                        <Typography.Text>Welcome to Connect Portal</Typography.Text>

                                    </Space>
                                </Space>
                            </div>
                            <div>
                                
                                <Typography.Title style={{ marginBottom: 30, marginTop:30 }} level={3}>Authentication is required to access the portal</Typography.Title>
                                <Typography.Paragraph>
                                    Single sign-on (SSO) is an authentication method that enables users to securely authenticate with multiple applications and websites by using just one set of credentials.
                                </Typography.Paragraph>
                                <Divider />
                                {
                                    state.showLoginProgress &&
                                    <div style={{ margin: '30px 0', display: 'flex', flexDirection: 'row', 'gap': 20, alignItems: 'center' }}>
                                        <Spin style={{ fontSize: 50 }} size='large' />
                                        <Typography.Title level={4}>
                                            Please wait while we log you in . . .
                                        </Typography.Title>


                                    </div>

                                }
                            </div>

                            <div>
                                <Button icon={<VscUnlock size={16} />} type='primary' block size='large' shape='round'

                                    onClick={() => {
                                        setState({ ...state, showLoginProgress: true })
                                        console.log({ awsExport: updatedAwsConfig, auth: Auth.configure() });
                                        Auth.federatedSignIn({ provider: "CognitoSAML" })
                                            .then((res) => {
                                                console.log({ res });
                                            })
                                            .catch((error) => {
                                                console.error("Error with FederatedSignin is ", error);
                                            })

                                    }}

                                > &nbsp; Login With SSO</Button>
                            </div>
                        </Card>


                    </div>
                </section>
            </main>

        </Layout>
    )
}

export default AgentSAMLPage