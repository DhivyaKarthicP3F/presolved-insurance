/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getChannel = /* GraphQL */ `
  query GetChannel($id: ID!) {
    getChannel(id: $id) {
      id
      assignTo
      contactID
      channelType
      contactAttributes
      notes
      tasks {
        items {
          id
          assignTo
          channelID
          contactID
          channelType
          Name
          taskAttributes
          notes
          status
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listChannels = /* GraphQL */ `
  query ListChannels(
    $filter: ModelChannelFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listChannels(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        assignTo
        contactID
        channelType
        contactAttributes
        notes
        tasks {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getTaskTemplate = /* GraphQL */ `
  query GetTaskTemplate($id: ID!) {
    getTaskTemplate(id: $id) {
      id
      name
      description
      attributes
      createdAt
      updatedAt
    }
  }
`;
export const listTaskTemplates = /* GraphQL */ `
  query ListTaskTemplates(
    $filter: ModelTaskTemplateFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTaskTemplates(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        attributes
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getTask = /* GraphQL */ `
  query GetTask($id: ID!) {
    getTask(id: $id) {
      id
      assignTo
      channelID
      channel {
        id
        assignTo
        contactID
        channelType
        contactAttributes
        notes
        tasks {
          nextToken
        }
        createdAt
        updatedAt
      }
      contactID
      channelType
      Name
      taskAttributes
      notes
      status
      createdAt
      updatedAt
    }
  }
`;
export const listTasks = /* GraphQL */ `
  query ListTasks(
    $filter: ModelTaskFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTasks(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        assignTo
        channelID
        channel {
          id
          assignTo
          contactID
          channelType
          contactAttributes
          notes
          createdAt
          updatedAt
        }
        contactID
        channelType
        Name
        taskAttributes
        notes
        status
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getEmailMessage = /* GraphQL */ `
  query GetEmailMessage($id: ID!) {
    getEmailMessage(id: $id) {
      id
      channelID
      from
      to
      messageID
      body
      subject
      attachments
      receivedTime
      createdAt
      updatedAt
    }
  }
`;
export const listEmailMessages = /* GraphQL */ `
  query ListEmailMessages(
    $filter: ModelEmailMessageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEmailMessages(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        channelID
        from
        to
        messageID
        body
        subject
        attachments
        receivedTime
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getAudit = /* GraphQL */ `
  query GetAudit($id: ID!) {
    getAudit(id: $id) {
      id
      reference
      performedBy
      activity
      createdAt
      updatedAt
    }
  }
`;
export const listAudits = /* GraphQL */ `
  query ListAudits(
    $filter: ModelAuditFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAudits(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        reference
        performedBy
        activity
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getConfig = /* GraphQL */ `
  query GetConfig($id: ID!) {
    getConfig(id: $id) {
      id
      name
      type
      ARNReference
      parameters
      createdAt
      updatedAt
    }
  }
`;
export const listConfigs = /* GraphQL */ `
  query ListConfigs(
    $filter: ModelConfigFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listConfigs(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        type
        ARNReference
        parameters
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getTenantConfig = /* GraphQL */ `
  query GetTenantConfig($id: ID!) {
    getTenantConfig(id: $id) {
      id
      name
      company
      adminEmail
      phone
      isSignedup
      intents
      templates
      Channels
      instanceURL
      connectInstanceURL
      createdAt
      updatedAt
    }
  }
`;
export const listTenantConfigs = /* GraphQL */ `
  query ListTenantConfigs(
    $filter: ModelTenantConfigFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTenantConfigs(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        company
        adminEmail
        phone
        isSignedup
        intents
        templates
        Channels
        instanceURL
        connectInstanceURL
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getChatChannel = /* GraphQL */ `
  query GetChatChannel($id: ID!) {
    getChatChannel(id: $id) {
      name
      data
      id
      createdAt
      updatedAt
    }
  }
`;
export const listChatChannels = /* GraphQL */ `
  query ListChatChannels(
    $filter: ModelChatChannelFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listChatChannels(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        name
        data
        id
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
