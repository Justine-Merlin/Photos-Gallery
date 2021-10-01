import { useEffect, useState } from 'react';
import { filteredImages, getImages } from '../api';
import { useTrail, animated } from 'react-spring';
import Card from './Card';
import Loading from './Loading';

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
    
    const config = { mass: 5, tension: 2000, friction: 200 };


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
    
    const trail = useTrail(imageList.length,{
        config,
        from: { opacity: 0, x: 20 },
        to: { opacity: isLoading ? 1 : 0, x: isLoading ? 0 : 20 }
    });
    // , x: isLoading ? 0 : 20
    // , x: 20
    // (x => `translateX(${x}px)`)
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
                    {isLoading ?
                        trail.map(({ ...otherProps }, i) => (
                            <animated.div 
                                className="img-container"
                                key={imageList[i].asset_id}
                                style={{
                                    ...otherProps,
                                }}
                            >
                                <Card image={imageList[i]} />
                            </animated.div>
                    )) : 
                    <Loading />
                }
                </div>
                {nextCursor && <button onClick={handleLoadMoreButtonClick}>Voir plus</button>}
            </div>
            {/* {imageList.map((image) => (
                <FullCard handleChange={handleChange} isToggle={isToggle} image={image}/>
            ))} */}
        </div>
    )};
export default Collection;