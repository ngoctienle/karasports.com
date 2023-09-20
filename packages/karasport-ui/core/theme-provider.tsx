'use client'

import '../styles/styles.css'
import '@mantine/core/styles.css'

import {
  MantineProvider,
  createTheme,
  type MantineColorsTuple
} from '@mantine/core'

const karaColors: MantineColorsTuple = [
  '#f3f3fe',
  '#e4e6ed',
  '#c8cad3',
  '#a9adb9',
  '#9093a4',
  '#808496',
  '#767c91',
  '#656a7e',
  '#585e72',
  '#4a5167'
]

const karaThemes = createTheme({
  colors: {
    karaColors
  }
})

interface ThemeProviderProps {
  children: React.ReactNode
}

export function ThemeProvider({ children }: ThemeProviderProps): JSX.Element {
  return (
    <MantineProvider defaultColorScheme='light' theme={karaThemes}>
      {children}
    </MantineProvider>
  )
}
