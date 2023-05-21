/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextAreaFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { EmailMessage } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type EmailMessageUpdateFormInputValues = {
    channelID?: string;
    from?: string;
    to?: string;
    messageID?: string;
    body?: string;
    subject?: string;
    attachments?: string;
    receivedTime?: string;
};
export declare type EmailMessageUpdateFormValidationValues = {
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
export declare type EmailMessageUpdateFormOverridesProps = {
    EmailMessageUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    channelID?: PrimitiveOverrideProps<TextFieldProps>;
    from?: PrimitiveOverrideProps<TextFieldProps>;
    to?: PrimitiveOverrideProps<TextFieldProps>;
    messageID?: PrimitiveOverrideProps<TextFieldProps>;
    body?: PrimitiveOverrideProps<TextFieldProps>;
    subject?: PrimitiveOverrideProps<TextFieldProps>;
    attachments?: PrimitiveOverrideProps<TextAreaFieldProps>;
    receivedTime?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type EmailMessageUpdateFormProps = React.PropsWithChildren<{
    overrides?: EmailMessageUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    emailMessage?: EmailMessage;
    onSubmit?: (fields: EmailMessageUpdateFormInputValues) => EmailMessageUpdateFormInputValues;
    onSuccess?: (fields: EmailMessageUpdateFormInputValues) => void;
    onError?: (fields: EmailMessageUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: EmailMessageUpdateFormInputValues) => EmailMessageUpdateFormInputValues;
    onValidate?: EmailMessageUpdateFormValidationValues;
} & React.CSSProperties>;
export default function EmailMessageUpdateForm(props: EmailMessageUpdateFormProps): React.ReactElement;
