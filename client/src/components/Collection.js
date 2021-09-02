import { useEffect, useState } from 'react';
import { filteredImages, getImages } from '../api';
import Card from './Card';

const Collection = () => {

    const [imageList, setImageList] = useState([]);
    const [filterValue, setFilterValue] = useState('');
    const [nextCursor, setNextCursor] = useState(null);

    const checkboxsFilter = [
        {id: 0, label: "Objets"},
        {id: 1, label: "Mariages"},
        {id: 2, label: "Portrait"}, 
        {id: 3, label: "Paysages"}];

    useEffect(() => {
        const fetchData = async () => {
            if(filterValue !== '') {
                const responseJson = await filteredImages(filterValue);
                setImageList(responseJson.resources);
                setNextCursor(responseJson.next_cursor);
            } else {
                const responseJson = await getImages(nextCursor);
                setImageList(responseJson.resources);
                setNextCursor(responseJson.next_cursor);
            }
        };
        fetchData();    
    }, [filterValue]) // eslint-disable-line react-hooks/exhaustive-deps

    const handleFilterImage = (e) => {
        if(filterValue === '' || e.target.value !== filterValue) {
            setFilterValue(e.target.value);
            e.target.checked =true
        } else {
            setFilterValue('');
            setNextCursor(null)
            e.target.checked = false
        }
    }
    const handleLoadMoreButtonClick= async () => {
        if(filterValue !== '') {
            const responseJson = await filteredImages(filterValue, nextCursor);
            setImageList((currentImageList) => [
                ...currentImageList, 
                ...responseJson.resources
            ]);
            setNextCursor(responseJson.next_cursor)
        } else {
            const responseJson = await getImages(nextCursor);
            setImageList((currentImageList) => [
                ...currentImageList, 
                ...responseJson.resources
            ]);
            setNextCursor(responseJson.next_cursor)
        }
    };
    return (
        <div className="collection">
            <div className="filter">
            {checkboxsFilter
            .map((checkbox) => (
                <li key={checkbox.id}>
                    <input 
                        type="radio"
                        value={checkbox.label} 
                        id={checkbox.label} 
                        defaultChecked={checkbox !== '' && checkbox.label === filterValue}
                        onClick={handleFilterImage}
                        name="filter"
                    />
                    <label htmlFor={checkbox.label}>{checkbox.label}</label>
                </li>
            ))}
            </div>
            <div className="gallery">
                <div className='image-grid'>
                    {imageList
                        .map((image) => (
                                <Card image={image} key={image.asset_id}/>  
                            )
                        )}
                </div>
                {nextCursor && <button onClick={handleLoadMoreButtonClick}>Voir plus</button>}
            </div>
        </div>
    )};
export default Collection;