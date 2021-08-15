import React, { useEffect, useState } from 'react';
import { getImages } from '../api';

const Collection = () => {
    const [imageList, setImageList] = useState([]);
    const [nextCursor, setNextCursor] = useState(null);
    const [filterValue, setFilterValue] = useState([]);
    
    const checkboxsFilter = [
        {id: 0, label: "Objets"},
        {id: 1, label: "Mariages"},
        {id: 2, label: "Portrait"}, 
        {id: 3, label: "Paysages"}];

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
    // const handleFilterImages = async () => {
    //     const responseJson = await filteredImages(filterValue, nextCursor);
    //     setImageList(responseJson.resources);
    //     setNextCursor(responseJson.next_cursor)   
    // }
    console.log(imageList)
    return (
        <div className="collection">
            <div className="filter">
                {checkboxsFilter.map((checkbox) => {
                    return (
                        <li key={checkbox.id}>
                            <input 
                                type="checkbox"
                                value={checkbox.label} 
                                id={checkbox.label}
                                onChange={(e) => {
                                    if(e.target.checked) {
                                        setFilterValue([...filterValue, checkbox.label])
                                    } else {
                                        setFilterValue(
                                            filterValue.filter(element => element !== e.target.value)
                                        )
                                    }
                                
                                    // handleFilterImages()
                                }}
                            />
                            <label htmlFor={checkbox.label}>{checkbox.label}</label>
                        </li>
                    )
                })}
            </div>
            <div className="gallery">
                <div className='image-grid'>
                    {imageList
                    .filter((image) => image.public_id.includes(filterValue)) 
                    .map((image) => (
                        <div className="img-container" key={image.asset_id}>
                            <img src={image.url} alt={image.public_id}></img>
                        </div>
                    ))}
                </div>
                {nextCursor && <button onClick={handleLoadMoreButtonClick}>Voir plus</button>}     
            </div>
        </div>
    );
};

export default Collection;