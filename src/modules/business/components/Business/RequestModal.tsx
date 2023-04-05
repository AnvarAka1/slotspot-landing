import { Box, Button, Grid, Modal, TextInput } from '@mantine/core'
import { useForm } from 'react-hook-form'
import { ApplicationReqDto } from '@src/modules/business/dto'
import * as API from '@src/api/endpoints'
import SearchField from '@src/components/Fields/SearchField'
import PhoneField from '@src/components/Fields/PhoneField'

type Props = {
  opened: boolean
  onClose: () => void
  onSubmit: (values: ApplicationReqDto) => Promise<void>
}

function RequestModal({ opened, onClose, onSubmit }: Props) {
  const { register, control, handleSubmit } = useForm<ApplicationReqDto>()

  return (
    <Modal opened={opened} onClose={onClose} title="Отправить заявку" centered={true}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid>
          <Grid.Col>
            <TextInput
              {...register('fullname')}
              label="Полное имя"
              placeholder="Например, Роберт Фокс"
            />
          </Grid.Col>

          <Grid.Col>
            <TextInput
              {...register('businessName')}
              label="Название бизнеса"
              placeholder="Например, Slotspot App"
            />
          </Grid.Col>

          <Grid.Col>
            <SearchField name="attachCategories" api={API.CATEGORY_LIST} control={control}/>
          </Grid.Col>

          <Grid.Col>
            <TextInput
              {...register('link')}
              label="Ссылка в соц. сети или веб сайт"
              placeholder="Например https://instagram.com/slotspot.app"
            />
          </Grid.Col>

          <Grid.Col>
            <PhoneField
              control={control}
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
