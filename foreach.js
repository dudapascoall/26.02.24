// a declaraçao de variavel "tempoFilme" tem a atribuiçao com o valor 60
var tempoFilme = 60;
// a declaraçao de variavel "inicioFilme" tem a atribuiçao com o valor 0
var inicioFilme = 0;
// minha variavel "t" for = 0, e se t for menor, o t++ com incrementar algo
for (var t = 0; t < tempoFilme; t++) {
    setTimeout(function() { // executa o meu codigo
        console.clear(); // meio q limparia o q eu ja fiz
        //imprimira a mensagem, depois vai comecar a fazer a contagem do filme em segundos
        console.log("Assistindo filme 60 segundos... Ainda faltam [" + (tempoFilme - inicioFilme) + "] segundos.");
        //vai incrementar algo a mais na minha variavel
        inicioFilme++;
    },t*1000); //vou pegar o tempo e multiplicar por 1000
}