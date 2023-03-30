import { Box, Button, Grid, Modal, Select, TextInput } from '@mantine/core'
import { Controller, useForm } from 'react-hook-form'
import { ApplicationReqDto } from '@src/modules/business/dto'

type Props = {
  opened: boolean
  onClose: () => void
  onSubmit: (values: ApplicationReqDto) => Promise<void>
}

const OPTIONS = [
  { value: 'manicure', label: 'Маникюр/Педикюр' },
  { value: 'barbershop', label: 'Барбершопы/Парикмахерские' },
  { value: 'entertainment', label: 'Развлекательные центры' },
  { value: 'spa', label: 'SPA-салоны' }
]

function RequestModal({ opened, onClose, onSubmit }: Props) {
  const { register, control, handleSubmit } = useForm<ApplicationReqDto>()

  return (
    <Modal opened={opened} onClose={onClose} title="Отправить заявку" centered={true}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid>
          <Grid.Col>
            <TextInput
              {...register('name')}
              label="Полное имя"
              placeholder="Например, Роберт Фокс"
            />
          </Grid.Col>

          <Grid.Col>
            <TextInput
              {...register('business')}
              label="Название бизнеса"
              placeholder="Например, Slotspot App"
            />
          </Grid.Col>

          <Grid.Col>
            <Controller
              name="category"
              control={control}
              render={({ field, fieldState, formState }) => (
                <Select
                  label="Категория бизнеса"
                  value={field.value}
                  onChange={value => field.onChange(value)}
                  data={OPTIONS}
                  placeholder="Выберите из списка"
                />
              )}
            />
          </Grid.Col>

          <Grid.Col>
            <TextInput
              {...register('link')}
              label="Ссылка в соц. сетяи или веб сайт"
              placeholder="Например https://instagram.com/slotspot.app"
            />
          </Grid.Col>

          <Grid.Col>
            <TextInput
              {...register('phone')}
              label="Номер телефона"
              placeholder="Например +998 90 934 46 57"
            />
          </Grid.Col>
        </Grid>
        <Box sx={{ marginTop: '20px', textAlign: 'right' }}>
          <Button type="submit">Отправить</Button>
        </Box>
      </form>
    </Modal>
  )
}

export default RequestModal