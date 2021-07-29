import React, { useLayoutEffect, useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { useRouter } from 'next/router'
import { Helmet } from 'react-helmet'
import MDXProvider from '../components/providers/MDXProvider'
import { lightTheme, GlobalStyle, darkTheme } from '../components/providers/theme'
import { ThemeContext } from '../components/providers/themeContext'
import DocsLayout from '../layouts/docsLayout'
import HomeLayout from '../layouts/homeLayout'
import config from '../config'


const Headers = ()=>(
  <Helmet>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;700&display=swap" />
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@300;400;500;600;700&display=swap" />
  </Helmet>
)


export default ({ Component, pageProps }) => {

  const [theme, setTheme] = useState('light')
  const router = useRouter()
  const pathname = router?.pathname


  if (!pathname) {
    throw new Error('pathname undefined')
  }

  function handleTheme(selectedTheme) {
    if (typeof window !== "undefined") {
      setTheme(selectedTheme)
      localStorage.setItem('theme', selectedTheme)
    }
  }

  useLayoutEffect(() => {

    if (typeof window !== "undefined") {

      const currentTheme = localStorage.getItem('theme')
      handleTheme(currentTheme || 'light')
    }

  }, [])

  if (pathname.startsWith('/doc')) {
    return (
      <ThemeContext.Provider value={{ theme, setTheme: handleTheme }}>
        <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
          <MDXProvider>
            {config.head}
            <DocsLayout>
              <Component {...pageProps} />
            </DocsLayout>
          </MDXProvider>
          <Headers />
          <GlobalStyle />
        </ThemeProvider>
      </ThemeContext.Provider>
    )
  }

  return (
    <ThemeContext.Provider value={{ theme, setTheme: handleTheme }}>
      <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
        <MDXProvider>
          {config.head}
          <HomeLayout>
            <Component {...pageProps} />
          </HomeLayout>
        </MDXProvider>
        <Headers />
        <GlobalStyle />
      </ThemeProvider>
    </ThemeContext.Provider>
  )
}
