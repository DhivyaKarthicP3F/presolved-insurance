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
import { Config } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function ConfigUpdateForm(props) {
  const {
    id: idProp,
    config: configModelProp,
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
    type: "",
    ARNReference: "",
    parameters: "",
  };
  const [name, setName] = React.useState(initialValues.name);
  const [type, setType] = React.useState(initialValues.type);
  const [ARNReference, setARNReference] = React.useState(
    initialValues.ARNReference
  );
  const [parameters, setParameters] = React.useState(initialValues.parameters);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = configRecord
      ? { ...initialValues, ...configRecord }
      : initialValues;
    setName(cleanValues.name);
    setType(cleanValues.type);
    setARNReference(cleanValues.ARNReference);
    setParameters(
      typeof cleanValues.parameters === "string"
        ? cleanValues.parameters
        : JSON.stringify(cleanValues.parameters)
    );
    setErrors({});
  };
  const [configRecord, setConfigRecord] = React.useState(configModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(Config, idProp)
        : configModelProp;
      setConfigRecord(record);
    };
    queryData();
  }, [idProp, configModelProp]);
  React.useEffect(resetStateValues, [configRecord]);
  const validations = {
    name: [{ type: "Required" }],
    type: [{ type: "Required" }],
    ARNReference: [{ type: "Required" }],
    parameters: [{ type: "JSON" }],
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
          type,
          ARNReference,
          parameters,
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
          await DataStore.save(
            Config.copyOf(configRecord, (updated) => {
              Object.assign(updated, modelFields);
            })
          );
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "ConfigUpdateForm")}
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
              type,
              ARNReference,
              parameters,
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
        label="Type"
        isRequired={true}
        isReadOnly={false}
        value={type}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              type: value,
              ARNReference,
              parameters,
            };
            const result = onChange(modelFields);
            value = result?.type ?? value;
          }
          if (errors.type?.hasError) {
            runValidationTasks("type", value);
          }
          setType(value);
        }}
        onBlur={() => runValidationTasks("type", type)}
        errorMessage={errors.type?.errorMessage}
        hasError={errors.type?.hasError}
        {...getOverrideProps(overrides, "type")}
      ></TextField>
      <TextField
        label="Arn reference"
        isRequired={true}
        isReadOnly={false}
        value={ARNReference}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              type,
              ARNReference: value,
              parameters,
            };
            const result = onChange(modelFields);
            value = result?.ARNReference ?? value;
          }
          if (errors.ARNReference?.hasError) {
            runValidationTasks("ARNReference", value);
          }
          setARNReference(value);
        }}
        onBlur={() => runValidationTasks("ARNReference", ARNReference)}
        errorMessage={errors.ARNReference?.errorMessage}
        hasError={errors.ARNReference?.hasError}
        {...getOverrideProps(overrides, "ARNReference")}
      ></TextField>
      <TextAreaField
        label="Parameters"
        isRequired={false}
        isReadOnly={false}
        value={parameters}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              type,
              ARNReference,
              parameters: value,
            };
            const result = onChange(modelFields);
            value = result?.parameters ?? value;
          }
          if (errors.parameters?.hasError) {
            runValidationTasks("parameters", value);
          }
          setParameters(value);
        }}
        onBlur={() => runValidationTasks("parameters", parameters)}
        errorMessage={errors.parameters?.errorMessage}
        hasError={errors.parameters?.hasError}
        {...getOverrideProps(overrides, "parameters")}
      ></TextAreaField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || configModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || configModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
