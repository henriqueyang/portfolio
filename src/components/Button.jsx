import React from 'react';
import { Link } from 'react-router-dom';

const Button = (props) => (
  <div className="button-container">
    <Link to={`/${props.link}`}>
      <button className="btn-blue">{props.name}</button>
    </Link>
  </div>
);

export default Button;
