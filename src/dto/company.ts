import { TrText } from '@src/types'

export type Category = {
  pk: number,
  title: string,
  icon: string
}

export type CompanyResDto = {
  id: number,
  category: Category[],
  distance: null,
  rating: {
    ratingAvg: number,
    ratingCount: number
  },
  title: string,
  titleEn: TrText,
  titleRu: TrText,
  titleUz: TrText,
  address: string,
  addressEn: TrText,
  addressRu: TrText,
  addressUz: TrText,
  logo: string,
  image: string,
  description: string,
  descriptionEn: TrText,
  descriptionRu: TrText,
  descriptionUz: TrText,
  lat: string,
  long: string,
  phone: string
}
