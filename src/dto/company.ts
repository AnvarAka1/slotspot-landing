import { ImageType, TrText } from '@src/types'

export type Category = {
  id: number
  pk: number
  title: string
  icon: string
}

export type Employee = {
  id: number,
  firstName: string,
  lastName: string,
  avatar: ImageType
}

export type Service = {
  id: number
  title: string
  titleEn: TrText
  titleRu: TrText
  titleUz: TrText
  description: string
  descriptionEn: TrText
  descriptionRu: TrText
  descriptionUz: TrText
  price: number
  image: string
}

export type Schedule = {
  mondayStartTime:  string
  mondayEndTime:  string
  tuesdayStartTime:  string
  tuesdayEndTime:  string
  wednesdayStartTime:  string
  wednesdayEndTime:  string
  thursdayStartTime:  string
  thursdayEndTime:  string
  fridayStartTime:  string
  fridayEndTime:  string
  saturdayStartTime:  string
  saturdayEndTime:  string
  sundayStartTime:  string
  sundayEndTime:  string
}

export type Rating = {
  ratingAvg: number
  ratingCount: number
}

export type CompanyResDto = {
  id: number
  categories: Category[]
  distance: null
  rating: Rating,
  title: string
  titleEn: TrText
  titleRu: TrText
  titleUz: TrText
  address: string
  addressEn: TrText
  addressRu: TrText
  addressUz: TrText
  logo: string
  image: string
  description: string
  descriptionEn: TrText
  descriptionRu: TrText
  descriptionUz: TrText
  lat: string
  long: string
  phone: string
  employees: Employee[]
  services: Service[]
  schedule: Schedule
}
