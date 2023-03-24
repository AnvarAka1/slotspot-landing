import React from 'react'
import { Container, Box, Button, Grid, Group, Text, Image } from '@mantine/core'

type Props = Record<string, unknown>

function Business(props: Props) {
  return (
    <>
      <Container size="lg">
        <Grid>
          <Grid.Col span={12}>
            <Text>
              Готовы поднять свой бизнес на новый уровень?
            </Text>
            <Text>
              Мы готовы помочь с этим. Оставьте нам заявку и мы добавим ваш бизнес в свой каталог услуг – бесплатно!
            </Text>

            <Group>
              <Button onClick={() => {
              }}>Оставить заявку</Button>
              <Button onClick={() => {
              }}>Хотите больше?</Button>
            </Group>
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

      <Container size="lg" p={0}>
        <section>
          <Grid>
            <Grid.Col>
              <Text>Что мы предлагаем?</Text>
            </Grid.Col>

            <Grid.Col span={6}>
              <Button>Для бизнеса</Button>
              <Text>
                У нас есть CRM решение, где вы можете создавать, редактировать и принимать мгновенные заказы.
                А так же мониторить статистику продаж и других метрик
              </Text>
            </Grid.Col>

            <Grid.Col span={6} style={{ position: 'relative' }}>
              <Box style={{
                position: 'absolute',
                left: 0,
                top: 0
              }}>
                <img src="/public/business-images/ipad.png" alt="Ipad"/>
              </Box>
            </Grid.Col>
          </Grid>
        </section>
      </Container>

      <Container size="lg" p={0}>
        <section>
          <Grid>
            <Grid.Col>
              <Text>Что мы предлагаем?</Text>
            </Grid.Col>

            <Grid.Col span={6} style={{ position: 'relative' }}>
              <Box style={{
                position: 'absolute',
                left: 0,
                top: 0
              }}>
                <img src="/public/business-images/iphone.png" alt="Iphone"/>
              </Box>
            </Grid.Col>

            <Grid.Col span={6}>
              <Button>Для ваших клиентов</Button>
              <Text>
                Для ваших клиентов предостовляем бесплатное мобильное приложение,
                чтобы они могли просматривать весь спектр услуг и бронировать мгновенно
              </Text>
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
                <Image sx={{ width: '100%'}} src="/public/business-images/bottom-people/1.png" alt="1" />
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
