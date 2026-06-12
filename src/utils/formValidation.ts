import { z } from 'zod'

export interface FormField {
  id: string
  type: 'text' | 'tel' | 'email' | 'textarea'
  label: string
  required: boolean
}

function buildFieldSchema(field: FormField): z.ZodTypeAny {
  if (field.required) {
    if (field.type === 'email')
      return z.string().min(1, `${field.label} is required`).email('Invalid email address')
    return z.string().min(1, `${field.label} is required`)
  }
  if (field.type === 'email')
    return z
      .string()
      .refine((v) => v === '' || z.string().email().safeParse(v).success, 'Invalid email address')
  if (field.type === 'tel')
    return z.string().refine((v) => v === '' || /^[\d\s+\-()]+$/.test(v), 'Invalid phone number')
  return z.string()
}

export function buildSchema(fields: FormField[]) {
  return z.object(Object.fromEntries(fields.map((f) => [f.id, buildFieldSchema(f)])))
}

export function isValidEmail(value: string): boolean {
  return z.string().email().safeParse(value).success
}
