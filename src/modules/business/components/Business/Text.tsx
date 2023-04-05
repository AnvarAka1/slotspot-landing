import React from 'react'
import { createStyles, Text as ManText } from '@mantine/core'

type Props = {
  children: React.ReactNode | string
}

const useStyles = createStyles((theme) => ({
  text: {
    fontWeight: 'bold',
    fontSize: '24px',
    [theme.fn.smallerThan('md')]: {
      fontSize: '16px'
    }
  }
}))

function Text({ children }: Props) {
  const { classes } = useStyles()

  return (
    <ManText className={classes.text}>
      {children}
    </ManText>
  )
}

export default Text
