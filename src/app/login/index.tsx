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

import bannerImg from '@/assets/book-wise-banner.png'
import googleLogo from '@/assets/google-logo.svg'
import githubLogo from '@/assets/github-logo.svg'
import rocketLaunch from '@/assets/rocket-launch.svg'

export default function LoginPage() {
  return (
    <Container>
      <Image src={bannerImg} alt="" quality={100} />

      <Content>
        <TextContent>
          <Title>Boas vindas!</Title>
          <Text>Faça seu login ou acesse como visitante.</Text>
        </TextContent>

        <Buttons>
          <Button>
            <Image src={googleLogo} alt="" width={32} height={32} />
            Entrar com Google
          </Button>
          <Button>
            <Image src={githubLogo} alt="" width={32} height={32} />
            Entrar com Github
          </Button>
          <Button>
            <Image src={rocketLaunch} alt="" width={32} height={32} />
            Acessar como visitante
          </Button>
        </Buttons>
      </Content>
    </Container>
  )
}
