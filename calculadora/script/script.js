

let back = document.querySelector(".back")

back.addEventListener("click", voltar)

function voltar(){
    let alerta = document.querySelector(".alert")
    let calc = document.querySelector(".calculadora")
    let themes = document.querySelector(".themes")
    themes.style.display = 'flex'
    alerta.classList.add('hidden')
    calc.style.display = 'block'
}








function aviso(){
    let calc = document.querySelector(".calculadora")
    calc.style.display = 'none'
    let themes = document.querySelector(".themes")
    themes.style.display= 'none'
}

let firstAlert = document.querySelector(".open")
firstAlert.addEventListener("click", abrir)


function abrir(){
    let calc = document.querySelector(".calculadora")
    calc.style.display = 'block'
    let themes = document.querySelector(".themes")
    themes.style.display= 'flex'
    let footer = document.querySelector(".footer")
    footer.style.display = 'none'
}








let blue = document.querySelector("#blue")
let red = document.querySelector("#red")
let green = document.querySelector("#green")
let pink = document.querySelector("#pink")
let purple = document.querySelector("#purple")
let naosei = document.getElementsByTagName("body")
let link = document.querySelector("link[href='style/style.css']")
let stlcss = new URL("style/style.css", window.location)




blue.addEventListener("click", azul)
red.addEventListener("click", vermelho)
green.addEventListener("click", verde)
pink.addEventListener("click", rosa)
purple.addEventListener("click", roxo)

function azul(){
    link.href = 'style/style.css'
}
function vermelho(){
    link.href = 'style/red.css'
}
function verde(){
    link.href = 'style/green.css'
}
function rosa(){
    link.href = 'style/pink.css'
}
function roxo(){
    link.href = 'style/purple.css'
}






let input = document.querySelector("#input")



function adicionar(num){
    input.value += num
    if(input.value.length == 32){
        let alerta = document.querySelector(".alert")
        let calc = document.querySelector(".calculadora")
        let themes = document.querySelector(".themes")
        alerta.classList.remove('hidden')
        alerta.classList.add('show')
        calc.style.display = 'none'
        tabela.innerHTML = '';
        themes.style.display = 'none'
        input.value = ""
    }
}



function clean(){
    input.value = ""
}



function comeBack(){
    let inp = input.value;
    input.value = inp.substring(0, inp.length -1)
}


let array = [""]
let historico = []


function inputInfinity(){
    input.value = ""
}


function equal(){
    if(input.value.length === 0){
        alert("please, make an acount")
    }else{
        array[0] = input.value
        historico.push(input.value)
        input.value = eval(input.value)
        if(input.value == Infinity){
            setTimeout(inputInfinity, 3000)
        }
    }
    
}


function beforeAcount(){
    input.value = array[0]
    array[0] = ""
}

function hist(conta, indice){
    let tabela = document.querySelector(".tabela")
    tabela.innerHTML += `<div class="conta"><p>${indice+1}°</p><p>${conta}</p></div>`
}

function showHistorico(){
    let calc = document.querySelector(".calculadora")
    let mostrar = document.querySelector(".historico")
    let themes = document.querySelector(".themes")
    calc.style.display = "none"
    themes.style.display = "none"
    mostrar.classList.add("historicoShow")
    historico.forEach(hist)
}


function fecha(){
    let calc = document.querySelector(".calculadora")
    let mostrar = document.querySelector(".historico")
    let themes = document.querySelector(".themes")
    themes.style.display = 'flex'
    calc.style.display = 'block'
    mostrar.classList.remove("historicoShow")
}
