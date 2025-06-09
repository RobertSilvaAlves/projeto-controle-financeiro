const selectDescricao = document.getElementById('descricao');
const inputOutros = document.getElementById('descricao-outros');
const btnAdicionar = document.querySelector('button');

let lancamentoTipo = document.getElementById('tipo');
let lancamentoDescricao = document.getElementById('descricao');
let lancamentoValor = document.getElementById('valor');
// let lancamentoMes = document.getElementsByClassName('tabela_mes');
let lancamentoAno = document.getElementById('ano');


const itensLista = document.querySelectorAll('.mes_tabela');
let itemSelecionado = null;

itensLista.forEach(item => {
    item.addEventListener('click', function () {

        itensLista.forEach(el => el.classList.remove('selecionada'));

        this.classList.add('selecionada');

        itemSelecionado = this;

        console.log('Item selecionado:', itemSelecionado.textContent);
    })
});




selectDescricao.addEventListener('change', function () {
    if (this.value === 'Outros') {
        inputOutros.style.display = 'block';
        inputOutros.required = true;
    } else {
        inputOutros.style.display = 'none';
        inputOutros.required = false;
    }
});


btnAdicionar.addEventListener('click', (e) => {
    e.preventDefault();

    // 1. Capturar o mês selecionado (o item clicado da lista)
    const mesSelecionado = document.querySelector('.mes_tabela.selecionada');
    const mes = mesSelecionado ? mesSelecionado.textContent : '';

    // 2. Capturar tipo (renda ou despesa)
    const tipo = lancamentoTipo.value;

    // 3. Capturar descrição
    let descricao = lancamentoDescricao.value;
    if (descricao === 'Outros') {
        descricao = inputOutros.value;
    }

    // 4. Capturar valor e ano
    const valor = parseFloat(lancamentoValor.value).toFixed(2);
    const ano = lancamentoAno.value;

    // 5. Preencher os campos da linha da tabela
    document.querySelector('.tabela_tipo').textContent = tipo.toUpperCase();
    document.querySelector('.tabela_descricao').textContent = descricao.toUpperCase();
    document.querySelector('.tabela_valor').textContent = `R$ ${valor}`;
    document.querySelector('.tabela_mes').textContent = mes.toUpperCase();
    document.querySelector('.tabela_ano').textContent = ano;


    // console.log(lancamentoTipo);
})
