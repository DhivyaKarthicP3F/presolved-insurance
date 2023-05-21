/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextAreaFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Channel } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ChannelUpdateFormInputValues = {
    assignTo?: string;
    contactID?: string;
    channelType?: string;
    contactAttributes?: string;
    notes?: string;
};
export declare type ChannelUpdateFormValidationValues = {
    assignTo?: ValidationFunction<string>;
    contactID?: ValidationFunction<string>;
    channelType?: ValidationFunction<string>;
    contactAttributes?: ValidationFunction<string>;
    notes?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ChannelUpdateFormOverridesProps = {
    ChannelUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    assignTo?: PrimitiveOverrideProps<TextFieldProps>;
    contactID?: PrimitiveOverrideProps<TextFieldProps>;
    channelType?: PrimitiveOverrideProps<TextFieldProps>;
    contactAttributes?: PrimitiveOverrideProps<TextAreaFieldProps>;
    notes?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ChannelUpdateFormProps = React.PropsWithChildren<{
    overrides?: ChannelUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    channel?: Channel;
    onSubmit?: (fields: ChannelUpdateFormInputValues) => ChannelUpdateFormInputValues;
    onSuccess?: (fields: ChannelUpdateFormInputValues) => void;
    onError?: (fields: ChannelUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ChannelUpdateFormInputValues) => ChannelUpdateFormInputValues;
    onValidate?: ChannelUpdateFormValidationValues;
} & React.CSSProperties>;
export default function ChannelUpdateForm(props: ChannelUpdateFormProps): React.ReactElement;
