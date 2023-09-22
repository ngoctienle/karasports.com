import appRouters from './app-routers'

type EnviromentType = 'development' | 'production'
export type LanguageType = 'en' | 'vi'

interface AppConfig {
  env: EnviromentType
  baseUrl: string
  publicRoutes: string[]
  caching: {
    cacheTime: number
    staleTime: number
  }
}

export default Object.freeze({
  env: process.env.NODE_ENV as EnviromentType,
  baseUrl: appRouters.utils.generateUrl(),
  publicRoutes: [
    appRouters.paths.en.app.root,
    appRouters.paths.en.auth.login,
    appRouters.paths.en.auth.register
  ],
  caching: {
    cacheTime: 10 * (60 * 1000), //10 Mins
    staleTime: 5 * (60 * 1000) //5 Mins
  }
}) satisfies AppConfig
