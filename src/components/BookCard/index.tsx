import Image from 'next/image'
import { Author, CardInfo, Container, Rating, TextInfo, Title } from './styles'

import bookImage from '@/public/images/o-hobbit.png'
import { Star } from '@phosphor-icons/react'
import { Book } from '@prisma/client'

export type BookWithAvgRating = Book & {
  avgRating: number
}

type BookCardProps = {
  book: BookWithAvgRating
}

export default function BookCard({ book }: BookCardProps) {
  return (
    <Container href="#">
      <Image src={book.cover_url} alt="" width={64} height={94} />
      <CardInfo>
        <TextInfo>
          <Title>{book.name}</Title>
          <Author>{book.author}</Author>
        </TextInfo>
        <Rating>
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={`star-${i}`}
              size={16}
              weight={i + 1 <= book.avgRating ? 'fill' : 'regular'}
              color="#8381D9"
            />
          ))}
        </Rating>
      </CardInfo>
    </Container>
  )
}
