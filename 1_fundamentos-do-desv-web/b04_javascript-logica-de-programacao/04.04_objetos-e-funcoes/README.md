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
  Acesse as chaves <strong>nome</strong>, <strong>sobrenome</strong> e <strong>titulo</strong>, que está dentro da chave <strong>livrosFavoritos</strong>, e faça um <code>console.log</code> no seguinte formato: <em>"O livro favorito de Julia Pessoa se chama 'O Pior Dia de Todos'".</em> 
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
