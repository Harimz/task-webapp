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
    nav: {
      display: "flex",
      gap: "0.5rem",
      color: "gray.400",
      // width: "8rem",
      backgroundColor: "transparent",
      _hover: {
        backgroundColor: "transparent",
        color: "primary.200",
        _after: {
          width: "100%",
        },
      },
      position: "relative",
      alignItems: "center",
      _after: {
        content: '""',
        position: "absolute",
        backgroundColor: "primary.200",
        height: "3px",
        width: "0",
        left: 0,
        bottom: "-18px",
        transition: "0.3s",
      },
    },
    navActive: {
      display: "flex",
      gap: "0.5rem",
      color: "gray.400",
      backgroundColor: "transparent",
      color: "primary.200",
      position: "relative",
      alignItems: "center",
      _after: {
        content: '""',
        position: "absolute",
        backgroundColor: "primary.200",
        height: "3px",
        width: "100%",
        left: 0,
        bottom: "-18px",
        transition: "0.3s",
      },
    },
  },
};

export default Button;
