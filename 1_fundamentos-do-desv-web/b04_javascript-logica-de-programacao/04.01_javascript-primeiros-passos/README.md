# Dia 1/Day 1

<small>(for the English version, <a href="#en">click here</a>)</small>

<h2>:brazil: Português</h2>
<h3>JavaScript - Primeiros passos</h3>
<p>Na aula de hoje aprendemos sobre variáveis, tipos primitivos, tipagem dinâmica, operações aritiméticas, estruturas condicionais <code>if/else</code>, operadores lógicos e <code>switch/case</code>.</p>
<h3>Variáveis</h3>
<ol>
  <li>Criei uma constante chamada <strong>myName</strong> e atribuí a ela meu nome.</li>
  <li>Criei outra constante chamada <strong>birthCity</strong> e atribuí a ela minha cidade natal.</li>
  <li>Criei uma variável chamada <strong>birthYear</strong> e atribuí a ela o meu ano de nascimento.</li>
  <li>Utilizei o comando <code>console.log()</code> para imprimir as variáveis e constantes criadas no console.</li>
  <li>Alterei o valor da variável <strong>birthYear</strong> para 2030 e a imprimi com o comando <code>console.log(birthYear)</code>.</li>
  <li>Tentei reatribuir o valor à constante <strong>birthCity</strong>, mas obtive uma mensagem de erro de que não é possível alterar valor de constantes.</li>
</ol>
<h3>Tipos primitivos, tipagem dinâmica e operações aritiméticas</h3>
<ol>
  <li>Utilizei o operador <code>typeof</code> para imprimir no console os tipos das variáveis abaixo:
    <blockquote>
      <pre>
let patientId = 50;
let isEnrolled = true;
const patientInfo = {
  firstName: 'Ana',
  lastName: 'Santos',
};
const patientEmail = 'ana@email.com';</pre>
    </blockquote>
  <li>Criei uma constante chamada <strong>base</strong> e outra chamada <code>height</code>, com os valores 5 e 8, respectivamente.</li>
  <li>Criei uma constante chamada <code>area</code> e atribui a ela o resultado da multiplicação de <strong>base</strong> por <code>height</code>.</li>
  <li>Por fim, criei uma constante chamada <strong>perimeter</strong> e atribuí a ela a soma de todos os lados do retângulo.</li>
</ol>
<h3>if/else</h3>
<ol>
  <li>Declarei uma constante que recebe a nota de uma pessoa candidata em um desafio técnico, de 1 a 100.</li>
  <li>Criei um programa utilizando <code>if/else</code> que verifica se a pessoa candidata foi aprovada, reprovada ou está na lista de espera, com base nas informações abaixo:
    <ul>
      <li>Se a nota for maior ou igual a 80, imprima: <em>"Parabéns, você foi aprovada(o)!"</em>.</li>
      <li>Se for menor que 80 e maior ou igual a 60, imprima: <em>"Você está na nossa lista de espera"</em>.</li>
      <li>Se for menor que 60, imprima: <em>"Você foi reprovada(o)"</em>.</li>
    </ul>
  </li>
</ol>
<h3>Operadores lógicos</h3>
<ol>
  <li>Operador AND:</li>
    <ol>
      <li>Declarei uma constante com o nome <strong>currentHour</strong> que recebeu um valor de 4 a 24, representando horas do dia.</li>
      <li>Declarei uma variável chamada <strong>message</strong> que inicia como uma string vazia</li>
      <li>Utilizei estruturas condicionais if/else para que:
        <ul>
          <li>Se <strong>currentHour</strong> for maior ou igual a 22, mude o valor de <strong>message</strong> para <em>"Não deveríamos comer nada, é hora de dormir"</em>.</li>
          <li>Se <strong>currentHour</strong> for maior ou igual a 18, mas menor que 22, atualize o valor de <strong>message</strong> para <em>"Rango da noite, vamos jantar :D"</em>.</li>
          <li>Se <strong>currentHour</strong> maior ou igual a 14, mas menor que 18, atualize o valor de <strong>message</strong> para <em>"Vamos fazer um bolo pro café da tarde?"</em>.</li>
          <li>Se <strong>currentHour</strong> estiver entre 11 e 14, atualize <strong>message</strong> para <em>"Hora do almoço!!!"</em>.</li>
          <li>Se <strong>currentHour</strong> estiver entre 4 e 11, mude o valor de <strong>message</strong> para <em>"Hmmm, cheiro de café recém-passado"</em>.</li>
        </ul>
      </li>
      <li>Por fim, imprimi o valor atualizado de <strong>message</strong> no console.</li>
    </ol>
  <br>
  <li>Operador OR:
    <ol>
      <li>Declarei uma variável chamada <strong>weekDay</strong> que recebe o valor "quarta-feira".</li>
      <li>Usei estruturas if/else para que:
        <ul>
          <li>Se <strong>weekDay</strong> é "segunda-feira", "terça-feira", "quarta-feira", "quinta-feira" ou "sexta-feira", imprima: <em>"Oba, mais um dia de aprendizado na Trybe >:D"</em>. </li>
          <li>Se <strong>weekDay</strong> for um dia de final de semana, imprima: <em>"FINALMENTE, descanso merecido UwU"</em>.</li>
        </ul>
      </li>
    </ol>
  </li>
  <br>
  <li>Operador NOT:
    <ol>
      <li>Utilizei o comando <code>console.log(!(2 + 2) === 4);</code> para ver o que o operador NOT faz.</li>
    </ol>
  </li>
</ol>


<h2 id="en">:us: English</h2>
<h3>JavaScript - First steps</h3>
<p>In today's class, we learned about variables, primitive types, dynamic typing, arithmetic operations, <code>if/else</code>, logic operators and <code>switch/case</code>.</p>
<h3>Variables</h3>
<ol>
  <li>Declared a constant named <strong>myName</strong> and attributed my name to it.</li>
  <li>Declared another constant named <strong>birthCity</strong> and attributed my home town to it.</li>
  <li>Declared a variable named <strong>birthYear</strong> with my birth year.</li>
  <li>Using the command <code>console.log()</code>, I printed on the console all the variables and constants I previously created.</li>
  <li>Changed the value of <strong>birthYear</strong> to 2030 and printed the variable on the console by using <code>console.log(birthYear)</code>.</li>
  <li>Finally, I tried to change the value of the constant <strong>birthCity</strong>, but I got an error message saying that's not possible to change the value of a constant.</li>
</ol>
<h3>Primitive types, dynamic typing and arithmetic operations</h3>
<ol>
  <li>Used the <code>typeof</code> operator to print on the console the type of the variables below:
    <blockquote>
      <pre>
let patientId = 50;
let isEnrolled = true;
const patientInfo = {
  firstName: 'Ana',
  lastName: 'Santos',
};
const patientEmail = 'ana@email.com';</pre>
    </blockquote>
  <li>Created a constant named <strong>base</strong> and other constant named <code>height</code>, with the values ​​5 and 8, respectively.</li>
  <li>Declared another constant named <code>area</code> and attributed it the result of the multiplication <strong>base</strong> times <code>height</code>.</li>
  <li>Finally, I created a constant named <strong>perimeter</strong> and attributed it the result of the sum of all the sides of the rectangle.</li>
</ol>
<h3>if/else</h3>
<ol>
  <li>Declared a constant which receives the grade of a candidate in a technical challenge from 1 to 100.</li>
  <li>Created a program using <code>if/else</code> to verify if the candidate was approved, reproved or if the person is on the waiting list, considering the following pieces of information:
    <ul>
      <li>If the grade is higher or equal to 80, print: <em>"Parabéns, você foi aprovada(o)!"</em> (<em>"Congratulations, you've been approved!"</em>).</li>
      <li>If the grade is lower than 80 and higher or equal to 60, print: <em>"Você está na nossa lista de espera"</em> (<em>"You are in the waiting list"</em>).</li>
      <li>If the grade is lower than 60, print: <em>"Você foi reprovada(o)"</em> (<em>"You've been reproved!"</em>).</li>
    </ul>
  </li>
</ol>
<h3>Logic operators</h3>
<ol>
  <li>The AND operator:</li>
    <ol>
      <li>Declared a constant named <strong>currentHour</strong> which receives a number from 4 to 24, to represent the hours of the day.</li>
      <li>Declared a variable named <strong>message</strong> that started as an empty string.</li>
      <li>Used if/else statements so:
        <ul>
          <li>If <strong>currentHour</strong> is later or equal to 22, change the value of the <strong>message</strong> variable to <em>"Não deveríamos comer nada, é hora de dormir"</em> (<em>"We shouldn't eat anything right now, it's time to go to bed"</em>).</li>
          <li>If <strong>currentHour</strong> is later or equal to 18, but earlier than 22, change the value of <strong>message</strong> to <em>"Rango da noite, vamos jantar :D"</em> (<em>"Meal of the evening, let's have dinner :D"</em>).</li>
          <li>If <strong>currentHour</strong> is later or equal to 14, but earlier than 18, change the value of <strong>message</strong> to <em>"Vamos fazer um bolo pro café da tarde?"</em> (<em>"Let's make a cake for the meal of the afternoon"</em>).</li>
          <li>If <strong>currentHour</strong> is between 11 and 14, change the value of <strong>message</strong> to <em>"Hora do almoço!!!"</em> (<em>"Lunch time"</em>).</li>
          <li>If <strong>currentHour</strong> is between 4 and 11, change the <strong>message</strong> value to <em>"Hmmm, cheiro de café recém passado"</em> (<em>"Mmmm, I smell fresh coffee"</em>).</li>
        </ul>
      </li>
      <li>Then I printed the variable <strong>message</strong> with the update value on the console.</li>
    </ol>
  <br>
  <li>The OR operator:
    <ol>
      <li>Declared a variable named <strong>weekDay</strong> which receives the value "quarta-feira".</li>
      <li>Used if/else statements, so:
        <ul>
          <li>If <strong>weekDay</strong> is "segunda-feira"(Monday), "terça-feira"(Tuesday), "quarta-feira"(Wednesday), "quinta-feira"(Thursday) or "sexta-feira"(Friday), print: <em>"Oba, mais um dia de aprendizado na Trybe >:D"</em> (<em>"Yeah! Another day of study at Trybe!"</em>). </li>
          <li>If <strong>weekDay</strong> is a weekend day, print: <em>"FINALMENTE, descanso merecido UwU"</em> (<em>"Finally, my well-deserved rest"</em>).</li>
        </ul>
      </li>
    </ol>
  </li>
  <br>
  <li>The NOT operator:
    <ol>
      <li>Ran <code>console.log(!(2 + 2) === 4);</code> to see what the NOT operator does.</li>
    </ol>
  </li>
</ol>