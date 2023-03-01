canvas = document.getElementById("myCanvas");
ctx= canvas.getContext("2d");

/*
    Use a função  para começar um caminho.
    Então, use  para ajustar a cor para "grey".
    Use  e ajusta a width para 1.
    Use  para criar um retângulo em 150 e 143 com 430 width e 200 height.
*/

ctx.beginPath();
ctx.strokeStyle = "grey";
ctx.lineWidth = 1;
ctx.rect(165, 163, 430, 200);
ctx.stroke();

/*
    Use a função beginPath() para começar um caminho.
    Então, use strokeStyle para ajustar a cor para "blue".
    Use lineWidth e ajuste a width para 5.
    Use arc() para criar um círculo em  x = 150 e y = 143
with 40 como radius, 0 startAngle e 2 * Math.PI endAngle.
*/

ctx.beginPath();
ctx.strokeStyle = "blue";
ctx.lineWidth = 5;
ctx.arc(250, 210, 40, 0, 2 * Math.PI);
ctx.stroke();

// De modo parecido, crie um círculo preto com posição 350 e 210
ctx.beginPath();
ctx.strokeStyle = "black";
ctx.lineWidth = 5;
ctx.arc(350, 210, 40, 0, 2 * Math.PI);
ctx.stroke();

// De modo parecido, crie um círculo vermelho com posição 450 e 210
ctx.beginPath();
ctx.strokeStyle = "red";
ctx.lineWidth = 5;
ctx.arc(450, 210, 40, 0, 2 * Math.PI);
ctx.stroke();

// De modo parecido, crie um círculo laranja com posição  300 e 250
ctx.beginPath();
ctx.strokeStyle = "orange";
ctx.lineWidth = 5;
ctx.arc(300, 250, 40, 0, 2 * Math.PI);
ctx.stroke();

// De modo parecido, crie um círculo verde com posição 400 e 250
ctx.beginPath();
ctx.strokeStyle = "green";
ctx.lineWidth = 5;
ctx.arc(400, 250, 40, 0, 2 * Math.PI);
ctx.stroke();
