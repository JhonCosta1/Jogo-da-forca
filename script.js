








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