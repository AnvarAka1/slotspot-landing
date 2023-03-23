import React, { useState } from 'react'
import { Card, Button, Group, Text, createStyles, Paper, Container, Modal, Image, Highlight } from '@mantine/core'
import infoIcon from '../../assets/icons/info-icon.svg'

const useStyles = createStyles((theme) => ({
  summary: {
    background: theme.colors.light[0]
  },
  icon: {
    margin: 'auto'
  },
  highlighted: {
    background: theme.colors.dark[0],
    fontWeight: 700,
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent'
  }
}))

function SummaryCard(props: any) {
  const { classes } = useStyles()
  const [opened, setOpened] = useState(false)

  return (
    <Paper className={classes.summary} p={16} mt={24}>
      <Container size={1200}>
        <Card>
          <Card.Section>
            <Group position="apart">
              <Group>
                <Text size={24} weight={590}>
                  Итого: 350 000 сум
                </Text>
                <Button variant="filled" radius={50} color="dark">
                  1ч 30м
                </Button>
              </Group>

              <Button onClick={() => setOpened(true)} variant="filled" radius={12} color="dark">
                Бронировать
              </Button>
            </Group>
          </Card.Section>
        </Card>
        <Modal
          size="lg"
          opened={opened}
          onClose={() => setOpened(false)}
        >
          <Image className={classes.icon} width={48} height={48} src={infoIcon}/>
          <Highlight
            size={32}
            mt={18}
            align="center"
            highlight={['Uncle Chill', 'Сегодня в 11:00']}
            className={classes.highlighted}
          >
            Бронируем Uncle Chill на Сегодня в 11:00?
          </Highlight>
          <Group position="apart" mt={42}>
            <Button fullWidth radius={12} variant="outline" onClick={() => setOpened(false)}>Отмена</Button>
            <Button fullWidth radius={12} color="dark">Бронируем</Button>
          </Group>
        </Modal>
      </Container>
    </Paper>
  )
}

export default SummaryCard
