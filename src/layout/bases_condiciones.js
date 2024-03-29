import React from 'react'

import { Container } from './LayoutStyles'

export const Layout = ({children}) => {
  
  return (
    <Container>
     <Header/>
     <main>{children}</main> 
     <Footer/>
    </Container>
  )
}
