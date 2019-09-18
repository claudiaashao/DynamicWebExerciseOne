import React, {useEffect, useState}from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '../App.css';

import articleData from '../components/SiteData/articleData';
import TextBlock from '../components/TextBlock';

function Article (props){
	const routeID = props.match.params.id
	const [article, setArticle] = useState({});

	useEffect(() => {
		for(let i=0; i<articleData.length; i++){
			if (articleData[i].id === routeID){
				setArticle(articleData[i])
			} 
		}
	},[]);



	return (
		<div className="article">

			<div className='header'>
				<p className="title">{article.title}</p>
				<p className="date">{article.publishedDate}</p>
				<p>{article.blurb}</p>
			</div>

			<div className='articleText'>
                {article.articleText && article.articleText.map((text, i) => (
                    <TextBlock key={i} type={text.type} data={text.data} />
			    ))}
            </div>

		</div>
	)
}

export default Article; 