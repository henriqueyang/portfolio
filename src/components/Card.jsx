import React from 'react';

const Card = (props) => (
  <div className="card-container">
    <div className="card-box">
      <div className="card-img">
        <img
          src={require(`../images/${props.thumbnail}`)}
          alt="Project"
          className="card-img-top"
        />
      </div>
      <h4>{props.title}</h4>
      <p>{props.text}</p>
      <ul>
        <li>
          <a
            href={props.github}
            target="_blank"
            rel="noopener noreferrer"
            className="fab fa-github"
          >
            {' '}
          </a>
        </li>
        {props.images ? (
          <li>
            <a
              href={props.images}
              target="_blank"
              rel="noopener noreferrer"
              className="fas fa-images"
            >
              {' '}
            </a>
          </li>
        ) : null}
      </ul>
    </div>
  </div>
);

export default Card;
