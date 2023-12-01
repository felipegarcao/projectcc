
import {z} from 'zod'

export const alugarSchema = z.object({
    user_id: z.string()
})


export const desalugarSchema = z.object({
    motivo_desalugue: z.string()
})