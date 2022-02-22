module.exports = {
  "*.{ts,tsx}": () => {
    return [`turbo run lint type-check --parallel`];
  },
};
