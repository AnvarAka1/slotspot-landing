import './App.css'
import { withHocs } from './app/providers'
import { RouterProvider } from 'react-router-dom'
import { router } from './app/providers/routerConfig'

function App() {

  return (
    <RouterProvider router={router}/>
  )
}

export default withHocs(App)
