import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span>PL</span>,
  project: {
    link: 'https://github.com/ULL-ESIT-PL-2324/pl-nextra',
  },
  chat: {
    link: 'https://meet.google.com/eha-yfij-zmo',
    icon: "💬"
  },
  docsRepositoryBase: 'https://github.com/ULL-ESIT-PL-2324/pl-nextra/blob/main/',
  footer: {
    text: 'Notes for the Computer Science degree ULL 23/24 course on Programming Languages',
  }
}

export default config
