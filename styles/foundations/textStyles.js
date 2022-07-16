export const FONT_WEIGHT = {
  BOLD: "bold",
  SEMI: 600,
  NORMAL: "normal",
};

const textStyles = {
  h1: {
    color: "black",
    mb: "1rem",
  },
  subheading: {
    fontWeight: FONT_WEIGHT.BOLD,
    color: "black",
    fontSize: "1.1rem",
  },
  text: {},
  error: {
    fontSize: "0.75rem",
    color: "danger",
    fontWeight: FONT_WEIGHT.SEMI,
    ml: "1rem",
    userSelect: "none",
  },
};

export default textStyles;
