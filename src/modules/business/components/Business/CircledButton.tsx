import React, { MouseEventHandler } from 'react'
import { Box, createStyles, Text, TextProps } from '@mantine/core'


const useStyles = createStyles(theme => ({
  root: {
    display: 'inline-block',
    fontSize: '24px',
    padding: '0 24px',
    paddingTop: '10px',
    height: '64px',
    borderRadius: '60px',
    background: 'white',
    color: '#0D0D0D',
    border: '1px solid #0D0D0D',
    transition: '.25s ease all',
    '&:hover': {
      background: 'white',
      color: 'rgba(13,13,13,0.76)'
    },
    [theme.fn.smallerThan('md')]: {
      paddingTop: '4px',
      height: '48px',
      fontSize: '20px'
    },
    [theme.fn.smallerThan('sm')]: {
      height: '38px',
      fontSize: '16px'
    }
  }
}))

type Props = {
  onClick: MouseEventHandler
} & TextProps


function CircledButton({ onClick, ...props }: Props) {
  const { classes } = useStyles()

  return (
    <Box className={classes.root}>
      <Text
        {...props}
        onClick={onClick}
        sx={{
          verticalAlign: 'middle'
        }}
      />
    </Box>
  )
}

export default CircledButton
