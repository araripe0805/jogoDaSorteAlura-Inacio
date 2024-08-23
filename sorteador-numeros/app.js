function sortearNumero(i,f) {
    return parseInt(Math.random() * (f - i + 1) + i);
}

function limparCampo() {
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';
    document.getElementById('resultado').innerHTML = '<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>';
}

function sortear() {
    let quantidadeNumeros = parseInt(document.getElementById('quantidade').value);
    let inicio = parseInt(document.getElementById('de').value);
    let fim = parseInt(document.getElementById('ate').value);

    if (inicio >= fim) {
        alert('O numero inicial que voce digitou é maior(ou igual). Verifique se está correto:')
        limparCampo();
        return;
    } else {
        if (quantidadeNumeros > (fim - inicio + 1)) {
            alert('A quantidade de numeros que voce está pedindo é maior do que a quantidade de numeros possiveis. Verifique se está correto');
            limparCampo();
            return;
        }
    }

    let listaDeNumeroAleatorio = [];
    let numeroAleatorio;

    for (i = 0; quantidadeNumeros > i; i++) {
        numeroAleatorio = sortearNumero(inicio,fim);

        while (listaDeNumeroAleatorio.includes(numeroAleatorio)) {
            numeroAleatorio = 0;
            numeroAleatorio = sortearNumero(inicio,fim);
        }

        listaDeNumeroAleatorio.push(numeroAleatorio);
        numeroAleatorio = 0;
    }
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${listaDeNumeroAleatorio}</label>`;

    alterarBotao();
}

function alterarBotao() {
    let alterarCorDeBotao = document.getElementById('btn-reiniciar');
    
    if (alterarCorDeBotao.classList.contains('container__botao-desabilitado')) {
        alterarCorDeBotao.classList.remove('container__botao-desabilitado');
        alterarCorDeBotao.classList.add('container__botao');
    } else {
        alterarCorDeBotao.classList.remove('container__botao');
        alterarCorDeBotao.classList.add('container__botao-desabilitado');
    }
}

function reiniciar() {
    limparCampo();
    alterarBotao();
    listaDeNumeroAleatorio = [];
}

