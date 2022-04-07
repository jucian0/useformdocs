import {
  Links,
  LiveReload,
  LoaderFunction,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData
} from "remix";
import type { MetaFunction } from "remix";
import { useContext, useLayoutEffect, useState } from "react";
import { StylesContext, ThemeContext } from "./styles.context";
import { removeTrailingSlash } from "./utils/misc";
import { sitemap } from "./utils/sitemap";

export const meta: MetaFunction = () => {
  return {
    title: "useForm",
    description: "useForm provides a easy way to create forms.",
    viewport: 'width=device-width,initial-scale=1,viewport-fit=cover',
    charSet: 'utf-8',
    keywords: 'useForm, form, react, hooks, context, context api, context api useForm, useform, use-form, forms, input',
    themeColor: '#2ec4b6',
    origin: 'https://useform.org',
    image: 'https://raw.githubusercontent.com/useForm/useForm/main/img/logo3.png',
  };
};

export const links = () => [
  { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;700&display=swap" },
  { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Fira+Code:wght@300;400;500;600;700&display=swap" }
];

export const loader: LoaderFunction = ({ request }) => {
  const url = new URL(request.url)

  return {
    url
  }
}

export default function App() {
  const data = useLoaderData()
  const styles = useContext(StylesContext);
  const [theme, setTheme] = useState('light')

  function handleTheme(selectedTheme: string) {
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

  return (
    <html lang="en">
      <head>
        <Meta />
        <link
          rel="canonical"
          href={removeTrailingSlash(data.url)}
        />
        <Links />
        {styles}
      </head>
      <body>
        <ThemeContext.Provider value={{ theme, setTheme: handleTheme }}>
          <Outlet />
          <ScrollRestoration />
          <Scripts />
        </ThemeContext.Provider>
        {process.env.NODE_ENV === "development" && <LiveReload />}
      </body>
    </html>
  );
}
