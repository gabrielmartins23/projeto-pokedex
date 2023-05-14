const  botaoAlterarTema = document.getElementById("botao-alterar-tema");

const body = document.querySelector("body");
console.log(body);

const imagemBotaoTrocaDoTema = document.querySelector(".imagem-botao")

botaoAlterarTema.addEventListener("click", () => {
    const modoEscuroEstaAtivo = body.classList.contains("modo-escuro");

    body.classList.toggle("modo-escuro");

    if(modoEscuroEstaAtivo) {
        imagemBotaoTrocaDoTema.setAttribute("src","./src/imagens/sun.png");
    }else{
    imagemBotaoTrocaDoTema.setAttribute("src", "./src/imagens/moon.png");
    }
});
