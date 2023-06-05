export function paginate(length, currentPage, sortedTourList) {
  const TOUR_PER_PAGE = 6;

  const pages = Math.ceil(length / TOUR_PER_PAGE);

  const StartIndex = (currentPage - 1) * TOUR_PER_PAGE;

  const finishIndex = currentPage * TOUR_PER_PAGE;

  const OrderedTourList = sortedTourList.slice(StartIndex, finishIndex);

  return {
    pages,
    OrderedTourList,
  };
}
