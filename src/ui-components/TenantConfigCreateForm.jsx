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
import { TenantConfig } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function TenantConfigCreateForm(props) {
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
    name: "",
    company: "",
    adminEmail: "",
    phone: "",
    isSignedup: "",
    intents: "",
    templates: "",
    Channels: "",
    instanceURL: "",
    connectInstanceURL: "",
  };
  const [name, setName] = React.useState(initialValues.name);
  const [company, setCompany] = React.useState(initialValues.company);
  const [adminEmail, setAdminEmail] = React.useState(initialValues.adminEmail);
  const [phone, setPhone] = React.useState(initialValues.phone);
  const [isSignedup, setIsSignedup] = React.useState(initialValues.isSignedup);
  const [intents, setIntents] = React.useState(initialValues.intents);
  const [templates, setTemplates] = React.useState(initialValues.templates);
  const [Channels, setChannels] = React.useState(initialValues.Channels);
  const [instanceURL, setInstanceURL] = React.useState(
    initialValues.instanceURL
  );
  const [connectInstanceURL, setConnectInstanceURL] = React.useState(
    initialValues.connectInstanceURL
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setName(initialValues.name);
    setCompany(initialValues.company);
    setAdminEmail(initialValues.adminEmail);
    setPhone(initialValues.phone);
    setIsSignedup(initialValues.isSignedup);
    setIntents(initialValues.intents);
    setTemplates(initialValues.templates);
    setChannels(initialValues.Channels);
    setInstanceURL(initialValues.instanceURL);
    setConnectInstanceURL(initialValues.connectInstanceURL);
    setErrors({});
  };
  const validations = {
    name: [{ type: "Required" }],
    company: [{ type: "Required" }],
    adminEmail: [{ type: "Required" }],
    phone: [{ type: "Required" }],
    isSignedup: [{ type: "Required" }],
    intents: [{ type: "Required" }, { type: "JSON" }],
    templates: [{ type: "Required" }, { type: "JSON" }],
    Channels: [{ type: "Required" }, { type: "JSON" }],
    instanceURL: [{ type: "Required" }],
    connectInstanceURL: [{ type: "Required" }],
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
          name,
          company,
          adminEmail,
          phone,
          isSignedup,
          intents,
          templates,
          Channels,
          instanceURL,
          connectInstanceURL,
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
          await DataStore.save(new TenantConfig(modelFields));
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
      {...getOverrideProps(overrides, "TenantConfigCreateForm")}
      {...rest}
    >
      <TextField
        label="Name"
        isRequired={true}
        isReadOnly={false}
        value={name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name: value,
              company,
              adminEmail,
              phone,
              isSignedup,
              intents,
              templates,
              Channels,
              instanceURL,
              connectInstanceURL,
            };
            const result = onChange(modelFields);
            value = result?.name ?? value;
          }
          if (errors.name?.hasError) {
            runValidationTasks("name", value);
          }
          setName(value);
        }}
        onBlur={() => runValidationTasks("name", name)}
        errorMessage={errors.name?.errorMessage}
        hasError={errors.name?.hasError}
        {...getOverrideProps(overrides, "name")}
      ></TextField>
      <TextField
        label="Company"
        isRequired={true}
        isReadOnly={false}
        value={company}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              company: value,
              adminEmail,
              phone,
              isSignedup,
              intents,
              templates,
              Channels,
              instanceURL,
              connectInstanceURL,
            };
            const result = onChange(modelFields);
            value = result?.company ?? value;
          }
          if (errors.company?.hasError) {
            runValidationTasks("company", value);
          }
          setCompany(value);
        }}
        onBlur={() => runValidationTasks("company", company)}
        errorMessage={errors.company?.errorMessage}
        hasError={errors.company?.hasError}
        {...getOverrideProps(overrides, "company")}
      ></TextField>
      <TextField
        label="Admin email"
        isRequired={true}
        isReadOnly={false}
        value={adminEmail}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              company,
              adminEmail: value,
              phone,
              isSignedup,
              intents,
              templates,
              Channels,
              instanceURL,
              connectInstanceURL,
            };
            const result = onChange(modelFields);
            value = result?.adminEmail ?? value;
          }
          if (errors.adminEmail?.hasError) {
            runValidationTasks("adminEmail", value);
          }
          setAdminEmail(value);
        }}
        onBlur={() => runValidationTasks("adminEmail", adminEmail)}
        errorMessage={errors.adminEmail?.errorMessage}
        hasError={errors.adminEmail?.hasError}
        {...getOverrideProps(overrides, "adminEmail")}
      ></TextField>
      <TextField
        label="Phone"
        isRequired={true}
        isReadOnly={false}
        value={phone}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              company,
              adminEmail,
              phone: value,
              isSignedup,
              intents,
              templates,
              Channels,
              instanceURL,
              connectInstanceURL,
            };
            const result = onChange(modelFields);
            value = result?.phone ?? value;
          }
          if (errors.phone?.hasError) {
            runValidationTasks("phone", value);
          }
          setPhone(value);
        }}
        onBlur={() => runValidationTasks("phone", phone)}
        errorMessage={errors.phone?.errorMessage}
        hasError={errors.phone?.hasError}
        {...getOverrideProps(overrides, "phone")}
      ></TextField>
      <TextField
        label="Is signedup"
        isRequired={true}
        isReadOnly={false}
        value={isSignedup}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              company,
              adminEmail,
              phone,
              isSignedup: value,
              intents,
              templates,
              Channels,
              instanceURL,
              connectInstanceURL,
            };
            const result = onChange(modelFields);
            value = result?.isSignedup ?? value;
          }
          if (errors.isSignedup?.hasError) {
            runValidationTasks("isSignedup", value);
          }
          setIsSignedup(value);
        }}
        onBlur={() => runValidationTasks("isSignedup", isSignedup)}
        errorMessage={errors.isSignedup?.errorMessage}
        hasError={errors.isSignedup?.hasError}
        {...getOverrideProps(overrides, "isSignedup")}
      ></TextField>
      <TextAreaField
        label="Intents"
        isRequired={true}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              company,
              adminEmail,
              phone,
              isSignedup,
              intents: value,
              templates,
              Channels,
              instanceURL,
              connectInstanceURL,
            };
            const result = onChange(modelFields);
            value = result?.intents ?? value;
          }
          if (errors.intents?.hasError) {
            runValidationTasks("intents", value);
          }
          setIntents(value);
        }}
        onBlur={() => runValidationTasks("intents", intents)}
        errorMessage={errors.intents?.errorMessage}
        hasError={errors.intents?.hasError}
        {...getOverrideProps(overrides, "intents")}
      ></TextAreaField>
      <TextAreaField
        label="Templates"
        isRequired={true}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              company,
              adminEmail,
              phone,
              isSignedup,
              intents,
              templates: value,
              Channels,
              instanceURL,
              connectInstanceURL,
            };
            const result = onChange(modelFields);
            value = result?.templates ?? value;
          }
          if (errors.templates?.hasError) {
            runValidationTasks("templates", value);
          }
          setTemplates(value);
        }}
        onBlur={() => runValidationTasks("templates", templates)}
        errorMessage={errors.templates?.errorMessage}
        hasError={errors.templates?.hasError}
        {...getOverrideProps(overrides, "templates")}
      ></TextAreaField>
      <TextAreaField
        label="Channels"
        isRequired={true}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              company,
              adminEmail,
              phone,
              isSignedup,
              intents,
              templates,
              Channels: value,
              instanceURL,
              connectInstanceURL,
            };
            const result = onChange(modelFields);
            value = result?.Channels ?? value;
          }
          if (errors.Channels?.hasError) {
            runValidationTasks("Channels", value);
          }
          setChannels(value);
        }}
        onBlur={() => runValidationTasks("Channels", Channels)}
        errorMessage={errors.Channels?.errorMessage}
        hasError={errors.Channels?.hasError}
        {...getOverrideProps(overrides, "Channels")}
      ></TextAreaField>
      <TextField
        label="Instance url"
        isRequired={true}
        isReadOnly={false}
        value={instanceURL}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              company,
              adminEmail,
              phone,
              isSignedup,
              intents,
              templates,
              Channels,
              instanceURL: value,
              connectInstanceURL,
            };
            const result = onChange(modelFields);
            value = result?.instanceURL ?? value;
          }
          if (errors.instanceURL?.hasError) {
            runValidationTasks("instanceURL", value);
          }
          setInstanceURL(value);
        }}
        onBlur={() => runValidationTasks("instanceURL", instanceURL)}
        errorMessage={errors.instanceURL?.errorMessage}
        hasError={errors.instanceURL?.hasError}
        {...getOverrideProps(overrides, "instanceURL")}
      ></TextField>
      <TextField
        label="Connect instance url"
        isRequired={true}
        isReadOnly={false}
        value={connectInstanceURL}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              company,
              adminEmail,
              phone,
              isSignedup,
              intents,
              templates,
              Channels,
              instanceURL,
              connectInstanceURL: value,
            };
            const result = onChange(modelFields);
            value = result?.connectInstanceURL ?? value;
          }
          if (errors.connectInstanceURL?.hasError) {
            runValidationTasks("connectInstanceURL", value);
          }
          setConnectInstanceURL(value);
        }}
        onBlur={() =>
          runValidationTasks("connectInstanceURL", connectInstanceURL)
        }
        errorMessage={errors.connectInstanceURL?.errorMessage}
        hasError={errors.connectInstanceURL?.hasError}
        {...getOverrideProps(overrides, "connectInstanceURL")}
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
