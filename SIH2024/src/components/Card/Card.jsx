// import React from 'react';
// import './State.css'; // Optional: For additional styling

// // Card Component
// const Card = ({ image, title, description }) => {
//   return (
//     <div className="card hover:bg-orange-300">
//       <img src={image} alt="Card image" className="card-image" />
//       <div className="card-content">
//         <h2 className="card-price">{title}</h2>
//         <p className="card-description flex-auto">{description}</p>
//       </div>
//     </div>
   
//   );
// };

// export default Card;

import React, { useState } from 'react';
import './Card.css'; // Optional: For additional styling

// Card Component
const Card = ({ image, title, description }) => {
  const [showDescription, setShowDescription] = useState(false);

  const handleButtonClick = () => {
    setShowDescription(!showDescription);
  };

  return (
    <div className={`card hover:bg-orange-300 ${showDescription ? 'expanded' : ''}`}>
      <img src={image} alt="Card image" className="card-image" />
      <div className="card-content">
        <h2 className="card-title">{title}</h2>
        {showDescription && (
          <p className="card-description flex-auto">{description}</p>
        )}
        <button onClick={handleButtonClick} className="show-button">
          {showDescription ? 'Hide' : 'Show'} Description
        </button>
      </div>
    </div>
  );
};

export default Card;