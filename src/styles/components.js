export const Button = {
  variants: {
    solid: {
      background: 'pink.500',
      _hover: { background: 'pink.600' },
    },
    ghost: {
      _hover: { background: 'none' },
    },
    outline: {
      borderColor: 'black.500',
      borderStyle: 'solid',
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
      color: 'ivory.500',
    },
  },
};

export const Text = {
  baseStyle: {
    color: 'black.500',
  },
  variants: {
    secondary: {
      color: 'ivory.500',
    },
  },
};
