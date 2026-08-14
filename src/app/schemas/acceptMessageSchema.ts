import {z} from "zod";

export const acceptMessage.schema = z.object({
    isAcceptingMessage: z.boolean()
});
