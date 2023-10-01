import { contratoSchema } from "./validation";
import * as zod from 'zod'

export type handleSubmittedTypes = zod.infer<typeof contratoSchema>;
