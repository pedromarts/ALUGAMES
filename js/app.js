let alugado ();
let Devolver = 1;

function alterarStatus(1, 2, 3) {
    let alugar = document.querySelector('input').value;




function alugarJogo() {
    let alugar = document.querySelector('input').value;
    
    if (alugar == Devolver) {
        exibirTextoNaTela('p', 'Devolver');
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (alugar > numeroSecreto) {
            exibirTextoNaTela('p', 'O número secreto é menor');
        } else {
            exibirTextoNaTela('p', 'O número secreto é maior');
        }

        limparCampo();
    }
}