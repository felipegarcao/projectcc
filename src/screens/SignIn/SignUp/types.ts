import * as zod from 'zod'
import { userSchema } from './validation';

export type handleSubmittedTypes = zod.infer<typeof userSchema>;