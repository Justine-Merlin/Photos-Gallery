import { useEffect, useState } from 'react';
import { filteredImages, getImages } from '../api';
import Card from './Card';
import Loading from './Loading';
import CheckboxFilter from './CheckboxFilter';

const Collection = () => {

    const [imageList, setImageList] = useState([]);
    const [filterValue, setFilterValue] = useState('');
    const [nextCursor, setNextCursor] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const checkboxsFilter = [
        {id: 0, label: "Objets"},
        {id: 1, label: "Mariages"},
        {id: 2, label: "Portrait"}, 
        {id: 3, label: "Paysages"}];

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
            setNextCursor(responseJson.next_cursor);
        } else {
            const responseJson = await getImages(nextCursor);
            setImageList((currentImageList) => [
                ...currentImageList, 
                ...responseJson.resources
            ]);
            setNextCursor(responseJson.next_cursor);
        }
    };
    useEffect(() => {
        const fetchData = async () => {
            setImageList([]);
            setIsLoading(false);
            if(filterValue !== '') {
                const responseJson = await filteredImages(filterValue);
                setImageList(responseJson.resources);
                setNextCursor(responseJson.next_cursor);
                setTimeout(() => {
                    setIsLoading(true);                    
                }, 200);
            } else {
                const responseJson = await getImages(nextCursor);
                setImageList(responseJson.resources);
                setNextCursor(responseJson.next_cursor);
                setTimeout(() => {
                    setIsLoading(true);                    
                }, 500);
            }
        };
        fetchData();    
    }, [filterValue]) // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div className="collection">
            <div className="filter">
                {checkboxsFilter.map((checkbox) => (
                    <CheckboxFilter 
                        key={checkbox.id} 
                        checkbox={checkbox} 
                        handleFilterImage={handleFilterImage} 
                        filterValue={filterValue}
                    />
                ))}
            </div>
            <div className="gallery">
                <div className='image-grid'>           
                    {isLoading ?
                        imageList.map((image) => (
                            <div className="img-container" key={image.asset_id} >
                                <Card image={image} />
                            </div>
                    )) : 
                        <Loading />
                    }
                </div>
                {nextCursor && <button onClick={handleLoadMoreButtonClick}>Voir plus</button>}
            </div>
        </div>
    )};
export default Collection;