import {
  Links,
  LiveReload,
  LoaderFunction,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useMatches
} from "remix";
import type { MetaFunction } from "remix";
import { useContext, useLayoutEffect, useState } from "react";
import { StylesContext, ThemeContext } from "./styles.context";
import { homepage } from '../package.json'
import { useShouldHydrate } from 'remix-utils'

export const loader: LoaderFunction = async ({ params }) => {
  const { frontmatter, code } = await bundleMDX();
  const canonical = `${homepage}/${frontmatter?.lang}${frontmatter?.slug}`;
  return { frontmatter, code, canonical };
};

export const meta: MetaFunction = () => {
  return { title: "useForm", description: "useForm provides a easy way to create forms." };
};

export const links = () => [
  { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;700&display=swap" },
  { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Fira+Code:wght@300;400;500;600;700&display=swap" }
];

export default function App() {
  const styles = useContext(StylesContext);
  const [theme, setTheme] = useState('light')


  const includeScripts = useShouldHydrate(); // from remix-utils
  const matches = useMatches();
  const match = matches.find((match) => match.data && match.data.canonical);
  const canonical = match?.data.canonical;



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
        {!!canonical && <link rel="canonical" href={canonical} />}
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
function bundleMDX(): { frontmatter: any; code: any; } | PromiseLike<{ frontmatter: any; code: any; }> {
  throw new Error("Function not implemented.");
}

