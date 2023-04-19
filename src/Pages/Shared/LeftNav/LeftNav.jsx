import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftNav = () => {

    const [categories, setCategories] = useState([]);

    useEffect(() => {

        fetch('http://localhost:5000/categories')
        .then(res => res.json())
        .then(data => setCategories(data))

    }, [])


    return (
        <div>
            <h1 className='fs-4 fw-bold mb-4 text-secondary'>All Categories</h1>
            <div className='d-flex flex-column'>

                

                {
                    categories.map(category => <p key={category.id}><Link className='text-reset text-decoration-none ps-5 fs-5 fw-semibold' to={`/category/${category.id}`}>{category.name}</Link></p>)
                }
            </div>
        </div>
    );
};

export default LeftNav;