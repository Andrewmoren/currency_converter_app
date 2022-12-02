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

  if (!amount || !from || !to) return;

  try {
    const response = await fetch(`${url}/pair/${from}/${to}`);
    const data = await response.json();

    console.log(data);
  } catch (err) {
    console.log(err);
  }
};
