import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import NewsCard from '../NewsCard/NewsCard';
import useTitle from '../../../Hooks/useTitle';

const Category = () => {
    const {id} = useParams();
    const categoryNews = useLoaderData();

    useTitle('Home');
    
    return (
        <div>
            {id && <h4>This Category has {categoryNews.length} News</h4>}
            
            {
                categoryNews.map(news => <NewsCard 
                    key={news._id}
                    news = {news}
                ></NewsCard>)
            }
        </div>
    );
};

export default Category;