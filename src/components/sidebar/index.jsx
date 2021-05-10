import React, { useContext, useMemo, useState } from 'react';
import Link from 'next/link'
import { useRouter } from 'next/router'
import { GoChevronRight } from "react-icons/go";
import { ThemeContext } from 'styled-components';

import { Aside, Item, Items, SubItems, SubItem } from './styles';

const links = [
  {
    label: 'Introduction',
    link: '',
    subItems: [
      {
        label: 'Quick Start',
        link: '/docs/quick-start'
      }
    ]
  },
  {
    label: 'API',
    link: '',
    subItems: [
      {
        label: '<ContextForm>',
        link: '/docs/context-form-api'
      },
      {
        label: 'useValidation()',
        link: '/docs/use-validation-api'
      },
      {
        label: 'useForm()',
        link: '/docs/use-form-api'
      },
      {
        label: 'useFormContext()',
        link: '/docs/use-form-context-api'
      },
    ]
  },
  {
    label: 'Examples',
    link: '',
    subItems: [
      {
        label: 'How to use',
        link: '/docs/usage/first-item'
      },
      {
        label: 'Debounced form',
        link: '/docs/usage/second-item'
      },
      {
        label: 'Uncontrolled form',
        link: '/docs/usage/last-item'
      },
    ]
  },
]


function ActiveLink({ href, children }) {
  const router = useRouter()
  const theme = useContext(ThemeContext)

  const isActive = useMemo(() => router.pathname === href, [router.pathname, href])

  return (
    <SubItem className={isActive && "active"}>
      <GoChevronRight color={isActive ? theme.colors.primary : 'transparent'} />
      <Link href={href} className={isActive && "active"}>{children}</Link>
    </SubItem>
  )
}


function Sidebar({ open, ...rest }) {

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