import { useContext } from 'react';
import { IoLogoGithub, IoLogoTwitter, IoMdMoon, IoIosSunny } from "react-icons/io";
import { TiThMenu } from "react-icons/ti";
import { Container, ActionButtons, Button, MenuButton, Wrapper, Links, ButtonLink } from './styles';

import logo from '../../assets/green_logo.svg';
import { Config } from '~/config';
import { ThemeContext } from '~/styles.context';
import { useLocation } from 'remix';
import { Logo } from '../logo';

type Props = {
  setOpen: (open: boolean) => void
}

function Navbar({ setOpen }: Props) {

  const { setTheme, theme } = useContext(ThemeContext)
  const { pathname } = useLocation()

  function handleTheme() {
    const selectedTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(selectedTheme)
  }

  return (
    <Wrapper>
      <Container>
        <div>
          <a href={Config.path}>
            <Logo>
              <img src={logo} alt="logo" className='logo' />
              <span className="mr-2 font-extrabold hidden md:inline">{Config.siteName}</span>
            </Logo>
          </a>
        </div>
        <ActionButtons>
          <ButtonLink target="_blank" href={Config.twitter}>
            <IoLogoTwitter />
          </ButtonLink>
          <ButtonLink target="_blank" href={Config.repository}>
            <IoLogoGithub />
          </ButtonLink>
          <Button onClick={handleTheme}>
            {theme === 'light' ? <IoMdMoon /> : <IoIosSunny />}
          </Button>
          {
            pathname !== Config.path && (
              <MenuButton onClick={setOpen}>
                <TiThMenu />
              </MenuButton>
            )
          }
        </ActionButtons>
      </Container>
    </Wrapper>
  );
}

export default Navbar;