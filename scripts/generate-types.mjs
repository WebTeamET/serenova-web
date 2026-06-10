import { execSync } from 'child_process'
import { readFileSync, existsSync } from 'fs'
import { resolve } from 'path'

const root = process.cwd()
const envPath = resolve(root, '.env')

const envVars = {}
if (existsSync(envPath)) {
  for (const line of readFileSync(envPath, 'utf-8').split('\n')) {
    const trimmed = line.trim()
    if (!trimmed || trimmed.startsWith('#')) continue
    const eq = trimmed.indexOf('=')
    if (eq === -1) continue
    const key = trimmed.slice(0, eq).trim()
    const val = trimmed.slice(eq + 1).trim()
    envVars[key] = val
  }
}

const env = { ...process.env, ...envVars }
const spaceId = env.CONTENTFUL_SPACE_ID
const token = env.CONTENTFUL_MANAGEMENT_TOKEN

if (!spaceId || !token) {
  console.error('Missing CONTENTFUL_SPACE_ID or CONTENTFUL_MANAGEMENT_TOKEN in .env')
  process.exit(1)
}

execSync(
  `npx cf-content-types-generator --spaceId ${spaceId} --token ${token} --out src/types/generated`,
  { stdio: 'inherit', env }
)
