alert('Boas vindas ao jogo do número secreto!');

// Gera o número secreto aleatório entre 1 e 10
let numeroSecreto = Math.floor(Math.random() * 10) + 1;
let tentativas = 0;
let chute;

// Laço para o jogo
while (true) {
    chute = parseInt(prompt('Escolha um número entre 1 e 10:'), 10);

    // Verifica se a entrada é válida
    if (isNaN(chute) || chute < 1 || chute > 10) {
        alert('Por favor, digite um número válido entre 1 e 10.');
        continue;
    }

    tentativas++;

    // Verifica se o chute está correto
    if (chute === numeroSecreto) {
        alert(`Parabéns! O número secreto era ${numeroSecreto} e você acertou com ${tentativas} ${tentativas > 1 ? 'tentativas' : 'tentativa'}.`);
        
        // Redireciona para outra página ao acertar
        window.location.href = 'index.html';
        break;
    } else if (chute > numeroSecreto) {
        alert('O número secreto é menor.');
    } else {
        alert('O número secreto é maior.');
    }
}
