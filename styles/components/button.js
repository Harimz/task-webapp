const Button = {
  baseStyle: {
    transition: "all 0.3s ease",
  },
  sizes: {},
  variants: {
    primary: {
      bg: "primary.200",
      color: "white",
      _hover: {
        bg: "primary.300",
      },
    },
    ghost: {
      bg: "transparent",
      color: "black",
      _hover: {
        bg: "grey.300",
      },
    },
  },
};

export default Button;
