import React, { useContext, useMemo, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { GoChevronRight } from "react-icons/go";
import { ThemeContext } from 'styled-components';

import { Aside, Item, Items, SubItems, SubItem } from './styles';

const links = [
  {
    label: 'Introduction',
    link: '',
    subItems: [
      {
        label: 'Readme',
        link: '/docs/',
      },
      {
        label: 'Quick Start',
        link: '/docs/quick-start'
      }
    ]
  },
  {
    label: 'How it works',
    link: '',
    subItems: [
      {
        label: 'The concept',
        link: '/docs/concept'
      },
    ]
  },
  {
    label: 'Creating a form',
    link: '',
    subItems: [
      {
        label: 'Native elements',
        link: '/docs/native-elements'
      },
      {
        label: 'Custom components',
        link: '/docs/custom-components'
      },
      {
        label: 'Form validation',
        link: '/docs/form-validation'
      }
    ]
  },
  {
    label: 'Using your Form',
    link: '',
    subItems: [
      {
        label: 'As onChange form',
        link: '/docs/onchange-form'
      },
      {
        label: 'As debounced form',
        link: '/docs/debounced-form'
      },
      {
        label: 'As onSubmit form',
        link: '/docs/onsubmit-form'
      },
    ]
  },
]



function ActiveLink({ href, children }: any) {
  const { pathname } = useLocation();
  const theme = useContext(ThemeContext)

  const isActive = useMemo(() => pathname === href, [pathname, href])

  return (
    <SubItem className={isActive ? "active" : ''}>
      <GoChevronRight color={isActive ? theme.colors.primary : 'transparent'} />
      <Link to={href} className={isActive ? "active" : ''}>{children}</Link>
    </SubItem>
  )
}


function Sidebar({ open, ...rest }: any) {

  const [expanded, setExpanded] = useState('')


  return (
    <Aside open={open}>
      <Items>
        {
          links.map(link => (
            <Item key={link.label}>
              <span onClick={() => setExpanded('')}>
                {link.label}
              </span>
              {
                expanded === ''
              }
              <SubItems>
                {
                  link.subItems?.map(subItem => (
                    <ActiveLink key={subItem.label} href={subItem.link}>{subItem.label}</ActiveLink>
                  ))
                }
              </SubItems>
            </Item>
          ))
        }
      </Items>
    </Aside>
  );
}

export default Sidebar;