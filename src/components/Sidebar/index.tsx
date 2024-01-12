import {
  Container,
  NavMenu,
  NavItem,
  LoginButton,
  SuperiorArea,
} from './styles'
import Image from 'next/image'

import Logo from '@/public/book-wise-logo.svg'
import { Binoculars, ChartLineUp, SignIn } from '@phosphor-icons/react'

export default function Sidebar() {
  return (
    <Container>
      <SuperiorArea>
        <Image src={Logo} alt="" />

        <NavMenu>
          <NavItem href="#" selected={true}>
            <ChartLineUp size={24} />
            <span>Início</span>
          </NavItem>
          <NavItem href="#" selected={false}>
            <Binoculars size={24} />
            <span>Explorar</span>
          </NavItem>
        </NavMenu>
      </SuperiorArea>

      <LoginButton>
        <span>Fazer login</span>
        <SignIn size={24} color="#50B2C0" />
      </LoginButton>
    </Container>
  )
}
