import * as React from 'react'
import ReactPhoneInput, { PhoneInputProps } from 'react-phone-input-2'
import { createStyles, Text } from '@mantine/core'

export type ReactPhoneInputProps = {
  value: string
  invalid: boolean
  label?: string
  helperText?: string
} & PhoneInputProps

const useStyles = createStyles((theme) => ({
  root: {
    '& > .special-label': {
      display: 'inline-block',
      fontSize: '14px',
      fontWeight: 500,
      color: '#212529',
      wordBreak: 'break-word',
      cursor: 'default'
    }
  },
  input: {
    height: '36px',
    '-webkit-tap-highlight-color': 'transparent',
    lineHeight: '34px',
    appearance: 'none',
    resize: 'none',
    boxSizing: 'border-box',
    fontSize: '14px',
    width: '100%',
    color: '#000',
    display: 'block',
    textAlign: 'left',
    minHeight: '36px',
    paddingLeft: '12px',
    paddingRight: '12px',
    borderRadius: '4px',
    border: '1px solid #ced4da',
    backgroundColor: '#fff',
    transition: 'border-color 100ms ease',
    '&:focus': {
      outline: 'none',
      borderColor: '#228be6'
    }
  }
}))

function PhoneInput({ value, label, invalid, helperText, ...props }: ReactPhoneInputProps) {
  const { classes } = useStyles()

  return (
    <>
      <ReactPhoneInput
        containerClass={classes.root}
        inputClass={classes.input}
        inputProps={{
          required: true
        }}
        specialLabel={label}
        masks={{ uz: '(..) ...-..-..' }}
        placeholder="+998 (91) 234-56-78"
        disableDropdown={true}
        value={value}
        isValid={!invalid}
        {...props}
      />
      {invalid && (
        <Text sx={{ color: 'error.main' }}>{helperText}</Text>
      )}
    </>
  )
}

export default PhoneInput
