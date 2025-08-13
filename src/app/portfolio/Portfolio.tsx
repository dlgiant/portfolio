'use client'

import { useEffect, useState } from 'react'

export default function PortfolioPage() {
  const [storybookUrl, setStorybookUrl] = useState<string>('')

  useEffect(() => {
    // In development, use local Storybook server
    // In production, use your deployed Storybook URL
    const url =
      process.env.NODE_ENV === 'development'
        ? 'http://localhost:6006'
        : 'https://your-storybook-url.netlify.app'

    setStorybookUrl(url)
  }, [])

  return (
    <div className="h-screen w-full">
      {storybookUrl && (
        <iframe
          src={storybookUrl}
          className="w-full h-full border-0"
          title="Storybook Portfolio"
          sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
        />
      )}
    </div>
  )
}
