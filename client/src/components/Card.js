import React from 'react';

const Card = (props) => {
    const { image } = props;

    return (     
        <div className="img-container">
            <img src={image.url} alt={image.public_id} ></img>
        </div>
    )
    
};

export default Card;