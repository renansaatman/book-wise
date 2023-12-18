import { globalCss } from '../../stitches.config'

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
  },

  body: {
    '-webkit-font-smoothing': 'antialiased',
    backgroundColor: '$gray700',
    color: '$gray200',
  },

  'body, input, textarea, button': {
    fontFamily: 'var(--font-nunito)',
    fontWeight: 400,
  },
})
