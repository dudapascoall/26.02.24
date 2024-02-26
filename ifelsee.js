function verificarLogin() { // a funçao da minha declaraçao de variavel chamada "verificarLoguin"
    // let é quando eu nao deixo salvo no meu navegador, e  vou chamar os meus ids do meu html;
    let txtLogin = document.getElementById("txtLogin"); 
    let txtSenha = document.getElementById("txtSenha");
//quando chamar o login ou senha sera atribuido como teste;
    let login = "teste";
    let senha = "teste";

    //a declaraçao do meu algoritimo pegara " txtLogin" vai fazer uma comparaçao com "txtSenha"
    if (txtLogin.value == login && txtSenha.value == senha){
        //vai imprimir a mensagem
        console.log("Logado com sucesso!");
    } else { //sera outro caminho, caso der errado a parecera esta mensagem
        console.log("Login ou senha incorreta! Digite e tente novamente.");
    }
}