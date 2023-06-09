import { useQuery } from '@tanstack/react-query'
import { ListType } from '@src/types/crud'
import { Category, CompanyResDto } from '@src/dto/company'
import { get } from '@src/api/crud'
import * as API from '@src/api/endpoints'

export const useCompanyList = () => {
  return useQuery<unknown, unknown, ListType<CompanyResDto>>(['company-list'], async () => {
    return await get(API.COMPANY_LIST)
  })
}

export const useCategoryList = () => {
  return useQuery<unknown, unknown, ListType<Category>>(['category-list'], async () => {
    return await get(API.CATEGORY_LIST)
  })
}
