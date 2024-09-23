export const groupProductsByFarm = (products) => {
  return products.reduce((acc, product) => {
    const farmId = product.farm.id;
    if (!acc[farmId]) {
      acc[farmId] = {
        farm: product.farm,
        products: [],
      };
    }
    acc[farmId].products.push(product);
    return acc;
  }, {});
};
