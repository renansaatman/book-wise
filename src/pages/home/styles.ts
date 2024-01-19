import { styled } from '@/stitches.config'

export const Container = styled('main', {
  margin: '$13 24rem',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '$10',
})
export const PageTitle = styled('h1', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '$3',

  fontSize: '$2xl',
  lineHeight: '$short',
})

export const Label = styled('div', {
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  fontSize: '$sm',
  lineHeight: '$base',
  marginBottom: '$4',

  a: {
    textDecoration: 'none',
    color: '$purple100',
    fontWeight: '$bold',

    display: 'flex',
    gap: '$2',
    alignItems: 'center',
  },
})

export const BooksContainer = styled('div', {
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  gap: '$16',
})

export const BooksRatings = styled('div', {
  width: '38rem',
})

export const BookCards = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$3',
})

export const TrendingBooks = styled('div', {})
