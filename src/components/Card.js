import React, { useState } from "react";
import FullCard from "./FullCard";
import { animated, useSpring } from 'react-spring';

const Card = ( { image } ) => {

  const [isToggle, setIsToggle] = useState(false);

  const handleChange = () => {
    setIsToggle(!isToggle);
  };
  const config = { mass: 5, tension: 2000, friction: 200 };
  const style = useSpring({
    from: { opacity: 0, transform: 'translateX(10px)'},
    to: { opacity: 1, transform: 'translateX(0px)' },
    config: config,
  })

  return (
    <>
      <animated.img
        className="basic-img"
        image={image}
        src={image.url}
        alt={image.public_id}
        onClick={handleChange}
        style={style}
        loading="lazy"
      ></animated.img>
        <div className={isToggle ? "fullcard transition" : "fullcard"} onClick={handleChange}>
          <FullCard handleChange={handleChange} isToggle={isToggle} image={image}/>
        </div>
    </>
  );
};

export default Card;
