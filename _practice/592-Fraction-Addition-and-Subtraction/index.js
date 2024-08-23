// total sam, seems dumb

/**
 * @param {string} expression
 * @return {string}
 */
var fractionAddition = function (expression) {
  // to simplify parsing
  if (expression[0] !== "-") expression = "+" + expression;

  const plusMinus = ["+", "-"];

  let commonDenominator = -1;
  let fractions = [];
  const multipliers = [];

  const splitFraction = (fraction) => fraction.split("/").map(Number);

  const getFractions = () => {
    let i = 0;
    while (i < expression.length) {
      const multiplier = expression[i] === "+" ? 1 : -1;

      let fraction = "";
      i++;
      while (i < expression.length && !plusMinus.includes(expression[i])) {
        fraction += expression[i];
        i++;
      }

      fractions.push(splitFraction(fraction));
      multipliers.push(multiplier);
    }
  };

  const getCommonDenominator = () => {
    for (const [_, denominator] of fractions) {
      commonDenominator = Math.max(commonDenominator, denominator);
    }

    const invalidDenominators = [];
    for (const [_, denominator] of fractions) {
      if (commonDenominator % denominator !== 0)
        invalidDenominators.push(denominator);
    }

    invalidDenominators.sort((a, b) => b - a);
    while (invalidDenominators.length > 0) {
      const cur = invalidDenominators[invalidDenominators.length - 1];
      if (commonDenominator % cur !== 0) commonDenominator *= cur;
      invalidDenominators.pop();
    }
  };

  getFractions();
  getCommonDenominator();

  // update fractions based on common denominator
  fractions = fractions.map(([left, right]) => [
    (left * commonDenominator) / right,
    commonDenominator,
  ]);

  // find resulting numerator
  let numerator = fractions.reduce(
    (acc, cur, i) => acc + cur[0] * multipliers[i],
    0
  );

  // reduce numerator and commonDenominator
  for (let i = Math.abs(numerator); i > 0; i--) {
    if (numerator % i === 0 && commonDenominator % i === 0) {
      numerator /= i;
      commonDenominator /= i;
      break;
    }
  }

  // if result is an integer
  if (numerator % commonDenominator === 0) commonDenominator = 1;

  return `${numerator}/${commonDenominator}`;
};
