import { styled } from '@/stitches.config'

export const Container = styled('div', {
  width: '100%',
  padding: '$6',

  borderRadius: '$md',
  background: '$gray700',

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '$8',
})

export const CardHeader = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  width: '100%',
})

export const UserInfo = styled('div', {
  display: 'flex',
  gap: '$4',
  a: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    background: '$gradient-vertical',
    borderRadius: '$full',

    width: 40,
    height: 40,
  },

  img: {
    borderRadius: '$full',
  },
})

export const UserText = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  lineHeight: '$base',
  span: {
    fontSize: '$sm',
    color: '$gray400',
  },
})

export const Rating = styled('div', {
  display: 'flex',
  gap: '$1',
})

export const CardContent = styled('div', {
  display: 'flex',
  gap: '$5',
})

export const BookInfo = styled('div', {})

export const Title = styled('h2', {
  lineHeight: '$short',
  fontSize: '$md',
  fontWeight: '$bold',
})

export const Author = styled('span', {
  lineHeight: '$base',
  fontSize: '$sm',
  color: '$gray400',
})

export const Description = styled('p', {
  color: '$gray300',
  fontSize: '$sm',
  lineHeight: '$base',
  marginTop: '$5',
})
