import React from 'react'
import Text from '../Text'
import { Box, Container, createStyles, Grid, Title } from '@mantine/core'
import CircledButton from '@src/modules/business/components/Business/CircledButton'

type Props = Record<string, unknown>

const useStyles = createStyles((theme) => ({
  left: {
    marginTop: '130px',
    position: 'relative',
    zIndex: 1,
    [theme.fn.smallerThan('lg')]: {
      paddingLeft: '12px',
      paddingRight: '12px',
    },
    [theme.fn.smallerThan('sm')]: {
      textAlign: 'center',
      marginTop: '24px'
    }
  },
  title: {
    textAlign: 'center',
    [theme.fn.smallerThan('md')]: {
      fontSize: '24px'
    }
  },
  ipad: {
    position: 'absolute',
    right: '-250px',
    top: '-100px',
    width: '1100px',
    [theme.fn.smallerThan('lg')]: {
      top: '-50px',
      right: '-180px',
      width: '800px'
    },
    [theme.fn.smallerThan('md')]: {
      top: '100px',
      width: '700px'
    },
    [theme.fn.smallerThan('sm')]: {
      display: 'none'
    }
  },
  ipadMobile: {
    display: 'none',
    [theme.fn.smallerThan('sm')]: {
      display: 'inline-block',
      width: '100%',
      textAlign: 'center'
    }
  },
}))

function ForBusinessSection(props: Props) {
  const { classes } = useStyles()

  return (
    <Box sx={{ position: 'relative' }}>
      <Container size="lg" p={0} sx={{ marginTop: '140px' }}>
        <section>
          <Grid>
            <Grid.Col>
              <Title size="h1" className={classes.title}>Что мы предлагаем?</Title>
            </Grid.Col>

            <Grid.Col sm={6} xs={12}>
              <Box className={classes.left}>
                <Box sx={{ marginBottom: '30px' }}>
                  <CircledButton onClick={() => {
                  }}>
                    Для бизнеса
                  </CircledButton>
                </Box>
                <Text>
                  У нас есть CRM решение, где вы можете создавать, редактировать и принимать мгновенные заказы.
                  А так же мониторить статистику продаж и других метрик
                </Text>
              </Box>
            </Grid.Col>
          </Grid>
          <Box className={classes.ipadMobile}>
            <img src="/public/business-images/ipad.png" alt="Ipad" style={{ width: '100%' }}/>
          </Box>
        </section>
      </Container>

      <Box className={classes.ipad}>
        <img src="/public/business-images/ipad.png" alt="Ipad" style={{ width: '100%' }}/>
      </Box>
    </Box>

  )
}

export default ForBusinessSection
