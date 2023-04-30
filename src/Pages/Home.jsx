import React, { useEffect, useState } from 'react';
import NewsCard from './Shared/News/NewsCard/NewsCard';

const Home = () => {

    const [news, setNews] = useState([]);

    useEffect(()=>{

        fetch('http://localhost:5000/news')
        .then(res => res.json())
        .then(data => setNews(data))

    }, [])

    return (
        <div>
            {
                news.map(n => <NewsCard key={n._id} news={n}></NewsCard>)
            }
             
        </div>
    );
};

export default Home;