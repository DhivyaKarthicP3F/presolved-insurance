// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.

// <UserAuthConfigSnippet>
require("isomorphic-fetch");
const azure = require("@azure/identity");
const graph = require("@microsoft/microsoft-graph-client");
const authProviders = require("@microsoft/microsoft-graph-client/authProviders/azureTokenCredentials");

let _settings = undefined;
let _deviceCodeCredential = undefined;
let _userClient = undefined;

// <AppOnyAuthConfigSnippet>
let _clientSecretCredential = undefined;
let _appClient = undefined;

class graphHelper {
  //constructor
  constructor() {
    //console.log('graphHelper constructor');
  }

  ensureGraphForAppOnlyAuth() {
    // Ensure settings isn't null
    if (!_settings) {
      throw new Error("Settings cannot be undefined");
    }

    if (!_clientSecretCredential) {
      _clientSecretCredential = new azure.ClientSecretCredential(
        _settings.tenantId,
        _settings.clientId,
        _settings.clientSecret
      );
    }

    if (!_appClient) {
      const authProvider =
        new authProviders.TokenCredentialAuthenticationProvider(
          _clientSecretCredential,
          {
            scopes: ["https://graph.microsoft.com/.default"],
          }
        );

      _appClient = graph.Client.initWithMiddleware({
        authProvider: authProvider,
      });
    }
  }

  async getMessagesForUserAsync(email, settings) {
    // Ensure settings isn't null
    if (!settings) {
      throw new Error("Settings cannot be undefined");
    }

    _settings = settings;
    this.ensureGraphForAppOnlyAuth();

    // Ensure client isn't undefined
    if (!_appClient) {
      throw new Error("Graph has not been initialized for app-only auth");
    }

    return _appClient
      .api(`/users/${email}/messages`)
      .select(["from", "isRead", "receivedDateTime", "subject", "body"])
      .filter("isRead eq false")
      .top(25)
      .orderby("receivedDateTime DESC")
      .get();
  }

  async markEmailAsRead(email, messageId, settings) {
    // Ensure settings isn't null
    if (!settings) {
      throw new Error("Settings cannot be undefined");
    }

    _settings = settings;
    this.ensureGraphForAppOnlyAuth();

    // Ensure client isn't undefined
    if (!_appClient) {
      throw new Error("Graph has not been initialized for app-only auth");
    }

    return _appClient.api(`/users/${email}/messages/${messageId}`).patch({
      isRead: true,
    });
  }

  async getAttachments(email, messageId, settings) {
    // Ensure settings isn't null
    if (!settings) {
      throw new Error("Settings cannot be undefined");
    }

    _settings = settings;
    this.ensureGraphForAppOnlyAuth();

    // Ensure client isn't undefined
    if (!_appClient) {
      throw new Error("Graph has not been initialized for app-only auth");
    }

    return _appClient
      .api(`/users/${email}/messages/${messageId}/attachments`)
      .select(["id", "name", "contentType", "size", "isInline"])
      .get();
  }

  async downloadAttachments(email, messageId, attachmentId, settings) {
    // Ensure settings isn't null
    if (!settings) {
      throw new Error("Settings cannot be undefined");
    }

    _settings = settings;
    this.ensureGraphForAppOnlyAuth();

    // Ensure client isn't undefined
    if (!_appClient) {
      throw new Error("Graph has not been initialized for app-only auth");
    }

    return _appClient
      .api(
        `/users/${email}/messages/${messageId}/attachments/${attachmentId}/$value`
      )
      .get();
  }

  async createChatBetweenUsers(settings) {
    // Ensure settings isn't null
    if (!settings) {
      throw new Error("Settings cannot be undefined");
    }

    _settings = settings;
    this.ensureGraphForAppOnlyAuth();

    // Ensure client isn't undefined
    if (!_appClient) {
      throw new Error("Graph has not been initialized for app-only auth");
    }

    //Siva Teams Object ID - 848c9bb7-36b9-46f1-af04-662a0c379c1b
    //Presolved Support Teams Object ID - 0b8fd067-f3df-4da9-8bcc-970d671881a3
    //Sai - 98cf9c0c-46b4-4a68-8fc0-a6789482e068
    return _appClient.api(`/chats`).post({
      chatType: "oneOnOne",
      members: [
        {
          "@odata.type": "#microsoft.graph.aadUserConversationMember",
          roles: ["owner"],
          "user@odata.bind": `https://graph.microsoft.com/v1.0/users('848c9bb7-36b9-46f1-af04-662a0c379c1b')`,
        },
        {
          "@odata.type": "#microsoft.graph.aadUserConversationMember",
          roles: ["owner"],
          "user@odata.bind": `https://graph.microsoft.com/v1.0/users('0b8fd067-f3df-4da9-8bcc-970d671881a3')`,
        },
      ],
    });
  }

  async sendMessageToChat(chatId, message, settings) {
    // Ensure settings isn't null
    if (!settings) {
      throw new Error("Settings cannot be undefined");
    }

    _settings = settings;
    this.ensureGraphForAppOnlyAuth();

    // Ensure client isn't undefined
    if (!_appClient) {
      throw new Error("Graph has not been initialized for app-only auth");
    }

    return _appClient.api(`/chats/${chatId}/messages`).post({
      body: {
        contentType: "html",
        content: message,
      },
    });
  }

  async getMessageDetails(email, messageId, settings) {
    // Ensure settings isn't null
    if (!settings) {
      throw new Error("Settings cannot be undefined");
    }

    _settings = settings;
    this.ensureGraphForAppOnlyAuth();

    // Ensure client isn't undefined
    if (!_appClient) {
      throw new Error("Graph has not been initialized for app-only auth");
    }

    return _appClient
      .api(`/users/${email}/messages/${messageId}`)
      .select([
        "from",
        "isRead",
        "receivedDateTime",
        "subject",
        "attachments",
        "body",
      ])
      .get();
  }
}

module.exports = graphHelper;
