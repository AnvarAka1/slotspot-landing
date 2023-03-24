import React from 'react'
import { Container, Grid } from '@mantine/core'
import { SpotCard } from '@src/components/Card/SpotCard'
import { Layout } from '@shared/layout'
import { useCompanyList } from '../services'
import { emptyArray } from '@src/constants/empty'
import * as ROUTES from '@src/constants/routes'
import { generatePath } from 'react-router-dom'

function CompanyListContainer() {
  const { data, isLoading } = useCompanyList()
  const results = data?.data.results || emptyArray

  return (
    <Layout>
      <Container size={1200} my={24}>
        <Grid>
          {results.map((company) => (
            <Grid.Col key={company.id} xs={4} mt={24}>
              <SpotCard company={company} path={generatePath(ROUTES.COMPANY_DETAIL_PATH, {id: company.id.toString()})}/>
            </Grid.Col>
          ))}
        </Grid>
      </Container>
    </Layout>
  )
}

export default CompanyListContainer
