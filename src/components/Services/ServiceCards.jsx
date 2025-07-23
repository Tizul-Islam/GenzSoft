import React, { useState, useEffect } from 'react';
import './Serviceses.css';

const ServiceCards = ({ data }) => {
  const [visibleColumns, setVisibleColumns] = useState(1);
  const [columnsPerRow, setColumnsPerRow] = useState(3);

  // Calculate how many cards to show initially based on screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setColumnsPerRow(3);
      } else if (window.innerWidth < 1200) {
        setColumnsPerRow(3);
      } else {
        setColumnsPerRow(3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Group data into chunks based on current columns per row
  const dataChunks = [];
  for (let i = 0; i < data.length; i += columnsPerRow) {
    dataChunks.push(data.slice(i, i + columnsPerRow));
  }

  const handleLoadMore = () => {
    setVisibleColumns(prev => Math.min(prev + 1, dataChunks.length));
  };

  // Calculate how many cards are currently visible
  const visibleCardsCount = visibleColumns * columnsPerRow;

  return (
    <div className="service-container">
      <div className="card-grid">
        {/* Render all cards up to the visible count */}
        {data.slice(0, visibleCardsCount).map((item) => (
          <div key={item.id} className="card">
            <img src={item.image} alt={item.title} className="card-image" />
            <div className="card-content">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <a href="#" className="read-more">Readmore </a>
            </div>
          </div>
        ))}
      </div>

      {visibleCardsCount < data.length && (
        <div className="load-more-container">
          <button onClick={handleLoadMore} className="load-more-btn">
            Load More ({data.length - visibleCardsCount} remaining)
          </button>
        </div>
      )}
    </div>
  );
};

export default ServiceCards;