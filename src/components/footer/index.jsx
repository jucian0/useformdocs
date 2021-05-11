import React from 'react'
import { Container, FooterContent, FooterInformation, FooterLogo } from './styles'
import { Logo } from '../logo'
import config from '../../config';


export default function Footer() {

  return (
    <Container>
      <FooterContent>
        <FooterLogo>
          <Logo>
            {config.logo}
          </Logo>
          <span className="footer-text">{config.footerText}</span>
        </FooterLogo>
        <FooterInformation>
          <h1>Docs</h1>
          <Link href={`${config.path}docs/quick-start`}>Quick start</Link>
          <Link href={`${config.path}docs`}>Docs</Link>
        </FooterInformation>
        <FooterInformation>
          <h1>Community</h1>
          <a target="_blank" href={config.repository}>Github</a>
          <a target="_blank" href={`${config.repository}/issues`}>Request a feature</a>
          <a target="_blank" href={`${config.repository}/issues`}>Report a bug</a>
          <a target="_blank" href={`${config.repository}`}>Leave us a start</a>
        </FooterInformation>
      </FooterContent>
    </Container>
  )
}