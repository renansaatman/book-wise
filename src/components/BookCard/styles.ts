import { styled } from '@/stitches.config'
import Link from 'next/link'

export const Container = styled(Link, {
  width: '100%',
  padding: '$4 $5',
  borderRadius: '$md',

  background: '$gray700',

  display: 'flex',
  gap: '$5',

  textDecoration: 'none',
  color: '$gray100',
})

export const CardInfo = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
})

export const TextInfo = styled('div', {})

export const Title = styled('h2', {
  lineHeight: '$short',
  fontSize: '$md',
  fontWeight: '$bold',

  overflow: 'hidden',
  textOverflow: 'ellipsis',
  display: '-webkit-box',
  '-webkit-line-clamp': 2,
  '-webkit-box-orient': 'vertical',
})

export const Author = styled('span', {
  lineHeight: '$base',
  fontSize: '$sm',
  color: '$gray400',
})

export const Rating = styled('div', {
  display: 'flex',
  gap: '$1',
})
