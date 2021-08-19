import React from 'react';

const Article = ({ title, imageUrl, author, category, text, onGoBack }) => (
  <article>
    <h2>{title}</h2>
    <img src={imageUrl} alt={title} />
    <p>
      <b>Author: {author}</b>
    </p>
    <p>
      <b>Catgory: {category}</b>
    </p>
    <p>{text}</p>
    <button type="button" onClick={onGoBack}>
      Back to articles
    </button>
  </article>
);

export default Article;
