let numeroMaximo = 10;
let numeroSecreto = gerarNumeroAleatorio ();
let tentativas = 1;

function gerarNumeroAleatorio() {
    return parseInt(Math.random() * numeroMaximo + 1);   
}

function exibirTextoNaTela (tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female',{rate:1.2});
}

function mensagemInicial(){
    exibirTextoNaTela('h1', 'Jogo do numero secreto!');
    exibirTextoNaTela('p', `Escolha um numero entre 1 e ${numeroMaximo}`);
}

mensagemInicial();

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = "";
}

function verificarChute(){
    let chute = document.querySelector('input').value;

    if(numeroSecreto == chute){
        palavraTentativas = tentativas > 1 ? 'tentativas' : 'tentativa';
        mensagemTentativas = `Você Acertou o Número Secreto com ${tentativas} ${palavraTentativas}!`;
        exibirTextoNaTela('h1', 'Parabéns!');
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if(numeroSecreto > chute){
            exibirTextoNaTela('p', 'O Número Secreto é maior');
        } else {
            exibirTextoNaTela('p', 'O Número Secreto é menor');
        }
        tentativas++;
        limparCampo();
    }   
}

function reiniciarJogo(){  
    numeroSecreto = gerarNumeroAleatorio();
    tentativas = 1;
    mensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
    limparCampo();     
}