import { useQuery } from '@tanstack/react-query'
import { DetailType, ListType } from '@src/types/crud'
import { CompanyResponseDto } from '@src/modules/company/dto'
import { get } from '@src/api/crud'
import * as API from '@src/api/endpoints'
import { generatePath } from 'react-router-dom'

export const useCompanyList = () => {
  return useQuery<unknown, unknown, ListType<CompanyResponseDto>>(['company-list'], async () => {
    return await get(API.COMPANY_LIST)
  })
}

export const useCompanyDetail = (id: number) => {
  return useQuery<unknown, unknown, DetailType<CompanyResponseDto>>(['company-detail'], async () => {
    return await get(generatePath(API.COMPANY_DETAIL, { id: id.toString() }))
  })
}
