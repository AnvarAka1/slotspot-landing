import { createStyles, Text, Card, Group, Image, Title } from '@mantine/core'
import { ICONS, COLOR_BY_CATEGORY, CategoryType } from '@src/constants/IconByNames'

const useStyles = createStyles((theme) => ({
  card: {
    color: theme.white,
    display: 'flex',
    alignItems: 'center',
    maxWidth: 280,
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
  }
}))

interface CategoryCardProps {
  title: string;
  type: keyof CategoryType;
}

export function CategoryCard({ title, type }: CategoryCardProps) {
  const { classes, cx } = useStyles()
  return (
    <Card withBorder radius={12} className={cx(classes.card, classes[COLOR_BY_CATEGORY[type] as keyof typeof classes])}>
      <Card.Section pl={24} pt={32} pb={32} pr={24}>
        <Group noWrap>
          <Image fit="contain" width={40} height={40} src={ICONS[type]}/>
          <Text size={24} weight={700}>{title}</Text>
        </Group>
      </Card.Section>
    </Card>
  )
}
