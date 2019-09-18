import React from 'react';
import articleData from '../../components/SiteData/articleData';
import ArticleCard from '../../components/ArticleCard';

export default function Home () {
    return(
        <div>
            <h1>ARTICLES</h1>
            <div className='articleWrapper'>
                {articleData.map((article, i) => (
                    <ArticleCard key={i} articleContent={article} />
			    ))}
            </div>
        </div>
    )
}

