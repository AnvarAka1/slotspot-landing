import React from 'react'
import { Control, Controller, FieldValues, Path } from 'react-hook-form'
import AutocompleteField from './AutocompleteField'
import { emptyArray } from '@src/constants/empty'

type Props<T extends FieldValues> = {
  name: string
  placeholder: string
  api: string
  label: string
  control: Control<T>
}

function SearchField<T extends FieldValues = FieldValues>({ name, placeholder, label, api, control }: Props<T>) {
  return (
    <Controller
      name={name as Path<T>}
      control={control}
      render={({ field }) => (
        <AutocompleteField
          label={label}
          api={api}
          placeholder={placeholder}
          onValuesChange={field.onChange}
          values={field.value || emptyArray}
        />
      )}
    />
  )
}

export default SearchField
