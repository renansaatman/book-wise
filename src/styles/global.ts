import { globalCss } from '../../stitches.config'

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
  },

  body: {
    '-webkit-font-smoothing': 'antialiased',
    backgroundColor: '$gray800',
    color: '$gray100',
  },

  'body, input, textarea, button': {
    fontFamily: 'var(--font-nunito)',
    fontWeight: 400,
  },
})
