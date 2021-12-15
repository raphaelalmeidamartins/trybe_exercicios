let leitor = {
  nome: 'Julia',
  sobrenome: 'Pessoa',
  idade: 21,
  livrosFavoritos: [
    {
      titulo: 'O Pior Dia de Todos',
      autor: 'Daniela Kopsch',
      editora: 'Tordesilhas',
    },
  ],
};

// 7 - Adicione um novo livro favorito na chave livrosFavoritos , que é um array . Atribua a esta chave um objeto contendo as seguintes informações: 

leitor.livrosFavoritos.push({});

leitor.livrosFavoritos[1].titulo = 'Harry Potter e o Prisioneiro de Azkaban';
leitor.livrosFavoritos[1].autor = 'JK Rowling';
leitor.livrosFavoritos[1].editora = 'Rocco';

console.log(leitor.livrosFavoritos);

// 8 - Acesse as chaves nome e livrosFavoritos e faça um console.log no seguinte formato: "Julia tem 2 livros favoritos". 

console.log(`${leitor.nome} tem ${leitor.livrosFavoritos.length} livros favoritos`);