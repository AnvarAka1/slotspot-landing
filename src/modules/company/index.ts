import CompanyListContainer from './containers/CompanyListContainer'
import CompanyDetailContainer from './containers/CompanyDetailContainer'
import * as ROUTES from '@src/constants/routes'
import BlankLayout from '@src/layouts/BlankLayout'

export const companyRoutes = [
  {
    container: CompanyDetailContainer,
    layout: BlankLayout,
    path: ROUTES.COMPANY_DETAIL_PATH
  },
  {
    container: CompanyListContainer,
    layout: BlankLayout,
    path: ROUTES.COMPANY_LIST_PATH
  }
]
