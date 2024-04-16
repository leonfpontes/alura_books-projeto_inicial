let livros = [];
const requisicaoDaAPI = 'https://guilhermeonrails.github.io/casadocodigo/livros.json'
getBuscarLivrosDaAPI()

async function getBuscarLivrosDaAPI(){
    try{
        const res = await fetch(requisicaoDaAPI);
        livros = await res.json();
        let livrosComDesconto = aplicarDesconto(livros)
        exibirOsLivrosNaTela(livrosComDesconto);

    } catch (error){
        console.log(error);
    }
}
