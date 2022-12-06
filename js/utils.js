export const getFullTitle = (codes, code) => {
  const [, title] = codes.find((item) => item.includes(code));
  return title;
};

export const formatToCurrency = (code, amout) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: code,
    maximumFractionDigits: 2,
  }).format(amout);
};
