import React from 'react';
import { Link } from 'react-router-dom';

const Button = (props) => {
    return (
        <div className="button-container">
            <Link to={props.link}>
                <button className="btn-blue">
                    {props.name}
                </button>
            </Link>
        </div>
    );
}

export default Button;