export const Button = {
  variants: {
    solid: {
      background: 'pink.800',
      boxShadow: '2xl',
      color: 'ivory.300',
      _hover: { background: 'pink.900' },
      _active: { background: 'pink.900' },
    },
    ghost: {
      _hover: { background: 'none' },
      _active: { background: 'none' },
    },
    outline: {
      borderColor: 'black.500',
      borderStyle: 'solid',
      boxShadow: '2xl',
      _hover: { background: 'ivory.600' },
      _active: { background: 'ivory.600' },
    },
  },
};

export const Divider = {
  baseStyle: {
    borderColor: 'black.500',
    borderBottomWidth: '0.5px',
    marginTop: '1rem',
    marginBottom: '1rem',
  },
  variants: {
    secondary: {
      borderColor: 'ivory.500',
      borderStyle: 'solid',
    },
  },
};

export const Heading = {
  baseStyle: {
    color: 'black.500',
    fontFamily: 'heading',
  },
  variants: {
    secondary: {
      color: 'ivory.400',
    },
  },
};

export const Text = {
  baseStyle: {
    color: 'black.500',
    fontFamily: 'body',
  },
  variants: {
    secondary: {
      color: 'ivory.400',
    },
  },
};
