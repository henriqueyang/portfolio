import React from 'react';

import Card from '../components/Card';

const Project = () => {
    return (
        <div className="project-page">
            <Card 
                thumbnail="mern-logo.png"
                title="MERN Stack - AirCnC"
                text="Projeto criado com WebPage (ReactJS) e Mobile(ReactNative com Expo) consumindo uma API Rest (NodeJS)."
                images=""
                github="https://github.com/henriqueyang/omnistack"
            />
            <Card 
                thumbnail="react-logo.png"
                title="ReactJS - Portfólio"
                text="Meu portfólio, usando ReactJS, Bootstrap e Sass."
                images="https://imgur.com/a/zCt7R2P"
                github="https://github.com/henriqueyang/portfolio"
            />
            <Card
                thumbnail="mean-logo.png"
                title="MEAN Stack - CRUD"
                text="Aplicação básica usando a stack MEAN (MongoDB, Express, Angular e NodeJS)."
                images="https://imgur.com/a/cmtPHAI"
                github="https://github.com/henriqueyang/MEAN-CRUD"
            />

            <Card
                thumbnail="php-mysql-logo.png"
                title="PHP - CRUD"
                text="API usando PDO, seguindo padrão singleton, para conexão ao MySQL. Front side feito com Angular."
                images="https://imgur.com/a/Lt4uMqI"
                github="https://github.com/henriqueyang/PHP-CRUD"
            />
        </div>
    );
}

export default Project;