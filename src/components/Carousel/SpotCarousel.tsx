import { Carousel } from '@mantine/carousel'
import { Card, Container, createStyles, Text } from '@mantine/core'
import { SpotCard } from '../Card/SpotCard'
import { companyData } from '@src/constants/constants'

const useStyles = createStyles(() => ({
  container: {
    gap: 24
  }
}))


export function SpotCarousel() {
  const { classes } = useStyles()
  const slides = companyData.map((item) => (
    <Carousel.Slide key={item.title} p={0}>
      <SpotCard company={item}/>
    </Carousel.Slide>
  ))

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
            {slides}
          </Carousel>
        </Card.Section>
      </Card>
    </Container>
  )
}
