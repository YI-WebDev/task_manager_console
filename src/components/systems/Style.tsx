import { CssBaseline, ThemeProvider } from '@mui/material'
import { ReactElement } from 'react'
import theme from '../../styles/theme'

type StyleProps = {
  children: ReactElement
}

export default function Style({ children }: StyleProps) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  )
}
