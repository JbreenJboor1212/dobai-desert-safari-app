


export function sort(sortItem, toursList) {
  const sortedTourList =
    sortItem === "Low"
      ? toursList.sort((a, b) => a.priceFrom - b.priceFrom)
      : sortItem === "High"
      ? toursList.sort((a, b) => b.priceFrom - a.priceFrom)
      : toursList.sort((a, b) => b.rating - a.rating);
  return {
    sortedTourList,
  };
}
