// News.js
import React, { useState, useEffect } from 'react';
import './News.css'

const News = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch("https://newsapi.org/v2/top-headlines?country=ng&apiKey=5923c983e11d4d01a29b697669f485a4")
    .then((res) => res.json())
    .then((data) => {
      setArticles(data.articles)
    })

    .catch((error) => {
      // It's good to handle errors in some way
      console.error("Error fetching articles:", error);
    });
  }, []);
  

  return (
      <div className='article'>
        {articles.map((article, index) => (
          <div className='key' key={index}>
            <img 
              src={article.urlToImage} 
              alt={article.title} 
              onError={(e) => { e.target.onerror = null; e.target.src = 'default-image.jpg'; }} 
            />
            <h2>{article.title}</h2>
            <h3>{article?.source?.name}</h3>
            <p>{article.description}</p>
            <button onClick={() => window.location.href = article.url} className='btn'>Read More</button>
          </div>
        ))}
      </div>
    );    
};

export default News;
