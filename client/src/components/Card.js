import React from 'react';
import { useSpring, animated } from 'react-spring';

const Card = (props) => {
    const { image } = props;

    const enterEffect = useSpring({
        from: { opacity: 0},
        to: { opacity: 1 },
        config: { duration: 1000 },
      })
    
    return (
        <div className="img-container">
            <animated.img src={image.url} alt={image.public_id} style={{...enterEffect}}></animated.img>
        </div>   
    )
};

export default Card;