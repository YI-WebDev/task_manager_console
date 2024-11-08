import { Control, DeepPartial, UnpackNestedValue, useForm as useReactHookForm, useWatch } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { AnyObjectSchema } from 'yup'

export default function useForm<T>(schema: AnyObjectSchema, defaultValues?: UnpackNestedValue<DeepPartial<T>>) {
  const {
    handleSubmit,
    register,
    unregister,
    control,
    formState: { errors },
    reset,
    setValue,
    watch,
    getValues,
    resetField,
    trigger,
    formState,
    getFieldState,
    setError,
    clearErrors,
    setFocus,
  } = useReactHookForm<T>({ resolver: yupResolver(schema), mode: 'onChange', defaultValues })

  return {
    handleSubmit,
    unregister,
    register,
    control: control as unknown as Control,
    errors,
    reset,
    setValue,
    watch,
    getValues,
    resetField,
    trigger,
    formState,
    getFieldState,
    setError,
    clearErrors,
    setFocus,
    useWatch,
  }
}
