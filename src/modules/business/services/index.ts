import { useMutation } from '@tanstack/react-query'
import { DetailType } from '@src/types/crud'
import { CompanyResDto } from '@src/dto/company'
import * as API from '@src/api/endpoints'
import { post } from '@src/api/crud'
import { ApplicationReqDto } from '@src/modules/business/dto'

export const useApplicationSend = () => {
  return useMutation<DetailType<ApplicationReqDto>, unknown, ApplicationReqDto>(async (data: ApplicationReqDto) => {
    return await post(API.APPLICATION_SEND, data)
  })
}
