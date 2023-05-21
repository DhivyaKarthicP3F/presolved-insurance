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
export declare type AuditCreateFormInputValues = {
    reference?: string;
    performedBy?: string;
    activity?: string;
};
export declare type AuditCreateFormValidationValues = {
    reference?: ValidationFunction<string>;
    performedBy?: ValidationFunction<string>;
    activity?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type AuditCreateFormOverridesProps = {
    AuditCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    reference?: PrimitiveOverrideProps<TextFieldProps>;
    performedBy?: PrimitiveOverrideProps<TextFieldProps>;
    activity?: PrimitiveOverrideProps<TextAreaFieldProps>;
} & EscapeHatchProps;
export declare type AuditCreateFormProps = React.PropsWithChildren<{
    overrides?: AuditCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: AuditCreateFormInputValues) => AuditCreateFormInputValues;
    onSuccess?: (fields: AuditCreateFormInputValues) => void;
    onError?: (fields: AuditCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: AuditCreateFormInputValues) => AuditCreateFormInputValues;
    onValidate?: AuditCreateFormValidationValues;
} & React.CSSProperties>;
export default function AuditCreateForm(props: AuditCreateFormProps): React.ReactElement;
