import React from 'react';

import Button from '../components/Button';

const Home = () => (
  <div className="home-page">
    <div>
      <p className="name">Henrique Lima</p>
      <p className="bio">Desenvolvedor Web & Mobile</p>

      <span>
        <Button name="SOBRE MIM" link="sobre" />
        <Button name="CONHECIMENTO" link="conhecimento" />
        <Button name="CONTATOS" link="contatos" />
      </span>
    </div>
  </div>
);

export default Home;
