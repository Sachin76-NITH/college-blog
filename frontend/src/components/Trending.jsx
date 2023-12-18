import React from 'react'

function Trending() {
    const trendingData = [
        '#ReactJS',
        '#WebDevelopment',
        '#CodingCommunity',
        '#TechNews',
        '#JavaScript',
      ];
    
      return (
        <div className="trending-container">
          <h2 className="trending-heading">TRENDING</h2>
          <ul className="trending-list">
            {trendingData.map((trend, index) => (
              <li key={index} className="trending-item">
                {trend}
              </li>
            ))}
          </ul>
        </div>
  )
}

export default Trending
