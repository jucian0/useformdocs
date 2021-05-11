import React from 'react'
import { DefaultSeo } from 'next-seo'
import styled from 'styled-components'
import Iframe from 'react-iframe'
import { useRouter } from 'next/router'

const CodeSandBox = styled.div`
  width:100%;
  padding:10px 0;
  display:flex;
  justify-content:center;
  align-items:center;
  flex-direction:column;


  h1{
    font-size:3em;
    font-family: 'Roboto',sans-serif;
    color:${({ theme }) => theme.colors.primary};
    padding:20px;
  }

  div{
    width:100%;
    padding:2px;
    .sandbox{
      width:100%;
      border:none;
      border-radius:8px;
      box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
    }
  }

  `

function Demo(props) {
  const { push } = useRouter()

  function redirect() {
    push('/docs')
  }

  return (
    <CodeSandBox>
      <div>
        <Iframe
          url={props.url}
          width="100%"
          height="700px"
          className="sandbox"
          id="myId"
          display="initial"
          position="relative"
        />
      </div>
    </CodeSandBox>
  )
}

export default Demo
