const convertToCelsius = function(temp) {
    const fToC = (temp - 32) * 0.555555555;
    return Math.round(fToC * 10) / 10;
};

const convertToFahrenheit = function(temp) {
  const cToF = (temp * 1.8) + 32;
  return Math.round(cToF * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
