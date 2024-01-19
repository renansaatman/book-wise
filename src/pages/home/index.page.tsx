import { CaretRight, ChartLineUp } from '@phosphor-icons/react'
import Layout from '../layout'
import {
  BookCards,
  BooksContainer,
  BooksRatings,
  Container,
  Label,
  PageTitle,
  TrendingBooks,
} from './styles'
import Link from 'next/link'
import CommentCard from '@/components/CommentCard'

export default function Home() {
  return (
    <Layout>
      <Container>
        <PageTitle>
          <ChartLineUp size={32} color="#50B2C0" />
          Início
        </PageTitle>

        <BooksContainer>
          <BooksRatings>
            <Label>
              <span>Avaliações mais recentes</span>
            </Label>
            <BookCards>
              <CommentCard />
              <CommentCard />
              <CommentCard />
            </BookCards>
          </BooksRatings>
          <TrendingBooks>
            <Label>
              <span>Livros populares</span>
              <Link href="#">
                Ver mais
                <CaretRight />
              </Link>
            </Label>
          </TrendingBooks>
        </BooksContainer>
      </Container>
    </Layout>
  )
}
