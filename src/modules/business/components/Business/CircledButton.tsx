import React, { MouseEventHandler } from 'react'
import { Button, ButtonProps } from '@mantine/core'

type Props = {
  onClick: MouseEventHandler
} & ButtonProps

function CircledButton({ onClick, ...props }: Props) {
  return (
    <Button
      {...props}
      onClick={onClick}
      sx={{
        fontSize: '24px',
        padding: '0 24px',
        height: '64px',
        borderRadius: '60px',
        background: 'white',
        color: '#0D0D0D',
        border: '1px solid #0D0D0D',
        transition: '.25s ease all',
        '&:hover': {
          background: 'white',
          color: 'rgba(13,13,13,0.76)',
        }
    }}
    />
  )
}

export default CircledButton
