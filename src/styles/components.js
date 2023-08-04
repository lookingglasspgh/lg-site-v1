export const Button = {
  variants: {
    solid: {
      background: 'pink.600',
      boxShadow: '2xl',
      color: 'ivory.400',
      _hover: { background: 'pink.600' },
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
  },
  variants: {
    secondary: {
      color: 'ivory.400',
    },
  },
};
