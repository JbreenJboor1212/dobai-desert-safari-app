import { useState } from "react";
import Banner from "../../components/Banner/Banner";
import HeroHeader from "../../components/hero-header/HeroHeader";
import NewsLetter from "../../components/news-letter/NewsLetter";
import Pagination from "../../components/pagination/Pagination";
import Services from "../../components/services/Services";
import SortInput from "../../components/sort-input/SortInput";
import { sort } from "../../components/sort/sort";
import ToursList from "../../components/tours/ToursList";
import { paginate } from "../../components/utils/pagination";
import { toursList } from "../../data.js";

const Home = () => {
  const [sortItem, setSortItem] = useState("Recommended");
  const [currentPage, setCurrentPage] = useState(1);

  /*  const TOUR_PER_PAGE = 6;

  const pages = Math.ceil(toursList.length / TOUR_PER_PAGE);

  const StartIndex = (currentPage - 1) * TOUR_PER_PAGE;

  const finishIndex = currentPage * TOUR_PER_PAGE;
 
   const sortedTourList =
    sortItem === "Low"
      ? toursList.sort((a, b) => a.priceFrom - b.priceFrom)
      : sortItem === "High"
      ? toursList.sort((a, b) => b.priceFrom - a.priceFrom)
      : toursList.sort((a, b) => b.rating - a.rating); 

   const OrderedTourList = sortedTourList.slice(StartIndex, finishIndex); */

  /* ---- Refactor Sort-------------- */
  const { sortedTourList } = sort(sortItem, toursList);

  /* ---- Refactor Pagination */
  const { pages, OrderedTourList } = paginate(
    toursList.length,
    currentPage,
    sortedTourList
  );

  return (
    <>
      <HeroHeader />
      <Services />
      <SortInput
        toursLength={toursList.length}
        setSortItem={setSortItem}
        sortItem={sortItem}
      />
      <ToursList toursList={OrderedTourList} />
      <Pagination
        pages={pages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
      <Banner />
      <NewsLetter />
    </>
  );
};

export default Home;
