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

export const convertTime = (date) => {
  const options = {
    year: "numeric",
    mounth: "long",
    day: "numeric",
  };

  return new Intl.DateTimeFormat("en-US", options).format(new Date(date));
};
