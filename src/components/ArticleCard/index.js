import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '../../App.css';

import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

export default function ArticleCard (articleContent){
	return (
		<div class="articleCard">
			<Container>
				<Row>
					<Col className="left"><img src={articleContent.articleContent.image.url} alt={articleContent.articleContent.image.alt}></img>
					</Col>
					<Col>
					<Card.Body>
						<Card.Text>
							<p class="articleTitle">{articleContent.articleContent.title}</p>
							<p class="articleDate">{articleContent.articleContent.publishedDate}</p>
							<p>{articleContent.articleContent.blurb}</p>
							<Button variant="link" href={`/article/${articleContent.articleContent.id}`}>Read More</Button>
						</Card.Text>
						</Card.Body>
					</Col>
				</Row>
			</Container>
		</div>
	)
}


