'use server'

import { logError } from '@/utils/logger'

export async function logClientError(
  message: string,
  digest?: string,
  stack?: string
): Promise<void> {
  logError({ message, digest, stack, source: 'error-boundary' })
}
