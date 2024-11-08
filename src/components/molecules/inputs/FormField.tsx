import { Box, Typography } from "@mui/material";
import TextField, { TextFieldProps } from "../../atoms/inputs/TextField";

type FormFieldProps = TextFieldProps & {
  label: string;
  required?: boolean;
};

export default function FormField({
  label,
  required,
  ...props
}: FormFieldProps) {
  return (
    <Box sx={{ mb: 2 }}>
      <Typography variant="subtitle2" sx={{ mb: 1 }}>
        {label} {required && <span style={{ color: "red" }}>*</span>}
      </Typography>
      <TextField {...props} />
    </Box>
  );
}
