/*
Copyright 2017 - 2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.
Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with the License. A copy of the License is located at
    http://aws.amazon.com/apache2.0/
or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and limitations under the License.
*/

const express = require("express");
const bodyParser = require("body-parser");
const awsServerlessExpressMiddleware = require("aws-serverless-express/middleware");
var msal = require("@azure/msal-node");

// declare a new express app
const app = express();
app.use(bodyParser.json());
app.use(awsServerlessExpressMiddleware.eventContext());

//Set View Engine as EJS
//app.set("view engine", "ejs");

// Enable CORS for all methods
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  next();
});

let CLOUD_INSTANCE = "https://login.microsoftonline.com/";
let TENANT_ID = "b0a714c6-6ab2-43b2-aae0-5e855bb3752f";
let CLIENT_ID = "32c21b01-f645-4433-8726-456c9f46958e";
let CLIENT_SECRET = "omo8Q~9nygkzKA1gsNjxM1EBlOZJEvmfMe0jRdBo";

const msalConfig = {
  auth: {
    clientId: CLIENT_ID, // 'Application (client) ID' of app registration in Azure portal - this value is a GUID
    authority: CLOUD_INSTANCE + TENANT_ID, // Full directory URL, in the form of https://login.microsoftonline.com/<tenant>
    clientSecret: CLIENT_SECRET, // Client secret generated from the app registration in Azure portal
  },
  system: {
    loggerOptions: {
      loggerCallback(loglevel, message, containsPii) {
        console.log(message);
      },
      piiLoggingEnabled: false,
      logLevel: "Info",
    },
  },
};

const msalInstance = new msal.ConfidentialClientApplication(msalConfig);
const cryptoProvider = new msal.CryptoProvider();

console.log("msalConfig: " + JSON.stringify(msalConfig));

/**********************
 * Example get method *
 **********************/

app.get("/teams", function (req, res) {
  // Add your code here
  res.json({ success: "get call succeed!", url: req.url });
});

app.get("/teams/generateLoginURL", async function (req, res) {
  // Add your code here
  // create a GUID for crsf
  // Generate PKCE Codes before starting the authorization flow
  const { verifier, challenge } = await cryptoProvider.generatePkceCodes();

  // Set generated PKCE codes and method as session vars
  let pkceCodes = {
    challengeMethod: "S256",
    verifier: verifier,
    challenge: challenge,
  };

  console.log("pkceCodes: " + JSON.stringify(pkceCodes));

  let csrfToken = cryptoProvider.createNewGuid();

  /**
   * The MSAL Node library allows you to pass your custom state as state parameter in the Request object.
   * The state parameter can also be used to encode information of the app's state before redirect.
   * You can pass the user's state in the app, such as the page or view they were on, as input to this parameter.
   */
  const state = cryptoProvider.base64Encode(
    JSON.stringify({
      csrfToken: csrfToken,
      redirectTo: "/teamslogin",
    })
  );

  console.log("state: " + state);

  const authCodeUrlRequestParams = {
    state: state,

    /**
     * By default, MSAL Node will add OIDC scopes to the auth code url request. For more information, visit:
     * https://docs.microsoft.com/azure/active-directory/develop/v2-permissions-and-consent#openid-connect-scopes
     */
    scopes: [],
  };

  /**
   * By manipulating the request objects below before each request, we can obtain
   * auth artifacts with desired claims. For more information, visit:
   * https://azuread.github.io/microsoft-authentication-library-for-js/ref/modules/_azure_msal_node.html#authorizationurlrequest
   * https://azuread.github.io/microsoft-authentication-library-for-js/ref/modules/_azure_msal_node.html#authorizationcoderequest
   **/

  let REDIRECT_URI =
    "https://lm5kutr1of.execute-api.us-east-1.amazonaws.com/test/teams/login/redirect";
  let authCodeUrlRequest = {
    redirectUri: REDIRECT_URI,
    responseMode: "form_post", // recommended for confidential clients
    codeChallenge: pkceCodes.challenge,
    codeChallengeMethod: pkceCodes.challengeMethod,
    ...authCodeUrlRequestParams,
  };

  const authCodeUrlResponse = await msalInstance.getAuthCodeUrl(
    authCodeUrlRequest
  );
  console.log("authCodeUrlResponse: " + authCodeUrlResponse);
  /*res.json({
    success: "get call succeed!",
    url: authCodeUrlResponse,
    cookie: { authCodeUrlRequest, pkceCodes },
  });*/
  //Do a browser redirect to the authCodeUrlResponse
  res.cookie("authCodeRequest", JSON.stringify(authCodeUrlRequest));
  res.cookie("pkceCodes", JSON.stringify(pkceCodes));
  res.cookie("redirectURL", authCodeUrlResponse);
  res.redirect("/teams/redirect");
  //res.render("pages/redirect", { redirectUrl: authCodeUrlResponse });
});

app.get("/teams/redirect", function (req, res) {
  // Add your code here
  let redirectURL = req.cookies.redirectURL;
  console.log("URL is ", redirectURL);
  res.redirect(redirectURL);
});

app.get("/teams/*", function (req, res) {
  // Add your code here
  res.json({ success: "get call succeed!", url: req.url });
});

/****************************
 * Example post method *
 ****************************/

app.post("/teams", function (req, res) {
  // Add your code here
  res.json({ success: "post call succeed!", url: req.url, body: req.body });
});

app.post("/teams/login/redirect", async function (req, res) {
  // Add your code here
  if (req.body.state) {
    const state = JSON.parse(cryptoProvider.base64Decode(req.body.state));

    // check if csrfToken matches

    //Get authCodeRequest from Cookie
    let authCodeRequest = req.cookies.authCodeRequest;
    authCodeRequest.code = req.body.code; // authZ code
    let pkceCodes = req.cookies.pkceCodes;
    authCodeRequest.codeVerifier = pkceCodes.verifier; // PKCE Code Verifier

    try {
      const tokenResponse = await msalInstance.acquireTokenByCode(
        authCodeRequest
      );
      let accessToken = tokenResponse.accessToken;
      let idToken = tokenResponse.idToken;
      let account = tokenResponse.account;

      console.log("tokenResponse: " + JSON.stringify(tokenResponse));
      res.redirect(state.redirectTo);
    } catch (error) {
      next(error);
    }
  } else {
    next(new Error("state is missing"));
  }
  res.json({ success: "post call succeed!", url: req.url, body: req.body });
});

app.post("/teams/*", function (req, res) {
  // Add your code here
  res.json({ success: "post call succeed!", url: req.url, body: req.body });
});

/****************************
 * Example put method *
 ****************************/

app.put("/teams", function (req, res) {
  // Add your code here
  res.json({ success: "put call succeed!", url: req.url, body: req.body });
});

app.put("/teams/*", function (req, res) {
  // Add your code here
  res.json({ success: "put call succeed!", url: req.url, body: req.body });
});

/****************************
 * Example delete method *
 ****************************/

app.delete("/teams", function (req, res) {
  // Add your code here
  res.json({ success: "delete call succeed!", url: req.url });
});

app.delete("/teams/*", function (req, res) {
  // Add your code here
  res.json({ success: "delete call succeed!", url: req.url });
});

app.listen(3000, function () {
  console.log("App started");
});

// Export the app object. When executing the application local this does nothing. However,
// to port it to AWS Lambda we will create a wrapper around that will load the app from
// this file
module.exports = app;
