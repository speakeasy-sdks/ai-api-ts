/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { Message, Message$ } from "./message";
import { z } from "zod";

export type ContinueChatSessionWithChatResultInput = {
    integrationId: string;
    message: Message;
    stream?: boolean | undefined;
};

/** @internal */
export namespace ContinueChatSessionWithChatResultInput$ {
    export type Inbound = {
        integration_id: string;
        message: Message$.Inbound;
        stream?: boolean | undefined;
    };

    export const inboundSchema: z.ZodType<
        ContinueChatSessionWithChatResultInput,
        z.ZodTypeDef,
        Inbound
    > = z
        .object({
            integration_id: z.string(),
            message: Message$.inboundSchema,
            stream: z.boolean().default(false),
        })
        .transform((v) => {
            return {
                integrationId: v.integration_id,
                message: v.message,
                stream: v.stream,
            };
        });

    export type Outbound = {
        integration_id: string;
        message: Message$.Outbound;
        stream: boolean;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        ContinueChatSessionWithChatResultInput
    > = z
        .object({
            integrationId: z.string(),
            message: Message$.outboundSchema,
            stream: z.boolean().default(false),
        })
        .transform((v) => {
            return {
                integration_id: v.integrationId,
                message: v.message,
                stream: v.stream,
            };
        });
}
