/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextAreaFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { TaskTemplate } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type TaskTemplateUpdateFormInputValues = {
    name?: string;
    description?: string;
    attributes?: string;
};
export declare type TaskTemplateUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
    attributes?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TaskTemplateUpdateFormOverridesProps = {
    TaskTemplateUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
    attributes?: PrimitiveOverrideProps<TextAreaFieldProps>;
} & EscapeHatchProps;
export declare type TaskTemplateUpdateFormProps = React.PropsWithChildren<{
    overrides?: TaskTemplateUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    taskTemplate?: TaskTemplate;
    onSubmit?: (fields: TaskTemplateUpdateFormInputValues) => TaskTemplateUpdateFormInputValues;
    onSuccess?: (fields: TaskTemplateUpdateFormInputValues) => void;
    onError?: (fields: TaskTemplateUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: TaskTemplateUpdateFormInputValues) => TaskTemplateUpdateFormInputValues;
    onValidate?: TaskTemplateUpdateFormValidationValues;
} & React.CSSProperties>;
export default function TaskTemplateUpdateForm(props: TaskTemplateUpdateFormProps): React.ReactElement;
