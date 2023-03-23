import { Navbar } from '@src/components/Navbar/Navbar'
import { Outlet, useLocation } from 'react-router-dom'
import SummaryCard from '../../components/Card/SummaryCard'
import { Footer } from '@src/components/Footer/Footer'
import { footerData } from '@src/constants/constants'

export const Layout = () => {
  const { pathname } = useLocation()
  const companyViewPath = pathname === '/company'
  return (
    <>
      <Navbar/>
      <main>
        <Outlet/>
      </main>
      {companyViewPath ? <SummaryCard/> : <Footer data={footerData}/>}
    </>
  )
}
