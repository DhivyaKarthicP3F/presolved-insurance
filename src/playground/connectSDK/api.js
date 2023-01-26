const connectUrl = "https://p3fusion-qa.my.connect.aws/connect/ccp-v2/";

class CustomCCP {
    constructor(connect) {
        this.connect = connect;
    }

    initiateCCP = (container) => {
        return new Promise((resolve, reject) => {
            try {
                const { connect } = this
                let i = 1;
                connect.agentApp.initCCP(container, {
                    ccpUrl: connectUrl, // REQUIRED
                    region: "us-east-1", // REQUIRED for `CHAT`, optional otherwise
                    softphone: {
                        // optional, defaults below apply if not provided
                        allowFramedSoftphone: true, // optional, defaults to false
                        disableRingtone: false, // optional, defaults to false
                        ringtoneUrl: "./ringtone.mp3" // optional, defaults to CCP’s default ringtone if a falsy value is set
                    },
                    // optional, defaults to connect.getLog()
                    ccpAckTimeout: 5000, //optional, defaults to 3000 (ms)
                    ccpSynTimeout: 3000, //optional, defaults to 1000 (ms)
                    ccpLoadTimeout: 10000 //optional, defaults to 5000 (ms)
                });
                const interval = setInterval(async () => {
                    connect.getLog().warn(`Presolved::CCP::Polling to get the login status ${i}`);
                    if (connect.agent.initialized) {                        
                        connect.getLog().warn(`Presolved::CCP::Login success stoppping the poll`);                    
                        clearInterval(interval)
                        resolve(true)
                    }   
                    if (i > 30) {
                        clearInterval(interval)
                        connect.getLog().warn(`Presolved::CCP::Login failed stoppping the poll`);
                        reject("Login failed")
                    }
                    i++;
                }, 1000);
            } catch (error) {
                console.error({ initiateCCP: error })
                reject(error)
            }
        })
    }


    getAgentStatus = () => {
        return new Promise((resolve, reject) => {
            try {
                const { connect } = this
                connect.agent((agent) => {
                    let currentState = agent.getStatus()
                    connect.getLog().warn({ currentState })
                    resolve(currentState)
                });

            } catch (error) {
                console.error({ getAgentStatus: error })
                reject(error)
            }
        })
    }
}
export default CustomCCP