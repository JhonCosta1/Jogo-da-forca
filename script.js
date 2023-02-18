const categoria = document.querySelector("#category");
const letrasErradas = document.querySelector(".wrongLetters");
   const palavraInterface = document.querySelector(".dashes");
const olhos = Array.from(document.querySelectorAll(".eyes"));

let partesBoneco = Array.from(document.querySelectorAll("#person div"));
partesBoneco = partesBoneco.slice(2, partesBoneco.length);

let palavraProposta;

let letrasErradasArray = [];

let indiceBoneco;

const numTentativas = 7;

const opacidadeOlhos = 0.3;


//Criando categorias

const categorias = {
    frutas: ["manga", "banana", "melao", "goiaba", "pera", "uva", "melancia", "laranja"],
    profissoes: ["desenvolvedor", "advogado", "telefonista", "motorista", "suporte", "medico", "professor"],
    animais: ["gato", "cao", "cobra", "galinha", "cavalo", "peixe", "formiga", "abelha", "girafa"],
    cores: ["azul", "branco", "preto", "marrom", "roxo", "vermelho"]
};

function retornaArrayCategorias(){
    return Object.keys(categorias);
};

function retornaCategoria(){
    const arrayCategorias = retornaArrayCategorias();
    let indiceCategoria = Math.floor(Math.random() * arrayCategorias.length);
    return arrayCategorias[indiceCategoria];
};

function exibeCategoria(){
    categoria.innerHTML = retornaCategoria();
};

function retornaNumAleatorio(max){
    return Math.floor(Math.random() * max);
};

function definePalavraProposta(){
    const arrayPalavras = categorias[categoria.innerHTML];
    let indicePalavra = retornaNumAleatorio(arrayPalvras.length);
    palavraProposta = arrayPalavras[indicePalavra];
    ocultaPalavra();
};


function ocultaPalavra(){
    let palavraOcultada = "";
    for(let i = 0; i < palavraProposta.length; i++){
        palavraOcultada += "-";
    }
    exibePalavaInterface(palavraOcultada);
};

function exibePalavaInterface(palavra){
    palavraInterface.innerHTML = palavra;
};


function tentativa(letra){
    if(palavraProposta.includes(letra)){
        atualizarPalavraInterface(letra);
    }else{
        letrasErradasArray.push(letra);
        letrasErradas.innerHTML = "Letras erradas: " + letrasErradasArray;

    }
};

function atualizarPalavraInterface(letra){
    let palavraAux = "";
    for(let i = 0; i < palavraProposta.length; i++){
        if(palavraProposta[i] === letra){

            palavraAux += letra;
        }else if(palavraInterface.innerHTML[i] != "-"){
            palavraAux += palavraInterface.innerHTML[i];
        }else{
            palavraAux += "-";
        }
    }

    exibePalavaInterface(palavraAux);

};


function retornaLetra(e){
    tentativa(e.key);
};

function desenhaBoneco(){
    partesBoneco[indiceBoneco].classList.remove("hide");
    indiceBoneco++; 
}

function desenhaOlhos(){
    olhos.forEach((olho => {
        olho.style.opacity = 1;
        olho.style.zIndex = 10;
    }));
}


function ocultaBoneco(){
    olhos.forEach((olho => {
        olho.style.opacity = opacidadeOlhos; 
    }));
    partesBoneco.forEach(parteBoneco => {
        parteBoneco.classList.add("hide");
    });
}

function iniciaJogo(){
    indiceBoneco = 0;
    letrasErradasArray = [];
    letrasErradas.innerHTML = "Letras erradas: ";
    window.addEventListener("keypress", retornaLetra);
}

window.addEventListener("load", iniciaJogo);