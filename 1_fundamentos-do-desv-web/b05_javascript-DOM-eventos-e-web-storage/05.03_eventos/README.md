# Dia 3/Day 3

<small>(for the English version, <a href="#en">click here</a>)</small>

<h2>:brazil: Português</h2>
<h3>JavaScript - Eventos</h3>
<p>Na aula de hoje, aprendemos sobre escutadores de eventos e como utilizar eles para fazer nosso site reagir a interações e comportamentos do usuário.</p>
<h3>Conhecendo o addEventListener - Requisitos</h3>
<p>Para realizar os próximos exercícios, utilize os arquivos <strong>index.html</strong>, <strong>style.css</strong> e <strong>main.js</strong> fornecidos.</p>
<ol>
  <li>Copie os arquivos e edite apenas eles;
    <ol>
      <li>Antes de começar os exercícios, use a extensão <strong>LiveServer</strong> (no Visual Studio Code) para dar uma olhada em como está a página no navegador.</li>
      <li>Note que uma das caixas está um pouco acima das outras. Por que isso ocorre?</li>
    </ol>
  </li>
  <li>Crie uma função que adicione a classe <code>'tech'</code> ao elemento <code>li</code> quando for clicado.
    <ol>
      <li>Deve existir apenas um elemento com a classe <code>'tech'</code>. Como você faz isso?</li>
    </ol>
  </li>
  <li>Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento com a classe 'tech';</li>
  <li>Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele redirecione para alguma página;
    <ol>
      <li>Que tal redirecionar para seu portfólio?</li>
    </ol>
  </li>
  <li>Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere a cor do mesmo;</li>
</ol>
<h3>Exercícios finais - Calendário Trybe - Requisitos</h3>
<p>Utilize os arquivos .html, .css e .js fornecidos para realizar os exercícios a seguir:</p>
<ol>
  <li>O array <code>dezDaysList</code> contém os dois últimos dias de novembro e os dias do mês de dezembro. Desenvolva uma função que crie dinamicamente cada dia do calendário e os adicione como filhos/filhas da tag <code>&lt;ul&gt;</code> com ID <code>"days"</code> . Note que os dias 29 e 30 de novembro estão no array pois representam respectivamente Domingo e Segunda-feira.
  Os dias devem estar contidos em uma tag <code>&lt;li&gt;</code>, e todos devem ter a classe <code>day</code>. Ex: <code>&lt;li class="day"&gt;3&lt;//li&gt;</code>
  Os dias 24, 25 e 31 são feriados e, além da classe <code>day</code>, devem conter também a classe <code>holiday</code>. Ex: <code>&lt;li class="day holiday">24&lt;//li&gt;</code>
  Os dias 4, 11, 18 e 25 são Sexta-feira. Eles devem conter a classe <code>day</code> e a classe <code>friday</code>. Ex: <code>&lt;li class="day friday">4&gt;//li&lt;</code>
    <blockquote>
  <pre>
const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];</pre>
    </blockquote>
  </li>
  <li>Implemente uma função que receba como parâmetro a string <em>"Feriados"</em> e crie dinamicamente um botão com o nome <em>"Feriados"</em>.
    <ul>
      <li>Adicione a este botão a ID <code>"btn-holiday"</code>.</li>
      <li>Adicione este botão como filho/filha da tag &lt;div&gt; com classe <code>"buttons-container"</code>.</li>
    </ul>
  </li>
  <li>Implemente uma função que receba como parâmetro a string <em>"Sexta-feira"</em> e crie dinamicamente um botão com o nome <em>"Sexta-feira"</em>.
    <ul>
      <li>Adicione a este botão o ID <code>"btn-friday"</code>.
        Adicione este botão como filho/filha da tag &lt;div&gt; com classe <code>"buttons-container"</code>.
      </li>
    </ul>
  </li>
  <li>
    Implemente uma função que adicione ao botão <em>"Sexta-feira"</em> um evento de <code>"click"</code> que modifica o texto exibido nos dias que são Sexta-feira.
    <ul>
      <li>É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial exibindo os dias.</li>
    </ul>
  </li>
  <li>Implemente duas funções que criem um efeito de "zoom". Ao passar o ponteiro do mouse em um dia do mês no calendário, o texto desse dia deve aumentar e, quando o ponteiro do mouse sair do dia, o texto deve retornar ao tamanho original.</li>
  <li>Implemente uma função que adiciona uma tarefa personalizada ao calendário. A função deve receber como parâmetro a string com o nome da tarefa (ex: <em>"cozinhar"</em>) e criar dinamicamente um elemento com a tag &lt;span&gt; contendo a tarefa.
    <ul>
      <li>O elemento criado deverá ser adicionado como filho/filha da tag &lt;div&gt; que possui a classe <code>"my-tasks"</code>.</li>
    </ul>
  </li>
  <li>Implemente uma função que adiciona uma legenda com cor para a tarefa criada no exercício anterior. Esta função deverá receber como parâmetro uma string (<em>"cor"</em>) e criar dinamicamente um elemento de tag &lt;div&gt; com a classe <code>task</code>.
    <ul>
      <li>O parâmetro cor deverá ser utilizado como cor de fundo da &lt;div&gt; criada.</li>
      <li>O elemento criado deverá ser adicionado como filho/filha da tag &lt;div&gt; que possui a classe <code>"my-tasks"</code>.</li>
    </ul>
  </li>
  <li>Implemente uma função que adiciona um evento que, ao clicar no elemento com a tag &lt;div&gt; referente a cor da sua tarefa, atribua a este elemento a classe <code>task selected</code>, ou seja, quando sua tarefa possuir a classe <code>task selected</code>, ela estará selecionada.
    <ul>
      <li>Ao clicar novamente no elemento, a sua classe deverá voltar a ser somente <code>task</code>, ou seja, esta tarefa está deixando de ser uma tarefa selecionada.</li>
    </ul>
  </li>
  <li>Implemente uma função que adiciona um evento que, ao clicar em um dia do mês no calendário, atribua a este dia a cor da legenda da sua tarefa selecionada.
  <ul>
    <li>Ao clicar novamente no dia com a cor da legenda, a sua cor deverá voltar à configuração inicial <code>rgb(119,119,119)</code>.</li>
  </ul>
  </li>
</ol>
<h3>Bônus - Requisitos</h3>
<p>Vamos adicionar compromissos ao seu calendário? Implemente uma função que, ao digitar um compromisso na caixa de texto <em>"COMPROMISSOS"</em>, adiciona o item à lista <em>"MEUS COMPROMISSOS"</em> ao clicar no botão <em>"ADICIONAR"</em>.</p>  
<ul>
  <li>Se nenhum caractere for inserido no campo <code>input</code>, a função deve retornar um <code>alert</code> com uma mensagem de erro ao clicar em <em>"ADICIONAR"</em>.</li>
  <li>Ao pressionar a tecla <em>"enter"</em> o evento também deverá ser disparado.</li>
</ul>
<br>

<h2 id="en">:us: English</h2>
<h3>JavaScript - Events</h3>
<p>In today's class, we learned about event listeners and how we can use them to make our page react to the users' interactions and behaviors.</p>
<h3>Knowing the addEventListener method - Requirements</h3>
<p>To do the next exercises, use the files <strong>index.html</strong>, <strong>style.css</strong> and <strong>main.js</strong> provided.</p>
<ol>
  <li>Copy these files and edit only them;
    <ol>
      <li>Before starting the exercises, use the <code>LiveServer</code> extension (on the Visual Studio Code) to see on the browser how the page currently is.</li>
      <li>Can you notice that one of the boxes is a little higher than the other ones? Why does this happen?</li>
    </ol>
  </li>
  <li>Create a function that add the class <code>'tech'</code> to the <code>li</code> element when it's clicked.
    <ol>
      <li>There must be only one element with the class <code>'tech'</code>. How can you do that?</li>
    </ol>
  </li>
  <li>Develop a function that, when the user is typing on the input text box, it changes the inner text of the element with the class 'tech';</li>
  <li>Write a function that, when the user clicks in <em>'Meu top 3 do Spotrybefy'</em> twice, it redirects them to another page;
    <ol>
      <li>What about redirecting the user to your portfolio?</li>
    </ol>
  </li>
  <li>Create a function that, when the user is hovering the mouse over 'Meu top 3 do Spotrybefy', it changes its color;</li>
</ol>
<h3>Final exercises - Trybe Calendar - Requirements</h3>
<p>Use the files .html, .css e .js provided to do the following exercises:</p>
<ol>
  <li>The array <code>dezDaysList</code> contains the last two days of November and all of the December days. Develop a function that created the calendar dynamically adding each day as child elements of the tag <code>&lt;ul&gt;</code> with <code>"days"</code> as the ID. November 29th and 30th are in the array because they are Sunday and Monday, respectively.
  The days should be inside a <code>&lt;li&gt;</code> tag, and all of them should have the class <code>day</code>. Ex: <code>&lt;li class="day"&gt;3&lt;//li&gt;</code>
  December 24th, 25th and 31st are holidays, so they also need to have the class <code>holiday</code> alongside <code>day</code>. Ex: <code>&lt;li class="day holiday">24&lt;//li&gt;</code>
  December 4th, 11th, 18th e 25th are Fridays. So, they should have the class <code>day</code> and also the class <code>friday</code>. Ex: <code>&lt;li class="day friday">4&gt;//li&lt;</code>
    <blockquote>
  <pre>
const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];</pre>
    </blockquote>
  </li>
  <li>Write a function that receives the string <em>"Feriados"</em> as parameter and add dynamically a button named <em>"Feriados"</em>.
    <ul>
      <li>Add to the button the ID <code>"btn-holiday"</code>.</li>
      <li>Add this button as a child of the tag &lt;div&gt; that has class <code>"buttons-container"</code>.</li>
    </ul>
  </li>
  <li>Write a function that receives the string <em>"Sexta-feira"</em> as parameter and add dynamically a button named <em>"Sexta-feira"</em>.
    <ul>
      <li>Add to the button the ID <code>"btn-friday"</code>.</li>
      <li>Add this button as a child of the tag &lt;div&gt; that has class <code>"buttons-container"</code>.</li>
    </ul>
  </li>
  <li>Develop a function that adds to the <em>"Sexta-feira"</em> button an event <code>"click"</code> that changes the displayed text on the days that are fridays.
    <ul>
      <li>The button should also do the opposite. When it's clicked again, it should revert back to display the numbers.</li>
    </ul>
  </li>
  <li>Write two functions that adds a "zoom" effect when the user is hovering over a day on the calendar. The font-size of the day should incread when the mouse is hovering over the element and should revert back to the previous size when the mouse leaves.</li>
  <li>Write a function that adds a personalized task to the calendar. The function should receive a string of the name of the task as parameter (ex: <em>"cooking"</em>) and create dynamically a new &lt;span&gt; element containing the task.
    <ul>
      <li>This new element should be added as a child of the &lt;div&gt; that has the class <code>"my-tasks"</code>.</li>
    </ul>
  </li>
  <li>Create a function that add a legend with some color to the task created on the previous exercise. This function should receive a string (<em>"color"</em>) as parameter and create dynamically a &lt;div&gt; element with the class <code>task</code>.
    <ul>
      <li>The paremeter should be used as background color of the created &lt;div&gt;.</li>
      <li>This new element should be added as a child of the &lt;div&gt; that has the class <code>"my-tasks"</code>.</li>
    </ul>
  </li>
  <li>Create a function that adds an event that when the user clicks in the &lt;div&gt; element corresponding to the color of the task, add to this element the class <code>task selected</code>. That means, when the task has the class <code>task selected</code> it's been selected.
    <ul>
      <li>When the user clicks in the element again, its class should revert back to only being <code>task</code>. That means the tak isn't selected anymore</li>
    </ul>
  </li>
  <li>Write a funcion that add an event that when the user clicks in a day on the calendar, its color it's changed to same one of the selected task.
  <ul>
    <li>When the user clicks again on the day with the colors of the legend, revert its colors back to <code>rgb(119,119,119)</code>.</li>
  </ul>
  </li>
</ol>
<h3>Bonus - Requirements</h3>
<p>Let's add some appointments to your calendar? Develop a function that when the user types an appointement in the input text box <em>"COMPROMISSOS"</em>, add a list item to <em>"MEUS COMPROMISSOS"</em> when the user clicks in <em>"ADICIONAR"</em>.</p>  
<ul>
  <li>If no character is inserted in the <code>input</code> element, the function should return an <code>alert</code> with an error message when the user clicks in <em>"ADICIONAR"</em>.</li>
  <li>The event should also be triggered when the user types <em>"enter"</em>.</li>
</ul>