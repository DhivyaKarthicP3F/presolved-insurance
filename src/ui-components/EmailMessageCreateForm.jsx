/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Button,
  Flex,
  Grid,
  TextAreaField,
  TextField,
} from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { EmailMessage } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function EmailMessageCreateForm(props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    channelID: "",
    from: "",
    to: "",
    messageID: "",
    body: "",
    subject: "",
    attachments: "",
    receivedTime: "",
  };
  const [channelID, setChannelID] = React.useState(initialValues.channelID);
  const [from, setFrom] = React.useState(initialValues.from);
  const [to, setTo] = React.useState(initialValues.to);
  const [messageID, setMessageID] = React.useState(initialValues.messageID);
  const [body, setBody] = React.useState(initialValues.body);
  const [subject, setSubject] = React.useState(initialValues.subject);
  const [attachments, setAttachments] = React.useState(
    initialValues.attachments
  );
  const [receivedTime, setReceivedTime] = React.useState(
    initialValues.receivedTime
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setChannelID(initialValues.channelID);
    setFrom(initialValues.from);
    setTo(initialValues.to);
    setMessageID(initialValues.messageID);
    setBody(initialValues.body);
    setSubject(initialValues.subject);
    setAttachments(initialValues.attachments);
    setReceivedTime(initialValues.receivedTime);
    setErrors({});
  };
  const validations = {
    channelID: [{ type: "Required" }],
    from: [{ type: "Required" }],
    to: [{ type: "Required" }],
    messageID: [{ type: "Required" }],
    body: [{ type: "Required" }],
    subject: [{ type: "Required" }],
    attachments: [{ type: "JSON" }],
    receivedTime: [{ type: "Required" }],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          channelID,
          from,
          to,
          messageID,
          body,
          subject,
          attachments,
          receivedTime,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value.trim() === "") {
              modelFields[key] = undefined;
            }
          });
          await DataStore.save(new EmailMessage(modelFields));
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "EmailMessageCreateForm")}
      {...rest}
    >
      <TextField
        label="Channel id"
        isRequired={true}
        isReadOnly={false}
        value={channelID}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              channelID: value,
              from,
              to,
              messageID,
              body,
              subject,
              attachments,
              receivedTime,
            };
            const result = onChange(modelFields);
            value = result?.channelID ?? value;
          }
          if (errors.channelID?.hasError) {
            runValidationTasks("channelID", value);
          }
          setChannelID(value);
        }}
        onBlur={() => runValidationTasks("channelID", channelID)}
        errorMessage={errors.channelID?.errorMessage}
        hasError={errors.channelID?.hasError}
        {...getOverrideProps(overrides, "channelID")}
      ></TextField>
      <TextField
        label="From"
        isRequired={true}
        isReadOnly={false}
        value={from}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              channelID,
              from: value,
              to,
              messageID,
              body,
              subject,
              attachments,
              receivedTime,
            };
            const result = onChange(modelFields);
            value = result?.from ?? value;
          }
          if (errors.from?.hasError) {
            runValidationTasks("from", value);
          }
          setFrom(value);
        }}
        onBlur={() => runValidationTasks("from", from)}
        errorMessage={errors.from?.errorMessage}
        hasError={errors.from?.hasError}
        {...getOverrideProps(overrides, "from")}
      ></TextField>
      <TextField
        label="To"
        isRequired={true}
        isReadOnly={false}
        value={to}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              channelID,
              from,
              to: value,
              messageID,
              body,
              subject,
              attachments,
              receivedTime,
            };
            const result = onChange(modelFields);
            value = result?.to ?? value;
          }
          if (errors.to?.hasError) {
            runValidationTasks("to", value);
          }
          setTo(value);
        }}
        onBlur={() => runValidationTasks("to", to)}
        errorMessage={errors.to?.errorMessage}
        hasError={errors.to?.hasError}
        {...getOverrideProps(overrides, "to")}
      ></TextField>
      <TextField
        label="Message id"
        isRequired={true}
        isReadOnly={false}
        value={messageID}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              channelID,
              from,
              to,
              messageID: value,
              body,
              subject,
              attachments,
              receivedTime,
            };
            const result = onChange(modelFields);
            value = result?.messageID ?? value;
          }
          if (errors.messageID?.hasError) {
            runValidationTasks("messageID", value);
          }
          setMessageID(value);
        }}
        onBlur={() => runValidationTasks("messageID", messageID)}
        errorMessage={errors.messageID?.errorMessage}
        hasError={errors.messageID?.hasError}
        {...getOverrideProps(overrides, "messageID")}
      ></TextField>
      <TextField
        label="Body"
        isRequired={true}
        isReadOnly={false}
        value={body}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              channelID,
              from,
              to,
              messageID,
              body: value,
              subject,
              attachments,
              receivedTime,
            };
            const result = onChange(modelFields);
            value = result?.body ?? value;
          }
          if (errors.body?.hasError) {
            runValidationTasks("body", value);
          }
          setBody(value);
        }}
        onBlur={() => runValidationTasks("body", body)}
        errorMessage={errors.body?.errorMessage}
        hasError={errors.body?.hasError}
        {...getOverrideProps(overrides, "body")}
      ></TextField>
      <TextField
        label="Subject"
        isRequired={true}
        isReadOnly={false}
        value={subject}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              channelID,
              from,
              to,
              messageID,
              body,
              subject: value,
              attachments,
              receivedTime,
            };
            const result = onChange(modelFields);
            value = result?.subject ?? value;
          }
          if (errors.subject?.hasError) {
            runValidationTasks("subject", value);
          }
          setSubject(value);
        }}
        onBlur={() => runValidationTasks("subject", subject)}
        errorMessage={errors.subject?.errorMessage}
        hasError={errors.subject?.hasError}
        {...getOverrideProps(overrides, "subject")}
      ></TextField>
      <TextAreaField
        label="Attachments"
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              channelID,
              from,
              to,
              messageID,
              body,
              subject,
              attachments: value,
              receivedTime,
            };
            const result = onChange(modelFields);
            value = result?.attachments ?? value;
          }
          if (errors.attachments?.hasError) {
            runValidationTasks("attachments", value);
          }
          setAttachments(value);
        }}
        onBlur={() => runValidationTasks("attachments", attachments)}
        errorMessage={errors.attachments?.errorMessage}
        hasError={errors.attachments?.hasError}
        {...getOverrideProps(overrides, "attachments")}
      ></TextAreaField>
      <TextField
        label="Received time"
        isRequired={true}
        isReadOnly={false}
        value={receivedTime}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              channelID,
              from,
              to,
              messageID,
              body,
              subject,
              attachments,
              receivedTime: value,
            };
            const result = onChange(modelFields);
            value = result?.receivedTime ?? value;
          }
          if (errors.receivedTime?.hasError) {
            runValidationTasks("receivedTime", value);
          }
          setReceivedTime(value);
        }}
        onBlur={() => runValidationTasks("receivedTime", receivedTime)}
        errorMessage={errors.receivedTime?.errorMessage}
        hasError={errors.receivedTime?.hasError}
        {...getOverrideProps(overrides, "receivedTime")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
