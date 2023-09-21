interface PWAMetaProps {
  applicationName: string
  description: string
  themeColor: string
}

export const PWAMeta: React.FC<PWAMetaProps> = ({
  applicationName,
  description,
  themeColor
}) => {
  return (
    <>
      <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
      <meta
        name='viewport'
        content='minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no'
      />
      <meta name='application-name' content={applicationName} />
      <meta name='apple-mobile-web-app-capable' content='yes' />
      <meta name='apple-mobile-web-app-status-bar-style' content='default' />
      <meta name='apple-mobile-web-app-title' content={applicationName} />
      <meta name='format-detection' content='telephone=no' />
      <meta name='mobile-web-app-capable' content='yes' />
      <meta name='theme-color' content={themeColor} />

      <link rel='apple-touch-icon' href='/assets/icons/icon-180x180.png' />
      <link
        rel='icon'
        type='image/png'
        sizes='32x32'
        href='/assets/icons/icon-favicon-32x32.png'
      />
      <link
        rel='icon'
        type='image/png'
        sizes='16x16'
        href='/assets/icons/icon-favicon-16x16.png'
      />
      <link rel='shortcut icon' href='/favicon.ico' />
    </>
  )
}
