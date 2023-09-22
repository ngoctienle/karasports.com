'use client'

import { useTranslations } from 'next-intl'

export default function Page(): JSX.Element {
  const t = useTranslations()

  return <div className='text-red-500'>{t('hello')}</div>
}
