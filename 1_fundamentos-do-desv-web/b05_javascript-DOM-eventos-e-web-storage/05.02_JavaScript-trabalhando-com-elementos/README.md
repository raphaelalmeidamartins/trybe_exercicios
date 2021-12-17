# Dia 2/Day 2

<small>(for the English version, <a href="#en">click here</a>)</small>

<h2>:brazil: Português</h2>
<h3>JavaScript - Trabalhando com elementos</h3>
<p>Na aula de hoje, aprendemos a criar, adicionar e remover elementos do DOM (Document Object Model) com JavaScript.</p>
<h3>Buscando elementos - Requisitos</h3>
<p>Utilize o arquivo html fornecido como base.</p>
<ol>
  <li>Acesse o elemento <code>elementoOndeVoceEsta</code>.</li>
  <li>Acesse <code>pai</code> a partir de <code>elementoOndeVoceEsta</code> e adicione uma color a ele.</li>
  <li>Acesse o <code>primeiroFilhoDoFilho</code> e adicione um texto a ele. Você se lembra dos vídeos da aula anterior, como fazer isso?</li>
  <li>Acesse o <code>primeiroFilho</code> a partir de <code>pai</code>.</li>
  <li>Agora acesse o <code>primeiroFilho</code> a partir de <code>elementoOndeVoceEsta</code>.</li>
  <li>Agora acesse o texto <code>Atenção!</code> a partir de <code>elementoOndeVoceEsta</code>.</li>
  <li>Agora acesse o <code>terceiroFilho</code> a partir de <code>elementoOndeVoceEsta</code>.</li>
  <li>Agora acesse o <code>terceiroFilho</code> a partir de <code>pai</code>.</li>
</ol>
<h3>Criando elementos - Requisitos</h3>
<p>Utilize o mesmo arquivo fornecido para o exercício anterior.</p>
<ol>
  <li>Crie um irmão para <code>elementoOndeVoceEsta</code>.</li>
  <li>Crie um filho para <code>elementoOndeVoceEsta</code>.</li>
  <li>Crie um filho para <code>primeiroFilhoDoFilho</code>.</li>
  <li>A partir desse filho criado, acesse <code>terceiroFilho</code>.</li>
</ol>
<h3>Removendo elementos - Requisitos</h3>
<p>Utilize o mesmo arquivo fornecido para os exercícios anteriores.</p>
<ol>
  <li>Remova todos os elementos filhos de <code>paiDoPai</code> exceto <code>pai</code>, <code>elementoOndeVoceEsta</code> e <code>primeiroFilhoDoFilho</code>.</li>
</ol>
<h3>Exercícios finais - Requisitos</h3>
<p>Utilize o arquivo html fornecido para realizar os exercícios abaixo.</p>
<ol>
  <li>Adicione a tag <code>h1</code> com o texto <code>Exercício 5.2 - JavaScript DOM</code> como filho da tag <code>body</code>;</li>
  <li>Adicione a tag <code>main</code> com a classe <code>main-content</code> como filho da tag <code>body</code>;</li>
  <li>Adicione a tag <code>section</code> com a classe <code>center-content</code> como filho da tag <code>main</code> criada no passo 2;</li>
  <li>Adicione a tag <code>p</code> como filho do <code>section</code> criado no passo 3 e coloque algum texto;</li>
  <li>Adicione a tag <code>section</code> com a classe <code>left-content</code> como filho da tag <code>main</code> criada no passo 2;</li>
  <li>Adicione a tag <code>section</code> com a classe <code>right-content</code> como filho da tag <code>main</code> criada no passo 2;</li>
  <li>Adicione uma imagem com <code>src</code> configurado para o valor <code>https://picsum.photos/200</code> e classe <code>small-image</code>. Esse elemento deve ser filho do <code>section</code> criado no passo 5;</li>
  <li>Adicione uma lista não ordenada com os valores de 1 a 10 por extenso, ou seja, um , dois , três , ... como valores da lista. Essa lista deve ser filha do <code>section</code> criado no passo 6;</li>
  <li>Adicione 3 tags <code>h3</code>, todas sendo filhas do <code>main</code> criado no passo 2.</li>
</ol>
<p>Agora que você criou muita coisa, vamos fazer algumas alterações e remoções:</p>
<ol>
  <li>Adicione a classe <code>title</code> na tag <code>h1</code> criada;</li>
  <li>Adicione a classe <code>description</code> nas 3 tags <code>h3</code> criadas;</li>
  <li>Remova a <code>section</code> criado no passo 5 (aquele que possui a classe <code>left-content</code>). Utilize a função <code>.removeChild()</code>;</li>
  <li>Centralize a <code>section</code> criado no passo 6 (aquele que possui a classe <code>right-content</code>). Dica: para centralizar, basta configurar o <code>margin-right: auto</code> da <code>section</code>;</li>
  <li>Troque a cor de fundo do elemento pai da <code>section</code> criada no passo 3 (aquela que possui a classe <code>center-content</code>) para a cor verde;</li>
  <li>Remova os dois últimos elementos (<code>nove</code> e <code>dez</code>) da lista criada no passo 8.</li>
</ol>
<br>

<h2 id="en">:us: English</h2>
<h3>JavaScript - Working with elements</h3>
<p>In today's class, we learned how to create, add and remove elements of the DOM (Document Object Model) with JavaScript.</p>
<h3>Accessing elements - Requirements</h3>
<p>Use the provided html file to do the next exercises.</p>
<ol>
  <li>Access the element <code>elementoOndeVoceEsta</code>.</li>
  <li>Access <code>pai</code> from <code>elementoOndeVoceEsta</code> and add a color to it.</li>
  <li>Access <code>primeiroFilhoDoFilho</code> add a text to it. Do you remember the videos of the previous class about that?</li>
  <li>Access <code>primeiroFilho</code> from <code>pai</code>.</li>
  <li>Now access <code>primeiroFilho</code> from <code>elementoOndeVoceEsta</code>.</li>
  <li>Now access the text <code>Atenção!</code> from <code>elementoOndeVoceEsta</code>.</li>
  <li>Then, access <code>terceiroFilho</code> from <code>elementoOndeVoceEsta</code>.</li>
  <li>And access <code>terceiroFilho</code> from <code>pai</code>.</li>
</ol>
<h3>Creating elements - Requirements</h3>
<p>Used the same html file provided for the previous exercises.</p>
<ol>
  <li>Create a sibling to <code>elementoOndeVoceEsta</code>.</li>
  <li>Create a child to <code>elementoOndeVoceEsta</code>.</li>
  <li>Create a child to <code>primeiroFilhoDoFilho</code>.</li>
  <li>From the created child, access <code>terceiroFilho</code>.</li>
</ol>
<h3>Removing elements - Requirements</h3>
<p>Use the same file provided for the previous exercises.</p>
<ol>
  <li>Remove all child elements of <code>paiDoPai</code> except <code>pai</code>, <code>elementoOndeVoceEsta</code> and <code>primeiroFilhoDoFilho</code>.</li>
</ol>
<h3>Final exercises - Requirements</h3>
<p>Use the provided html file to do these next exercises.</p>
<ol>
  <li>Add a <code>h1</code> tag with the inner text <code>Exercício 5.2 - JavaScript DOM</code> as a child of <code>body</code>;</li>
  <li>Add a <code>main</code> tag with the class <code>main-content</code> as a child of <code>body</code>;</li>
  <li>Add a <code>section</code> tag with the class <code>center-content</code> as a child of the <code>main</code> tag created on the step 2;</li>
  <li>Add a <code>p</code> tag as the child of the <code>section</code> created on the step 3 and put some text inside it;</li>
  <li>Add a <code>section</code> tag with the class <code>left-content</code> as the child of the <code>main</code> tag created on the step 2;</li>
  <li>Add a <code>section</code> tag with the class <code>right-content</code> as a child of the <code>main</code> created on the step 2;</li>
  <li>Add a image with the value <code>https://picsum.photos/200</code> as the <code>src</code> and with the class <code>small-image</code>.  This element should be a child of the <code>section</code> created on the step 5;</li>
  <li>Add a unordered list with the values 1 to 10 in full as the list items values. This list should be a child of the <code>section</code> created on the step 6;</li>
  <li>Add 3 <code>h3</code> tag, all of them should be a child of the <code>main</code> created on the step 2.</li>
</ol>
<p>Now that you've created a lot of elements, let's make some changes and remove some of them:</p>
<ol>
  <li>Add the class <code>title</code> to the created <code>h1</code> tag;</li>
  <li>Add the class <code>description</code> to the 3 <code>h3</code> tags created;</li>
  <li>Remove the <code>section</code> created on the step 5 (the one with the class <code>left-content</code>). Use the function <code>.removeChild()</code>;</li>
  <li>Center the <code>section</code> created on the step 6 (the one with the class <code>right-content</code>). Hint: to center, set the <code>margin-right:</code> of <code>section</code> to <code>auto</code>;</li>
  <li>Change the color of the father elements of the <code>section</code> created on the step 3 (the one with the class <code>center-content</code>) to green;</li>
  <li>Remove the two last elements (<code>nove</code> and <code>dez</code>) from the list created on the step 8.</li>
</ol>