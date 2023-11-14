import { EditProfileSchema } from "../MyProfile/validation";
import { inquilinosSchema } from "./validation";
import * as zod from 'zod'

export type handleSubmittedTypes = zod.infer<typeof inquilinosSchema>;


export type handleUpdatedSubmittedTypes = zod.infer<typeof EditProfileSchema>;


