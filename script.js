//Salvar dados
// localStorage.setItem("nome", "Pateta");
// const nomeStorage = localStorage.getItem("nome"); // Recuperar dados
// //Remover dados
// localStorage.removeItem("nome"); // Limpar todos os dados
// console.log(localStorage.getItem("nome"));
// //console.log(nomeStorage); 


// localStorage.setItem("nome", "Pateta");
// localStorage.setItem("idade", "30");
// localStorage.setItem("cidade", "São Paulo");
// localStorage.setItem("raça", "vira-lata");
// localStorage.setItem("amigo", "Mickey");
// //localStorage.clear();
// const quantidadeItens = localStorage.length;
// const posicaoUm = localStorage.key(1);
// console.log(posicaoUm);


// let key = "nome";
// switch (key) {
//     case "nome":
//         localStorage.setItem("nome", "Pateta");
//         break;
//     case "idade":
//         localStorage.setItem("idade", "30");
//         break;
//     case "cidade":
//         localStorage.setItem("cidade", "São Paulo");
//         break;
//         case "raça":
//         localStorage.setItem("raça", "vira-lata");
//         break;
//     default:
//         localStorage.setItem("amigo", "Mickey");
//         break;
// }

// console.log(localStorage.key("3"));


//Salvar tema preferido

let tema = "";

function salvarTema(tema){
    localStorage.setItem("tema", tema);
}
//carregar tema preferido
function carregarTema(){
    const tema = localStorage.getItem("tema") === "claro" ? "claro" : "dark";
    document.body.classList.add(`tema-${tema}`);
    return tema;
}

// salvarTema(tema);


// console.log(carregarTema());

//Alterar tema
// function alternarTema(){
//     const temaAtual = localStorage.getItem("tema") || "claro";
//     const novoTema = temaAtual === "claro" ? "dark" : "claro";

//     document.body.classList.remove(`tema-${temaAtual}`);
//     document.body.classList.add(`tema-${novoTema}`);
//     localStorage.setItem("tema", novoTema);
// }
// //Usar
// alternarTema("dark");
// console.log(carregarTema());


//Errado (perde a estrutura)
const usuario = { nome: "Pateta", idade: 30, cidade: "São Paulo" };
// localStorage.setItem("usuario", usuario);
// console.log(localStorage.getItem("usuario")); // [object Object]
//Certo (usar JSON)
localStorage.setItem("usuario", JSON.stringify(usuario));
const dados = JSON.parse(localStorage.getItem("usuario"));
console.log(dados.nome);