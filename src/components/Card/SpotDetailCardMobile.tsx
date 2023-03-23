import {
  Avatar,
  Badge,
  Card,
  List,
  createStyles,
  Group,
  Divider,
  Text,
  Image,
  Button,
  useMantineTheme
} from '@mantine/core'
import starIcon from '../../assets/icons/star-icon.svg'
import locationIcon from '../../assets/icons/location-current 1.svg'
import phoneIcon from '../../assets/icons/phone-icon.svg'

const useStyles = createStyles((theme) => ({
  rating: {
    color: theme.colors.dark[1],
    opacity: 0.5
  },
  image: {
    marginRight: 0,
    margin: 'auto'
  },
  title: {
    display: 'block'
  },
  address: {
    color: theme.colors.dark[0],
    opacity: '0.5'
  },
  ctaPhone: {
    background: 'rgba(67, 201, 137, 0.12)',
    color: '#43C989'
  }
}))

interface SpotDetailCardMobileProps {
  image: string;
  logo: string;
  title: string;
  description: string;
  rating: {
    rating_avg: number;
    rating_count: number
  };
}

export function SpotDetailCardMobile({
                                       className,
                                       image,
                                       logo,
                                       title,
                                       description,
                                       rating,
                                       ...others
                                     }: SpotDetailCardMobileProps & Omit<React.ComponentPropsWithoutRef<'div'>, keyof SpotDetailCardMobileProps>) {
  const { classes, cx } = useStyles()

  return (
    <Card withBorder radius={12} className={className} {...others}>
      <Card.Section pt={32} pl={16} pr={16}>
        <Group>
          <Avatar
            src={image}
            size={60}
            radius={100}
          />
          <div>
            <Text align="center" size={16} className={classes.title} weight={700} component="p">
              {title}
            </Text>
            <Group spacing={10} align="center">
              <Image width={24} height={24} src={starIcon}/>
              <Group spacing={12}>
                <Text className={classes.rating} align="center" size={12} weight={400} component="p">
                  {rating.rating_count}
                </Text>
                <Divider orientation="vertical"/>

                <Text className={classes.rating} align="center" size={12} weight={400} component="p">
                  89 osenok
                </Text>
              </Group>
            </Group>
          </div>
        </Group>


        <Text align="center" mt={8} size={14} className={classes.address} component="p">
          Адрес: 17 Matbuotchilar ko'chasi, Tashkent 100047
        </Text>
      </Card.Section>

      <Divider my="sm"/>

      <Text component="p" size={16} weight={700}>
        Описание
      </Text>

      <Text size={12} className={classes.address}>
        {description}
      </Text>

      <Group mt={12} position="apart">
        <Button
          leftIcon={<Image width={12} height={12} src={phoneIcon}/>}
          className={classes.ctaPhone}
          radius={12}
        >
          Позвонить
        </Button>

        <Button
          leftIcon={<Image width={12} height={12} src={locationIcon}/>}
          radius={12}
          variant="outline"
          color="dark">
          Построить маршрут
        </Button>
      </Group>
    </Card>
  )
}
