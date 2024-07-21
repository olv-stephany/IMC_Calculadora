//coletando informaçoes do formulario
const formInfo = document.getElementById('form');

//eventos e funçoes
formInfo.addEventListener('submit', (e) => {
    e.preventDefault();

    //colentando valores dos inputs
    const nome = document.getElementById('nome').value;
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value; 

    //calculo
    const imc = (peso / (altura * altura)).toFixed(2);

    const resultado = document.getElementById('result');
    let descricao = '';

    //impressao de resultados e condiçoes
    if(nome != '' && altura != '' && peso != ''){
        descricao = `Olá ${nome}!, acabei de calcular o seu imc e deu: ${imc}`
    }
    else{
        descricao = "Preencha todos os campos!"
    }

    resultado.textContent = imc.replace('.',',');
    document.getElementById('result').textContent = descricao;
})
