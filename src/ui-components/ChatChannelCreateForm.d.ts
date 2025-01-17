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
export declare type ChatChannelCreateFormInputValues = {
    name?: string;
    data?: string;
};
export declare type ChatChannelCreateFormValidationValues = {
    name?: ValidationFunction<string>;
    data?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ChatChannelCreateFormOverridesProps = {
    ChatChannelCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    data?: PrimitiveOverrideProps<TextAreaFieldProps>;
} & EscapeHatchProps;
export declare type ChatChannelCreateFormProps = React.PropsWithChildren<{
    overrides?: ChatChannelCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: ChatChannelCreateFormInputValues) => ChatChannelCreateFormInputValues;
    onSuccess?: (fields: ChatChannelCreateFormInputValues) => void;
    onError?: (fields: ChatChannelCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ChatChannelCreateFormInputValues) => ChatChannelCreateFormInputValues;
    onValidate?: ChatChannelCreateFormValidationValues;
} & React.CSSProperties>;
export default function ChatChannelCreateForm(props: ChatChannelCreateFormProps): React.ReactElement;
