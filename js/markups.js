export const renderResult = ({ code, amount, full }) => {
  return `
      <div class="form-result__item-icon icon">
           <img src="./images/arrow.svg" alt="Arrow" />
       </div>

        <div class="form-result__item-titles">
         <div class="form-result__item-title">${code}</div>
        <div class="form-result__item-title">
        ${full}
          </div>
       </div>
       <div class="form-result__item-value">${amount.toFixed(2)}</div>
         `;
};
