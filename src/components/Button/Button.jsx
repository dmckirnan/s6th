import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import styles from './Button.scss';

/**
 * Reusable <Button /> Component
 * @function Button
 * @param {Object} props
 * @return {ReactElement}
 */
const Button = ({
  className,
  isActive,
  isDisabled,
  onClick,
  style,
  text,
}) => {
  const clickHandler = useCallback(() => {
    return (onClick && (!isActive && !isDisabled))
      ? onClick()
      : null;
  }, [isActive, isDisabled, onClick]);

  return (
    <button
      className={classNames(
        styles.button,
        { [styles.buttonActive]: isActive },
        { [styles.buttonDisabled]: isDisabled },
        className
      )}
      onClick={clickHandler}
      style={style}
      title={text}
      type="button"
    >
      {text}
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  className: PropTypes.string,
  isActive: PropTypes.bool,
  isDisabled: PropTypes.bool,
  style: PropTypes.objectOf(
    PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.number,
      PropTypes.string,
    ]),
  ),
};

Button.defaultProps = {
  className: null,
  isActive: false,
  isDisabled: false,
  style: null,
};

export default Button;
