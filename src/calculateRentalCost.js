/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  const costPerDay = 40;
  const discount = 50;
  const halfDiscount = 20;

  const discountDays = 7;
  const halfDiscountDays = 3;

  const totalCost = days * costPerDay;

  return days > discountDays
    ? totalCost - discount
    : days > halfDiscountDays
      ? totalCost - halfDiscount
      : totalCost;
}

module.exports = calculateRentalCost;
