import React from 'react';
import RatingWidget from './RatingWidget';
import PropTypes from 'prop-types';


function ProductCard({ product, onRatingSubmit }) {
  const { id, name, description, image, avgRating } = product;

  return (
    <div className="product-card">
      <img src={image} alt={name} className="product-image" />
      <h2>{name}</h2>
      <p>{description}</p>
      <p>Average Rating: {avgRating.toFixed(1)} ⭐</p>
      
      {/* Rating widget with required props */}
      <RatingWidget
        productId={id}
        onRatingSubmit={onRatingSubmit}
      />
    </div>
  );
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.string,
    avgRating: PropTypes.number
  }).isRequired,
  onRatingSubmit: PropTypes.func.isRequired
};

export default ProductCard;
