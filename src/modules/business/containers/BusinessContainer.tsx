import React from 'react'
import { Layout } from '@shared/layout'
import Business from '../components/Business'
import { useApplicationSend } from '@src/modules/business/services'
import { ApplicationReqDto } from '@src/modules/business/dto'

type Props = Record<string, unknown>

function BusinessContainer(props: Props) {
  const { mutateAsync } = useApplicationSend()

  const handleApplicationSend = async (values: ApplicationReqDto) => {
    await mutateAsync(values)
  }

  return (
    <Layout>
      <Business onApplicationSend={handleApplicationSend}/>
    </Layout>
  )
}

export default BusinessContainer
