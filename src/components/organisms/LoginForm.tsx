import { useDispatch } from "react-redux";
import { useForm, SubmitHandler } from "react-hook-form";
import Button from "@mui/material/Button";
import { AuthActions } from "../../store/auth";
import FormItem from "../molecules/inputs/FormItem";
import Form from "../atoms/inputs/Form";
import UsernameField from "../molecules/inputs/UsernameField";
import PasswordField from "../molecules/inputs/PasswordField";

type LoginFormValues = {
  username: string;
  password: string;
};

export default function LoginForm() {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>();

  const onSubmit: SubmitHandler<LoginFormValues> = (data) => {
    dispatch(
      AuthActions.login({
        username: data.username,
        password: data.password,
      })
    );
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormItem label="ユーザーID" required>
        <UsernameField
          register={register("username", {
            required: "ユーザーIDを入力してください",
          })}
          error={errors.username?.message}
        />
      </FormItem>
      <FormItem label="パスワード" required>
        <PasswordField
          register={register("password", {
            required: "パスワードを入力してください",
          })}
          error={errors.password?.message}
        />
      </FormItem>
      <Button type="submit" variant="contained" color="primary" fullWidth>
        ログイン
      </Button>
    </Form>
  );
}
