export const currencyFormat = (number) => {
  if (typeof number !== "number" || isNaN(number)) {
    throw new Error("Input must be a valid number");
  }
  return new Intl.NumberFormat("id-ID").format(Math.floor(number));
};
