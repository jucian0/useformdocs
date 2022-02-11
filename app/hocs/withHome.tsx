import React, { useContext } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { darkTheme, GlobalStyle, lightTheme, ThemeContext } from '~/styles.context'
import Footer from '../components/footer'

import Navbar from '../components/navbar'

const Main = styled.main`
  display: flex;
  flex: 1;
  flex-direction: column;
  width: 100%;
  height: 100%;
`

const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: center;
`

const Content = styled.div`
  display: block;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.bkgContent};
  margin-top:60px;
`

type Props = {
  children: React.ReactNode
}

function HomeLayout({ children }: Props) {
  return (
    <Main>
      <Navbar setOpen={() => { }} />
      <Container>
        <Content>{children}</Content>
      </Container>
      <Footer />
    </Main>
  )
}

export default function withHome(Component: React.JSXElementConstructor<any>) {
  return function DocsComponent(props: any) {
    const { theme } = useContext(ThemeContext)
    return (
      <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
        <HomeLayout>
          <Component {...props} />
        </HomeLayout>
        <GlobalStyle />
      </ThemeProvider>
    )
  }
}