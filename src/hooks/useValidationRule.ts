import useYup from "./useYup"

export default function useValidationRule() {
  const yup = useYup()
  return {
    login: {
      username: yup.string().required('ユーザー名を入力してください'),
      password: yup.string().required('パスワードを入力してください'),
    },
  }
}
