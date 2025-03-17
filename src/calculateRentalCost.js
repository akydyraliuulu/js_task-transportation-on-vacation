/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  let totalCost = 0;

  for (let i = 1; i <= days; i++) {
    totalCost += 40;
  }

  if (days >= 7) {
    totalCost -= 50;
  } else if (days >= 3) {
    totalCost -= 20;
  }

  return totalCost;
}

module.exports = calculateRentalCost;
