import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import { Router } from "@gatsbyjs/reach-router";
import { Amplify } from "aws-amplify";
import oldAwsConfig from "./aws-exports";
import Suspence from "./widgets/suspence";
import { Provider } from "react-redux";
import { store } from "./dashboard/store";
import ChatWigetForTesting from "./playground/chat";
import AWSSDK from "./playground/connectSDK";

const App = React.lazy(() => import('./dashboard/index'))
const root = document.getElementById("root");

Amplify.configure(oldAwsConfig);

ReactDOM.render(

    <Provider store={store}>
      <Suspense fallback={<Suspence />}>
        <Router basepath="/">
          <App path="/*" />
          <ChatWigetForTesting  path="/test/chat/*" />
          <AWSSDK  path="/test/aws/*" />
        </Router>
      </Suspense>
    </Provider>,
  root
);



//to bulk delete
//data.items.map((rec,index)=>`id${index}:deleteChannel(input: {id: "${rec.id}"}) {id}`).toString()
//data.items.map((rec,index)=>`id${index}:deleteTask(input: {id: "${rec.id}"}) {id}`).toString()