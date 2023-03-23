import { homeRoutes } from './home'
import { companyRoutes } from './company'
import { businessRoutes } from './business'

export const routes = [
  ...businessRoutes,
  ...companyRoutes,
  ...homeRoutes
]
