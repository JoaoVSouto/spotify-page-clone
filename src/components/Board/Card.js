import React from 'react';

import { MdPlayCircleOutline } from 'react-icons/md';

const Card = ({ img, title, paragraph, rounded }) => (
  <div className="cards-grid__card">
    <div className="img-container">
      <div
        className={`img ${rounded ? 'rounded' : ''}`}
        style={{ backgroundImage: `url(${img})` }}>
        <div className="overlay">
          <MdPlayCircleOutline />
        </div>
      </div>
    </div>
    <strong>{title}</strong>
    {paragraph && <p>{paragraph}</p>}
  </div>
);

export default Card;
