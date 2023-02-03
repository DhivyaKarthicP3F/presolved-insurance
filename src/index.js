import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import { navigate, Router } from "@gatsbyjs/reach-router";
import { Amplify, Auth } from "aws-amplify";
import oldAwsConfig from "./aws-exports";
import Suspence from "./widgets/suspence";
import { Provider } from "react-redux";
import { store } from "./agentApp/store";
import AWSSDK from "./playground/connectSDK";
import TeamsSDK from "./playground/teamsSDK";
import AgentSupervisor from "./supervisorApp";

const ChatWigetForTesting = React.lazy(() => import('./playground/chat'))
const App = React.lazy(() => import("./agentApp/index"));
const root = document.getElementById("root");

Amplify.configure(oldAwsConfig);

ReactDOM.render(
  <Provider store={store}>
    <Suspense fallback={<Suspence />}>
      <Router basepath="/">
        <App path="/*" />
        <AgentSupervisor path="/manager/*" />
        <AgentSupervisor path="/supervisor/*" />
        <ChatWigetForTesting path="/test/chat/*" />
        <AWSSDK path="/test/aws/*" />
        <TeamsSDK path="/test/teams/*" />
      </Router>
    </Suspense>
  </Provider>,
  root
);

//to bulk delete
//data.items.map((rec,index)=>`id${index}:deleteChannel(input: {id: "${rec.id}"}) {id}`).toString()
//data.items.map((rec,index)=>`id${index}:deleteTask(input: {id: "${rec.id}"}) {id}`).toString()
