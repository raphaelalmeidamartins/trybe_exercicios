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
<h3>Switch/case</h3>
<ol>
  <li>Declarei uma variável com o status de uma pessoa candidata em um processo seletivo com um dos seguintes valores: <em>"aprovado(a)"</em>, <em>"reprovado(a)"</em> ou <em>"lista"</em>(.</li>
  <li>Usei uma estrutura <code>switch/case</code> para imprimir as mesmas mensagens do exercício anterior de <code>if/else</code> se o status do candidato for aprovado, reprovado ou lista de espera. Como default default, imprime a mensagem: <em>"não se aplica"</em>.</li>
</ol>

<h3>Exercícios finais - Requisitos</h3>
<ol>
  <li>Desenvolva cinco programas, um para cada operação aritimética básica. Seu programa precisa ter duas constantes <strong>a</strong> e <strong>b</strong>, declaradas no início com os valores que serão operados:
    <ul>
      <li>Adição (<strong>a</strong> + <strong>b</strong>)</li>
      <li>Subtração (<strong>a</strong> - <strong>b</strong>)</li>
      <li>Multiplicação (<strong>a</strong> * <strong>b</strong>)</li>
      <li>Divisão (<strong>a</strong> / <strong>b</strong>)</li>
      <li>Módulo (<strong>a</strong> % <strong>b</strong>)</li>
    </ul>
  </li>
  <li>Desenvolva um programa que retorne o maior de dois números.</li>
  <li>Desenvolva um programa que retorne o maior de três números.</li>
  <li>Crie um programa que retorne se um número é positivo, negativo ou zero.</li>
  <li>Declare três constantes com o valor de três ângulos. Desenvolva um programa que returna <em>true</em> se eles são ângulos de um triângulo, ou <em>false</em> se não são.
    <ul>
      <li>Dica: para que ângulos de um triângulo sejam válidos, eles precisam somar 180 graus.</li>
      <li>Os ângulos também precisam ser positivos para serem válidos.</li>
    </ul>
  </li>
  <li>Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que esta peça consegue fazer. O programa precisa funcionar independentemente de o nome da peça ser em maísculo ou minúsculo, e precisa retornar uma mensagem de erro se não for uma peça válida.</li>
  <li>Desenvolva um programa que converta uma nota dadaem porcentagem (de 0 a 100) para conceitos de A a F. Considere:
    <ul>
      <li>Porcentagem >= 90 -> A</li>
      <li>Porcentagem >= 80 -> B</li>
      <li>Porcentagem >= 70 -> C</li>
      <li>Porcentagem >= 60 -> D</li>
      <li>Porcentagem >= 50 -> E</li>
      <li>Porcentagem < 50 -> F</li>
      <li>O programa também deve retornar uma mensagem de erro se a nota dada for menor que 0 ou maior que 100.</li>
    </ul>
  </li>
  <li>Escreva um programa que define três números em constantes e retorna <em>true</em> se algum deles for par. Do contrário, deve retornar <em>false</em>. <em><strong>Bônus:</strong> tente utilizar apenas um if</em>.</li>
  <li>Escreva um programa que define três números em constantes e retorna <em>true</em> se algum deles for ímpar. Do contrário, deve retornar <em>false</em>. <em><strong>Bônus:</strong> tente utilizar apenas um if</em>.</li>
  <li>Escreva um programa com dois valores declarados como constantes: um para o preço de venda de um produto e outro para o preço de custo. O programa precisa retornar quanto de lucro a empresa terá se vender mil desse produto. Considere:</li>
    <ul>
    <li>Sobre o custo do produto, incide um imposto de 20%.</li>
    <li>O programa precisa retornar uma mensagem de erro caso alguns dos valores fornecidos seja menor que zero.</li>
    </ul>
  <li>No Brasil, do salário de uma pessoa que trabalha em regime CLT são descontados impostos INSS e IR. Desenvolva um programa que retorn o salário líquido de um salário bruto fornecido. Primeiro, calcule o salário base (salário bruto - INSS), e então calcule o salário líquido (salário base - IR).
    <ul>
      <li>INSS aliquotas:
        <ul>
          <li>Salário bruto até R$ 1.556,94: 8%</li>
          <li>De R$ 1.556,95 a R$ 2.594,92: 9%</li>
          <li>De R$ 2.594,93 a R$ 5.189,82: 11%</li>
          <li>Acima de R$ 5.189,82: aliquota máxima de R$ 570,88</li>
        </ul>
      </li>
      <li>IR aliquotas:
        <ul>
          <li>Salário base até R$ 1.903,98: isento</li>
          <li>De R$ 1.903,99 a R$ 2.826,65: 7,5% e R$ 142,80 a ser deduzido do imposto</li>
          <li>De R$ 2.826,66 a R$ 3.751,05: 15% e R$ 354,80 a ser deduzido do imposto</li>
          <li>De R$ 3.751,06 a R$ 4.664,68: 22,5% e R$ 636,13 a ser deduzido do imposto</li>
          <li>Acima R$ 4.664,68: 27,5% e R$ 869,36 a ser deduzido do imposto</li>
        </ul>
    </ul>
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
<h3>Switch/case</h3>
<ol>
  <li>Declared a variable with the status of a candidate in a selection process that has one of the following values: <em>"aprovado(a)"</em>(aproved), <em>"reprovado(a)"</em>(reproved) or <em>"lista"</em>(waiting list).</li>
  <li>Used a <code>switch/case</code> structure to print the same messages of the previous exercise about <code>if/else</code> if the status of the candidate is aproved, reproved or waiting list. As default, it prints the message: <em>"não se aplica"</em> (<em>"not applicable"</em>).</li>
</ol>

<h3>Final exercises - Requirements</h3>
<ol>
  <li>Develop five programs, one for each basic arithmetic operation. Your program needs to have two constants <strong>a</strong> and <strong>b</strong>, both declared in the begining with the values that are going to be operated. Develop programs for:
    <ul>
      <li>Addition (<strong>a</strong> + <strong>b</strong>)</li>
      <li>Subtraction (<strong>a</strong> - <strong>b</strong>)</li>
      <li>Multiplication (<strong>a</strong> * <strong>b</strong>)</li>
      <li>Division (<strong>a</strong> / <strong>b</strong>)</li>
      <li>Module (<strong>a</strong> % <strong>b</strong>)</li>
    </ul>
  </li>
  <li>Develop a program that returns the highest of two numbers.</li>
  <li>Develop a program that returns the highest of three numbers.</li>
  <li>Create a program that returns if a giving number is positive, negative or zero.</li>
  <li>Declare three constants with the value of three angles. Develop a program that returns <em>true</em> if they are angles of a triangle or <em>false</em> if they are not.
    <ul>
      <li>Hint: for the angles of a triangle to be valid, the sum of them needs to be 180 degrees</li>
      <li>Also, a angle needs to be positive to be valid.</li>
    </ul>
  </li>
  <li>Write a program that receives a chess piece and return the movements it is able to do. The program needs to work even if the name of the piece is lower case or upper case, and it needs to return an error message if the given piece is invalid.</li>
  <li>Develop a program that converts a given grade in percentage (from 0 to 100) in grades from A to F. Consider the following rules:
    <ul>
      <li>Percentage >= 90 -> A</li>
      <li>Percentage >= 80 -> B</li>
      <li>Percentage >= 70 -> C</li>
      <li>Percentage >= 60 -> D</li>
      <li>Percentage >= 50 -> E</li>
      <li>Percentage < 50 -> F</li>
      <li>The program needs to return an error message if the given grade is lower than 0 or higher than 100.</li>
    </ul>
  </li>
  <li>Write a program that define three numbers in constants and returns <em>true</em> if at least one of them is even. If none of them are, it needs to return <em>false</em>. <em><strong>Bonus:</strong> try to use only one if statement</em>.</li>
  <li>Write a program that define three numbers in constants and returns <em>true</em> if at least one of them is odd. If none of them are, it needs to return <em>false</em>. <em><strong>Bonus:</strong> try to use only one if statement</em>.</li>
  <li>Write a program with two values declared as constants: one for sale price and the other one for the cost of the product. The program needs to return how much profit the company would get if they sell a thousand of this product. Please consider the following pieces of information:</li>
    <ul>
    <li>Note that the cost of the product is subject to a 20% tax.</li>
    <li>Your program needs to return an error message and end if one of the given values is lower than zero.</li>
    </ul>
  <li>In Brazil, the salary of a person who works with a formal contract is subject to INSS and IR taxes. Develop a program that return the net salary of a given gross salary. First, calculate base salary (gross salary - INSS tax), and then calculate the net salary (base salary - IR tax).
    <ul>
      <li>INSS tax rates:
        <ul>
          <li>Gross salary lower or equal to R$ 1.556,94: 8% tax</li>
          <li>From R$ 1.556,95 to R$ 2.594,92: 9% tax</li>
          <li>From R$ 2.594,93 to R$ 5.189,82: 11% tax</li>
          <li>Above R$ 5.189,82: maximal tax of R$ 570,88</li>
        </ul>
      </li>
      <li>IR tax rates:
        <ul>
          <li>Base salary lower or equal to R$ 1.903,98: no tax</li>
          <li>Base salary from R$ 1.903,99 to R$ 2.826,65: 7,5% tax and R$ 142,80 to be deduced from the tax</li>
          <li>Base salary from R$ 2.826,66 to R$ 3.751,05: 15% tax and R$ 354,80 to be deduced from the tax</li>
          <li>Base salary from R$ 3.751,06 to R$ 4.664,68: 22,5% tax and R$ 636,13 to be deduced from the tax</li>
          <li>Base salary above R$ 4.664,68: 27,5% tax and R$ 869,36 to be deduced from the tax</li>
        </ul>
    </ul>
  </li>
</ol>