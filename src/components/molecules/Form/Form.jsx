import React from "react";
import { Button, Textarea } from "../../atoms";
const Form = ({ setListDvds, calculateTotalPrice }) => {
  // handel changes of textarea
  const handleTextChange = (event) => {
    //create array from teaxt area
    const newCart = event.target.value.split("\n");
    // delete the empty string from array
    const filteredArray = newCart
      .filter((item) => item !== "")
      .map((item) => item.toUpperCase());

    setListDvds(filteredArray);
  };

  return (
    <div className=" flex flex-col items-center ">
      <Textarea
        onChange={handleTextChange}
        placeholder="Movies Name ..."
        className=" min-h-36 min-w-96"
      />
      <Button onClick={() => calculateTotalPrice()} className="mt-3 w-full">
        Calculer le prix total
      </Button>
    </div>
  );
};

export default Form;
