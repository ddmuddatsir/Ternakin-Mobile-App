export const currencyFormat = (number) => {
  if (typeof number !== "number") {
    throw new Error("Input must be a number");
  }
  return new Intl.NumberFormat("id-ID").format(Math.floor(number));
};
