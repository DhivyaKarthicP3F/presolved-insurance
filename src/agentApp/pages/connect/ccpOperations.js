
class CCPOperations {

    constructor(connect) {
        this.connect = connect;
    }
    getLoginStatus() {
        return new Promise((resolve, reject) => {
            const { connect } = this
            let i = 0;
            const PollInterval = setInterval(async () => {
                console.log(`Presolved::CCP::Polling to get the login status ${i}`);
                if (connect.agent.initialized) {
                    clearInterval(PollInterval)
                    console.log(`Presolved::CCP::Login success stoppping the poll`);
                    let agentInfo = await this.getAgentInfoFromConnect();
                    resolve(agentInfo)
                }
                if (i > 30) {
                    clearInterval(PollInterval)
                    console.log(`Presolved::CCP::Login failed stoppping the poll`);
                    reject(true)
                }
                i++;
            }, 1000);
        }) 
    }
    getAgentInfoFromConnect() {
        return new Promise((resolve, reject) => {
            const { connect } = this
            console.log("Presolved::CCP::Gettting loged in Agent information");
            connect.agent((agent) => {
                let agentData = agent._getData()
                let currentState = agent.getStatus()
                this.agenInfo = agentData.configuration?.username || ""
                console.log(`Presolved::CCP::completed loading the Agent information`);
                resolve({ info: agentData.configuration, status: currentState })
            });
        }) 
    }
}

export default CCPOperations
