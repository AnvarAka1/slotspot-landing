import React from 'react'

type Props = {
  children: React.ReactNode
}

function BlankLayout({ children }: Props) {
  return (
    <>{children}</>
  )
}

export default BlankLayout
