var A1 = {
    nome: "Elise",
    atributos: {
        Ataque: 58,
        Range: 550,
        Defesa: 627
    }
}

var A2 = {
    nome: "Hecarim",
    atributos: {
        Ataque: 61,
        Range: 175,
        Defesa: 670
    }
}

var A3 = {
    nome: "Kha'zix",
    atributos: {
        Ataque: 53,
        Range: 125,
        Defesa: 515
    }
}

var A4 = {
    nome: "Kindred",
    atributos: {
        Ataque: 51,
        Range: 500,
        Defesa: 625
    }
}

var A5 = {
    nome: "Lulu",
    atributos: {
        Ataque: 78,
        Range: 550,
        Defesa: 626
    }
}

var A6 = {
    nome: "Renekton",
    atributos: {
        Ataque: 56,
        Range: 125,
        Defesa: 513
    }
}

var A7 = {
    nome: "Shen",
    atributos: {
        Ataque: 63,
        Range: 125,
        Defesa: 613
    }
}

var A8 = {
    nome: "Taric",
    atributos: {
        Ataque: 58,
        Range: 150,
        Defesa: 665
    }
}

var A9 = {
    nome: "Tristana",
    atributos: {
        Ataque: 49,
        Range: 550,
        Defesa: 497
    }
}

var A10 = {
    nome: "Jinx",
    atributos: {
        Ataque: 53,
        Range: 525,
        Defesa: 500
    }
}

var A11 = {
    nome: "Vayne",
    atributos: {
        Ataque: 56,
        Range: 550,
        Defesa: 581
    }
}

var A12 = {
    nome: "Kayn",
    atributos: {
        Ataque: 68,
        Range: 175,
        Defesa: 585
    }
}

var A13 = {
    nome: "Fiora",
    atributos: {
        Ataque: 63,
        Range: 150,
        Defesa: 635
    }
}

var A14 = {
    nome: "Jarvan IV",
    atributos: {
        Ataque: 53,
        Range: 175,
        Defesa: 510
    }
}

var A15 = {
    nome: "Mordekaiser",
    atributos: {
        Ataque: 66,
        Range: 200,
        Defesa: 598
    }
}

var cartas = [A1, A2, A3, A4, A5, A6, A7, A8, A9, A10, A11, A12, A13, A14, A15];
var cartaMaquina;
var cartaJogador;
var numeroCartaJogador;
var numeroCartaMaquina;

function sortearCarta() {
    
    numeroCartaMaquina = parseInt(Math.random() * 15);
    cartaMaquina = cartas[numeroCartaMaquina];

    numeroCartaJogador = parseInt(Math.random() * 15);
    console.log(numeroCartaJogador)
    while (numeroCartaJogador == numeroCartaMaquina) {
        numeroCartaJogador = parseInt(Math.random() * 15)
    }
    cartaJogador = cartas[numeroCartaJogador];

    document.getElementById('btnSortear').disabled = true;

    inserirBotao();
    exibirOpcoes();
    exibir();
}

function inserirBotao() {
    var local = document.getElementById('inserirBotao');
    var novoItem = document.createElement('button');

    novoItem.textContent = "JOGAR";

    novoItem.hasAttribute('type');
    novoItem.setAttribute('type','button');

    novoItem.hasAttribute('id');
    novoItem.setAttribute('id','btnJogar');

    novoItem.hasAttribute('onclick');
    novoItem.setAttribute('onclick','jogar()');

    novoItem.hasAttribute('class');
    novoItem.setAttribute('class','botao');

    local.appendChild(novoItem);
}

function exibirOpcoes() {
    var opcoes = document.getElementById('opcoes');
    var opcoesTexto = "";

    for (var atributo in cartaJogador.atributos) {
        opcoesTexto += "<input type='radio' name='atributo' value='" + atributo + "'>" + " " + atributo + "<br>";
    }
    opcoes.innerHTML = opcoesTexto;
}

function obtemAtributoSelecionado() {
    var radioAtributos = document.getElementsByName('atributo');
    for (i = 0; i < radioAtributos.length; i++) {
        if (radioAtributos[i].checked) {
            return radioAtributos[i].value;
        }
    }
}

function jogar() {
    var atributoSelecionado = obtemAtributoSelecionado();
    console.log(atributoSelecionado)

    if (cartaJogador.atributos[atributoSelecionado] > cartaMaquina.atributos[atributoSelecionado]) {
        document.querySelector('p').innerHTML = `VOCÊ GANHOU!`;

    }
    else if (cartaJogador.atributos[atributoSelecionado] < cartaMaquina.atributos[atributoSelecionado]) {
        document.querySelector('p').innerHTML = `VOCÊ PERDEU!`;

    }
    else if (cartaJogador.atributos[atributoSelecionado] == atributoSelecionado) {
        document.querySelector('p').innerHTML = `ESCOLHA UM ATRIBUTO! APERTE EM TENTAR NOVAMENTE.`;

    }
    else {
        document.querySelector('p').innerHTML = `EMPATOU!`;
    }

    inserirBotaoTentar();
    exibir2();

    document.getElementById('btnJogar').disabled = true;
}

function inserirBotaoTentar() {
    var local = document.getElementById('inserirBotaoTentar');
    var novoItem = document.createElement('button');

    novoItem.textContent = "TENTAR NOVAMENTE";

    novoItem.hasAttribute('type');
    novoItem.setAttribute('type','button');

    novoItem.hasAttribute('id');
    novoItem.setAttribute('id','btnJogar');

    novoItem.hasAttribute('onclick');
    novoItem.setAttribute('onclick','history.go(0)');

    novoItem.hasAttribute('class');
    novoItem.setAttribute('class','botaoNov');

    local.appendChild(novoItem);
}

function exibir() {
    var exibir = document.querySelector('.mudar');

    if (numeroCartaJogador == 0) {
        exibir.setAttribute('src', 'img/a1.jpg?width=284&height=406')
    } else if (numeroCartaJogador == 1) {
        exibir.setAttribute('src', 'img/a2.jpg?width=284&height=406')
    } else if (numeroCartaJogador == 2) {
        exibir.setAttribute('src', 'img/a3.jpg?width=284&height=406')
    } else if (numeroCartaJogador == 3) {
        exibir.setAttribute('src', 'img/a4.jpg?width=284&height=406')

        inserirBotaoTentar();
        document.getElementById('btnJogar').disabled = true;

    } else if (numeroCartaJogador == 4) {
        exibir.setAttribute('src', 'img/a5.jpg?width=284&height=406')
    } else if (numeroCartaJogador == 5) {
        exibir.setAttribute('src', 'img/a6.jpg?width=284&height=406')
    } else if (numeroCartaJogador == 6) {
        exibir.setAttribute('src', 'img/a7.jpg?width=284&height=406')
    } else if (numeroCartaJogador == 7) {
        exibir.setAttribute('src', 'img/a8.jpg?width=284&height=406')
    } else if (numeroCartaJogador == 8) {
        exibir.setAttribute('src', 'img/a9.jpg?width=284&height=406')
    } else if (numeroCartaJogador == 9) {
        exibir.setAttribute('src', 'img/a10.jpg?width=284&height=406')
    } else if (numeroCartaJogador == 10) {
        exibir.setAttribute('src', 'img/a11.jpg?width=284&height=406')
    } else if (numeroCartaJogador == 11) {
        exibir.setAttribute('src', 'img/a12.jpg?width=284&height=406')
    } else if (numeroCartaJogador == 12) {
        exibir.setAttribute('src', 'img/a13.jpg?width=284&height=406')
    } else if (numeroCartaJogador == 13) {
        exibir.setAttribute('src', 'img/a14.jpg?width=284&height=406')
    } else if (numeroCartaJogador == 14) {
        exibir.setAttribute('src', 'img/a15.jpg?width=284&height=406')
    }
}

function exibir2() {
    var exibir = document.querySelector('.mudar2');

    if (numeroCartaMaquina == 0) {
        exibir.setAttribute('src', 'img/a1.jpg?width=284&height=406')
    } else if (numeroCartaMaquina == 1) {
        exibir.setAttribute('src', 'img/a2.jpg?width=284&height=406')
    } else if (numeroCartaMaquina == 2) {
        exibir.setAttribute('src', 'img/a3.jpg?width=284&height=406')
    } else if (numeroCartaMaquina == 3) {
        exibir.setAttribute('src', 'img/a4.jpg?width=284&height=406')
    } else if (numeroCartaMaquina == 4) {
        exibir.setAttribute('src', 'img/a5.jpg?width=284&height=406')
    } else if (numeroCartaMaquina == 5) {
        exibir.setAttribute('src', 'img/a6.jpg?width=284&height=406')
    } else if (numeroCartaMaquina == 6) {
        exibir.setAttribute('src', 'img/a7.jpg?width=284&height=406')
    } else if (numeroCartaMaquina == 7) {
        exibir.setAttribute('src', 'img/a8.jpg?width=284&height=406')
    } else if (numeroCartaMaquina == 8) {
        exibir.setAttribute('src', 'img/a9.jpg?width=284&height=406')
    } else if (numeroCartaMaquina == 9) {
        exibir.setAttribute('src', 'img/a10.jpg?width=284&height=406')
    } else if (numeroCartaMaquina == 10) {
        exibir.setAttribute('src', 'img/a11.jpg?width=284&height=406')
    } else if (numeroCartaMaquina == 11) {
        exibir.setAttribute('src', 'img/a12.jpg?width=284&height=406')
    } else if (numeroCartaMaquina == 12) {
        exibir.setAttribute('src', 'img/a13.jpg?width=284&height=406')
    } else if (numeroCartaMaquina == 13) {
        exibir.setAttribute('src', 'img/a14.jpg?width=284&height=406')
    } else if (numeroCartaMaquina == 14) {
        exibir.setAttribute('src', 'img/a15.jpg?width=284&height=406')
    }
}
