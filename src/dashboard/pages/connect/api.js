import { API } from "aws-amplify";
import * as mutations from "../../../graphql/mutations";

export const createChannel=(newChannel)=>{

    return new Promise((resolve, reject) => {
        API.graphql({ query: mutations.createChannel, variables: { input: newChannel } }).then((result) => {
            console.log("Presolved::createChannel::", result.data.createChannel    );
            let data = result.data.createChannel       
            console.log({ data });
            resolve({ ...data })
        }).catch((error) => {
            console.error({ createChannel: error })
            reject({ error })
        })
    })

}