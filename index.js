const fs = require('fs');
const inquirer = require('inquirer');
const { Triangle, Square, Circle } = require('./lib/shapeClass.js');

const questions = [
    {
        type: 'input',
        message: 'Enter text',
        name: 'text',
    },
    {
        type: 'input',
        message: 'Choose a color',
        name: 'color',
    },
    {
        type: 'list',
        message: 'Choose a shape',
        choices: ['circle', 'triangle', 'square'],
        name: 'shapes',
    },
];

inquirer
    .prompt(questions)
    .then((data) => {

        const { text, color, shapes } = data;

        if (shapes === "circle") {
            const newCircle = new Circle(`${text}`, `${color}`, `${shapes}`);
            newCircle.render();
            createFile = newCircle.render();

        } else if (shapes === "triangle") {
            const newTriangle = new Triangle(`${text}`, `${color}`, `${shapes}`);
            newTriangle.render();
            createFile = newTriangle.render();

        } else if (shapes === "square") {
            const newSquare = new Square(`${text}`, `${color}`, `${shapes}`);
            newSquare.render();
            createFile = newSquare.render();
        }

        fs.writeFile("logo.svg", createFile, (err) => {
            if (err) {
                console.log(err);
            } else {
                console.log("Logo.svg generated");
            }
        });
});
