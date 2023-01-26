import { notification } from 'antd';
import { Auth } from 'aws-amplify'
import React, { useEffect } from 'react'

const AgentSupervisor = () => {
    useEffect(() => {

        Auth.currentAuthenticatedUser()
            .then((login) => {
                setState({ ...state, isLoggedin: true });
                dispatch(updateUser({ ...login }));
                navigate("/");
            })
            .catch((err) => {
                notification.error({
                    message: 'Error',
                    description: "Login failed",
                })
            });


    }, [])

    return (
        <div>AgentSuperIndex</div>
    )
}

export default AgentSupervisor