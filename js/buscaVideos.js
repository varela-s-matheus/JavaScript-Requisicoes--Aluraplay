import { conectaApi } from "./conectaApi.js";
import constroiCard from "./mostrarVideos.js";  

const buttonPesquisar = document.querySelector("[data-buttonPesquisa]")


async function buscaVideos(evento){
    evento.preventDefault;

    const termoBusca = document.querySelector("[data-busca]").value;
    const busca = await conectaApi.buscaVideos(termoBusca);

    const lista = document.querySelector("[data-lista]");
    
    while(lista.firstChild){
        lista.removeChild(lista.firstChild);
    }

    busca.forEach(element => lista.appendChild(
        constroiCard(element.titulo, element.descricao, element.url, element.imagem))
    );
    
    if(busca.length == 0) {
        lista.innerHTML = `<h2 class="mensagem__titulo">Não existem videos com esse termo!</h2>`;
    }

}

buttonPesquisar.addEventListener("click", evento => buscaVideos(evento))
