declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: 'develop' | 'production'
      ANALYZE: true | false
    }
  }
}
