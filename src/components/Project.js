import React from 'react';

import Card from './Card';

const Project = () => {
    return (
        <div className="project-page">
            <Card 
                thumbnail="react-logo.png"
                title="ReactJS - Portfólio"
                text="Meu portfólio, usando ReactJS, Bootstrap e Sass."
                images="https://imgur.com/a/zCt7R2P"
                github="https://github.com/henriqueyang/Reactjs-Portfolio"
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