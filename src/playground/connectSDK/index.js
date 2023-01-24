
import React, { useEffect } from 'react'
import * as AWS from '@aws-sdk/client-connect'

const AWSSDK = () => {
    

    useEffect(() => {


        const connect = new AWS.ConnectClient({
            endpoint: 'https://p3fusion-qa.my.connect.aws/',
            region: "us-east-1",
        })
        const listInstancesCommand = new AWS.ListInstancesCommand({})
        connect.send(listInstancesCommand).then((data) => {
            console.log(data)
        })
    }, [])



    return (
        <div>AWSSDK</div>
    )
}

export default AWSSDK
