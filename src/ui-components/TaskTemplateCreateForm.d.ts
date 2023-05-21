/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextAreaFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type TaskTemplateCreateFormInputValues = {
    name?: string;
    description?: string;
    attributes?: string;
};
export declare type TaskTemplateCreateFormValidationValues = {
    name?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
    attributes?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TaskTemplateCreateFormOverridesProps = {
    TaskTemplateCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
    attributes?: PrimitiveOverrideProps<TextAreaFieldProps>;
} & EscapeHatchProps;
export declare type TaskTemplateCreateFormProps = React.PropsWithChildren<{
    overrides?: TaskTemplateCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: TaskTemplateCreateFormInputValues) => TaskTemplateCreateFormInputValues;
    onSuccess?: (fields: TaskTemplateCreateFormInputValues) => void;
    onError?: (fields: TaskTemplateCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: TaskTemplateCreateFormInputValues) => TaskTemplateCreateFormInputValues;
    onValidate?: TaskTemplateCreateFormValidationValues;
} & React.CSSProperties>;
export default function TaskTemplateCreateForm(props: TaskTemplateCreateFormProps): React.ReactElement;
