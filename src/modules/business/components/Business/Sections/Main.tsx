import React from 'react'
import Title from '../Title'
import { Box, Container, createStyles, Grid, Group, Text } from '@mantine/core'
import PrimaryButton from '@src/modules/business/components/Business/PrimaryButton'
import WhiteButton from '@src/modules/business/components/Business/WhiteButton'

const useStyles = createStyles((theme) => ({
  main: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    marginTop: '60px',
    marginBottom: '70px'
  },
  text: {
    [theme.fn.smallerThan('sm')]: {
      fontSize: 'sm'
    }
  }
}))

type Props = {
  onApplicationOpen: () => void
}

function Main({ onApplicationOpen }: Props) {
  const { classes } = useStyles()

  return (
    <Container size="lg">
      <Grid>
        <Grid.Col span={12}>
          <Box className={classes.main}>
            <Title>
              Готовы поднять свой<br/> бизнес на новый уровень?
            </Title>
            <Text mt="lg" className={classes.text}>
              Мы готовы помочь с этим. Оставьте нам заявку и мы добавим ваш бизнес в<br/> свой каталог услуг
              – <strong>бесплатно!</strong>
            </Text>

            <Group mt="lg">
              <PrimaryButton onClick={onApplicationOpen} classNames={{}}>Оставить заявку</PrimaryButton>
              <WhiteButton onClick={() => {
              }}>Хотите больше?</WhiteButton>
            </Group>
          </Box>
        </Grid.Col>
      </Grid>
    </Container>
  )
}

export default Main
