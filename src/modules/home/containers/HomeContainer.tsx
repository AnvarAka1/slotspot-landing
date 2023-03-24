import React from 'react'
import { HomePageBanner } from '@src/components/Banner/HomePageBanner'
import { SearchAutocompleteInput } from '@src/components/Inputs/SearchInput'
import { Container, Grid } from '@mantine/core'
import { SpotCarousel } from '@src/components/Carousel/SpotCarousel'
import { Faq } from '@src/components/Accordion/Faq'
import Categories from '@src/components/Card/Categories'
import TelegramContact from '@src/components/Banner/TelegramContact'
import { Layout } from '@shared/layout'
import { useCompanyList } from '@src/modules/home/services'
import { emptyArray } from '@src/constants/empty'

function HomeContainer() {
  const { data, isLoading } = useCompanyList()

  return (
    <Layout>
      <Container fluid p={0}>
        <Grid>
          <Grid.Col xs={12} p={0}>
            <HomePageBanner/>
            <SearchAutocompleteInput/>

            <Grid.Col p={0} xs={12} mt={24}>
              <Categories/>
            </Grid.Col>

            <Grid.Col p={0} xs={12} mt={24}>
              <SpotCarousel companies={data?.data.results || emptyArray}/>
            </Grid.Col>

            <Grid.Col p={0} xs={12} mt={24}>
              <Faq/>
            </Grid.Col>

            <Grid.Col p={0} xs={12} mt={24}>
              <TelegramContact/>
            </Grid.Col>

          </Grid.Col>
        </Grid>
      </Container>
    </Layout>
  )
}

export default HomeContainer