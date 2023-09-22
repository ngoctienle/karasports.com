const baseUrl = (): string => {
  if (typeof window !== 'undefined') {
    return window.location.origin
  }

  return 'http:localhost:3000'
}

const DEFAULT_PATHS = {
  app: {
    root: '/'
  },
  auth: {
    register: '/auth/register',
    login: '/auth/login'
  }
}

export default Object.freeze({
  paths: {
    en: DEFAULT_PATHS,
    vi: {
      ...DEFAULT_PATHS
    }
  },
  utils: {
    generateUrl: baseUrl
  }
})
