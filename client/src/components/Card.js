import React, { useState } from "react";
import FullCard from "./FullCard";

const Card = ( { image } ) => {

  const [isToggle, setIsToggle] = useState(false);

  const handleChange = () => {
    setIsToggle(!isToggle);
  };

  return (
    <>
      <img
        className="basic-img"
        image={image}
        src={image.url}
        alt={image.public_id}
        onClick={handleChange}
      ></img>
      {isToggle ?
        <div style={{visibility: "visible", opacity: 1, transition: "0.25s"}}>
          <FullCard handleChange={handleChange} isToggle={isToggle} image={image}/>
        </div>
        :
        <div style={{visibility: "hidden", opacity: 0, transition: "0.25s"}}>
          <FullCard handleChange={handleChange} isToggle={isToggle} image={image}/>
        </div>
      }
    </>
  );
};

export default Card;
