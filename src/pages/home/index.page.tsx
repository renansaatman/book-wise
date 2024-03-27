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
  TrendingWrapper,
} from './styles'
import Link from 'next/link'
import RatingCard, { RatingWithAuthorAndBook } from '@/components/RatingCard'
import BookCard, { BookWithAvgRating } from '@/components/BookCard'
import { useQuery } from '@tanstack/react-query'
import { api } from '@/lib/axios'

export default function Home() {
  const { data: ratings } = useQuery<RatingWithAuthorAndBook[]>({
    queryKey: ['latest-ratings'],
    queryFn: async () => {
      const { data } = await api.get('/ratings/latest')
      return data?.ratings ?? []
    },
  })

  const { data: popularBooks } = useQuery<BookWithAvgRating[]>({
    queryKey: ['popular-books'],
    queryFn: async () => {
      const { data } = await api.get('/books/popular')
      return data?.books ?? []
    },
  })

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
              {ratings?.map((rating) => (
                <RatingCard key={rating.id} rating={rating} />
              ))}
            </BookCards>
          </BooksRatings>
          <TrendingBooks>
            <Label>
              <span>Livros populares</span>
              <Link href="/explore">
                Ver mais
                <CaretRight />
              </Link>
            </Label>
            <TrendingWrapper>
              {popularBooks?.map((book) => (
                <BookCard key={`popular-${book.id}`} book={book} />
              ))}
            </TrendingWrapper>
          </TrendingBooks>
        </BooksContainer>
      </Container>
    </Layout>
  )
}
