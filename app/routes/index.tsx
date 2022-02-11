import { Link } from "remix";
import styled from "styled-components";
import withHome from "~/hocs/withHome";
import Iframe from 'react-iframe'



const Hero = styled.div`
  width:100%;
  background-color:${({ theme }) => theme.colors.primary};
  display:flex;
  justify-content:start;
  align-items:center;
  flex-direction:column;



  h1{
    font-size:3em;
    font-family: 'Roboto',sans-serif;
    color:${({ theme }) => theme.colors.white};
  }

  p{
    font-size:1.6em;
    font-family: 'Roboto',sans-serif;
    color:${({ theme }) => theme.colors.white};
  }

  div{

    padding:15px;

    .btn{
      border:1px solid ${({ theme }) => theme.colors.white};
      color:${({ theme }) => theme.colors.white};
      font-weight:600;
      font-size:1.3em;
      padding:10px 30px;
      border-radius:5px;
      background-color: ${({ theme }) => theme.colors.primary};
      transition:ease 300ms;
      margin:5px;
  
      &:hover{
        color: ${({ theme }) => theme.colors.primary};
        background-color: ${({ theme }) => theme.colors.white};
        cursor:pointer;
      }
    }
  
    .docs-btn{
      border:1px solid ${({ theme }) => theme.colors.white};
      color: ${({ theme }) => theme.colors.primary};
      font-weight:600;
      font-size:1.3em;
      padding:10px 30px;
      border-radius:5px;
      background-color: ${({ theme }) => theme.colors.white};
      transition:ease 300ms;
      margin:20px;
  
      &:hover{
        color: ${({ theme }) => theme.colors.primary};
        background-color: ${({ theme }) => theme.colors.white};
        cursor:pointer;
      }
    }
  }
`

const Section = styled.section`
  display:grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  grid-template-rows: repeat(3,auto); 
  column-gap: 10px;
  row-gap:10px;
  width:100%;
  max-width:1200px;
  margin:0 auto;
  background-color:${({ theme }) => theme.colors.background};
  padding:20px;
  
  & div{
    display:flex;
    justify-content:start;
    align-items:center;
    flex-direction:column;
    padding:20px;
    & h1, p{
    }

    & img{
      width:20%;
      height:auto;
    }
  }

`

const CodeSandBox = styled.div`
  width:100%;
  display:flex;
  justify-content:center;
  align-items:center;
  flex-direction:column;
  padding-bottom:100px;

  h1{
    font-size:3em;
    font-family: 'Roboto',sans-serif;
    color:${({ theme }) => theme.colors.primary};
  }

  div{
    width:1040px;
    padding:2px;
    .sandbox{
      border:none;
      border-radius:8px;
      box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
    }
  }
`


function Index() {

  return (
    <div >
      <Hero>
        <h1>Use Form</h1>
        <p>Use Form provides you a simple way to create forms with React</p>
        <div>
          <Link className="docs-btn" to={'/docs'}>Read docs</Link>
          <Link className="btn" to={'/docs/quick-start'}>Quick start</Link>
        </div>
        <CodeSandBox>
          <div>
            <Iframe
              url="https://codesandbox.io/embed/useform-forked-oojuq?fontsize=14&hidenavigation=1&theme=dark"
              width="100%"
              height="650px"
              className="sandbox"
              id="myId"
              position="relative"
            />
          </div>
        </CodeSandBox>
      </Hero>
      <Section>
        <div>
          <h1>Easy</h1>
          <p>
            <strong>Less code. </strong>
            UseForm is the easiest way to create forms with React. Create a form and use it wherever you want, don't worry with React Context, or Redux. You can share your form with other components just by using the hook created by createForm function.
          </p>
        </div>
        <div>
          <h1>Flexible</h1>
          <p>
            <strong>Create a form an use as onSubmit, onChange or debounced mode. </strong>
            Create powerful forms with UseForm. You can create your own form with your own fields, and you can use your own validation rules. UseForm allows you to create form, and use it as a controlled or uncontrolled form.
          </p>
        </div>
        <div>
          <h1>Performance</h1>
          <p><strong>Just one render. </strong>
            There are many form libraries, most of which are heavy, and allow you to create just one kind of form, but with UseForm you can fulfill and submit a form with just one render.
          </p>
        </div>
      </Section>
    </div>
  );
}

export default withHome(Index);