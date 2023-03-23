import { Card, createStyles, Group, Image, Text, Title } from '@mantine/core'
import { CompanyResponseDto } from '@src/modules/company/dto'

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
  company: CompanyResponseDto
}

export function SpotCard({ company }: Props) {
  const { image, title } = company
  const { classes, cx } = useStyles()

  return (
    <Card
      className={classes.card}
      radius={12}
      p={0}
    >
      <Image pos="relative" src={image} radius={12} height={200}/>

      <Title size={24}>
        {title}
      </Title>

      <Group>
        <Text>
          4.9
        </Text>
        <Text>
          17 Matbuotchilar ko'chasi, Tashkent 100047
        </Text>
      </Group>
    </Card>
  )
}
