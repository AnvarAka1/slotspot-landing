import BusinessContainer from './containers/BusinessContainer'
import * as ROUTES from '@src/constants/routes'
import BlankLayout from '@src/layouts/BlankLayout'

export const businessRoutes = [
  {
    container: BusinessContainer,
    layout: BlankLayout,
    path: ROUTES.BUSINESS_PATH
  }
]
