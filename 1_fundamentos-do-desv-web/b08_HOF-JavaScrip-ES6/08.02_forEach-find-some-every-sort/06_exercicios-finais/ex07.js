const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  // {
  //   id: 3,
  //   name: 'Fundação',
  //   genre: 'Ficção Científica',
  //   author: {
  //     name: 'Isaac Asimov',
  //     birthYear: 1920,
  //   },
  //   releaseYear: 1951,
  // },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

function authorUnique1(array) {
  const birthYears = array.map((object) => object.author.birthYear);
  return !birthYears.some((year) => birthYears.filter((item) => item === year).length > 1);
}

function authorUnique2(array) {
  const birthYears = [];
  array.forEach((object) => birthYears.push(object.author.birthYear));
  let expectedOutput = true;
  birthYears.some((year, index, arrayYears) => {
    let counter = 1;
    arrayYears.forEach((item) => {
      if (item === year) { counter += 1; }
      if (counter > 1) { expectedOutput = false; }
    });
  });
  return expectedOutput;
}

console.log(authorUnique2(books));
