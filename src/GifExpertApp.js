import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One punch'])

    return (
        <div>
            <h2>GifExpertApp</h2>
            <hr />

            <AddCategory setCategories={setCategories} />

            <ul>
                {categories.map(category => {
                    return <GifGrid key={category} category={category} />
                })}
            </ul>

        </div>
    )
}

export default GifExpertApp