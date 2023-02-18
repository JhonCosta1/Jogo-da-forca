








//Criando categorias

const categorias = {
    frutas: ["manga", "banana", "melao", "goiaba", "pera", "uva", "melancia", "laranja"],
    profissoes: ["desenvolvedor", "advogado", "telefonista", "motorista", "suporte", "medico", "professor"],
    animais: ["gato", "cao", "cobra", "galinha", "cavalo", "peixe", "formiga", "abelha", "girafa"],
    cores: ["azul", "branco", "preto", "marrom", "roxo", "vermelho"]
}

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
}