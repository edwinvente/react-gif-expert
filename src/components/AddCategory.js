import React, { useState } from 'react'
import PropTypes from 'prop-types';

export const AddCategory = ({ setCategories }) => {
    const [category, setCategory] = useState('One punch')

    const handleSubmit = (e) => {
        e.preventDefault()
        if (category.trim().length > 2) {
            setCategories(cats => [category, ...cats])
            setCategory('');
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type='text'
                value={category}
                onChange={(e) => setCategory(e.target.value)}
            />
        </form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
};