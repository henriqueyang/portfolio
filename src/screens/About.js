import React from "react";

const About = () => {
  return (
    <div className="about-page">
      <div className="first-container">
        <div className="my-info">
          <span>
            <p>Henrique da Silva Lima</p>
            <p>Desenvolvedor Web & Mobile</p>
          </span>
        </div>

        <div className="picture">
          <img src={require("../images/eu.png")} alt="foto" />
        </div>

        <div className="my-info">
          <p>21 anos de idade</p>
          <p>Perus - São Paulo - SP</p>
        </div>
      </div>

      <div className="second-container">
        <div>
          <header>Sobre mim</header>
          <span>
            <p>
              Estudante autodidata de programação e inglês. Embora me interesse outras áreas de TI,
              meu foco é a programação, especialmente com a stack (front e back-end) de JavaScript.     
            </p>
          </span>
        </div>

        <div>
          <header>Escolaridade</header>
          <span>
            <p>
              Cursando o quarto semestre de Análise e Desenvolvimento de Sistemas,
              durante o período matutino, no Centro Universitário UNIBTA.
            </p>
            <p>
              Em 2017, concluí dois semestres de Ciência da Computação na UNIP,
              até que tranquei a matrícula.
            </p>
            <p>
              Em 2015, concluí o Ensino fundamental na E.E. Manuel Bandeira.
            </p>
          </span>
        </div>

        <div>
          <header>Experiência Profissional</header>
          <span>
            <p>
              Estágio em desenvolvimento de software com a stack full JavaScript. 
              Onde pude começar a criar um aplicativo em Ionic que foi em recriado em ReactNative.
              Foram 2 meses de testes, de 08/19 até 10/19, com uma equipe de 4 pessoas numa startup.
            </p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default About;
