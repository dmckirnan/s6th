import React from 'react';
import PropTypes from 'prop-types';
import numeral from 'numeral';

import styles from './ProductListGridCard.scss';

/**
 * Actual Card Component with Product Image, Title, Promotes, Artist Name, and Price
 * @function ProductListGridCard
 * @param {Object} props
 * @return {ReactElement}
 */
const ProductListGridCard = ({
  displayName,
  img,
  price,
  promotes,
  title,
}) => {
  const promotesFormatted = numeral(promotes).format('0,0');
  const priceFormatted = `$${price}`;

  return (
    <div className={styles.productListGridCard}>
      <img className={styles.img} src={img.src} alt={img.alt} />
      <div className={styles.row}>
        <span className={styles.title} title={title}>{title}</span>
        <span className={styles.promotes} title={promotesFormatted}>{promotesFormatted}</span>
      </div>
      <div className={styles.row}>
        <span className={styles.name} title={displayName}>{displayName}</span>
      </div>
      <div className={styles.row}>
        <span className={styles.price} title={priceFormatted}>{priceFormatted}</span>
      </div>
    </div>
  );
};

ProductListGridCard.propTypes = {
  displayName: PropTypes.string.isRequired,
  img: PropTypes.shape({
    alt: PropTypes.string,
    src: PropTypes.string,
  }).isRequired,
  price: PropTypes.number.isRequired,
  promotes: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
};

export default ProductListGridCard;
