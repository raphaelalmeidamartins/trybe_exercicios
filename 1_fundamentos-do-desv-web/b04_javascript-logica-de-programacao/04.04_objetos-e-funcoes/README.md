# Dia 4/Day 4

<small>(for the English version, <a href="#en">click here</a>)</small>

<h2>:brazil: Português</h2>
<h3>JavaScript - Objetos e funções</h3>
<p>Na aula de hoje, aprendemos a utilizar objetos, utilizar <code>for/in</code> e a criar e usar funções.</p>
<h3>Objetos - Requisitos</h3>
<ol>
  <li>Crie um objeto <strong>player</strong> contendo as variáveis listadas abaixo:
    <blockquote>
      <pre>
let name = 'Marta';
let lastName = 'Silva';
let age = 34;
let medals = { golden: 2, silver: 3 };</pre>
    </blockquote>
  </li>
  <li>Acesse as chaves <strong>name</strong>, <strong>lastName</strong> e <strong>age</strong> e concatene as suas informações para imprimir no console uma mensagem no seguinte formato: <em>"A jogadora Marta Silva tem 34 anos de idade"</em>.</li>
  <li>Adicione ao objeto a chave <strong>bestInTheWorld</strong> e atribua a esta chave um array contendo as datas em que a jogadora Marta foi considerada a melhor do mundo.
    <blockquote>
<pre>[2006, 2007, 2008, 2009, 2010, 2018]</pre>
    </blockquote>
  </li>
  <li>Acesse a chave <strong>bestInTheWorld</strong> e faça um <code>console.log</code> no seguinte formato: <em>"A jogadora Marta Silva foi eleita a melhor do mundo por 6 vezes".</em></li>
  <li>Acesse a chave <strong>medals</strong> e faça um <code>console.log</code> no seguinte formato: <em>"A jogadora possui 2 medalhas de ouro e 3 medalhas de prata".</em></li>
</ol>
<h3>For/in - Requisitos</h3>
<ol>
  <li>Usando o objeto abaixo, utilize <code>for/in</code> e imprima no console a mensagem <em>'Olá xxxxx'</em> para cada nome, substituindo o <em>xxxxx</em> pelo nome em questão.
    <blackquote>
      <pre>
let names = {
  person1: 'João',
  person2: 'Maria',
  person3: 'Jorge'
};</pre>
    </blackquote>
  </li>
  <li>Usando o objeto abaixo, utilize <code>for/in</code> e imprima um <code>console.log</code> com as chaves e valores desse objeto.
    <blockquote>
      <pre>
let car = {
  model: 'A3 Sedan',
  manufacturer: 'Audi',
  year: 2020
};</pre>
    </blockquote>
  </li> 
</ol>
<h3>Funções - Requisitos</h3>
<p>Refatore os exercícios finais do dia <a href="https://github.com/raphaelalmeidamartins/trybe_exercicios/tree/atualizar-docs/15.12/1_fundamentos-do-desv-web/b04_javascript-logica-de-programacao/04.01_javascript-primeiros-passos">04.01</a> em forma de funções que recebam parâmetros.</p>
<h3>Exercícios finais Parte I - Requisitos</h3>
<p>Usando o objeto abaixo, faça os exercícios a seguir:</p>
<blockquote>
  <pre>
let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};</pre>
</blockquote>
<ol>
  <li>Imprima no console uma mensagem de boas-vindas para a personagem acima, incluindo seu nome. Valor esperado no console:
    <blockquote>
<pre>Bem-vinda, Margarida</pre>
    </blockquote>
  </li>
  <li>Insira no objeto uma nova propriedade com o nome de chave <em>'recorrente'</em> e o valor <em>'Sim'</em> e, em seguida, imprima o objeto no console. Valor esperado no console:
      <blockquote>
        <pre>
{
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  recorrente: 'Sim'
}</pre>
      </blockquote>
  </li>
  <li>Faça um <code>for/in</code> que mostre todas as chaves do objeto. Valor esperado no console:
      <blockquote>
        <pre>
personagem
origem
nota
recorrente</pre>
      </blockquote>
  </li>
  <li>Agora, defina um segundo objeto com a mesma estrutura (as mesmas chaves) do primeiro e os seguintes valores: <em>'Tio Patinhas', 'Christmas on Bear Mountain, Dell's Four Color Comics #178', 'O último MacPatinhas', 'Sim'</em>. Então, imprima os valores de cada objeto juntos de acordo com cada uma das chaves. Valor esperado no console:  
    <blockquote>
      <pre>
Margarida e Tio Patinhas
Pato Donald e Christmas on Bear Mountain, Dell's Four Color Comics #178
Namorada do personagem principal nos quadrinhos do Pato Donald e O último MacPatinhas
Ambos recorrentes // Atenção para essa última linha!
  </pre>
    </blockquote>  
  </li>
  <p>Usando o objeto abaixo, faça os exercícios a seguir:</p>
    <blockquote>
      <pre>
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
};</pre>
    </blockquote>
  <li>Acesse as chaves <strong>nome</strong>, <strong>sobrenome</strong> e <strong>titulo</strong>, que está dentro da chave <strong>livrosFavoritos</strong>, e faça um <code>console.log</code> no seguinte formato: <em>"O livro favorito de Julia Pessoa se chama 'O Pior Dia de Todos'".</em></li> 
  <li>Adicione um novo livro favorito na chave <strong>livrosFavoritos</strong>, que é um array. Atribua a esta chave um objeto contendo as seguintes informações:
    <blockquote>
      <pre>
{
  titulo: 'Harry Potter e o Prisioneiro de Azkaban',
  autor: 'JK Rowling',
  editor: 'Rocco',
}</pre>
    </blockquote>  
  </li>
  <li>Acesse as chaves <strong>nome</strong> e <strong>livrosFavoritos</strong> e faça um <code>console.log</code> no seguinte formato: <em>"Julia tem 2 livros favoritos".</em></li>  
</ol>
<h3>Exercícios finais Parte II - Requisitos</h3>
<ol>
  <li>Crie uma função que receba uma string e retorne <code>true</code> se for um <strong>palíndromo</strong>, ou <code>false</code>, se não for.</li>
  <li>Crie uma função que receba um array de inteiros e retorne o índice do maior valor.</li> 
  <li>Crie uma função que receba um array de inteiros e retorne o índice do menor valor.</li>
  <li>Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.</li>
  <li>Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.</li>
  <li>Crie uma função que receba um número natural <strong>N</strong> e retorne o somatório de todos os números de 0 até <strong>N</strong>.</li>
  <li>Crie uma função que receba uma string <code>word</code> e outra string <code>ending</code>. Verifique se a string <code>ending</code> é o final da string <code>word</code>. Considere que a string <code>ending</code> sempre será menor que a string <code>word</code>.</li>
</ol>
<h3>Bônus</h3>
<ol>
  <li>(Difícil) Faça um programa que receba uma string em algarismos romanos e retorne o número que a string representa.</li>
  <li>Crie uma função chamada <strong>arrayOfNumbers</strong> que receberá a variável <strong>vector</strong> como parâmetro. Através de um loop <code>for</code>, percorra essa variável, busque os números pares e os adicione a um novo array que deverá ser retornado ao final pela pela função.</li>
  <li>A partir do array de frutas <strong>basket</strong>, retorne um objeto que contenha o nome da fruta como chave e a quantidade de vezes que ela aparece no array como valor. Por exemplo, o array <code>['Melancia', 'Abacate', 'Melancia', 'Melancia', 'Uva']</code>, deverá retornar <code>{ Melancia: 3, Abacate: 1, Uva: 1 }</code> quando passado como argumento para a função.
    <blockquote>
      <pre>
const basket = [
  'Melancia', 'Abacate', 'Melancia', 'Melancia', 'Uva', 'Laranja',
  'Jaca', 'Pera', 'Melancia', 'Uva', 'Laranja', 'Melancia',
  'Banana', 'Uva', 'Pera', 'Abacate', 'Laranja', 'Abacate',
  'Banana', 'Melancia', 'Laranja', 'Laranja', 'Jaca', 'Uva',
  'Banana', 'Uva', 'Laranja', 'Pera', 'Melancia', 'Uva',
  'Jaca', 'Banana', 'Pera', 'Abacate', 'Melancia', 'Melancia',
  'Laranja', 'Pera', 'Banana', 'Jaca', 'Laranja', 'Melancia',
  'Abacate', 'Abacate', 'Pera', 'Melancia', 'Banana', 'Banana',
  'Abacate', 'Uva', 'Laranja', 'Banana', 'Abacate', 'Uva',
  'Uva', 'Abacate', 'Abacate', 'Melancia', 'Uva', 'Jaca',
  'Uva', 'Banana', 'Abacate', 'Banana', 'Uva', 'Banana',
  'Laranja', 'Laranja', 'Jaca', 'Jaca', 'Abacate', 'Jaca',
  'Laranja', 'Melancia', 'Pera', 'Jaca', 'Melancia', 'Uva',
  'Abacate', 'Jaca', 'Jaca', 'Abacate', 'Uva', 'Laranja',
  'Pera', 'Melancia', 'Jaca', 'Pera', 'Laranja', 'Jaca',
  'Pera', 'Melancia', 'Jaca', 'Banana', 'Laranja', 'Jaca',
  'Banana', 'Pera', 'Abacate', 'Uva',
];</pre>
    </blockquote>
  <p>Em seguida, imprima esse resultado na tela com uma mensagem no seguinte formato: <em>"Sua cesta possui: x Melancias, x Abacates..."</em></p>
  </li>
  <p>Usando o objeto abaixo, faça os exercícios a seguir:</p>
  <blockquote>
    <pre>
let moradores = {
blocoUm: [
  {
    nome: 'Luiza',
    sobrenome: 'Guimarães',
    andar: 10,
    apartamento: 1005,
  },
  {
    nome: 'William',
    sobrenome: 'Albuquerque',
    andar: 5,
    apartamento: 502,
  },
],
blocoDois: [
  {
    nome: 'Murilo',
    sobrenome: 'Ferraz',
    andar: 8,
    apartamento: 804,
  },
  {
    nome: 'Zoey',
    sobrenome: 'Brooks',
    andar: 1,
    apartamento: 101,
  },
],
};</pre>
  </blockquote>
  <li>Acesse as chaves <strong>nome</strong>, <strong>sobrenome</strong>, <strong>andar</strong> e <strong>apartamento</strong> do último morador do <strong>blocoDois</strong> e faça um <code>console.log</code> no seguinte formato: <em>"O morador do bloco 2 de nome Zoey Brooks mora no 1° andar, apartamento 101"</em>.</li>
  <li>Utilize o <code>for</code> para imprimir o nome completo de todos os moradores do bloco 1, acessando suas chaves <strong>nome</strong> e <strong>sobrenome</strong>, depois faça o mesmo para os moradores do bloco 2.</li>
</ol>
<br>

<h2 id="en">:us: English</h2>
<h3>JavaScript - Objects and functions</h3>
<p>In today's class, we learned how to use objects, how to use for/in and how to create and use functions.</p>
<h3>Objects - Requirements</h3>
<ol>
  <li>Create an object <strong>player</strong> containing the variables below:
    <blockquote>
      <pre>
let name = 'Marta';
let lastName = 'Silva';
let age = 34;
let medals = { golden: 2, silver: 3 };</pre>
    </blockquote>
  </li>
  <li>Access the keys <strong>name</strong>, <strong>lastName</strong> and <strong>age</strong>, and concatenate their information to print on the console a message with the following template: <em>"A jogadora Marta Silva tem 34 anos de idade"</em> (<em>"The soccer player Marta Silva is 34 years old"</em>).</li>
  <li>Add to the object the key <strong>bestInTheWorld</strong>, and attributed to the key an array of the years the soccer player Marta was considered the best in the World.
    <blockquote>
<pre>[2006, 2007, 2008, 2009, 2010, 2018]</pre>
    </blockquote>
  </li>
  <li>Access the key <strong>bestInTheWorld</strong> and print a message on the console with the following template: <em>"A jogadora Marta Silva foi eleita a melhor do mundo por 6 vezes"</em> (<em>"The soccer player Marta Silva was considered the best in the World for 6 times"</em>).</li>
  <li>Access the key <strong>medals</strong> and print on the console a message with the following template: <em>"A jogadora possui 2 medalhas de ouro e 3 medalhas de prata"</em> (<em>"The soccer player has 2 gold medals and 3 silver medals"</em>).</li>
</ol>
<h3>For/in - Requirements</h3>
<ol>
  <li>With the object below, use <code>for/in</code> to print on the console the message <em>'Olá xxxxx'</em>(<em>'Hello xxxxx'</em>) for each name. Replace the <em>xxxxx</em> for every name.
    <blackquote>
      <pre>
let names = {
  person1: 'João',
  person2: 'Maria',
  person3: 'Jorge'
};</pre>
    </blackquote>
  </li>
  <li>With the object below, use <code>for/in</code> to print on the console the keys and the values of the object.
    <blockquote>
      <pre>
let car = {
  model: 'A3 Sedan',
  manufacturer: 'Audi',
  year: 2020
};</pre>
    </blockquote>
  </li> 
</ol>
<h3>Functions - Requirements</h3>
<p>Refactor the final exercises of the day <a href="https://github.com/raphaelalmeidamartins/trybe_exercicios/tree/atualizar-docs/15.12/1_fundamentos-do-desv-web/b04_javascript-logica-de-programacao/04.01_javascript-primeiros-passos">04.01</a> in functions that receive parameters.</p>
<h3>Final exercises Part I - Requirements</h3>
<p>Use the object below to do the next exercises:</p>
<blockquote>
  <pre>
let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};</pre>
</blockquote>
<ol>
  <li>Print on the console a welcome message to the character above. Expected output:
    <blockquote>
<pre>Bem-vinda, Margarida</pre>
    </blockquote>
  </li>
  <li>Insert on the object a new property named <em>'recorrente'</em>(recurrent) with the value <em>'Sim'</em> (Yes). Then, print the object on the console. Expected output:
      <blockquote>
        <pre>
{
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  recorrente: 'Sim'
}</pre>
      </blockquote>
  </li>
  <li>Use <code>for/in</code> to print all the keys of the object on the console. Expected output:
      <blockquote>
        <pre>
personagem
origem
nota
recorrente</pre>
      </blockquote>
  </li>
  <li>Now, declare a second object with the same structure of the first one, and with the following values: <em>'Tio Patinhas', 'Christmas on Bear Mountain, Dell's Four Color Comics #178', 'O último MacPatinhas', 'Sim'</em>. Then, print on the console the values of both objects together according to their respective keys. Expected output:  
    <blockquote>
      <pre>
Margarida e Tio Patinhas
Pato Donald e Christmas on Bear Mountain, Dell's Four Color Comics #178
Namorada do personagem principal nos quadrinhos do Pato Donald e O último MacPatinhas
Ambos recorrentes // Atenção para essa última linha!
  </pre>
    </blockquote>  
  </li>
  <p>Use the object below to do the next exercises:</p>
    <blockquote>
      <pre>
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
};</pre>
    </blockquote>
  <li>Access the keys <strong>nome</strong>, <strong>sobrenome</strong> e <strong>titulo</strong>, that are inside the key <strong>livrosFavoritos</strong>, and print a message on the console with the following template: <em>"O livro favorito de Julia Pessoa se chama 'O Pior Dia de Todos'"</em> (<em>"Julia Pessoa's favorite book is called 'O Pior Dia de Todos"</em>).</li> 
  <li>Add a new favorite book on the key <strong>livrosFavoritos</strong>, that is an array. Attribute to this key a new object with the following data:
    <blockquote>
      <pre>
{
  titulo: 'Harry Potter e o Prisioneiro de Azkaban',
  autor: 'JK Rowling',
  editor: 'Rocco',
}</pre>
    </blockquote>  
  </li>
  <li>Access the keys <strong>nome</strong> and <strong>livrosFavoritos</strong> print a message on the console with the following template: <em>"Julia tem 2 livros favoritos"</em>(<em>"Julia has 2 favorite books"</em>).</li>  
</ol>
<h3>Final exercises Part II - Requirements</h3>
<ol>
  <li>Create a function that receives a string and returns <code>true</code> if it is a <strong>palindrome</strong>, or <code>false</code>, if it's not.</li>
  <li>Write a function that receives an array of integers and returns the index of the highest number.</li> 
  <li>Write a function that receives an array of integers and returns the index of the lowest number.</li>
  <li>Create a function that receives an array of names and returns the name with more characters.</li>
  <li>Create a function that receives an array of integers and returns the number that repeats the most.</li>
  <li>Write a function that receives a natural number <strong>N</strong> and returns the sum of all the numbers from 0 to <strong>N</strong>.</li>
  <li>Create a function that receives two strings: <code>word</code> and <code>ending</code>. It needs to verify if the <code>ending</code> string is the ending of the string <code>word</code>. The string <code>ending</code> is always shorter than <code>word</code>.</li>
</ol>
<h3>Bonus</h3>
<ol>
  <li>(Hard) Develop a program that receives a string with Roman numerals and return the number the string represents.</li>
  <li>Develop a function named <strong>arrayOfNumbers</strong> that receives a variable <strong>vector</strong> as parameter. By using a <code>for</code> loop, traverse the variable searching for even numbers, and add them to a new array. The function needs to return this new array.</li>
  <li>From the array <strong>basket</strong>, return an object that contains the names of the fruits as keys and how many times they repeat in the array as values. For example, if the array is <code>['Melancia', 'Abacate', 'Melancia', 'Melancia', 'Uva']</code>, the function should return <code>{ Melancia: 3, Abacate: 1, Uva: 1 }</code>.
    <blockquote>
      <pre>
const basket = [
  'Melancia', 'Abacate', 'Melancia', 'Melancia', 'Uva', 'Laranja',
  'Jaca', 'Pera', 'Melancia', 'Uva', 'Laranja', 'Melancia',
  'Banana', 'Uva', 'Pera', 'Abacate', 'Laranja', 'Abacate',
  'Banana', 'Melancia', 'Laranja', 'Laranja', 'Jaca', 'Uva',
  'Banana', 'Uva', 'Laranja', 'Pera', 'Melancia', 'Uva',
  'Jaca', 'Banana', 'Pera', 'Abacate', 'Melancia', 'Melancia',
  'Laranja', 'Pera', 'Banana', 'Jaca', 'Laranja', 'Melancia',
  'Abacate', 'Abacate', 'Pera', 'Melancia', 'Banana', 'Banana',
  'Abacate', 'Uva', 'Laranja', 'Banana', 'Abacate', 'Uva',
  'Uva', 'Abacate', 'Abacate', 'Melancia', 'Uva', 'Jaca',
  'Uva', 'Banana', 'Abacate', 'Banana', 'Uva', 'Banana',
  'Laranja', 'Laranja', 'Jaca', 'Jaca', 'Abacate', 'Jaca',
  'Laranja', 'Melancia', 'Pera', 'Jaca', 'Melancia', 'Uva',
  'Abacate', 'Jaca', 'Jaca', 'Abacate', 'Uva', 'Laranja',
  'Pera', 'Melancia', 'Jaca', 'Pera', 'Laranja', 'Jaca',
  'Pera', 'Melancia', 'Jaca', 'Banana', 'Laranja', 'Jaca',
  'Banana', 'Pera', 'Abacate', 'Uva',
];</pre>
    </blockquote>
  <p>Then, print the result on the console as a message with the following template: <em>"Sua cesta possui: x Melancias, x Abacates..."</em> (<em>"Fruits in your basket: x Watermelons, x Avocados..."</em>)</p>
  </li>
  <p>Use the object below to do the next exercises:</p>
  <blockquote>
    <pre>
let moradores = {
blocoUm: [
  {
    nome: 'Luiza',
    sobrenome: 'Guimarães',
    andar: 10,
    apartamento: 1005,
  },
  {
    nome: 'William',
    sobrenome: 'Albuquerque',
    andar: 5,
    apartamento: 502,
  },
],
blocoDois: [
  {
    nome: 'Murilo',
    sobrenome: 'Ferraz',
    andar: 8,
    apartamento: 804,
  },
  {
    nome: 'Zoey',
    sobrenome: 'Brooks',
    andar: 1,
    apartamento: 101,
  },
],
};</pre>
  </blockquote>
  <li>Access the keys <strong>nome</strong>, <strong>sobrenome</strong>, <strong>andar</strong> and <strong>apartamento</strong> of the last resident of the <strong>blocoDois</strong> and print on the console a message with the following template: <em>"O morador do bloco 2 de nome Zoey Brooks mora no 1° andar, apartamento 101"</em> (<em>"The resident of the block 2 named Zoey Brooks lives in the 1st floor, apartment number 101"</em>).</li>
  <li>Use <code>for</code> to print the full name of all residents of the first block, accessing the keys <strong>nome</strong> and <strong>sobrenome</strong>. Then, do the same for the residents of the second block.</li>
</ol>