import React from 'react';
import './AnimalCard.css'
import PropTypes from 'prop-types';

export default function AnimalCard({
  additional,
  diet,
  name,
  scientificName,
  showAdditional,
  size
},

    _propTypes = {
    additional: PropTypes.shape({
      link: PropTypes.string,
      notes: PropTypes.string
    }),
    diet: PropTypes.arrayOf(PropTypes.string).isRequired,
    name: PropTypes.string.isRequired,
    scientificName: PropTypes.string.isRequired,
    showAdditional: PropTypes.func.isRequired,
    size: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
  }
) {
  return (
    <div className="animal-wrapper">
      <h2>{name}</h2>
      <h3>{scientificName}</h3>
      <h4>{size}</h4>
      {/* <div>{diet.join(', ')}.</div> */}
      <button onClick={() => showAdditional(additional)}>More Info</button>
      
    </div>
  );
}