import { Card, createStyles, Group, Image, Text } from '@mantine/core'
import { CategoryType, COLOR_BY_CATEGORY } from '@src/constants/IconByNames'

const useStyles = createStyles((theme) => ({
  card: {
    color: theme.white,
    display: 'flex',
    alignItems: 'center',
    width: 280,
    height: 120
  },
  cardViolet: {
    background: '#712FFF'
  },
  cardYellow: {
    background: '#E6B919'
  },
  cardGreen: {
    background: '#43C989'
  },
  cardBlue: {
    background: '#19B5E6'
  },
  text: {
    position: 'relative',
    zIndex: 3
  }
}))

interface CategoryCardProps {
  title: string;
  type: keyof CategoryType;
  icon: string
}

export function CategoryCard({ title, type, icon }: CategoryCardProps) {
  const { classes, cx } = useStyles()
  return (
    <Card withBorder radius={12} className={cx(classes.card, classes[COLOR_BY_CATEGORY[type] as keyof typeof classes])}>
      <Card.Section pl={24} pt={32} pb={32} pr={24}>
        <Group noWrap>
          <Image fit="contain" width={40} height={40} src={icon}/>
          <Text size={24} weight={700} className={classes.text}>{title}</Text>
        </Group>
      </Card.Section>
    </Card>
  )
}
