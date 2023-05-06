import React from 'react';

const FullCard = ({ handleChange, image }) => {

    return (
            <div onClick={handleChange}>
              <img
                src={image.url}
                alt={image.public_id}
                onClick={handleChange}
              ></img>
            </div>
    );
};

export default FullCard;