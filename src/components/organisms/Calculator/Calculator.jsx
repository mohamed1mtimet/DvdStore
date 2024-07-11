import React, { useState } from "react";
import {
  DISCOUNT_2_MOVIES,
  DISCOUNT_3_MOVIES,
  DISCOUNT_BACK_TO_THE_FUTURE,
  PRICE_BACK_TO_THE_FUTURE,
  PRICE_OTHER_MOVIE,
} from "../../../utils/constants";
import { Form } from "../../molecules";
const Calculator = () => {
  const [totalPrice, setTotalPrice] = useState(0);
  const [listDvds, setListDvds] = useState([]);

  // Function to calculate the total price based on the DVDs in the list
  const calculateTotalPrice = () => {
    setTotalPrice(0); // Reset total price
    const upperDISCOUNT_BACK_TO_THE_FUTURE =
      DISCOUNT_BACK_TO_THE_FUTURE.toUpperCase();

    // Filter DVDs related to "Back to the Future" and count them

    const hasBackToTheFutureMovies = listDvds.filter((item) =>
      item.includes(upperDISCOUNT_BACK_TO_THE_FUTURE)
    );
    const backToTheFutureMoviesCount = hasBackToTheFutureMovies.length;
    // Apply pricing rules based on the number of "Back to the Future" movies
    if (backToTheFutureMoviesCount === 1) {
      setTotalPrice((prev) => prev + PRICE_BACK_TO_THE_FUTURE);
    }
    if (backToTheFutureMoviesCount === 2) {
      setTotalPrice(
        (prev) =>
          prev +
          backToTheFutureMoviesCount *
            PRICE_BACK_TO_THE_FUTURE *
            DISCOUNT_2_MOVIES
      );
    } else if (backToTheFutureMoviesCount >= 3) {
      setTotalPrice(
        (prev) =>
          prev +
          backToTheFutureMoviesCount *
            PRICE_BACK_TO_THE_FUTURE *
            DISCOUNT_3_MOVIES
      );
    }
    // Filter and count other movies

    const otherMovies = listDvds.filter(
      (item) => !item.includes(upperDISCOUNT_BACK_TO_THE_FUTURE)
    );
    if (otherMovies.length > 0) {
      setTotalPrice((prev) => prev + otherMovies.length * PRICE_OTHER_MOVIE);
    }
  };

  return (
    <div className="flex flex-col items-center">
      <Form {...{ setListDvds, calculateTotalPrice }} />
      <div className=" text-center bg-slate-200 rounded-xl p-4 mt-8">
        <span className=" text-base">Prix total:</span>
        <div className=" text-2xl">{totalPrice} €</div>
      </div>
    </div>
  );
};

export default Calculator;
