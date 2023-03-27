import { Card, createStyles, Divider, Group, Image, Text } from '@mantine/core'

const useStyles = createStyles(() => ({
  card: {
    maxWidth: 515
  },

  title: {
    fontSize: 18,
    fontWeight: 510
  },

  description: {
    fontSize: 14,
    color: '#1E2B58',
    opacity: 0.5
  },

  price: {
    color: '#4CAF50',
    fontSize: 24,
    fontWeight: 700
  }
}))

interface CardWithStatsProps {
  image: string;
  title: string;
  description: string;
  price: number
}

export function ServiceCard({ image, title, description, price }: CardWithStatsProps) {
  const { classes } = useStyles()

  return (
    <Card withBorder mt={24} p={12}>
      <Group m={12} position="apart" spacing={24} align="center">
        <Image src={image} width={100} height={100} radius={12}/>
        <Card.Section className={classes.card}>
          <Text className={classes.title}>{title}</Text>
          <Text className={classes.description}>{description}</Text>
        </Card.Section>
        <Text className={classes.price}>{price}</Text>
      </Group>
      <Divider/>
    </Card>
  )
}
