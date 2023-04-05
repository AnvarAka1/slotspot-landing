import React, { MouseEventHandler } from 'react'
import { Button, ButtonProps, createStyles } from '@mantine/core'

type Props = {
  onClick: MouseEventHandler
} & ButtonProps


const useStyles = createStyles(theme => ({
  root: {
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
      color: '#565d62'
    },
    [theme.fn.smallerThan('md')]: {
      padding: '0 25px',
      height: '48px',
      fontSize: '14px'
    },
    [theme.fn.smallerThan('sm')]: {
      padding: '0 16px',
      height: '38px',
      fontSize: '12px'
    },
  }
}))

function WhiteButton({ onClick, ...props }: Props) {
  const { classes } = useStyles()

  return (
    <Button
      {...props}
      onClick={onClick}
      className={classes.root}
    />
  )
}

export default WhiteButton
