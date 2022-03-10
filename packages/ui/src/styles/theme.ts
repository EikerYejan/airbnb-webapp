export const theme = {
  colors: {
    primary: "#FF385C",
    text: "#222222",
    textSecondary: "#717171",
    bodyBackground: "#F5F5F5",
  },
  boxShadow: {
    default:
      "0px 32px 42px rgba(0, 0, 0, 0.04), 0px 14px 18px rgba(0, 0, 0, 0.03), 0px 6px 10px rgba(0, 0, 0, 0.02), 0px 4px 5px rgba(0, 0, 0, 0.01), 0px 2px 2px rgba(22, 22, 22, 0.01), 0px 0px 16px rgba(0, 0, 0, 0.04)",
    levelOne:
      "0px 2px 24px rgba(0, 0, 0, 0.02), 0px 8px 28px rgba(6, 34, 49, 0.08)",
    levelTwo:
      "0px 2px 12px rgba(32, 34, 35, 0.08), 0px 16px 32px rgba(32, 34, 35, 0.1) ",
    levelThree:
      "0px 2px 24px rgba(6, 34, 49, 0.04), 0px 8px 44px rgba(6, 34, 49, 0.16)",
  },
  headingTypeScale: {
    md: {
      fontSize: "1rem",
      lineHeight: "24px",
      fontWeight: 700,
    },
    mdl: {
      fontSize: "1.25rem",
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
  textTypeScale: {
    sm: {
      fontSize: "0.875rem",
      lineHeight: "20px",
      fontWeight: 400,
    },
    md: {
      fontSize: "1rem",
      lineHeight: "24px",
      fontWeight: 400,
    },
  },
  fontSize: {},
  fontWeight: {},
  fontFamily:
    "Circular, -apple-system, BlinkMacSystemFont, Roboto, Helvetica Neue, sans-serif",
};

export type Theme = typeof theme;
