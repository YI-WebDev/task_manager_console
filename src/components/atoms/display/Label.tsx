import { TypographyVariant } from '@mui/material'
import MuiTypography from '@mui/material/Typography'
import { typographyVariant } from '@mui/system'

type WhiteSpace = 'normal' | 'nowrap' | 'pre' | 'pre-wrap'


type LabelProps = {
  variant?: TypographyVariant
  text: string | number
  color?: string
  whiteSpace?: WhiteSpace
}

export default function Label({ variant = 'body1', text, color, whiteSpace = 'normal' }: LabelProps) {
  return (
    <MuiTypography variant={variant} color={color} sx={{ whiteSpace }}>
      {text}
    </MuiTypography>
  )
}
