import { appendFileSync, mkdirSync } from 'fs'
import { join } from 'path'

const LOG_DIR = join(process.cwd(), 'logs')
const LOG_FILE = join(LOG_DIR, 'error.log')

interface ErrorEntry {
  message: string
  digest?: string
  stack?: string
  source?: string
  [key: string]: unknown
}

export function logError(entry: ErrorEntry): void {
  const record = { timestamp: new Date().toISOString(), ...entry }

  console.error('[serenova:error]', JSON.stringify(record))

  try {
    mkdirSync(LOG_DIR, { recursive: true })
    appendFileSync(LOG_FILE, JSON.stringify(record) + '\n', 'utf-8')
  } catch {
    // Intentionally empty — file logging is best-effort
  }
}
