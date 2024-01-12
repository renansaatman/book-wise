import { ReactNode } from 'react'
import { Container } from './styles'
import Sidebar from '@/components/Sidebar'

type LayoutProps = {
  children: ReactNode
}
export default function Layout({ children }: LayoutProps) {
  return (
    <Container>
      <Sidebar />
      <main>{children}</main>
    </Container>
  )
}
