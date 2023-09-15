let xCarros = [600, 600, 600, 600, 600, 600];
let yCarros = [40, 95, 150, 210, 260, 315];
let velocidadeCarros = [2, 2.5, 3.2, 5, 3.4, 2.5];
let comprimentoCarro = 50;
let alturaCarro = 40;


function mostraCarro(){
  for (let i = 0; i < imagemCarros.length; i = i + 1){
     image(imagemCarros[i], xCarros[i], yCarros[i], comprimentoCarro, alturaCarro); 
  }
 
}

function movimentaCarro(){
  for (let i = 0; i < xCarros.length; i = i+1){
  xCarros[i] -= velocidadeCarros[i];
  }
}

function voltaPosicaoInicialCarro(){
  for (let i = 0; i < xCarros.length; i = i+1){
  if (passouTodaTela (xCarros[i])){
    xCarros[i] = 600;
    }
    
  }  
}

function passouTodaTela(xCarro){
  return xCarro < -50;
}

