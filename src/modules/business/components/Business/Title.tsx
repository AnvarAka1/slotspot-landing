import React from 'react'
import { createStyles, Title as ManTitle, TitleProps } from '@mantine/core'

type Props = {
  children: React.ReactNode | string
} & TitleProps

const useStyles = createStyles((theme) => ({
  title: {
    [theme.fn.smallerThan('lg')]: {
      fontSize: 'xx-large'
    },
    [theme.fn.smallerThan('sm')]: {
      fontSize: 'x-large'
    }
  }
}))

function Title({ children, ...props }: Props) {
  const { classes } = useStyles()

  return (
    <ManTitle size="xxx-large" className={classes.title} {...props}>
      {children}
    </ManTitle>
  )
}

export default Title
