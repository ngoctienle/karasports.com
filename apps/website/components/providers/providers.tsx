'use client'

import { useMemo } from 'react'
import {
  QueryClient,
  QueryClientProvider,
  ReactQueryDevtools
} from '@karasports/sdk/query'
import { appConfigs } from '@root/common/configs'
import { ModalProvider } from '@root/components/modal'

interface ProvidersProps {
  children: React.ReactNode
}

export function Providers({ children }: ProvidersProps): JSX.Element {
  const client = useMemo(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: appConfigs.caching.staleTime,
            cacheTime: appConfigs.caching.cacheTime
          }
        }
      }),
    []
  )

  return (
    <ModalProvider>
      <QueryClientProvider client={client}>
        {children}
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </ModalProvider>
  )
}
