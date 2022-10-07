import React from 'react'
import PropTypes from 'prop-types'
import styles from './button.module.scss';

const Button = ({value}) => {
  const { mainBtn } = styles;
  return (
    <button className={mainBtn}>{value}</button>
  )
}

Button.propTypes = {
  value: 'string',
}

export default Button