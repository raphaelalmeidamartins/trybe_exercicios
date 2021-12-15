# Dia 2/Day 2
<small>(for the English version, <a href="#en">click here</a>)</small>
<h2>:brazil: Português</h2>
<h3>Git & Github - Entendendo os comandos</h3>
Na aula de hoje aprendemos como clonar um repositório e mais comandos para trabalhar com nossos repositórios Git locais e remotos através do terminal.
<h3>Exercícios</h3>
  <ol>
    <li>Copiei o arquivo trybe-skills.txt da pasta do dia anterior para essa.
    <li>Verifiquei se havia algo para commitar usando o comando <code>git status</code>.
    <li>Commitei a cópia do arquivo com o comando <code>git commit -m "Copiei arquivo trybe-skills.txt do dia anterior"</code>.
    <li>Criei uma nova branch chamada trybe-skills-changes e mudei para ela com o comando <code>git checkout -b trybe-skills-changes</code>.
    <li>Utilizei o comando <code>cat >> trybe-skills.txt</code> para adicionar mais duas habilidades ao final do documento:
      <blockquote>
<pre>
HTML
CSS</pre>
      </blockquote>
    <li>Adicionei o arquivo para o stage com <code>git add trybe.skills.txt</code>.
    <li>Commitei com <code>git commit -m "Adicionei duas novas skills"</code> descrevendo a alteração.
    <li>Executei <code>git push -u origin trybe-skills-changes</code> para enviar a nova branch e submeter os commits no repositório remoto.
    <li>Na página do repositório no Github, criei um Pull Request com uma descrição detalhada.
    <li>Retornei par a branch principal com <code>git checkout master</code>.
    <li>Criei uma nova branch a partir da master chamada trybe-skills-updates e alternei para ela com o comando <code>git checkout -b trybe-skills-updates</code>.
    <li>Novamente utilizando o comando <code>cat >> trybe.skills.txt</code> adicionei uma habilidade que aprenderei nos próximos módulos:
      <blockquote>
<pre>Python</pre>
        </blockquote>
    <li>Commitei as alterações com <code>git add trybe-skills.txt</code> e <code>git commit -m "Adicionei habilidade que ainda aprenderei"</code>
    <li>E enviei as alterações para o repositório remoto com <code>git push -u origin trybe-skills-updates</code>.
    <li>Entrei no repositório remoto pelo site do Github e abri uma Pull Request para a branch trybe-skills-updates com uma descrição.
    <li>Mesclei a branch trybe-skills-changes com a master através da Pull Request que havia aberto no passo 9.
    <li>Depois tentei mesclar a branch trybe-skills-updates com a master também. Não foi possível fazer a mesclagem automática devido a conflito.
    <li>Cliquei no botão <strong>Resolve conflicts</strong> e resolvi o conflito manualmente.
    <li>Finalmente, consegui mesclar as duas branches normalmente.
  </ol>

<h2 id="en">:us: English</h2>
<h3>Git & Github - Understading the commands</h3>
In today's class, we learned how to clone a repository and more commands to work with our local and remote Git repositories through the terminal.
<h3>Exercises</h3>
  <ol>
    <li>Copied the trybe-skills.txt file from the yesterday's folder to today's folder.
    <li>Checked if there were something to commit by running <code>git status</code>.
    <li>Commited the copy of the file by running <code>git commit -m "Copiei arquivo trybe-skills.txt do dia anterior"</code>.
    <li>Created a new branch named trybe-skills-changes and checked out to it by using the command <code>git checkout -b trybe-skills-changes</code>.
    <li>Ran <code>cat >> trybe-skills.txt</code> to add two more skills to the end of the file:
      <blockquote>
<pre>
HTML
CSS</pre>
      </blockquote>
    <li>Added the file to the stage by running <code>git add trybe.skills.txt</code>.
    <li>Commited by running <code>git commit -m "Adicionei duas novas skills"</code> descrevendo a alteração.
    <li>Ran <code>git push -u origin trybe-skills-changes</code> to send the new branch and to submit the commits to the remote repository.
    <li>Entered the repository page on Github, and created a Pull Request with a detailed description.
    <li>Checkout to the master branch by running <code>git checkout master</code>.
    <li>Created a new branch from the master named trybe-skills-updates and checked out to it by using the command <code>git checkout -b trybe-skills-updates</code>.
    <li>Running <code>cat >> trybe.skills.txt</code> again, I added a skills that I am skill going to learn:
      <blockquote>
<pre>Python</pre>
      </blockquote>
    <li>Commited the changes by running <code>git add trybe-skills.txt</code> and <code>git commit -m "Adicionei habilidade que ainda aprenderei"</code>
    <li>Pushed the commits to the remote repository: <code>git push -u origin trybe-skills-updates</code>.
    <li>Entered the reposity page on Github again, and created Pull Request for the trybe-skills-updates with a description.
    <li>Merged the trybe-skills-changes branch with the master through the Pull Request that I opened in the step 9.
    <li>Then I tried to merge the trybe-skills-updates branch with the master too. It wasn't possible due to conflits.
    <li>Clicked in <strong>Resolve conflicts</strong> and solved the conflicts manually.
    <li>Finally, I was able to merge the branches without issues.
  </ol>