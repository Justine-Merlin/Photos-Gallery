import React from 'react';

const FullCard = ({ handleChange, image }) => {

    return (
        <div
            className="fullscreen-container"
            onClick={handleChange}
        >
            <div>
              <img
                src={image.url}
                alt={image.public_id}
                onClick={handleChange}
              ></img>
            </div>
        </div>
    );
};

export default FullCard;