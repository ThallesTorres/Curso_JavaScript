let nome = 'Thalles'; //string literal
let idade = 25; //number literal
let estaAprovado = true; //boolean
let sobrenome = undefined; //undefined
let corSelecionada = null; //redefinir um valor

console.log(nome);
console.log(idade);
console.log(estaAprovado);
console.log(sobrenome);
console.log(corSelecionada);

let pessoa ={
    nome,
    idade,
    estaAprovado,
    sobrenome,
    corSelecionada,
    cursoSelecionado:'Mecânico'
};

console.log(pessoa);
console.log(pessoa.nome);
console.log(pessoa.cursoSelecionado);
