let livros = [];
const requisicaoDaAPI = 'https://guilhermeonrails.github.io/casadocodigo/livros.json'
getBuscarLivrosDaAPI()

async function getBuscarLivrosDaAPI(){
    try{
        const res = await fetch(requisicaoDaAPI);
        const livros = await res.json();
        console.table(livros)

        livros.forEach(livro => {
            
        });

    } catch (error){
        console.log(error);
    }
}