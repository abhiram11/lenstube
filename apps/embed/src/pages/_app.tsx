import '../styles/globals.css'
import '@vime/core/themes/default.css'

import { MIXPANEL_API_HOST, MIXPANEL_TOKEN } from '@utils/constants'
import mixpanel from 'mixpanel-browser'
import type { AppProps } from 'next/app'
import React from 'react'

function MyApp({ Component, pageProps }: AppProps) {
  if (MIXPANEL_TOKEN) {
    mixpanel.init(MIXPANEL_TOKEN, {
      api_host: MIXPANEL_API_HOST
    })
  }
  return <Component {...pageProps} />
}

export default MyApp