import React from 'react'
import { Container, Grid } from '@mantine/core'
import { SpotCard } from '@src/components/Card/SpotCard'
import { Layout } from '@shared/layout'
import { useCompanyList } from '../services'
import { emptyArray } from '@src/constants/empty'

function CompanyListContainer() {
  const { data, isLoading } = useCompanyList()
  const results = data?.data.results || emptyArray

  return (
    <Layout>
      <Container size={1200} my={24}>
        <Grid>
          {results.map((company) => (
            <Grid.Col xs={4} mt={24}>
              <SpotCard company={company}/>
            </Grid.Col>
          ))}
        </Grid>
      </Container>
    </Layout>
  )
}

export default CompanyListContainer
