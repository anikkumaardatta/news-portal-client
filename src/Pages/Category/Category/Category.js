import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsSummaryCard from '../../Shared/NewsSummaryCard/NewsSummaryCard';

const Category = () => {
    const categoryNewses = useLoaderData();
    console.log(categoryNewses);
    return (
        <div className='my-2'>
            <h2>Total {categoryNewses.length} newses in the category</h2>
            {
                categoryNewses.map(news => <NewsSummaryCard
                    key={news._id}
                    news={news}
                ></NewsSummaryCard>)
            }
        </div>
    );
};

export default Category;