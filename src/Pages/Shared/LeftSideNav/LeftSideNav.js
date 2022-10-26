import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftSideNav = () => {
    const [categories, setCategories] =useState([])
    
    useEffect(() =>{
        fetch('https://news-portal-server-five.vercel.app/categories')
        .then(res => res.json())
        .then(data => setCategories(data));
    }, [])
    
    return (
        <div>
            <h4>All category</h4>
            <p>Total : {categories.length}</p>

            <div className='ps-4 text-start' >
                {
                    categories.map(category => <p key={category.id}>
                        <Link to={`/category/${category.id}`}>{category.name}</Link>
                    </p>)
                }
            </div>
        </div>
    );
};

export default LeftSideNav;