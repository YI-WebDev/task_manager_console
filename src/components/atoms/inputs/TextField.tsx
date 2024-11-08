import MuiTextField from '@mui/material/TextField'
import { UseFormRegisterReturn } from 'react-hook-form'

export type TextFieldProps = {
  label?: string
  type?: 'text' | 'email' | 'password'
  placeholder?: string
  register?: UseFormRegisterReturn
  error?: string
  fullWidth?: boolean
}

export default function TextField({
  label,
  type = 'text',
  placeholder,
  register,
  error,
  fullWidth = true,
}: TextFieldProps) {
  return (
    <MuiTextField
      label={label}
      type={type}
      placeholder={placeholder}
      variant="outlined"
      fullWidth={fullWidth}
      {...register}
      error={error !== undefined}
      helperText={error ?? ''}
      size="small"
    />
  )
}
