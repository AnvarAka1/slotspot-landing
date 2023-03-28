import React, { MouseEventHandler } from 'react'
import { Button, ButtonProps } from '@mantine/core'

type Props = {
  onClick: MouseEventHandler
} & ButtonProps


function WhiteButton({ onClick, ...props }: Props) {
  return (
    <Button
      {...props}
      onClick={onClick}
      sx={{
        border: '1px solid #45494B',
        borderRadius: '8px',
        background: 'white',
        padding: '0 40px',
        height: '68px',
        fontSize: '18px',
        color: '#45494B',
        transition: '.25s ease all',
        '&:hover': {
          background: 'white',
          color: '#565d62',
        }
      }}
    />
  )
}

export default WhiteButton
