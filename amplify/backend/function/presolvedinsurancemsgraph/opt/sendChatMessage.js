// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.

// <ProgramSnippet>
const readline = require("readline-sync");
const gh = require("./graphHelper");
const appSettings = require("./appSettings");
const graphHelper = new gh();

// <ListUsersSnippet>
async function sendMessage(message, clientId, secretName, region, tenantId) {
  try {
    let settings = await appSettings.getSettings(
      clientId,
      secretName,
      region,
      tenantId
    );

    const chatPage = await graphHelper.createChatBetweenUsers(settings);

    console.log("Chat Page Response : ", chatPage);

    const chatId = chatPage.id;
    const htmlMessageWithLink = `
    <div>        
        <p>
            <strong>Message:</strong> ${message}
        </p>
        <p>
            <a href="https://d36z7vqpuzrikl.cloudfront.net/meetings">Click Here to Join</a>
        </p>
    </div>
    `;

    const chatMessage = await graphHelper.sendMessageToChat(
      chatId,
      htmlMessageWithLink,
      settings
    );

    return chatMessage;
  } catch (err) {
    console.log(`Error sending Chat Messages : ${err}`);
  }
}

module.exports.sendMessage = sendMessage;
