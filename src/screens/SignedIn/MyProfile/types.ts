import { EditProfileSchema } from "./validation";

import * as z from "zod";

export type handleSubmittedTypes = z.infer<typeof EditProfileSchema>;
