//Variaves do ator

let xAtor = 100;
let yAtor = 370;
let colisao = false;
let meusPontos = 0;

function mostraAtor(){
  image(imagemDoAtor, xAtor, yAtor, 25, 25);
}

function movimentaAtor(){
  if(keyIsDown(UP_ARROW)){
    yAtor -= 2;
  }
  
  if (keyIsDown(DOWN_ARROW)){
   if (podeSeMover()){
     yAtor += 2;
  } 
  }
}

function verificaColisao(){
  for (let i = 0; i < imagemCarros.length;i = i+1 ){
colisao = collideRectCircle(xCarros[i], yCarros[i], comprimentoCarro, alturaCarro, xAtor, yAtor, 25)
   if (colisao) {
     voltaAtorParaPosicaoInicial();
     somDaColisao.play();
   if (pontosMaiorQueZero()){
     meusPontos -= 1;
   }
   }
    
  }
  
}

function voltaAtorParaPosicaoInicial(){
  yAtor = 370;
}

function incluiPontos(){
  textAlign(CENTER);
  textSize(25);
  fill(color(255, 240, 0));
  text(meusPontos, width/5, 30);
}

function marcaPonto(){
  if (yAtor < 15){
    somDoPonto.play();
    meusPontos += 1;
    voltaAtorParaPosicaoInicial();
  }
}

function pontosMaiorQueZero(){
  return meusPontos > 0
}

function podeSeMover(){
  return yAtor < 370;
}





