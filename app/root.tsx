import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration
} from "remix";
import type { MetaFunction } from "remix";
import { useContext, useLayoutEffect, useState } from "react";
import { StylesContext, ThemeContext } from "./styles.context";

export const meta: MetaFunction = () => {
  return { title: "React Create Form" };
};

export const links = () => [
  { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;700&display=swap" },
  { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Fira+Code:wght@300;400;500;600;700&display=swap" }
];

export default function App() {
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
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
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
