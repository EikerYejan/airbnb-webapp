export const theme = {
  colors: {
    primary: "#FF385C",
    text: "#222222",
    textSecondary: "#717171",
  },
  boxShadow: {
    levelOne: "0 1px 2px rgb(0 0 0 / 8%), 0 4px 12px rgb(0 0 0 / 5%)",
  },
  headingTypeScale: {
    md: {
      fontSize: "1rem",
      lineHeight: "28px",
      fontWeight: 700,
    },
    lg: {
      fontSize: "1.5rem",
      lineHeight: "32px",
      fontWeight: 700,
    },
    xl: {
      fontSize: "2rem",
      lineHeight: "40px",
      fontWeight: 700,
    },
  },
  fontSize: {},
  fontWeight: {},
  fontFamily:
    "Circular, -apple-system, BlinkMacSystemFont, Roboto, Helvetica Neue, sans-serif",
};

export type Theme = typeof theme;
