import * as yup from 'yup'

export default function useYup() {
  yup.setLocale({
    mixed: {
      required: 'このフィールドは必須です',
    },
    string: {
      email: '有効なメールアドレスを入力してください',
      min: ({ min }) => `${min}文字以上で入力してください`,
      max: ({ max }) => `${max}文字以内で入力してください`,
    },
  })
  return yup
}
