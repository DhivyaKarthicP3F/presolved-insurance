const {
  ChimeSDKMeetingsClient,
  CreateMeetingCommand,
  CreateAttendeeCommand,
} = require("@aws-sdk/client-chime-sdk-meetings");
const randomUUID = require("crypto").randomUUID;

const config = {
  region: "us-east-1",
};

const chimeSdkMeetingsClient = new ChimeSDKMeetingsClient(config);

class Meetings {
  constructor() {
    //console.log('graphHelper constructor');
  }

  async createMeeting(requestId) {
    console.log(`Creating Meeting for Request ID: ${requestId}`);

    try {
      const meetingInfo = await chimeSdkMeetingsClient.send(
        new CreateMeetingCommand({
          ClientRequestToken: requestId,
          MediaRegion: "us-east-1",
          ExternalMeetingId: randomUUID(),
        })
      );
      return meetingInfo;
    } catch (err) {
      console.info(`Error: ${err}`);
      return false;
    }
  }

  async startRecording(meetingId) {
    console.log(`Starting Recording for Meeting: ${meetingId}`);
    try {
      const recordingInfo = await chimeSdkMeetingsClient.send(
        new StartMeetingRecordingCommand({
          MeetingId: meetingId,
        })
      );
      return recordingInfo;
    } catch (err) {
      console.info(`${err}`);
      return false;
    }
  }

  async createAttendee(meetingId) {
    console.log(`Creating Attendee for Meeting: ${meetingId}`);
    try {
      const attendeeInfo = await chimeSdkMeetingsClient.send(
        new CreateAttendeeCommand({
          MeetingId: meetingId,
          ExternalUserId: randomUUID(),
        })
      );
      return attendeeInfo;
    } catch (err) {
      console.info(`${err}`);
      return false;
    }
  }
}

module.exports = Meetings;
