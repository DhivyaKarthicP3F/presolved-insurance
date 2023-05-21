/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextAreaFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ChatChannel } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ChatChannelUpdateFormInputValues = {
    name?: string;
    data?: string;
};
export declare type ChatChannelUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    data?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ChatChannelUpdateFormOverridesProps = {
    ChatChannelUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    data?: PrimitiveOverrideProps<TextAreaFieldProps>;
} & EscapeHatchProps;
export declare type ChatChannelUpdateFormProps = React.PropsWithChildren<{
    overrides?: ChatChannelUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    chatChannel?: ChatChannel;
    onSubmit?: (fields: ChatChannelUpdateFormInputValues) => ChatChannelUpdateFormInputValues;
    onSuccess?: (fields: ChatChannelUpdateFormInputValues) => void;
    onError?: (fields: ChatChannelUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ChatChannelUpdateFormInputValues) => ChatChannelUpdateFormInputValues;
    onValidate?: ChatChannelUpdateFormValidationValues;
} & React.CSSProperties>;
export default function ChatChannelUpdateForm(props: ChatChannelUpdateFormProps): React.ReactElement;
