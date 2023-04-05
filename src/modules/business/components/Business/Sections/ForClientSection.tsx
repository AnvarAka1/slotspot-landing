import React from 'react'
import Text from '../Text'
import { Box, Container, createStyles, Grid } from '@mantine/core'
import CircledButton from '@src/modules/business/components/Business/CircledButton'

const useStyles = createStyles((theme) => ({
  forClientsContainer: {
    marginTop: '300px',
    marginBottom: '370px',
    paddingTop: '200px',
    [theme.fn.smallerThan('lg')]: {
      marginTop: '100px',
      marginBottom: '300px',
      paddingTop: '100px'
    },
    [theme.fn.smallerThan('md')]: {
      marginTop: '50px',
      marginBottom: '300px',
      paddingTop: '50px'
    },
    [theme.fn.smallerThan('sm')]: {
      textAlign: 'center',
      marginTop: '50px',
      marginBottom: '50px',
      paddingTop: '0'
    }
  },
  iphone: {
    position: 'absolute',
    left: 0,
    top: 0,
    width: '435px',
    [theme.fn.smallerThan('sm')]: {
      display: 'none'
    }
  },
  iphoneMobile: {
    display: 'none',
    [theme.fn.smallerThan('sm')]: {
      marginTop: '24px',
      display: 'inline-block',
      width: '320px',
      textAlign: 'center'
    }
  },
  forClientsRight: {
    marginTop: '160px',
    [theme.fn.smallerThan('sm')]: {
      marginTop: '24px',
      textAlign: 'center'
    }
  }
}))

function ForClientSection() {
  const { classes } = useStyles()

  return (
    <Container size="lg" className={classes.forClientsContainer}>
      <section>
        <Grid>
          <Grid.Col span={6} style={{ position: 'relative' }}>
            <Box className={classes.iphone}>
              <img src="/public/business-images/iphone.png" alt="Iphone" style={{ width: '100%' }}/>
            </Box>
          </Grid.Col>

          <Grid.Col sm={6} xs={12}>
            <Box className={classes.forClientsRight}>
              <Box sx={{ marginBottom: '30px' }}>
                <CircledButton onClick={() => {
                }}>
                  Для ваших клиентов
                </CircledButton>
              </Box>
              <Text>
                Для ваших клиентов предостовляем бесплатное мобильное приложение,
                чтобы они могли просматривать весь спектр услуг и бронировать мгновенно
              </Text>
            </Box>
          </Grid.Col>
        </Grid>

        <Box className={classes.iphoneMobile}>
          <img src="/public/business-images/iphone.png" alt="Iphone" style={{ width: '100%' }}/>
        </Box>
      </section>
    </Container>
  )
}

export default ForClientSection
