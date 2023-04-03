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
    border: 'none',
    width: '100%',
    '& > .form-control': {
      border: 'none',
      borderBottom: 'rgba(0, 0, 0, 0.6) 1px solid',
      width: '100%',
      fontSize: '16px',
      padding: '8px 0px',
      '&:focus': {
        outline: 'none',
        borderBottomColor: theme.primaryColor,
        borderBottomWidth: '2px'
      },
      '&:hover': {
        outline: 'none'
      }
    },
    '& > .special-label': {
      color: 'rgba(0, 0, 0, 0.6)',
      fontSize: '12px'
    },
    '& .form-control.invalid-number': {
      borderBottomColor: theme.primaryColor,
      borderBottomWidth: '1.5px',
      '&:focus': {
        borderBottomWidth: '2px'
      }
    }
  }
}))

function PhoneInput({ value, label, invalid, helperText, ...props }: ReactPhoneInputProps) {
  const { classes } = useStyles()

  return (
    <>
      <ReactPhoneInput
        containerClass={classes.root}
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
