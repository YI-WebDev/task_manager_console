import { Box } from '@mui/material'

type FormProps = {
  onSubmit: React.FormEventHandler<HTMLFormElement>
  children: React.ReactNode
}

export default function Form({ onSubmit, children }: FormProps) {
  return (
    <Box component="form" onSubmit={onSubmit} noValidate>
      {children}
    </Box>
  )
}
