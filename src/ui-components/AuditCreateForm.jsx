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
import { Audit } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function AuditCreateForm(props) {
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
    reference: "",
    performedBy: "",
    activity: "",
  };
  const [reference, setReference] = React.useState(initialValues.reference);
  const [performedBy, setPerformedBy] = React.useState(
    initialValues.performedBy
  );
  const [activity, setActivity] = React.useState(initialValues.activity);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setReference(initialValues.reference);
    setPerformedBy(initialValues.performedBy);
    setActivity(initialValues.activity);
    setErrors({});
  };
  const validations = {
    reference: [{ type: "Required" }],
    performedBy: [{ type: "Required" }],
    activity: [{ type: "JSON" }],
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
          reference,
          performedBy,
          activity,
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
          await DataStore.save(new Audit(modelFields));
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
      {...getOverrideProps(overrides, "AuditCreateForm")}
      {...rest}
    >
      <TextField
        label="Reference"
        isRequired={true}
        isReadOnly={false}
        value={reference}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              reference: value,
              performedBy,
              activity,
            };
            const result = onChange(modelFields);
            value = result?.reference ?? value;
          }
          if (errors.reference?.hasError) {
            runValidationTasks("reference", value);
          }
          setReference(value);
        }}
        onBlur={() => runValidationTasks("reference", reference)}
        errorMessage={errors.reference?.errorMessage}
        hasError={errors.reference?.hasError}
        {...getOverrideProps(overrides, "reference")}
      ></TextField>
      <TextField
        label="Performed by"
        isRequired={true}
        isReadOnly={false}
        value={performedBy}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              reference,
              performedBy: value,
              activity,
            };
            const result = onChange(modelFields);
            value = result?.performedBy ?? value;
          }
          if (errors.performedBy?.hasError) {
            runValidationTasks("performedBy", value);
          }
          setPerformedBy(value);
        }}
        onBlur={() => runValidationTasks("performedBy", performedBy)}
        errorMessage={errors.performedBy?.errorMessage}
        hasError={errors.performedBy?.hasError}
        {...getOverrideProps(overrides, "performedBy")}
      ></TextField>
      <TextAreaField
        label="Activity"
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              reference,
              performedBy,
              activity: value,
            };
            const result = onChange(modelFields);
            value = result?.activity ?? value;
          }
          if (errors.activity?.hasError) {
            runValidationTasks("activity", value);
          }
          setActivity(value);
        }}
        onBlur={() => runValidationTasks("activity", activity)}
        errorMessage={errors.activity?.errorMessage}
        hasError={errors.activity?.hasError}
        {...getOverrideProps(overrides, "activity")}
      ></TextAreaField>
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
