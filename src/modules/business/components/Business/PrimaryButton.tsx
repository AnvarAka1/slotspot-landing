import React, { MouseEventHandler } from 'react'
import { Button, ButtonProps } from '@mantine/core'

type Props = {
  onClick?: MouseEventHandler
} & ButtonProps

function PrimaryButton({ onClick, ...props }: Props) {
  return (
    <Button
      {...props}
      onClick={onClick}
      sx={{
        border: '1px solid #0A0F16',
        borderRadius: '8px',
        background: '#0A0F16',
        padding: '0 40px',
        height: '68px',
        fontSize: '18px',
        color: '#fff',
        transition: '.25s ease all',
        '&:hover': {
          background: 'rgba(10,15,22,0.91)',
          color: '#fff'
        }
      }}
    />
  )
}

export default PrimaryButton
