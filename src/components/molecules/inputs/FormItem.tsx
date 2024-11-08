import { Box } from '@mui/material'
import { styled } from '@mui/material/styles'
import Label from '../../atoms/display/Label'

const FlexColumn = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
})

const FlexRow = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  gap: '4px',
})

type FormItemProps = {
  label: string
  required?: boolean
  children: React.ReactNode
  width?: number | string
}

export default function FormItem({
  label,
  required,
  children,
  width = '100%',
}: FormItemProps) {
  return (
    <FlexColumn>
      <FlexRow sx={{ alignItems: 'flex-end' }}>
        <Label text={label}/>
        {required && <Label text="*" color="error" variant="caption" />}
      </FlexRow>
      {children}
    </FlexColumn>
  )
}
