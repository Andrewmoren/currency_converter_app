const API_KEY = "64d94e195fabb3daaaf753bc";

export default {
  url: `https://v6.exchangerate-api.com/v6/${API_KEY}`,
  state: [],
  pair: {
    from: "",
    to: "",
  },
  amount: "",
  loading: false,
  currentTab: "convert",
  currency: {
    codes: "USD",
  },
};
