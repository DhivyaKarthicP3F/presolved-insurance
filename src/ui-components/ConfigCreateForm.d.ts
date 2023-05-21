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
export declare type ConfigCreateFormInputValues = {
    name?: string;
    type?: string;
    ARNReference?: string;
    parameters?: string;
};
export declare type ConfigCreateFormValidationValues = {
    name?: ValidationFunction<string>;
    type?: ValidationFunction<string>;
    ARNReference?: ValidationFunction<string>;
    parameters?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ConfigCreateFormOverridesProps = {
    ConfigCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    type?: PrimitiveOverrideProps<TextFieldProps>;
    ARNReference?: PrimitiveOverrideProps<TextFieldProps>;
    parameters?: PrimitiveOverrideProps<TextAreaFieldProps>;
} & EscapeHatchProps;
export declare type ConfigCreateFormProps = React.PropsWithChildren<{
    overrides?: ConfigCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: ConfigCreateFormInputValues) => ConfigCreateFormInputValues;
    onSuccess?: (fields: ConfigCreateFormInputValues) => void;
    onError?: (fields: ConfigCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ConfigCreateFormInputValues) => ConfigCreateFormInputValues;
    onValidate?: ConfigCreateFormValidationValues;
} & React.CSSProperties>;
export default function ConfigCreateForm(props: ConfigCreateFormProps): React.ReactElement;
