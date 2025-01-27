let amigos = [];


function adicionarAmigo () {
    let input = document.getElementById('amigo');
    let amigo = input.value.trim();
    amigo = formatarTexto(amigo);
    
    if (amigo == ''|| !isNaN(amigo)) {
        alert ("Adicione um nome válido!");
    } else {
        amigos.push (amigo);
        console.log (amigos);
    }
    exibirTextoNaTela (amigo,'listaAmigos');
    limparCampo(input);
  
}

function limparCampo(input) {
    input.value = '';
}

function exibirTextoNaTela(texto, elementoId) {
    let lista = document.getElementById(elementoId);
    let item = document.createElement('li');
    item.textContent = texto;
    lista.appendChild(item);
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert('Adicione amigos para realizar o sorteio!');
        return;
    }

    let numeroSorteado = parseInt(Math.random() * amigos.length);
    let nomeSorteado = amigos[numeroSorteado];
    exibirTextoNaTela (`O amigo sorteado é : ${nomeSorteado}!`, 'resultado');
    console.log(numeroSorteado);
    console.log(nomeSorteado);
    document.querySelector('button[onclick="sortearAmigo()"]').disabled = true;
}

function formatarTexto(texto) {
    return texto.charAt(0).toUpperCase() + texto.slice(1).toLowerCase();
}

function reiniciarLista() {
    if (amigos.length === 0) {
        alert('A lista já está vazia!');
        return;
    }
    amigos = [];
    document.getElementById('listaAmigos').innerHTML = '';
    document.getElementById('resultado').innerText = '';
    document.querySelector('button[onclick="sortearAmigo()"]').disabled = false;
    console.log("Lista reiniciada!");
}


