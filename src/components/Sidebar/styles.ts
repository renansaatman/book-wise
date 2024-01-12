import { styled } from '@/stitches.config'
import Link from 'next/link'

export const Container = styled('div', {
  background: 'url("/sidebar-background.svg") center/cover no-repeat',
  width: 232,
  height: '96vh',
  padding: '$10 $13 $6',

  borderRadius: '$lg',
  boxShadow: '0 0 10px 4px $gray500',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
})

export const SuperiorArea = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$16',
})

export const NavMenu = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$4',
})

export const NavItem = styled(Link, {
  textDecoration: 'none',
  color: '$gray400',
  display: 'flex',
  gap: '$3',
  alignItems: 'center',
  transition: 'color .2s',
  padding: '$2 0',

  '&:hover': {
    color: '$gray100',
  },

  variants: {
    selected: {
      true: {
        color: '$gray100',
        fontWeight: '$bold',
        position: 'relative',

        '&::before': {
          content: '',
          position: 'absolute',
          width: '4px',
          height: '24px',
          top: 'calc(50% - 24px/2)',
          left: '-20px',
          borderRadius: '$full',
          background: '$gradient-vertical',
        },
      },
    },
  },
})

export const LoginButton = styled('button', {
  background: 'none',
  border: 0,

  display: 'flex',
  gap: '$3',
  justifyContent: 'center',
  alignItems: 'center',

  color: '$gray100',
  fontWeight: '$bold',
  fontSize: '$md',

  padding: '$1',
  cursor: 'pointer',
})
