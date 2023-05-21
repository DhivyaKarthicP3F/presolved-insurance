import { PublicClientApplication } from "@azure/msal-browser";
import { MsalProvider } from "@azure/msal-react";
import App from "./teamsPopup";

import React from "react";

let CLIENT_ID = "35a2ff7a-28a5-466d-9f84-1cefbe80c187";

//Teams Bot App Client ID
//CLIENT_ID = "1dc3388e-4cf8-4c0e-af71-70eda90a9f03";

// Configuration object constructed.
const config = {
  auth: {
    clientId: CLIENT_ID,
  },
};

// create PublicClientApplication instance
const publicClientApplication = new PublicClientApplication(config);

/*

// Wrap your app component tree in the MsalProvider component
ReactDOM.render(
  <React.StrictMode>
    <MsalProvider instance={publicClientApplication}>
      <App />
    </MsalProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
*/

const TeamsLogin = () => {
  return (
    <MsalProvider instance={publicClientApplication}>
      <App />
    </MsalProvider>
  );
};

export default TeamsLogin;
