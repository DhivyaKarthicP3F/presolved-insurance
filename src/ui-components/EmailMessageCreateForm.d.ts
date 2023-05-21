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
export declare type EmailMessageCreateFormInputValues = {
    channelID?: string;
    from?: string;
    to?: string;
    messageID?: string;
    body?: string;
    subject?: string;
    attachments?: string;
    receivedTime?: string;
};
export declare type EmailMessageCreateFormValidationValues = {
    channelID?: ValidationFunction<string>;
    from?: ValidationFunction<string>;
    to?: ValidationFunction<string>;
    messageID?: ValidationFunction<string>;
    body?: ValidationFunction<string>;
    subject?: ValidationFunction<string>;
    attachments?: ValidationFunction<string>;
    receivedTime?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type EmailMessageCreateFormOverridesProps = {
    EmailMessageCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    channelID?: PrimitiveOverrideProps<TextFieldProps>;
    from?: PrimitiveOverrideProps<TextFieldProps>;
    to?: PrimitiveOverrideProps<TextFieldProps>;
    messageID?: PrimitiveOverrideProps<TextFieldProps>;
    body?: PrimitiveOverrideProps<TextFieldProps>;
    subject?: PrimitiveOverrideProps<TextFieldProps>;
    attachments?: PrimitiveOverrideProps<TextAreaFieldProps>;
    receivedTime?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type EmailMessageCreateFormProps = React.PropsWithChildren<{
    overrides?: EmailMessageCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: EmailMessageCreateFormInputValues) => EmailMessageCreateFormInputValues;
    onSuccess?: (fields: EmailMessageCreateFormInputValues) => void;
    onError?: (fields: EmailMessageCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: EmailMessageCreateFormInputValues) => EmailMessageCreateFormInputValues;
    onValidate?: EmailMessageCreateFormValidationValues;
} & React.CSSProperties>;
export default function EmailMessageCreateForm(props: EmailMessageCreateFormProps): React.ReactElement;
