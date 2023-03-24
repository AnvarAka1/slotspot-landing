import React from 'react'
import { Navbar } from '@src/components/Navbar/Navbar'
import { Outlet, useLocation } from 'react-router-dom'
import SummaryCard from '../../components/Card/SummaryCard'
import { Footer } from '@src/components/Footer/Footer'
import { footerData } from '@src/constants/constants'

type Props = {
  children: React.ReactNode
}

export const Layout = ({ children }: Props) => {
  const { pathname } = useLocation()
  const companyViewPath = pathname === '/company'

  return (
    <>
      <Navbar/>
      <main>
        {children}
      </main>
      {companyViewPath ? <SummaryCard/> : <Footer data={footerData}/>}
    </>
  )
}
