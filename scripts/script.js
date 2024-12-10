//coletando informaçoes do formulario
const formInfo = document.getElementById('form');

//eventos e funçoes
formInfo.addEventListener('submit', (e) => {
    e.preventDefault();

    //colentando valores dos inputs e spans
    const nome = document.getElementById('nome').value;
    const altura = parseFloat(document.getElementById('altura').value);
    const peso = parseFloat(document.getElementById('peso').value); 
    const resultado = document.getElementById('result');
    const mensagem = document.getElementById('mensagem');

    //calculo do imc
    const imc = (peso / (altura * altura)).toFixed(2);
    let descricao = '';
    let classificacao = '';

    //verificando o preenchimento dos campos 
    if(nome != '' && altura != '' && peso != ''){
        descricao = `Olá ${nome}!, o resultado do seu IMC é: ${imc}`
    }
    else{
        descricao = "Preencha todos os campos!"
    }

    //classificaçao de resultados
    if(imc < 18.5){
        classificacao = "Seu resultado apresenta que você está abaixo do peso."
    }
    else if ( imc >= 18.5 && imc < 24.9){
        classificacao = "Seu resultado apresenta que seu peso é normal."
    }
    else if( imc >= 25 && imc < 29.9){
        classificacao = "Seu resultado apresenta que você está com sobrepeso."
    }
    else if( imc >= 30 && imc < 34.9){
        classificacao = "Seu resultado apresenta que você está com obesidade grau I."
    }
    else if(imc >= 35 && imc < 39.9){
        classificacao = "Seu resultado apresenta que você está com obesidade grau II."
    }
    else{
        descricao = "Preencha todos os campos!"
    }

    //exibindo a mensagem na tela
    resultado.textContent = descricao.replace('.', ',');
    mensagem.textContent = classificacao;
})
