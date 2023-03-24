import { Card, createStyles, Group, Image, Text, Title } from '@mantine/core'
import { CompanyResDto } from '@src/dto/company'
import { generatePath, Link } from 'react-router-dom'

const useStyles = createStyles((theme) => ({
  card: {
    position: 'relative',
    maxWidth: 384
  },
  icon: {
    position: 'absolute',
    zIndex: 1,
    background: 'red',
    top: 0
  }
}))

type Props = {
  company: CompanyResDto
  path: string
}

export function SpotCard({ company, path }: Props) {
  const { image, title, rating, address } = company
  const { classes, cx } = useStyles()

  return (
    <Card
      className={classes.card}
      radius={12}
      p={0}
    >
      <Link to={path}>
        <Image pos="relative" src={image} radius={12} height={200}/>
      </Link>


      <Title size={24}>
        <Link to={path}>{title}</Link>
      </Title>

      <Group>
        <Text>{rating.ratingAvg}</Text>
        <Text>{address}</Text>
      </Group>
    </Card>
  )
}
