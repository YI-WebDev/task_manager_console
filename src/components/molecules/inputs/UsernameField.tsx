import TextField, { TextFieldProps } from "../../atoms/inputs/TextField";

export default function UsernameField(props: TextFieldProps) {
  return <TextField type="text" {...props} />;
}
