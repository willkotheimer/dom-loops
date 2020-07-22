"use strict";

const colors = ['red', 'orange', 'blue', 'yellow', 'green']

const colorLoop = () => {
    let domString = '';

    for (let i = 0; i < colors.length; i++) {
        domString += `<h1>${colors[i]}</h1>`;
    }
    console.log(domString);
    return domString;
}

document.getElementById('container').innerHTML = colorLoop();

//Document.getElementByID('container').innerhtml = colorLoop();
