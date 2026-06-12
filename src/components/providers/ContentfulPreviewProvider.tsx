'use client'

import { ContentfulLivePreviewProvider } from '@contentful/live-preview/react'

export default function ContentfulPreviewProvider({
  children,
  isPreview,
}: {
  children: React.ReactNode
  isPreview: boolean
}) {
  return (
    <ContentfulLivePreviewProvider
      locale="en-US"
      enableInspectorMode={isPreview}
      enableLiveUpdates={isPreview}
    >
      {children}
    </ContentfulLivePreviewProvider>
  )
}
