import './App.css'
import { withHocs } from '@src/app/providers'
import { RouterProvider } from "react-router-dom";
import { router } from "@src/app/providers/routerConfig";

function App() {

  return (
    <RouterProvider router={router} />
  )
}

export default withHocs(App);
