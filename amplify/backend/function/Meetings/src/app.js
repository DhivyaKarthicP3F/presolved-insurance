/* Amplify Params - DO NOT EDIT
	ENV
	REGION
	STORAGE_CHIMEMEETINGS_ARN
	STORAGE_CHIMEMEETINGS_NAME
	STORAGE_CHIMEMEETINGS_STREAMARN
Amplify Params - DO NOT EDIT */ /*
Copyright 2017 - 2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.
Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with the License. A copy of the License is located at
    http://aws.amazon.com/apache2.0/
or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and limitations under the License.
*/

const express = require("express");
const bodyParser = require("body-parser");
const awsServerlessExpressMiddleware = require("aws-serverless-express/middleware");
const randomUUID = require("crypto").randomUUID;
const Meetings = require("./lib/meetingsManager");

// declare a new express app
const app = express();
app.use(bodyParser.json());
app.use(awsServerlessExpressMiddleware.eventContext());

// Enable CORS for all methods
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  res.header("Access-Control-Allow-Methods", "GET,OPTIONS");
  res.header("Content-Type", "application/json");
  next();
});

/**********************
 * Example get method *
 **********************/

app.get("/meetings", function (req, res) {
  // Add your code here
  res.json({ success: "get call succeed!", url: req.url });
});

app.get("/meetings/*", function (req, res) {
  // Add your code here
  res.json({ success: "get call succeed!", url: req.url });
});

/****************************
 * Example post method *
 ****************************/

app.post("/meetings", async function (req, res) {
  // Add your code here
  var requestedMeeting = randomUUID();
  var meeting = req.query.m;
  if (meeting) {
    requestedMeeting = meeting;
  }
  console.log("Requested Meeting", requestedMeeting);
  let meetingsClient = new Meetings();
  const meetingInfo = await meetingsClient.createMeeting(requestedMeeting);
  if (meetingInfo) {
    const attendeeInfo = await meetingsClient.createAttendee(
      meetingInfo.Meeting.MeetingId
    );
    if (attendeeInfo) {
      const responseInfo = {
        Meeting: meetingInfo.Meeting,
        Attendee: attendeeInfo.Attendee,
      };
      res.statusCode = 200;
      res.body = JSON.stringify(responseInfo);
      console.log("Response is ", res);
      res.json({ statusCode: res.statusCode, body: res.body });
    } else {
      res.statusCode = 503;
      res.body = JSON.stringify("Error creating Attendee");
      res.json({ statusCode: res.statusCode, body: res.body });
    }
  } else {
    res.statusCode = 503;
    res.body = JSON.stringify("Error creating Meeting");
    res.json({ statusCode: res.statusCode, body: res.body });
  }
});

app.post("/meetings/*", function (req, res) {
  // Add your code here
  res.json({ success: "post call succeed!", url: req.url, body: req.body });
});

/****************************
 * Example put method *
 ****************************/

app.put("/meetings", function (req, res) {
  // Add your code here
  res.json({ success: "put call succeed!", url: req.url, body: req.body });
});

app.put("/meetings/*", function (req, res) {
  // Add your code here
  res.json({ success: "put call succeed!", url: req.url, body: req.body });
});

/****************************
 * Example delete method *
 ****************************/

app.delete("/meetings", function (req, res) {
  // Add your code here
  res.json({ success: "delete call succeed!", url: req.url });
});

app.delete("/meetings/*", function (req, res) {
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
