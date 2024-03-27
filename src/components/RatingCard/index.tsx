import Image from 'next/image'
import {
  Author,
  BookInfo,
  CardContent,
  CardHeader,
  Container,
  Description,
  RatingStars,
  Title,
  UserInfo,
  UserText,
} from './styles'
import Link from 'next/link'
import { Star } from '@phosphor-icons/react'

import { Book, Rating, User } from '@prisma/client'
import { getRelativeTimeString } from '@/utils/getRelativeTimeString'

export type RatingWithAuthorAndBook = Rating & {
  user: User
  book: Book
}

type CommentCardProps = {
  rating: RatingWithAuthorAndBook
}

export default function RatingCard({ rating }: CommentCardProps) {
  const distance = getRelativeTimeString(new Date(rating.created_at), 'pt-BR')
  return (
    <Container>
      <CardHeader>
        <UserInfo>
          <Link href={`/profile/${rating.user_id}`}>
            <Image
              src={rating.user.avatar_url!}
              alt=""
              width={38}
              height={38}
            />
          </Link>
          <UserText>
            <>{rating.user.name}</>
            <span>{distance}</span>
          </UserText>
        </UserInfo>
        <RatingStars>
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={`star-${i}`}
              size={16}
              weight={i + 1 <= rating.rate ? 'fill' : 'regular'}
              color="#8381D9"
            />
          ))}
        </RatingStars>
      </CardHeader>

      <CardContent>
        <Link href={`/explore?book=${rating.book_id}`}>
          <Image src={rating.book.cover_url} alt="" width={108} height={152} />
        </Link>
        <BookInfo>
          <Title>{rating.book.name}</Title>
          <Author>{rating.book.author}</Author>
          <Description>{rating.book.summary}</Description>
        </BookInfo>
      </CardContent>
    </Container>
  )
}
