export type AmplifyDependentResourcesAttributes = {
    "api": {
        "ConnectAPI": {
            "RootUrl": "string",
            "ApiName": "string",
            "ApiId": "string"
        },
        "presolvedinsurance": {
            "GraphQLAPIKeyOutput": "string",
            "GraphQLAPIIdOutput": "string",
            "GraphQLAPIEndpointOutput": "string"
        }
    },
    "auth": {
        "presolvedinsurance": {
            "IdentityPoolId": "string",
            "IdentityPoolName": "string",
            "UserPoolId": "string",
            "UserPoolArn": "string",
            "UserPoolName": "string",
            "AppClientIDWeb": "string",
            "AppClientID": "string"
        }
    },
    "function": {
        "DownloadEmail": {
            "Name": "string",
            "Arn": "string",
            "Region": "string",
            "LambdaExecutionRole": "string"
        },
        "GetMails": {
            "Name": "string",
            "Arn": "string",
            "Region": "string",
            "LambdaExecutionRole": "string"
        },
        "GetUsersList": {
            "Name": "string",
            "Arn": "string",
            "Region": "string",
            "LambdaExecutionRole": "string"
        },
        "presolvedinsurancelayer": {
            "Arn": "string"
        },
        "presolvedinsurancemsgraph": {
            "Arn": "string"
        },
        "Meetings": {
            "Name": "string",
            "Arn": "string",
            "Region": "string",
            "LambdaExecutionRole": "string"
        },
        "SendChatMessage": {
            "Name": "string",
            "Arn": "string",
            "Region": "string",
            "LambdaExecutionRole": "string"
        }
    },
    "hosting": {
        "S3AndCloudFront": {
            "Region": "string",
            "HostingBucketName": "string",
            "WebsiteURL": "string",
            "S3BucketSecureURL": "string",
            "CloudFrontDistributionID": "string",
            "CloudFrontDomainName": "string",
            "CloudFrontSecureURL": "string",
            "CloudFrontOriginAccessIdentity": "string"
        }
    },
    "storage": {
        "psemailbucket": {
            "BucketName": "string",
            "Region": "string"
        },
        "chimemeetings": {
            "Name": "string",
            "Arn": "string",
            "StreamArn": "string",
            "PartitionKeyName": "string",
            "PartitionKeyType": "string",
            "Region": "string"
        }
    }
}