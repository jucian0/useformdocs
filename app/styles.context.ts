import { createContext } from "react";
import { createGlobalStyle, css, DefaultTheme } from "styled-components";

export const StylesContext = createContext<null | React.ReactElement<{}, string | React.JSXElementConstructor<any>>[]>(null);
export const ThemeContext = createContext<any>({})

declare module "styled-components" {
   export interface DefaultTheme {
      colors: {
         bkgContent: string;
         primary: string
         primaryHover: string
         secondary: string
         dark: string
         border: string
         red: string
         background: string
         textColor: string
         headingColor: string
         bkgPre: string
         colorPre: string
         bkgScrollbar: string
         white: string
      }
   }
}

export const lightTheme: DefaultTheme = {
   colors: {
      primary: '#2ec4b6',
      primaryHover: '#29B0A3',
      secondary: '#3a506b',
      dark: '#0b132b',
      border: '#edf2f4',
      red: '#e71d36',
      background: '#FFFFFF',
      textColor: '#4b5563',
      headingColor: '#111827',
      bkgPre: '#edf2f4',
      colorPre: '#edf2f4',
      bkgScrollbar: '#3a506b',
      bkgContent: "transparent",
      white: '#FFFFFF'
   },
}

export const darkTheme = {
   colors: {
      primary: '#2ec4b6',
      primaryHover: '#29B0A3',
      secondary: '#3a506b',
      dark: '#0b132b',
      border: '#1b262c',
      red: '#e71d36',
      background: '#1c2128',
      textColor: '#edf2f4',
      headingColor: '#edf2f4',
      bkgPre: '#3a506b',
      colorPre: '#edf2f4',
      bkgScrollbar: '#3a506b',
      bkgContent: "transparent",
      white: '#FFFFFF'
   },
}

export const ScrollBar = css`
   ::-webkit-scrollbar {
      width: 0.625rem;
      background-color: transparent;
      border-top: 0.625rem solid transparent;
      border-bottom: 0.625rem solid transparent;
   }

   ::-webkit-scrollbar:hover {
      background-color: rgba(0, 0, 0, 0.05);
   }

   ::-webkit-scrollbar-thumb:vertical {
      background: ${({ theme }) => theme.colors.bkgScrollbar};
      border-radius: 6.25rem;
      background-clip: padding-box;
      border: 0.125rem solid transparent;
      min-height: 0.625rem;
   }

   ::-webkit-scrollbar-thumb:vertical:active {
      background: ${({ theme }) => theme.colors.bkgScrollbar};
      -webkit-border-radius: 6.25rem;
   }
   ::-webkit-scrollbar-thumb:vertical:hover {
      background: ${({ theme }) => theme.colors.bkgScrollbar};
      -webkit-border-radius: 6.25rem;
      width: 0.625rem;
   }

   .horizontal-scroll::-webkit-scrollbar:vertical {
      width: 0.4375rem;
   }

   .horizontal-scroll::-webkit-scrollbar:horizontal {
      height: 0.4375rem;
   }

   .horizontal-scroll::-webkit-scrollbar-thumb {
      background: ${({ theme }) => theme.colors.bkgScrollbar};
      border-radius: 0.4375rem;
   }

   .horizontal-scroll::-webkit-scrollbar-track {
      border-radius: 0.75rem;
      padding: 0.0625rem;
   }

   .horizontal-scroll::-webkit-scrollbar-thumb:hover {
      background: ${({ theme }) => theme.colors.bkgScrollbar};
   }
`

export const GlobalStyle = createGlobalStyle`

   *{
      margin:0;
      font-size:16px;
      font-family: 'Roboto', sans-serif;
      box-sizing: border-box;
      ${ScrollBar};
      outline:none;
      box-sizing: border-box;
   }
   html, body {
      width: 100%;
      height: 100%;
      background-color:${({ theme }) => theme.colors.background};
   }

    h1{
      color:${({ theme }) => theme.colors.headingColor};
      font-weight:bold;
      font-size: 2em;
      //margin-top: 1.6em;
     // margin-bottom: .8em;
      line-height: 1.4;
      scroll-margin-top: 1.6em;
    }

    h2{
      font-size:1.4285714em;
      color:${({ theme }) => theme.colors.headingColor};
      font-weight:bold;
      margin-top: 1.6em;
      margin-bottom: .8em;
      line-height: 1.4;
      scroll-margin-top: 1.6em;
    }

    h3{
      color:${({ theme }) => theme.colors.headingColor};
      font-size: 1.2857143em;
      margin-top: 1.5555556em;
      margin-bottom: .4444444em;
      line-height: 1.5555556;
      scroll-margin-top: 1.5555556em;
    }

    h4{
      font-size:1rem;
      color:${({ theme }) => theme.colors.headingColor};
      font-weight:bold;
      margin-top: 1.6em;
      margin-bottom: .8em;
      line-height: 1.4;
      scroll-margin-top: 1.6em;
    }

   a{
      font-size: 1rem;
      line-height: 1.75;
      color:${({ theme }) => theme.colors.secondary};
      text-decoration:none;
      font-weight:600;
      color:${({ theme }) => theme.colors.textColor};
      &:hover{
         color:${({ theme }) => theme.colors.primary};
      }
   }

   p{
      font-weight:400;
      color:${({ theme }) => theme.colors.textColor};
      box-sizing: border-box;
      font-size: 1rem;
      line-height: 1.7142857;
      scroll-margin-top: 1.6em;

      code{
         display:inline;
         background-color:${({ theme }) => theme.colors.bkgPre};
         border-radius:.3rem;
         font-size:.85rem;
         font-family:Monospace;
         padding: 0.125rem 0.25rem;
         display:inline;
         color:${({ theme }) => theme.colors.textColor};
      }
      strong{
         font-weight: bold;
      }
   }

   strong{
     font-weight:500;
   }

   line-height, ul {
      font-size: 1rem;
      line-height: 1.75;
      color:${({ theme }) => theme.colors.textColor};
   }


   ul{
      font-weight:400;
      color:${({ theme }) => theme.colors.textColor};
      box-sizing: border-box;
      font-size: 1rem;
      scroll-margin-top: 1.6em;
   }

   li{
      font-weight:400;
      color:${({ theme }) => theme.colors.textColor};
      box-sizing: border-box;
      font-size: 1rem;
      scroll-margin-top: 1.6em;
      list-style-type: circle;
   }

   table{
      width: 100%;
      border-spacing: 0;
      border-collapse: collapse;
      color: ${({ theme }) => theme.colors.textColor};
      box-shadow: 0 0.188rem 0.375rem rgba(0,0,0,0.16), 0 0.188rem 0.375rem rgba(0,0,0,0.23);
      border-radius:8px;

   td, th {
        &:first-child {
            padding-left: 2rem;

            @media screen and (max-width: 768px) {
               padding-left: 2rem ;
            }

            @media screen and (max-width: 576px) {
               padding-left: 2rem;
            }
        }

        &:last-child {
            padding-right: 2rem;

            @media screen and (max-width: 768px) {
               padding-left: 2rem ;
            }

            @media screen and (max-width: 576px) {
               padding-left: 2rem;
            }
        }
   }

   thead {
        tr {
            font-size: 1em;
            border-bottom: solid 0.063rem ${({ theme }) => theme.colors.border};
            line-height: 2.5rem;
            text-align: left;
        }
   }

   tbody {
        tr {
            font-size: 1em;
            line-height: 2.5rem;
            border-bottom: solid 0.063rem ${({ theme }) => theme.colors.border};
            will-change: red;

            &:last-child{
               border-bottom:none;
            }
        }
	}
   }

   blockquote{
      margin-top: 10px;
      background-color:${({ theme }) => theme.colors.border};
      padding: 1px 0 1px 15px;
      border-radius:5px;
      border-left: 10px solid ${({ theme }) => theme.colors.primary};
      font-style:italic;
      & p{
         margin-top:12px;
         margin-bottom:12px;
      }
   }
`
