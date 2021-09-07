import React from 'react';

const Card = (props) => {
    const { image } = props;


    return (
            <img src={image.url} alt={image.public_id}></img>  
    )
};

export default Card;