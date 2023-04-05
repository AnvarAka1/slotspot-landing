import React from 'react'
import { Box, Container, Grid, Image } from '@mantine/core'


type Props = Record<string, unknown>

function PeopleSection(props: Props) {
  return (
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
  )
}

export default PeopleSection
