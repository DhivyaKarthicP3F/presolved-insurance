/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextAreaFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Config } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ConfigUpdateFormInputValues = {
    name?: string;
    type?: string;
    ARNReference?: string;
    parameters?: string;
};
export declare type ConfigUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    type?: ValidationFunction<string>;
    ARNReference?: ValidationFunction<string>;
    parameters?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ConfigUpdateFormOverridesProps = {
    ConfigUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    type?: PrimitiveOverrideProps<TextFieldProps>;
    ARNReference?: PrimitiveOverrideProps<TextFieldProps>;
    parameters?: PrimitiveOverrideProps<TextAreaFieldProps>;
} & EscapeHatchProps;
export declare type ConfigUpdateFormProps = React.PropsWithChildren<{
    overrides?: ConfigUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    config?: Config;
    onSubmit?: (fields: ConfigUpdateFormInputValues) => ConfigUpdateFormInputValues;
    onSuccess?: (fields: ConfigUpdateFormInputValues) => void;
    onError?: (fields: ConfigUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ConfigUpdateFormInputValues) => ConfigUpdateFormInputValues;
    onValidate?: ConfigUpdateFormValidationValues;
} & React.CSSProperties>;
export default function ConfigUpdateForm(props: ConfigUpdateFormProps): React.ReactElement;
