import Image from 'next/image'
import { Author, CardInfo, Container, Rating, TextInfo, Title } from './styles'

import bookImage from '@/public/images/o-hobbit.png'
import { Star } from '@phosphor-icons/react'

export default function BookCard() {
  return (
    <Container href="#">
      <Image src={bookImage} alt="" width={64} height={94} />
      <CardInfo>
        <TextInfo>
          <Title>O Hobbit</Title>
          <Author>J.R.R Tolkien</Author>
        </TextInfo>
        <Rating>
          <Star size={16} weight="fill" color="#8381D9" />
          <Star size={16} weight="fill" color="#8381D9" />
          <Star size={16} weight="fill" color="#8381D9" />
          <Star size={16} weight="fill" color="#8381D9" />
          <Star size={16} color="#8381D9" />
        </Rating>
      </CardInfo>
    </Container>
  )
}
