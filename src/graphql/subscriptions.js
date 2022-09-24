/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateChannel = /* GraphQL */ `
  subscription OnCreateChannel($filter: ModelSubscriptionChannelFilterInput) {
    onCreateChannel(filter: $filter) {
      id
      user
      contactID
      channelType
      contactAttributes
      tasks {
        items {
          id
          user
          assignTo
          channelID
          contactID
          channelType
          Name
          taskAttributes
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
      user
      contactID
      channelType
      contactAttributes
      tasks {
        items {
          id
          user
          assignTo
          channelID
          contactID
          channelType
          Name
          taskAttributes
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
      user
      contactID
      channelType
      contactAttributes
      tasks {
        items {
          id
          user
          assignTo
          channelID
          contactID
          channelType
          Name
          taskAttributes
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
      user
      assignTo
      channelID
      channel {
        id
        user
        contactID
        channelType
        contactAttributes
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
      user
      assignTo
      channelID
      channel {
        id
        user
        contactID
        channelType
        contactAttributes
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
      user
      assignTo
      channelID
      channel {
        id
        user
        contactID
        channelType
        contactAttributes
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
      status
      createdAt
      updatedAt
    }
  }
`;
