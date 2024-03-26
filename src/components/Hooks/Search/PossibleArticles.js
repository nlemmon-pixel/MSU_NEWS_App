import React from 'react';

const PossibleArticles = ({ articles, onClick, highlightedId, setHighlightedId }) => (
  <div style={{ maxHeight: '200px', overflowY: 'auto' }}>
    {articles.map((article) => (
      <div
        key={article.id}
        style={{ backgroundColor: highlightedId === article.id ? '#e0e0e0' : 'transparent' }}
        onClick={() => onClick(article.id)}
        onMouseEnter={() => setHighlightedId(article.id)}
        onMouseLeave={() => setHighlightedId(null)}
      >
        {article.title.rendered}
      </div>
    ))}
  </div>
);

export default PossibleArticles;
