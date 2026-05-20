const botao = document.querySelector("#buscaCotaçao")
const resultado = document .querySelector("#resultado")

function buscaCotaçao(){
    



    fetch("https://economia.awesomeapi.com.br/json/last/USD-BRL")
    .then(function (reposta){
      return reposta.json()
    })
    .then(function (dados) {
        const valorDolar = Number(dados.USDBRL.bid)
        const valorFormato = valorDolar.toLocaleString('pt-BR',{
            style: "currency",
            currency: "BRL"
        })
        resultado.textContent = valorFormato
    })
}

botao.addEventListener("click",()=> buscaCotaçao())
const cotaçao = document.querySelector('#cotaçao')
let cotaçao = Number(cotaçao.USDBRL.bid)
function cotaçao(){
    reposta*valorDolar
}