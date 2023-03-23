import { createBrowserRouter } from 'react-router-dom'
import { routes } from '@src/modules'

export const router = createBrowserRouter(routes.map(route => ({
  element: (
    <route.layout>
      <route.container/>
    </route.layout>
  ),
  path: route.path
})))

