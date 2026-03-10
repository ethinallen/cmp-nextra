import React from 'react'
import { useRouter } from 'next/router'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span>Critical Mass Princeton</span>,
  project: {
    link: 'https://github.com/ethinallen/cmp-nextra',
  },
  head: (
    <>
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="icon" href="/favicon.ico" />
      <link rel="manifest" href="/site.webmanifest" />
    </>
  ),
  useNextSeoProps() {
    const { asPath } = useRouter()
    if (asPath === '/') {
      return { title: 'Critical Mass Princeton' }
    }
    return { titleTemplate: '%s – Critical Mass Princeton' }
  },
  docsRepositoryBase: 'https://github.com/ethinallen/cmp-nextra',
  footer: {
    text: 'Critical Mass Princeton',
  },
}

export default config;