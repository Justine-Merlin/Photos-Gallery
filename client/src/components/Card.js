import React, { useState } from "react";
import { useSpring, animated } from "react-spring";

const Card = (props) => {
  const { image } = props;

  const [isToggle, setIsToggle] = useState(false);

  const enterStyle = useSpring({
    from: { opacity: isToggle ? 0 : 1},
    to: { opacity: isToggle ? 1 : 0},
  });

  console.log({image});

  return (
    <>
      {isToggle ? (
        <>
          <img
            className="basic-img"
            image={image}
            src={image.url}
            alt={image.public_id}
          ></img>
          <animated.div
            className="fullscreen-container"
            onClick={() => setIsToggle(!isToggle)}
            style={enterStyle}
          >
            <div>
              <img
                src={image.url}
                alt={image.public_id}
                onClick={() => setIsToggle(!isToggle)}
              ></img>
            </div>
          </animated.div>
        </>
      ) : (
        <img
          className="basic-img"
          image={image}
          src={image.url}
          alt={image.public_id}
          onClick={() => setIsToggle(!isToggle)}
        ></img>
      )}
    </>
  );
};

export default Card;
