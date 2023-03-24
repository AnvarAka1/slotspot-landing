import { Container, createStyles, Grid, useMantineTheme } from '@mantine/core'
import { SpotDetailCard } from '@src/components/Card/SpotDetailCard'
import { ImageCard } from '@src/components/Card/ImageCard'
import { AvatarCarousel } from '@src/components/Carousel/AvatarCarousel'
import { ServiceCard } from '@src/components/Card/ServiceCard'
import { dateTime, mockData } from '@src/constants/constants'
import { useMediaQuery } from '@mantine/hooks'
import { SpotDetailCardMobile } from '@src/components/Card/SpotDetailCardMobile'
import { SpotDateTimeMobileCard } from '@src/components/Card/SpotDateTimeMobileCard'
import { AvatarCarouselMobile } from '@src/components/Carousel/AvatarCarouselMobile'
import { ServiceCardMobile } from '@src/components/Card/ServiceCardMobile'
import { Layout } from '@shared/layout'
import { useCompanyDetail } from '@src/modules/company/services'
import { useParams } from 'react-router-dom'

const useStyles = createStyles((theme) => ({
  container: {
    background: theme.colors.light[2]
  }
}))


function CompanyDetailContainer() {
  const params = useParams<{ id: string }>()
  const id = params.id || ''

  const { data, isLoading } = useCompanyDetail(parseInt(id))

  const theme = useMantineTheme()
  const { classes } = useStyles()
  const companyData = data?.data

  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.xs}px)`)

  return (
    <Layout>
      {!isLoading && companyData ? (
        <div className={classes.container}>
          {mobile ?
            <Container>
              <Grid>
                <Grid.Col sm={12}>
                  <SpotDetailCardMobile
                    title={companyData.title || ''}
                    description={companyData.description}
                    image={companyData.image}
                    logo={companyData.logo}
                    rating={companyData.rating}
                  />
                  <SpotDateTimeMobileCard
                    values={dateTime.dates}
                    cardTitle="Выберите дату"
                  />
                  <SpotDateTimeMobileCard
                    values={dateTime.times}
                    cardTitle="Выберите время"
                  />
                  <AvatarCarouselMobile/>
                  <ServiceCardMobile
                    image={mockData.image}
                    title="Мужская стрижка (VIP кабинка)"
                    description="Классическая или современная стрижка. Услуга включает в
                            себя мытьё головы до и после стрижки шампунем American Crew, массаж головы плеч и рук,
                            укладка с примирением высококачественной мужской косметики , также консультация и рекомендации по уходу за волосами"
                    price="300 000 сум"

                  />
                </Grid.Col>
              </Grid>
            </Container> :
            <Container my="xl" size={1200}>
              <Grid gutter={4} gutterXs="md" gutterMd="xl" gutterXl={24}>
                <Grid.Col lg={3} sm={6}>
                  <SpotDetailCard company={companyData} />
                </Grid.Col>
                <Grid.Col lg={9} sm={6}>
                  <ImageCard image={companyData.image}/>
                  <AvatarCarousel/>
                  <ServiceCard
                    image={companyData.image}
                    title="Мужская стрижка (VIP кабинка)"
                    description="Классическая или современная стрижка. Услуга включает в
                        себя мытьё головы до и после стрижки шампунем American Crew, массаж головы плеч и рук,
                        укладка с примирением высококачественной мужской косметики , также консультация и рекомендации по уходу за волосами"
                    price="300 000 сум"
                  />
                </Grid.Col>
              </Grid>
            </Container>
          }
        </div>
      ) : null}
    </Layout>
  )
}

export default CompanyDetailContainer
