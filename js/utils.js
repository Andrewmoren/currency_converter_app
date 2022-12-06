export const getFullTitle = (codes, code) => {
  const [, title] = codes.find((item) => item.includes(code));
  return title;
};
