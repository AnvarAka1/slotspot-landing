import { Category } from '@src/dto/company'

export type ApplicationReqDto = {
  fullname: string
  businessName: string
  attachCategories: Category[]
  link: string
  phone: string
}
