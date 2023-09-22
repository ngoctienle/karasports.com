import { ApiBuilder } from '@karasports/sdk/api'

const apiBuilder = new ApiBuilder()
  .setBaseUrl('https://api.karasports.dev')
  .build()

export const httpClient = apiBuilder
