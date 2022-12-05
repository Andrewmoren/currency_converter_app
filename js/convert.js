import state from "./state.js";

export const handleChange = ({ target: { value, name } }) => {
  state.pair = {
    ...state.pair,
    [name]: value,
  };
};

export const handleInput = ({ target: { value, name } }) => {
  state[name] = Number(value);
};

export const handleSubmit = async (e) => {
  e?.preventDefault();

  const {
    url,
    amount,
    pair: { from, to },
  } = state;

  state.loading = true;

  if (!amount || !from || !to) return;

  try {
    const response = await fetch(`${url}/pair/${from}/${to}/${amount}`);
    const data = await response.json();

    state.loading = false;

    console.log(data);
  } catch (error) {
    console.log(error);
  }
};
