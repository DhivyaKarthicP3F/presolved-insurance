/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateChannel = /* GraphQL */ `
  subscription OnCreateChannel($filter: ModelSubscriptionChannelFilterInput) {
    onCreateChannel(filter: $filter) {
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
export const onUpdateChannel = /* GraphQL */ `
  subscription OnUpdateChannel($filter: ModelSubscriptionChannelFilterInput) {
    onUpdateChannel(filter: $filter) {
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
export const onDeleteChannel = /* GraphQL */ `
  subscription OnDeleteChannel($filter: ModelSubscriptionChannelFilterInput) {
    onDeleteChannel(filter: $filter) {
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
export const onCreateTaskTemplate = /* GraphQL */ `
  subscription OnCreateTaskTemplate(
    $filter: ModelSubscriptionTaskTemplateFilterInput
  ) {
    onCreateTaskTemplate(filter: $filter) {
      id
      name
      description
      attributes
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateTaskTemplate = /* GraphQL */ `
  subscription OnUpdateTaskTemplate(
    $filter: ModelSubscriptionTaskTemplateFilterInput
  ) {
    onUpdateTaskTemplate(filter: $filter) {
      id
      name
      description
      attributes
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteTaskTemplate = /* GraphQL */ `
  subscription OnDeleteTaskTemplate(
    $filter: ModelSubscriptionTaskTemplateFilterInput
  ) {
    onDeleteTaskTemplate(filter: $filter) {
      id
      name
      description
      attributes
      createdAt
      updatedAt
    }
  }
`;
export const onCreateTask = /* GraphQL */ `
  subscription OnCreateTask($filter: ModelSubscriptionTaskFilterInput) {
    onCreateTask(filter: $filter) {
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
export const onUpdateTask = /* GraphQL */ `
  subscription OnUpdateTask($filter: ModelSubscriptionTaskFilterInput) {
    onUpdateTask(filter: $filter) {
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
export const onDeleteTask = /* GraphQL */ `
  subscription OnDeleteTask($filter: ModelSubscriptionTaskFilterInput) {
    onDeleteTask(filter: $filter) {
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
export const onCreateEmailMessage = /* GraphQL */ `
  subscription OnCreateEmailMessage(
    $filter: ModelSubscriptionEmailMessageFilterInput
  ) {
    onCreateEmailMessage(filter: $filter) {
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
export const onUpdateEmailMessage = /* GraphQL */ `
  subscription OnUpdateEmailMessage(
    $filter: ModelSubscriptionEmailMessageFilterInput
  ) {
    onUpdateEmailMessage(filter: $filter) {
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
export const onDeleteEmailMessage = /* GraphQL */ `
  subscription OnDeleteEmailMessage(
    $filter: ModelSubscriptionEmailMessageFilterInput
  ) {
    onDeleteEmailMessage(filter: $filter) {
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
export const onCreateAudit = /* GraphQL */ `
  subscription OnCreateAudit($filter: ModelSubscriptionAuditFilterInput) {
    onCreateAudit(filter: $filter) {
      id
      reference
      performedBy
      activity
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateAudit = /* GraphQL */ `
  subscription OnUpdateAudit($filter: ModelSubscriptionAuditFilterInput) {
    onUpdateAudit(filter: $filter) {
      id
      reference
      performedBy
      activity
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteAudit = /* GraphQL */ `
  subscription OnDeleteAudit($filter: ModelSubscriptionAuditFilterInput) {
    onDeleteAudit(filter: $filter) {
      id
      reference
      performedBy
      activity
      createdAt
      updatedAt
    }
  }
`;
export const onCreateConfig = /* GraphQL */ `
  subscription OnCreateConfig($filter: ModelSubscriptionConfigFilterInput) {
    onCreateConfig(filter: $filter) {
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
export const onUpdateConfig = /* GraphQL */ `
  subscription OnUpdateConfig($filter: ModelSubscriptionConfigFilterInput) {
    onUpdateConfig(filter: $filter) {
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
export const onDeleteConfig = /* GraphQL */ `
  subscription OnDeleteConfig($filter: ModelSubscriptionConfigFilterInput) {
    onDeleteConfig(filter: $filter) {
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
export const onCreateTenantConfig = /* GraphQL */ `
  subscription OnCreateTenantConfig(
    $filter: ModelSubscriptionTenantConfigFilterInput
  ) {
    onCreateTenantConfig(filter: $filter) {
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
export const onUpdateTenantConfig = /* GraphQL */ `
  subscription OnUpdateTenantConfig(
    $filter: ModelSubscriptionTenantConfigFilterInput
  ) {
    onUpdateTenantConfig(filter: $filter) {
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
export const onDeleteTenantConfig = /* GraphQL */ `
  subscription OnDeleteTenantConfig(
    $filter: ModelSubscriptionTenantConfigFilterInput
  ) {
    onDeleteTenantConfig(filter: $filter) {
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
export const onCreateChatChannel = /* GraphQL */ `
  subscription OnCreateChatChannel(
    $filter: ModelSubscriptionChatChannelFilterInput
  ) {
    onCreateChatChannel(filter: $filter) {
      name
      data
      id
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateChatChannel = /* GraphQL */ `
  subscription OnUpdateChatChannel(
    $filter: ModelSubscriptionChatChannelFilterInput
  ) {
    onUpdateChatChannel(filter: $filter) {
      name
      data
      id
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteChatChannel = /* GraphQL */ `
  subscription OnDeleteChatChannel(
    $filter: ModelSubscriptionChatChannelFilterInput
  ) {
    onDeleteChatChannel(filter: $filter) {
      name
      data
      id
      createdAt
      updatedAt
    }
  }
`;
