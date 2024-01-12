import { styled } from '../../stitches.config'

export const Container = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  margin: '$5',
  gap: '14.125rem',
})

export const Content = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$10',
})

export const TextContent = styled('div', {})

export const Title = styled('h1', {
  fontSize: '$2xl',
  lineHeight: '$short',
})

export const Text = styled('p', {
  color: '$gray200',
  fontSize: '$md',
  lineHeight: '$base',
})

export const Buttons = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$4',
})

export const Button = styled('button', {
  padding: '$5 $6',
  width: '23.25rem',

  display: 'flex',
  alignItems: 'center',
  gap: '$5',

  fontSize: '$lg',
  lineHeight: '$base',

  backgroundColor: '$gray600',
  color: '$gray200',
  border: 0,
  borderRadius: 8,

  cursor: 'pointer',
  transition: 'background-color .2s',

  '&:hover': {
    backgroundColor: '$gray500',
  },
})
