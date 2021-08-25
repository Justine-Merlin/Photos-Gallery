import { useEffect, useState } from 'react';
import { getImages } from '../api';
import Card from './Card';

const Collection = () => {

    const [imageList, setImageList] = useState([]);
    const [filterValue, setFilterValue] = useState('');

    const checkboxsFilter = [
        {id: 0, label: "Objets"},
        {id: 1, label: "Mariages"},
        {id: 2, label: "Portrait"}, 
        {id: 3, label: "Paysages"}];

    useEffect(() => {
        const fetchData = async () => {
            const responseJson = await getImages();
            setImageList(responseJson.resources);
        };
        fetchData();   
    }, [])

    const handleFilterImage = (e) => {
        if(filterValue === '' || e.target.value !== filterValue) {
            setFilterValue(e.target.value);
            e.target.checked =true
        } else {
            setFilterValue('');
            e.target.checked = false
        }
    }
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
                        .filter((image) => image.public_id.includes(filterValue)) 
                        .map((image) => (
                            <Card image={image} key={image.asset_id}/>
                    ))}
                </div>
            </div>
        </div>
    )};

export default Collection;