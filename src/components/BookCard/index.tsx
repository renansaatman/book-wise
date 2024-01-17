import Image from 'next/image'
import {
  Author,
  BookInfo,
  CardContent,
  CardHeader,
  Container,
  Description,
  Rating,
  Title,
  UserInfo,
  UserText,
} from './styles'
import Link from 'next/link'
import { Star } from '@phosphor-icons/react'

import bookImage from '@/public/images/o-hobbit.png'

export default function BookCard() {
  return (
    <Container>
      <CardHeader>
        <UserInfo>
          <Link href="#">
            <Image
              src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              width={38}
              height={38}
            />
          </Link>
          <UserText>
            <>Jaxson Dias</>
            <span>Hoje</span>
          </UserText>
        </UserInfo>
        <Rating>
          <Star size={16} weight="fill" color="#8381D9" />
          <Star size={16} weight="fill" color="#8381D9" />
          <Star size={16} weight="fill" color="#8381D9" />
          <Star size={16} weight="fill" color="#8381D9" />
          <Star size={16} color="#8381D9" />
        </Rating>
      </CardHeader>

      <CardContent>
        <Link href="#">
          <Image src={bookImage} alt="" width={108} height={152} />
        </Link>
        <BookInfo>
          <Title>O Hobbit</Title>
          <Author>J.R.R Tolkien</Author>
          <Description>
            Semper et sapien proin vitae nisi. Feugiat neque integer donec et
            aenean posuere amet ultrices. Cras fermentum id pulvinar varius leo
            a in. Amet libero pharetra nunc elementum fringilla velit ipsum. Sed
            vulputate massa velit nibh
          </Description>
        </BookInfo>
      </CardContent>
    </Container>
  )
}
