import { ColorSchemeScript, ThemeProvider } from '@karasports/ui'
import { Inter } from 'next/font/google'
import { notFound } from 'next/navigation'
import { type AbstractIntlMessages, NextIntlClientProvider } from 'next-intl'
import { Providers } from '@root/components/providers'
import type { LanguageType } from '@root/common/configs/app-config'

const inter = Inter({ subsets: ['latin'] })

interface AppLayoutProps {
  children: React.ReactNode
  params: {
    locale: LanguageType
  }
}

export default async function AppLayout({
  children,
  params
}: AppLayoutProps): Promise<JSX.Element> {
  let message: AbstractIntlMessages
  try {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access -- Safe to use
    message = (await import(`../../message/${params.locale}.json`)).default
  } catch (err) {
    notFound()
  }

  return (
    <html lang={params.locale}>
      <head>
        <ColorSchemeScript />
      </head>
      <body className={inter.className}>
        <NextIntlClientProvider locale={params.locale} messages={message}>
          <ThemeProvider>
            <Providers>{children}</Providers>
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
