import withBundleAnalyzer from '@next/bundle-analyzer'
import withPlugins from 'next-compose-plugins'

/** @type {import("next").NextConfig} */
const config = withPlugins([[withBundleAnalyzer({ enabled: false })]], {
  reactStrictMode: true,
  output: 'standalone',
  transpilePackages: ['@karasports/ui']
})

export default config
