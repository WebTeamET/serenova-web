import { getClient } from './client'
import { mapSection } from './mappers'
import type { PageSection } from '@/types/section'

export async function getSectionById(id: string, preview = false): Promise<PageSection | null> {
  const client = getClient(preview)
  try {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const entry: any = await client.getEntry(id)
    return mapSection(entry)
  } catch {
    return null
  }
}
