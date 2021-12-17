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
<p>Utilize o mesmo arquivo fonecido para o exercício anterior.</p>
<ol>
  <li>Crie um irmão para <code>elementoOndeVoceEsta</code>.</li>
  <li>Crie um filho para <code>elementoOndeVoceEsta</code>.</li>
  <li>Crie um filho para <code>primeiroFilhoDoFilho</code>.</li>
  <li>A partir desse filho criado, acesse <code>terceiroFilho</code>.</li>
</ol>
<h3>Removendo elementos - Requisitos</h3>
<p>Utilize o mesmo arquivo fonecido para os exercícios anteriores.</p>
<ol>
  <li>Remova todos os elementos filhos de <code>paiDoPai</code> exceto <code>pai</code>, <code>elementoOndeVoceEsta</code> e <code>primeiroFilhoDoFilho</code>.</li>
</ol>
<h3>Exercícios finais - Requisitos</h3>
<p>Utilize o arquivo html fornecido para realizar os exercícios abaixo.</p>
<ol>
  <li>Adicione a tag <code>h1</code> com o texto <code>Exercício 5.2 - JavaScript DOM</code> como filho da tag <code>body</code>;</li>
  <li>Adicione a tag <code>main</code> com a classe <code>main-content</code> como filho da tag body;</li>
  <li>Adicione a tag <code>section</code> com a classe <code>center-content</code> como filho da tag main criada no passo 2;</li>
  <li>Adicione a tag <code>p</code> como filho do <code>section</code> criado no passo 3 e coloque algum texto;</li>
  <li>Adicione a tag <code>section</code> com a classe <code>left-content</code> como filho da tag <code>main</code> criada no passo 2;</li>
  <li>Adicione a tag <code>section</code> com a classe <code>right-content</code> como filho da tag <code>main</code> criada no passo 2;</li>
  <li>Adicione uma imagem com <code>src</code> configurado para o valor <code>https://picsum.photos/200</code> e classe <code>small-image</code> . Esse elemento deve ser filho do <code>section</code> criado no passo 5;</li>
  <li>Adicione uma lista não ordenada com os valores de 1 a 10 por extenso, ou seja, um , dois , três , ... como valores da lista. Essa lista deve ser filha do <code>section</code> criado no passo 6;</li>
  <li>Adicione 3 tags <code>h3</code> , todas sendo filhas do <code>main</code> criado no passo 2.</li>
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

<h2 id="en">:us: English</h2>
<h3>JavaScript - Trabalhando com elementos</h3>
<p>In today's class, we learned how to create, add and remove elements of the DOM (Document Object Model) with JavaScript.</p>
