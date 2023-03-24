import React from 'react'
import { Layout } from '@shared/layout'
import Business from '../components/Business'

type Props = Record<string, unknown>

function BusinessContainer(props: Props) {
  return (
    <Layout>
      <Business/>
    </Layout>
  )
}

export default BusinessContainer
