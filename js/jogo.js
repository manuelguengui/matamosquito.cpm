var altura = 0;
var largura = 0;
var vida =1;
var tempo = 15;
var tempoVidaNivel = 1500;
document.getElementById("tempo").innerText = tempo;

var nivel = window.location.search;
nivel = nivel.replace("?", "");

if(nivel === "normal"){
    var tempoVidaNivel = 1500;

}else if(nivel === "dificil"){
    var tempoVidaNivel = 1000;

}else if(nivel === "chucknorris"){
    var tempoVidaNivel = 750;
}


//Criação do palco de jogo
function mudarTamanhoPalcoJogo() {
    largura = window.innerWidth;
    altura = window.innerHeight;


    console.log(altura, largura);
}
mudarTamanhoPalcoJogo();
    

var cronometro = setInterval(function(){
    
    tempo-=1;
    if(tempo < 0){
        clearInterval(cronometro);
        clearInterval(mosquitoTempo);
        window.location.href="vitoria.html"
    }else {
        document.getElementById("tempo").innerText = tempo;
        
    }
}, 1000);


//Criação do elemento html. Criar a tag de imagem
function posicaoRandomina() {

    
    var positionX = Math.floor(Math.random() * largura) - 90;
    var positionY = Math.floor(Math.random() * altura) - 90;


    (positionX < 0) ? (positionX = 0) : (positionX);
    (positionY < 0) ? (positionY = 0) : (positionY);

    if(document.getElementById("mosquito")){
        document.getElementById("mosquito").remove();

        if(vida > 3){
            window.location.href="gameOver.html";
        }else {
            document.getElementById("vida" + vida).src="./imagens/coracao_vazio.png";
            vida++;
        }
    }



    var mosquito = document.createElement("img");
    mosquito.src = "./imagens/mosquito.png";
    mosquito.style.position = "absolute";
    mosquito.style.right = positionX + "px";
    mosquito.style.top = positionY + "px";
    mosquito.alt = "mosquito";
    mosquito.className = tamanhoMosquito() + " " + olharLado();
    mosquito.id = "mosquito";
    mosquito.onclick = function() {
        this.remove();
    }

    document.body.appendChild(mosquito);

    
}





var mosquitoTempo = setInterval(function(){
    posicaoRandomina();
}, tempoVidaNivel);



//Criação do tamanho varialdo de mosquito
function tamanhoMosquito() {
    var tamanho = Math.floor(Math.random() * 3);
    switch (tamanho) {
        case 0:
            return "mosquito1";

        case 1:
            return "mosquito2";

        case 2:
            return "mosquito3";
    }

    console.log("tamanho", tamanho)
}

//posicionamento variavel do olhar do mosquito
function olharLado() {
    var lado = Math.floor(Math.random() * 2)

    switch (lado) {
        case 0:
            return "ladoA";

        case 1:
            return "ladoB";
    }
}

