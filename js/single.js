import { renderCurrencyItem } from "./markups.js";
import state from "./state.js";
import variables from "./variables.js";

const { success, currentCurrency } = variables;

const insertCurrencies = () => {
  const { currency } = state;
  const { conversion_rates: rates, base_code: baseCode } = currency;

  currentCurrency.innerHTML = renderCurrencyItem(currency);
};

export const fetchLatest = async () => {
  const {
    url,
    currency: { code },
  } = state;

  if (!code) return;

  try {
    const response = await fetch(`${url}/latest/${code}`);
    const data = await response.json();

    if (data.result === success) {
      state.currency = { ...state.currency, ...data };
      insertCurrencies();
    }
  } catch (err) {
    console.log(err);
  }
};
