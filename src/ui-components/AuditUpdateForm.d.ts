/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextAreaFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Audit } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type AuditUpdateFormInputValues = {
    reference?: string;
    performedBy?: string;
    activity?: string;
};
export declare type AuditUpdateFormValidationValues = {
    reference?: ValidationFunction<string>;
    performedBy?: ValidationFunction<string>;
    activity?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type AuditUpdateFormOverridesProps = {
    AuditUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    reference?: PrimitiveOverrideProps<TextFieldProps>;
    performedBy?: PrimitiveOverrideProps<TextFieldProps>;
    activity?: PrimitiveOverrideProps<TextAreaFieldProps>;
} & EscapeHatchProps;
export declare type AuditUpdateFormProps = React.PropsWithChildren<{
    overrides?: AuditUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    audit?: Audit;
    onSubmit?: (fields: AuditUpdateFormInputValues) => AuditUpdateFormInputValues;
    onSuccess?: (fields: AuditUpdateFormInputValues) => void;
    onError?: (fields: AuditUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: AuditUpdateFormInputValues) => AuditUpdateFormInputValues;
    onValidate?: AuditUpdateFormValidationValues;
} & React.CSSProperties>;
export default function AuditUpdateForm(props: AuditUpdateFormProps): React.ReactElement;
