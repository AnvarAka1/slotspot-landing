import React from 'react'
import Title from '../Title'
import { Box, Container, createStyles, Grid, Group, Text } from '@mantine/core'
import WhiteButton from '@src/modules/business/components/Business/WhiteButton'

type Props = {
  onApplicationOpen: () => void
}

const useStyles = createStyles((theme) => ({
  leaveRequest: {
    marginTop: '150px',
    marginBottom: '150px',
    textAlign: 'center',
    padding: '16px'
  },
  leaveRequestImage: {
    width: '190px',
    [theme.fn.smallerThan('lg')]: {
      display: 'none'
    },
    [theme.fn.smallerThan('md')]: {
      width: '120px'
    },
    [theme.fn.smallerThan('sm')]: {
      width: '60px'
    }
  }
}))

function LeaveRequest({ onApplicationOpen }: Props) {
  const { classes } = useStyles()

  return (
    <Container fluid={true} p={0}>
      <Box component="section" sx={{ position: 'relative', background: '#0A0F16' }}>
        <Grid>
          <Grid.Col>
            <Box className={classes.leaveRequest}>
              <Title color="white">Свяжитесь с нами</Title>
              <Text color="#B8BEC1" sx={{ marginTop: '6px' }}>и наши специалисты помогут настроить ваш бизнес в нашей
                системе</Text>
              <Box sx={{ marginTop: '32px' }}>
                <WhiteButton onClick={onApplicationOpen}>
                  Оставить заявку
                </WhiteButton>
              </Box>
            </Box>
          </Grid.Col>
        </Grid>

        <Box sx={{ position: 'absolute', left: 0, top: 0 }}>
          <Group>
            <Box className={classes.leaveRequestImage}>
              <img style={{ width: '100%' }} src="/public/business-images/bottom-people/1.png" alt="1"/>
            </Box>

            <Box mt="70px" className={classes.leaveRequestImage}>
              <img style={{ width: '100%' }} src="/public/business-images/bottom-people/2.png" alt="2"/>
            </Box>
          </Group>
        </Box>

        <Box sx={{ position: 'absolute', right: 0, top: 0 }}>
          <Group>
            <Box className={classes.leaveRequestImage}>
              <img style={{ width: '100%' }} src="/public/business-images/bottom-people/3.png" alt="3"/>
            </Box>

            <Box mt="70px" className={classes.leaveRequestImage}>
              <img style={{ width: '100%' }} src="/public/business-images/bottom-people/4.png" alt="4"/>
            </Box>
          </Group>
        </Box>
      </Box>
    </Container>
  )
}

export default LeaveRequest
