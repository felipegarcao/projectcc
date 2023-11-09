
import {z} from 'zod'

export const alugarSchema = z.object({
    user_id: z.string()
})