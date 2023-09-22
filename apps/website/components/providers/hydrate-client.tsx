'use client'

import React from 'react'
import { Hydrate as RQHydrate, type HydrateProps } from '@karasports/sdk/query'

export function HydrateClient(props: HydrateProps): JSX.Element {
  return <RQHydrate {...props} />
}
