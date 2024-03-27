import {
  Container,
  NavMenu,
  NavItem,
  LoginButton,
  SuperiorArea,
  UserInfoWrapper,
  ImageWrapper,
} from './styles'
import Image from 'next/image'

import Logo from '@/public/book-wise-logo.svg'
import {
  Binoculars,
  ChartLineUp,
  SignIn,
  SignOut,
  User,
} from '@phosphor-icons/react'
import { useSession } from 'next-auth/react'

export default function Sidebar() {
  const session = useSession()

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
          {session.status === 'authenticated' && (
            <NavItem href="#" selected={false}>
              <User size={24} />
              <span>Perfil</span>
            </NavItem>
          )}
        </NavMenu>
      </SuperiorArea>

      {session.status === 'authenticated' ? (
        <UserInfoWrapper>
          <ImageWrapper>
            <Image
              src={`${session.data.user.avatar_url}`}
              width={32}
              height={32}
              alt=""
            />
          </ImageWrapper>
          <span>{session.data.user.name.split(' ')[0]}</span>
          <LoginButton>
            <SignOut size={24} color="#F75A68" />
          </LoginButton>
        </UserInfoWrapper>
      ) : (
        <LoginButton>
          <span>Fazer login</span>
          <SignIn size={24} color="#50B2C0" />
        </LoginButton>
      )}
    </Container>
  )
}
