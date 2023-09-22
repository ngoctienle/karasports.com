import { ColorSchemeScript, ThemeProvider } from '@karasports/ui'
import { Inter } from 'next/font/google'
import { Providers } from '@root/components/providers'

const inter = Inter({ subsets: ['latin'] })

interface AppLayoutProps {
  children: React.ReactNode
}

export default function AppLayout({ children }: AppLayoutProps): JSX.Element {
  return (
    <html lang='en'>
      <head>
        <ColorSchemeScript />
      </head>
      <body className={inter.className}>
        <ThemeProvider>
          <Providers>{children}</Providers>
        </ThemeProvider>
      </body>
    </html>
  )
}
