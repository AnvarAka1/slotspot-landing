import React from 'react'
import { Container, Box, Button, Grid, Group, Text, Image, Title } from '@mantine/core'

type Props = Record<string, unknown>

function Business(props: Props) {
  return (
    <>
      <Container size="lg">
        <Grid>
          <Grid.Col span={12}>
            <Box sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: 'center',
              marginTop: '60px',
              marginBottom: '70px'
            }}>
              <Title size="xxx-large">
                Готовы поднять свой<br/> бизнес на новый уровень?
              </Title>
              <Text mt="lg">
                Мы готовы помочь с этим. Оставьте нам заявку и мы добавим ваш бизнес в<br/> свой каталог услуг
                – <strong>бесплатно!</strong>
              </Text>

              <Group mt="lg">
                <Button color="#000000" onClick={() => {
                }}>Оставить заявку</Button>
                <Button onClick={() => {
                }}>Хотите больше?</Button>
              </Group>
            </Box>
          </Grid.Col>
        </Grid>
      </Container>

      <Container size="lg" p={0}>
        <section>
          <Grid>
            <Grid.Col span={2}>
              <Box>
                <Image width="100%" src="/public/business-images/people/1.png" alt="1"/>
              </Box>
            </Grid.Col>

            <Grid.Col span={2}>
              <Box mt="70px">
                <Image width="100%" src="/public/business-images/people/2.png" alt="2"/>
              </Box>
            </Grid.Col>

            <Grid.Col span={2}>
              <Box>
                <Image width="100%" src="/public/business-images/people/3.png" alt="3"/>
              </Box>
            </Grid.Col>

            <Grid.Col span={2}>
              <Box mt="70px">
                <Image width="100%" src="/public/business-images/people/4.png" alt="4"/>
              </Box>
            </Grid.Col>

            <Grid.Col span={2}>
              <Box>
                <Image width="100%" src="/public/business-images/people/5.png" alt="5"/>
              </Box>
            </Grid.Col>

            <Grid.Col span={2}>
              <Box mt="70px">
                <Image width="100%" src="/public/business-images/people/6.png" alt="6"/>
              </Box>
            </Grid.Col>
          </Grid>
        </section>
      </Container>

      <Box sx={{ position: 'relative' }}>

        <Container size="lg" p={0} sx={{ marginTop: '140px' }}>
          <section>
            <Grid>
              <Grid.Col>
                <Title size="h1" sx={{ textAlign: 'center' }}>Что мы предлагаем?</Title>
              </Grid.Col>

              <Grid.Col span={6}>
                <Box sx={{ marginTop: '130px', position: 'relative', zIndex: 1 }}>
                  <Button sx={{ marginBottom: '30px' }}>Для бизнеса</Button>
                  <Text weight="bold" size={24}>
                    У нас есть CRM решение, где вы можете создавать, редактировать и принимать мгновенные заказы.
                    А так же мониторить статистику продаж и других метрик
                  </Text>
                </Box>
              </Grid.Col>
            </Grid>
          </section>

        </Container>

        <Box style={{
          position: 'absolute',
          right: 0,
          top: '-100px',
          width: '1100px'
        }}>
          <img src="/public/business-images/ipad.png" alt="Ipad" style={{ width: '100%' }}/>
        </Box>
      </Box>

      <Container size="lg" sx={{ marginTop: '300px', marginBottom: '370px', paddingTop: '200px' }}>
        <section>
          <Grid>
            <Grid.Col span={6} style={{ position: 'relative' }}>
              <Box style={{
                position: 'absolute',
                left: 0,
                top: 0,
                width: '435px'
              }}>
                <img src="/public/business-images/iphone.png" alt="Iphone" style={{ width: '100%' }}/>
              </Box>
            </Grid.Col>

            <Grid.Col span={6}>
              <Box sx={{ marginTop: '160px' }}>
                <Button sx={{ marginBottom: '30px' }}>Для ваших клиентов</Button>
                <Text weight="bold" size={24}>
                  Для ваших клиентов предостовляем бесплатное мобильное приложение,
                  чтобы они могли просматривать весь спектр услуг и бронировать мгновенно
                </Text>
              </Box>
            </Grid.Col>
          </Grid>
        </section>
      </Container>

      <Container fluid={true} p={0}>
        <Box component="section" sx={{ position: 'relative', background: '#0A0F16' }}>
          <Grid>
            <Grid.Col>
              <Box>
                <Text>Свяжитесь с нами</Text>
                <Text>и наши специалисты помогут настроить ваш бизнес в нашей системе</Text>
                <Button>Оставить заявку</Button>
              </Box>
            </Grid.Col>
          </Grid>

          <Box sx={{ position: 'absolute', left: 0, top: 0 }}>
            <Group>
              <Box>
                <Image sx={{ width: '100%' }} src="/public/business-images/bottom-people/1.png" alt="1"/>
              </Box>

              <Box mt="70px">
                <img src="/public/business-images/bottom-people/2.png" alt="2"/>
              </Box>
            </Group>
          </Box>

          <Box sx={{ position: 'absolute', right: 0, top: 0 }}>
            <Group>
              <Box>
                <img src="/public/business-images/bottom-people/3.png" alt="3"/>
              </Box>

              <Box mt="70px">
                <img src="/public/business-images/bottom-people/4.png" alt="4"/>
              </Box>
            </Group>
          </Box>
        </Box>
      </Container>
    </>
  )
}

export default Business
