import * as React from 'react'
import { Control, Controller, FieldValues, Path } from 'react-hook-form'

import PhoneInput, { ReactPhoneInputProps } from './PhoneInput'

type Props<T extends FieldValues> = {
  name?: string
  control: Control<T>
} & Partial<ReactPhoneInputProps>

function PhoneField<T extends FieldValues>({ name = 'phone', control, ...props }: Props<T>) {
  return (
    <Controller
      name={name as Path<T>}
      control={control}
      render={({ field, fieldState }) => (
        <PhoneInput
          label="Номер телефона"
          value={field.value}
          onChange={field.onChange}
          invalid={Boolean(fieldState.error)}
          helperText={fieldState.error?.message}
          {...props}
        />
      )}
    />
  )
}

export default PhoneField
