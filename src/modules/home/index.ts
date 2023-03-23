import HomeContainer from './containers/HomeContainer'
import * as ROUTES from '@src/constants/routes'
import BlankLayout from '@src/layouts/BlankLayout'

export const homeRoutes = [
  {
    container: HomeContainer,
    layout: BlankLayout,
    path: ROUTES.HOME_PATH
  }
]
