import React from 'react';
import Navigation from '../components/Navigation';
import Collection from '../components/Collection';
import FilterBar from '../components/FilterBar';

const Gallery = () => {
    return (
        <div>
            <Navigation />
            <h1>Gallery</h1>
            <FilterBar />
            <Collection />
        </div>
    );
};

export default Gallery;