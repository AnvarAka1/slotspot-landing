import { Carousel } from '@mantine/carousel'
import { useMediaQuery } from '@mantine/hooks'
import { Button, Card, createStyles, Group, Image, Text, useMantineTheme } from '@mantine/core'
import { Employee } from '@src/dto/company'

const useStyles = createStyles(() => ({
  button: {
    color: '#000',
    border: '1px solid #000'
  }
}))

type AvatarCardProps = {
  employee: Employee
}

function AvatarCard({ employee }: AvatarCardProps) {
  return (
    <Group align="center" position="center">
      <Image m={0} width={100} height={100} radius={50} src={employee.avatar} alt={employee.firstName}/>
      <Text size={14} weight={700} component="p">{`${employee.firstName} ${employee.lastName}`}</Text>
    </Group>
  )
}

type Props = {
  employees: Employee[]
}

export function AvatarCarousel({ employees }: Props) {
  const theme = useMantineTheme()
  const { classes } = useStyles()
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm}px)`)

  return (
    <Card withBorder mt={24} radius={12}>
      <Group position="apart">
        <Text size={24} weight={590} component="p">
          Выберите специалиста
        </Text>
        <Button variant="outline" className={classes.button} radius={50}>
          Выбрать свободного специалиста
        </Button>
      </Group>
      <Card.Section p={24}>
        <Carousel
          withControls={false}
          slideSize="16%"
          breakpoints={[{ maxWidth: 'sm', slideSize: '15%', slideGap: 12 }]}
          align="start"
          mt={24}
          slidesToScroll={mobile ? 1 : 2}
        >
          {employees.map((employee) => (
            <Carousel.Slide key={employee.id} p={0}>
              <AvatarCard employee={employee}/>
            </Carousel.Slide>
          ))}
        </Carousel>
      </Card.Section>
    </Card>
  )
}
