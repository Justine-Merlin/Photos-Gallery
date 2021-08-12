import React, { useEffect, useState } from 'react';
import { getImages } from '../api';

const Collection = () => {
    const [imageList, setImageList] = useState([]);
    const [nextCursor, setNextCursor] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const responseJson = await getImages();
            setImageList(responseJson.resources);
            setNextCursor(responseJson.next_cursor)
        }
        fetchData();   
    }, [])

    const handleLoadMoreButtonClick= async () => {
        const responseJson = await getImages(nextCursor);
        setImageList((currentImageList) => [
            ...currentImageList, 
            ...responseJson.resources
        ]);
        setNextCursor(responseJson.next_cursor)
    };
    return (
        <div className="gallery">
            <div className='image-grid'>
                {imageList.map((image) => (
                    <div className="img-container" key={image.asset_id}>
                        <img src={image.url} alt={image.public_id}></img>
                    </div>
                ))}
            </div>
            {nextCursor && <button onClick={handleLoadMoreButtonClick}>Voir plus</button>}     
        </div>
    );
};

export default Collection;