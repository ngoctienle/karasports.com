import { QueryClient } from '@karasports/sdk/query'
import { cache } from 'react'

export const getQueryClient = cache(() => new QueryClient())
