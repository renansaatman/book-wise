'use client'
import Image from 'next/image'
import {
  Button,
  Buttons,
  Container,
  Content,
  Text,
  TextContent,
  Title,
} from './styles'

import bannerImg from '@/public/book-wise-banner.png'
import googleLogo from '@/public/google-logo.svg'
import githubLogo from '@/public/github-logo.svg'
import rocketLaunch from '@/public/rocket-launch.svg'
import { useRouter } from 'next/navigation'
import { signIn } from 'next-auth/react'

type LoginPageProps = {
  callbackUrl?: string
}

export default function LoginPage({ callbackUrl = '/home' }: LoginPageProps) {
  const router = useRouter()

  function handleSignIn(provider?: string) {
    if (!provider) {
      router.push(callbackUrl)
      return
    }
    signIn(provider, {
      callbackUrl,
    })
  }

  return (
    <Container>
      <Image src={bannerImg} alt="" quality={100} />

      <Content>
        <TextContent>
          <Title>Boas vindas!</Title>
          <Text>Faça seu login ou acesse como visitante.</Text>
        </TextContent>

        <Buttons>
          <Button onClick={() => handleSignIn('google')}>
            <Image src={googleLogo} alt="" width={32} height={32} />
            Entrar com Google
          </Button>
          <Button onClick={() => handleSignIn('github')}>
            <Image src={githubLogo} alt="" width={32} height={32} />
            Entrar com Github
          </Button>
          <Button onClick={() => handleSignIn()}>
            <Image src={rocketLaunch} alt="" width={32} height={32} />
            Acessar como visitante
          </Button>
        </Buttons>
      </Content>
    </Container>
  )
}
