import {
  Burger,
  Button,
  Container,
  createStyles,
  Divider,
  Drawer,
  Group,
  Header,
  Image,
  ScrollArea
} from '@mantine/core'
import SlotSpot from 'assets/icons/slotspot-icon.svg'
import { useDisclosure } from '@mantine/hooks'
import { Link, useNavigate } from 'react-router-dom'
import * as ROUTES from '../../constants/routes'

const useStyles = createStyles((theme) => ({
  header: {
    border: 0
  },
  link: {
    display: 'flex',
    alignItems: 'center',
    height: '100%',
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
    textDecoration: 'none',
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    fontWeight: 500,
    fontSize: theme.fontSizes.sm,

    [theme.fn.smallerThan('sm')]: {
      height: 42,
      display: 'flex',
      alignItems: 'center',
      width: '100%'
    },

    ...theme.fn.hover({
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0]
    })
  },

  hiddenMobile: {
    [theme.fn.smallerThan('sm')]: {
      display: 'none'
    }
  },

  hiddenDesktop: {
    [theme.fn.largerThan('sm')]: {
      display: 'none'
    }
  }
}))

export function Navbar() {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false)
  const { classes, theme } = useStyles()
  const navigate = useNavigate()

  return (
    <Container size={1200}>
      <Header className={classes.header} height={60} px="md">
        <Group position="apart" sx={{ height: '100%' }}>
          <Group sx={{ height: '100%' }} spacing={24} className={classes.hiddenMobile}>
            <Image height={24} width={110} src={SlotSpot}/>

            <Link to={ROUTES.HOME_PATH} className={classes.link}>
              О нас
            </Link>
            <Link to={ROUTES.BUSINESS_PATH} className={classes.link}>
              Партнерам
            </Link>
            <Link to={ROUTES.HOME_PATH} className={classes.link}>
              Скачать приложение
            </Link>
          </Group>

          <Group className={classes.hiddenMobile}>
            <Button
              color="dark"
              radius={12}
              onClick={() => navigate(ROUTES.BUSINESS_PATH)}
            >
              Добавить свой бизнес
            </Button>
          </Group>

          <Burger opened={drawerOpened} onClick={toggleDrawer} className={classes.hiddenDesktop}/>
        </Group>
      </Header>

      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        size="100%"
        padding="md"
        title="Navigation"
        className={classes.hiddenDesktop}
        zIndex={1000000}
      >
        <ScrollArea sx={{ height: 'calc(100vh - 60px)' }} mx="-md">
          <Divider my="sm" color={theme.colorScheme === 'dark' ? 'dark.5' : 'gray.1'}/>

          <a href="#" className={classes.link}>
            О нас
          </a>

          <a href="#" className={classes.link}>
            Партнерам
          </a>
          <a href="#" className={classes.link}>
            Скачать приложение
          </a>

          <Divider my="sm" color={theme.colorScheme === 'dark' ? 'dark.5' : 'gray.1'}/>

          <Group position="center" grow pb="xl" px="md">
            <Button color="dark" radius={12}>Добавить свой бизнес</Button>
          </Group>
        </ScrollArea>
      </Drawer>
    </Container>
  )
}
