import type { ReactNode } from 'react'
import { MARKS, BLOCKS } from '@contentful/rich-text-types'

export const richTextOptions = {
  renderMark: {
    [MARKS.BOLD]: (text: ReactNode) => <span>{text}</span>,
  },
}

export const richTextBodyOptions = {
  renderMark: {
    [MARKS.BOLD]: (text: ReactNode) => <strong>{text}</strong>,
  },
  renderNode: {
    [BLOCKS.PARAGRAPH]: (_: unknown, children: ReactNode) => <>{children}</>,
  },
}

export const richTextColoredOptions = {
  renderMark: {
    [MARKS.BOLD]: (text: ReactNode) => <span className="text-primary-600">{text}</span>,
  },
}
