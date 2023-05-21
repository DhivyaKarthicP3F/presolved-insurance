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
export declare type TenantConfigCreateFormInputValues = {
    name?: string;
    company?: string;
    adminEmail?: string;
    phone?: string;
    isSignedup?: string;
    intents?: string;
    templates?: string;
    Channels?: string;
    instanceURL?: string;
    connectInstanceURL?: string;
};
export declare type TenantConfigCreateFormValidationValues = {
    name?: ValidationFunction<string>;
    company?: ValidationFunction<string>;
    adminEmail?: ValidationFunction<string>;
    phone?: ValidationFunction<string>;
    isSignedup?: ValidationFunction<string>;
    intents?: ValidationFunction<string>;
    templates?: ValidationFunction<string>;
    Channels?: ValidationFunction<string>;
    instanceURL?: ValidationFunction<string>;
    connectInstanceURL?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TenantConfigCreateFormOverridesProps = {
    TenantConfigCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    company?: PrimitiveOverrideProps<TextFieldProps>;
    adminEmail?: PrimitiveOverrideProps<TextFieldProps>;
    phone?: PrimitiveOverrideProps<TextFieldProps>;
    isSignedup?: PrimitiveOverrideProps<TextFieldProps>;
    intents?: PrimitiveOverrideProps<TextAreaFieldProps>;
    templates?: PrimitiveOverrideProps<TextAreaFieldProps>;
    Channels?: PrimitiveOverrideProps<TextAreaFieldProps>;
    instanceURL?: PrimitiveOverrideProps<TextFieldProps>;
    connectInstanceURL?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type TenantConfigCreateFormProps = React.PropsWithChildren<{
    overrides?: TenantConfigCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: TenantConfigCreateFormInputValues) => TenantConfigCreateFormInputValues;
    onSuccess?: (fields: TenantConfigCreateFormInputValues) => void;
    onError?: (fields: TenantConfigCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: TenantConfigCreateFormInputValues) => TenantConfigCreateFormInputValues;
    onValidate?: TenantConfigCreateFormValidationValues;
} & React.CSSProperties>;
export default function TenantConfigCreateForm(props: TenantConfigCreateFormProps): React.ReactElement;
