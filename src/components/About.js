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
          <img src={require("../img/eu.png")} alt="foto" />
        </div>

        <div className="my-info">
          <p>20 anos de idade</p>
          <p>Perus - São Paulo - SP</p>
        </div>
      </div>

      <div className="second-container">
        <div>
          <header>Sobre mim</header>
          <span>
            <p>
              Estudante, dedico meu dia ao estudo autodidático de programação e
              inglês, e à noite vou à faculdade. Já virou rotina, mas nem sempre
              gostei de estudar, conhecer programação na faculdade foi
              fundamental para essa repentina mudança. E sempre que possível,
              tento ir em meetups com palestras sobre programação.
            </p>
            <p>
              Embora tenha dado prefêrencia inicial ao Front, gosto e pretendo
              também trabalhar com Back-End, se houver oportunidade.
            </p>
          </span>
        </div>

        <div>
          <header>Escolaridade</header>
          <span>
            <p>
              Cursando segundo semestre de Análise e Desenvolvimento de Sistemas
              no período noturno do Centro Universitário UNIBTA.
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
              Jovem Aprendiz na E.E. Manuel Bandeira, admitido no segundo
              semestre de 2014 até o término do contrato no fim de 2015,
              exercendo a função de um dos administradores da sala de
              informática da escola e auxiliando professores em aulas na
              informática.
            </p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default About;
