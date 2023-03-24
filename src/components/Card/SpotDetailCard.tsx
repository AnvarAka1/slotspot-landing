import { Avatar, Badge, Button, Card, createStyles, Divider, Group, Image, List, Text } from '@mantine/core'
import starIcon from '../../assets/icons/star-icon.svg'
import callIcon from '../../assets/icons/call-icon.svg'
import locationMarkerIcon from '../../assets/icons/location-marker.svg'
import { CompanyResDto } from '@src/dto/company'

const useStyles = createStyles((theme) => ({
  card: {
    position: 'relative'
  },

  rating: {
    position: 'absolute',
    pointerEvents: 'none',
    backgroundColor: '#FFFFFF',
    left: '37%',
    top: '25%',
    border: '1px solid rgba(15, 15, 20, 0.1)'
  },
  starIcon: {
    width: 24,
    height: 24
  },
  address: {
    color: '#01001A',
    opacity: '0.5'
  },

  list: {
    listStyleType: 'none',
    fontSize: 14
  },
  listTitle: {
    fontWeight: 700
  },
  locationButton: {
    background: 'rgba(65, 71, 213, 0.1)'
  }
}))

type Props = {
  company: CompanyResDto
}

export function SpotDetailCard({ company }: Props) {
  const {image, rating, address, logo, description, title } = company
  const { classes, cx } = useStyles()

  return (
    <Card withBorder radius={12} className={classes.card}>
      <Card.Section pt={32} pl={16} pr={16}>
        <Group position="center">
          <Avatar
            src={logo}
            size={160}
            radius={100}
          />
          <Badge
            className={classes.rating}
            size="lg"
            radius={30}
            color="light"
            rightSection={<Image width={24} height={24} className={classes.starIcon} src={starIcon}/>}
          >
            {rating.ratingCount}
          </Badge>
        </Group>

        <Text align="center" size={24} mt={12} weight={700} component="p">
          {title}
        </Text>

        <Text align="center" size={14} className={classes.address} component="p">
          {address}
        </Text>
      </Card.Section>

      <Divider my="sm"/>

      <Text size="md" align="center">
        {description}
      </Text>

      <Divider my="sm"/>

      <Group position="apart">
        <List className={cx(classes.list, classes.listTitle)} spacing={12}>
          <List.Item>Понедельник</List.Item>
          <List.Item>Вторник</List.Item>
          <List.Item>Среда</List.Item>
          <List.Item>Четверг</List.Item>
          <List.Item>Пятница</List.Item>
          <List.Item>Суббота</List.Item>
          <List.Item>Суббота</List.Item>
          <List.Item>Воскресенье</List.Item>
        </List>
        <List className={classes.list} spacing={12}>
          <List.Item>с 10:00 до 22:00</List.Item>
          <List.Item>с 10:00 до 22:00</List.Item>
          <List.Item>с 10:00 до 22:00</List.Item>
          <List.Item>с 10:00 до 22:00</List.Item>
          <List.Item>с 10:00 до 22:00</List.Item>
          <List.Item>с 10:00 до 22:00</List.Item>
          <List.Item>с 10:00 до 22:00</List.Item>
          <List.Item>с 10:00 до 22:00</List.Item>
        </List>
      </Group>

      <Divider m={12}/>

      <Group position="apart" mt={12}>
        <Button
          leftIcon={<Image width={24} height={24} src={callIcon}/>}
          radius={12}
          color="dark"
        >
          Позвонить
        </Button>
        <Button
          className={classes.locationButton}
          color="dark"
          radius={12}
        >
          <Image width={24} height={24} src={locationMarkerIcon}/>
        </Button>
      </Group>
    </Card>
  )
}
