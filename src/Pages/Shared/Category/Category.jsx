import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import NewsCard from '../News/NewsCard/NewsCard';

const Category = () => {
    const {id} = useParams()
    const categoryNews = useLoaderData();

    return (
        <div>
            {
                id && <h3>This Category News: {categoryNews.length}</h3>
            }
            {
                categoryNews.map(n => <NewsCard key={n._id} news={n}></NewsCard>)
            }
        </div>
    );
};

export default Category;