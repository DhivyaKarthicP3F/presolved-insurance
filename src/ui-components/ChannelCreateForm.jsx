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
import { Channel } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function ChannelCreateForm(props) {
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
    assignTo: "",
    contactID: "",
    channelType: "",
    contactAttributes: "",
    notes: "",
  };
  const [assignTo, setAssignTo] = React.useState(initialValues.assignTo);
  const [contactID, setContactID] = React.useState(initialValues.contactID);
  const [channelType, setChannelType] = React.useState(
    initialValues.channelType
  );
  const [contactAttributes, setContactAttributes] = React.useState(
    initialValues.contactAttributes
  );
  const [notes, setNotes] = React.useState(initialValues.notes);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setAssignTo(initialValues.assignTo);
    setContactID(initialValues.contactID);
    setChannelType(initialValues.channelType);
    setContactAttributes(initialValues.contactAttributes);
    setNotes(initialValues.notes);
    setErrors({});
  };
  const validations = {
    assignTo: [{ type: "Required" }],
    contactID: [{ type: "Required" }],
    channelType: [{ type: "Required" }],
    contactAttributes: [{ type: "JSON" }],
    notes: [{ type: "Required" }],
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
          assignTo,
          contactID,
          channelType,
          contactAttributes,
          notes,
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
          await DataStore.save(new Channel(modelFields));
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
      {...getOverrideProps(overrides, "ChannelCreateForm")}
      {...rest}
    >
      <TextField
        label="Assign to"
        isRequired={true}
        isReadOnly={false}
        value={assignTo}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              assignTo: value,
              contactID,
              channelType,
              contactAttributes,
              notes,
            };
            const result = onChange(modelFields);
            value = result?.assignTo ?? value;
          }
          if (errors.assignTo?.hasError) {
            runValidationTasks("assignTo", value);
          }
          setAssignTo(value);
        }}
        onBlur={() => runValidationTasks("assignTo", assignTo)}
        errorMessage={errors.assignTo?.errorMessage}
        hasError={errors.assignTo?.hasError}
        {...getOverrideProps(overrides, "assignTo")}
      ></TextField>
      <TextField
        label="Contact id"
        isRequired={true}
        isReadOnly={false}
        value={contactID}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              assignTo,
              contactID: value,
              channelType,
              contactAttributes,
              notes,
            };
            const result = onChange(modelFields);
            value = result?.contactID ?? value;
          }
          if (errors.contactID?.hasError) {
            runValidationTasks("contactID", value);
          }
          setContactID(value);
        }}
        onBlur={() => runValidationTasks("contactID", contactID)}
        errorMessage={errors.contactID?.errorMessage}
        hasError={errors.contactID?.hasError}
        {...getOverrideProps(overrides, "contactID")}
      ></TextField>
      <TextField
        label="Channel type"
        isRequired={true}
        isReadOnly={false}
        value={channelType}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              assignTo,
              contactID,
              channelType: value,
              contactAttributes,
              notes,
            };
            const result = onChange(modelFields);
            value = result?.channelType ?? value;
          }
          if (errors.channelType?.hasError) {
            runValidationTasks("channelType", value);
          }
          setChannelType(value);
        }}
        onBlur={() => runValidationTasks("channelType", channelType)}
        errorMessage={errors.channelType?.errorMessage}
        hasError={errors.channelType?.hasError}
        {...getOverrideProps(overrides, "channelType")}
      ></TextField>
      <TextAreaField
        label="Contact attributes"
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              assignTo,
              contactID,
              channelType,
              contactAttributes: value,
              notes,
            };
            const result = onChange(modelFields);
            value = result?.contactAttributes ?? value;
          }
          if (errors.contactAttributes?.hasError) {
            runValidationTasks("contactAttributes", value);
          }
          setContactAttributes(value);
        }}
        onBlur={() =>
          runValidationTasks("contactAttributes", contactAttributes)
        }
        errorMessage={errors.contactAttributes?.errorMessage}
        hasError={errors.contactAttributes?.hasError}
        {...getOverrideProps(overrides, "contactAttributes")}
      ></TextAreaField>
      <TextField
        label="Notes"
        isRequired={true}
        isReadOnly={false}
        value={notes}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              assignTo,
              contactID,
              channelType,
              contactAttributes,
              notes: value,
            };
            const result = onChange(modelFields);
            value = result?.notes ?? value;
          }
          if (errors.notes?.hasError) {
            runValidationTasks("notes", value);
          }
          setNotes(value);
        }}
        onBlur={() => runValidationTasks("notes", notes)}
        errorMessage={errors.notes?.errorMessage}
        hasError={errors.notes?.hasError}
        {...getOverrideProps(overrides, "notes")}
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
