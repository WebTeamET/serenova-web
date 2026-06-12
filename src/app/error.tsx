'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import { logClientError } from './actions/logError'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    logClientError(error.message, error.digest, error.stack)
  }, [error])

  return (
    <main
      id="main-content"
      className="min-h-[60vh] flex flex-col items-center justify-center py-60 px-20 text-center"
    >
      <div className="sub-title sub-title-no-translate mb-16">
        <span>Oops</span>
      </div>
      <div className="title mb-20">
        <h1 className="h4">Something went wrong</h1>
      </div>
      <p className="text-secondary-700 mb-30 max-w-[500px] leading-150p">
        We couldn&apos;t load this page. Please try again or return to the homepage.
      </p>
      <div className="flex flex-wrap gap-12 justify-center">
        <button type="button" onClick={reset} className="btn btn-gold-simple cursor-pointer">
          Try again
        </button>
        <Link href="/" className="btn btn-gold-simple">
          Go home
        </Link>
      </div>
      {error.digest && (
        <p className="mt-30 text-12 text-grey-400 font-poppins">Error ID: {error.digest}</p>
      )}
    </main>
  )
}
