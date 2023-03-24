import { Carousel } from '@mantine/carousel'
import { Card, Container, createStyles, Text } from '@mantine/core'
import { SpotCard } from '../Card/SpotCard'
import { companyData } from '@src/constants/constants'
import { CompanyResDto } from '@src/dto/company'
import { generatePath } from 'react-router-dom'
import * as ROUTES from '@src/constants/routes'


const useStyles = createStyles(() => ({
  container: {
    gap: 24
  }
}))


type Props = {
  companies: CompanyResDto[]
}

export function SpotCarousel({ companies }: Props) {
  const { classes } = useStyles()

  return (
    <Container size={1200}>
      <Card mt={24} p={0} radius={12}>
        <Text size={24} weight={590} component="p">
          Выберите специалиста
        </Text>
        <Card.Section>
          <Carousel
            classNames={{ container: classes.container }}
            slideSize="33%"
            align="start"
            mt={24}
          >
            {companies.map((item) => (
              <Carousel.Slide key={item.title} p={0}>
                <SpotCard
                  company={item}
                  path={generatePath(ROUTES.COMPANY_DETAIL_PATH, { id: item.id.toString() })}
                />
              </Carousel.Slide>
            ))}
          </Carousel>
        </Card.Section>
      </Card>
    </Container>
  )
}
