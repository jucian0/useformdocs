import React, { useState, useEffect, useContext } from "react"
import { useLocation } from "remix"
import styled, { ThemeProvider } from "styled-components"
import ContentFooter from "~/components/contentFooter"
import Footer from "~/components/footer"
import Navbar from "~/components/navbar"
import Sidebar from "~/components/sidebar"
import { darkTheme, GlobalStyle, lightTheme, ThemeContext } from "~/styles.context"


const Main = styled.main`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items:center;
  width: 100%;

  img{
      border-radius: 0.5rem;
      box-shadow: 0 0.188rem 0.375rem rgba(0,0,0,0.16), 0 0.188rem 0.375rem rgba(0,0,0,0.23);
      width:100%;
   }
`

const MainContainer = styled.div`
  max-width:1440px;
  width:100%;
`

const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`

const MainContent = styled.div<{ open: boolean }>`
  display: flex;
  width: ${({ open }) => (!open ? '100%' : 'calc(100% - 260px)')};
  height: calc(100% - 60px);
  position: sticky;
  justify-content: center;
  float: left;
  left: ${({ open }) => (open ? '260px' : '0')};
  transition: all 0.5s ease-in-out;
`

const Content = styled.div`
  display: block;
  width: 100%;
  padding: 40px;
  margin-top:40px;
  max-width: 1040px;
  background-color: ${({ theme }) => theme.colors.bkgContent};
`

function DocsLayout({ children }: any) {
   const [open, setOpen] = useState(true)
   const { pathname } = useLocation()

   const resize = () => {
      if (window?.innerWidth > 989) {
         setOpen(true)
      } else if (window?.innerWidth <= 989) {
         setOpen(false)
      }
   }

   useEffect(() => {
      window.addEventListener('resize', resize)
      resize()
   }, [])

   useEffect(() => {
      resize()
   }, [pathname])


   return (
      <>
         <Navbar setOpen={() => setOpen(!open)} />
         <Main>
            <MainContainer>
               <Container>
                  <Sidebar open={open} />
                  <MainContent open={open}>
                     <Content>
                        {children}
                        <ContentFooter />
                     </Content>
                  </MainContent>
               </Container>
            </MainContainer>
         </Main>
         <Footer />
      </>
   )
}


export default function withDocs(Component: React.JSXElementConstructor<any>) {
   return function DocsComponent(props: any) {
      const { theme } = useContext(ThemeContext)
      return (
         <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
            <DocsLayout>
               <Component {...props} />
            </DocsLayout>
            <GlobalStyle />
         </ThemeProvider>
      )
   }
}