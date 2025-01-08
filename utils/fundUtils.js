import { currencyFormat } from "./currencyFormat";
import { GlobalStyles } from "../constants/style";

export const getLevelIcon = (level) => {
  switch (level) {
    case "Beginner":
      return "signal-cellular-1";
    case "Intermediate":
      return "signal-cellular-2";
    default:
      return "signal-cellular-3";
  }
};

export const getPriceColor = (price) => {
  return price === "Free"
    ? GlobalStyles.colors.success500
    : GlobalStyles.colors.primary100;
};

export const getPriceDisplay = (price) => {
  return price === "Free" ? "Free" : `Rp${currencyFormat(price)}`;
};
