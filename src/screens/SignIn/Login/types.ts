import * as zod from 'zod'
import { loginSchema } from './validation';

export type handleSubmittedTypes = zod.infer<typeof loginSchema>;