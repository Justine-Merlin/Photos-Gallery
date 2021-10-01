
import React, { useState } from "react";
import FullCard from "./FullCard";

const Card = ({ image }) => {
  console.log({image});
  const [isToggle, setIsToggle] = useState(false);

  const handleChange = () => {
    setIsToggle(!isToggle);
  }

  return (
    <>
        <img
          className="basic-img"
          image={image}
          src={image.url}
          alt={image.public_id}
          onClick={handleChange}
        ></img>
      <FullCard handleChange={handleChange} isToggle={isToggle} image={image}/>

    </>
  );
};

export default Card;
