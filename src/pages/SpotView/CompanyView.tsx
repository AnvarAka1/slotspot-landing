import { Container, createStyles, Grid, useMantineTheme } from '@mantine/core'
//TODO: primoy import qiluvring nastryka qilingan
import { SpotDetailCard } from 'components/Card/SpotDetailCard'
import { ImageCard } from 'components/Card/ImageCard'
import { AvatarCarousel } from 'components/Carousel/AvatarCarousel'
import { ServiceCard } from 'components/Card/ServiceCard'
import { dateTime, mockData } from '../../constants/constants'
import { useMediaQuery } from '@mantine/hooks'
import { useQuery } from '@tanstack/react-query'
import { SpotDetailCardMobile } from '../../components/Card/SpotDetailCardMobile'
import { SpotDateTimeMobileCard } from '../../components/Card/SpotDateTimeMobileCard'
import { AvatarCarouselMobile } from '../../components/Carousel/AvatarCarouselMobile'
import { ServiceCardMobile } from '../../components/Card/ServiceCardMobile'
import { getCompanyData } from '../../shared/api/exampleApi'


const useStyles = createStyles((theme) => ({
  container: {
    background: theme.colors.light[2]
  }
}))


export function CompanyView() {
  const { data, isLoading } = useQuery(['companyView'], getCompanyData)
  const theme = useMantineTheme()
  const { classes } = useStyles()
  const companyData = data?.data

  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.xs}px)`)

  return (
    !isLoading ? (
      <div className={classes.container}>
        {mobile ?
          <Container>
            <Grid>
              <Grid.Col sm={12}>
                <SpotDetailCardMobile
                  title={companyData.title}
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
                <SpotDetailCard
                  title={companyData.title}
                  description={companyData.description}
                  image={companyData.image}
                  logo={companyData.logo}
                  rating={companyData.rating}
                />
              </Grid.Col>
              <Grid.Col lg={9} sm={6}>
                <ImageCard image={mockData.image}/>
                <AvatarCarousel/>
                <ServiceCard
                  image={mockData.image}
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
    ) : null
  )
}
