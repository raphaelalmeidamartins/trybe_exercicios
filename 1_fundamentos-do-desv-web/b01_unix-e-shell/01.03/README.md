<small>(for the English version, <a href="#en">click here</a>)</small>
<h2>:brazil: Português</h2>
<p>Hoje aprendemos sobre o sistema Unix, a sua história, como ele influenciou os sistemas operacionais modernos (Linux e MacOS), sua estrutura interna e seu sistema de arquivos. Também conhecemos o bash, que é uma interface (ou shell) de linhas de comando extremamente útil no processo de desenvolvimento de software. Depois, exercitamos os comandos unix no bash para criar, manipular e pesquisar aquivos e diretórios.</p>
<h3>Parte I — Criação de arquivos e diretórios</h3>
    <ol>
        <li>Utilizei o comando <code>mkdir</code> para criar o diretório unix_tests e o comando <code>cd unix_tests/</code> para navegar até ele.
        <li>Criei um arquivo de texto com o nome trybe.txt através do comando <code>touch trybe.txt</code>.
        <li>Utilizei o comando <code>cp trybe.txt trybe_backup.txt</code> para criar uma cópia do arquivo trybe.txt com nome trybe_backup.txt .
        <li>Renomeei o arquivo trybe.txt para trybe_original.txt com o comando <code>mv trybe.txt trybe_original</code>.
        <li>Dentro de unix_tests, criei um novo diretório chamado backup através da linha de comando <code>mkdir backup/</code>.
        <li>Movi o arquivo trybe_backup.txt para o diretório backup executando <code>mv trybe_backup.txt backup/</code>.
        <li>Depois criei um novo diretório chamado backup2 (ainda dentro de unix_tests) com o comando <code>mkdir backup2</code>.
        <li>Movi o arquivo trybe_backup.txt do diretório backup para backup2: <code>mv backup/trybe_backup.txt backup2/</code>.
        <li>Apaguei a pasta backup: <code>rm -rf backup/</code>.
        <li>Mudei o nome da pasta backup2 para backup: <code>mv backup2 backup</code>.
        <li>Executei o comando <code>pwd</code> para ver o caminho completo do diretório atual, que retornou: <i>/home/raphael/Documentos/Trybe/trybe_exercicios/1_fundamentos-do-desv-web/b01_unix-e-shell/01.03/unix_tests</i>.
        <li>Apaguei o diretório backup com o comando <code>rm -rf backup</code>.
        <li>Depois limpei o terminal com o comando <code>clear</code>.
        <li>Ainda no diretório unix_tests, criei um arquivo chamado skills.txt usando a GUI (Graphic User Interface) do meu sistema com o seguinte conteúdo:
        <blockquote>
        <pre>
Internet
Unix
Bash
HTML
CSS
JavaScript
React
SQL</pre>
        </blockquote>
        <li>Exibi as cinco primeiras linhas do arquivo com o comando: <code>head -5 skills.txt</code>.
        <li>E as quatro últimas linhas com: <code>tail -4 skills.txt</code>.
        <li>Por fim, apaguei todos os arquivos com extensão .txt: <code>rm *txt </code>.
    </ol>
<h3>Parte II — Manipulação & Busca</h3>
    <ol>
        <li>Novamente dentro do diretório unix_tests, baixei um arquivo de texto com uma lista de todos os países do mundo executando comando: <code>curl -o countries.txt "https://gist.githubusercontent.com/kalinchernev/486393efcca01623b18d/raw/daa24c9fea66afb7d68f8d69f0c4b8eeb9406e83/countries"</code>
        <li>Executei <code>cat countries.txt</code> para exibir o conteúdo do arquivo no próprio terminal.
        <li>Executei o comando <code>less countries.txt</code> para exibir o conteúdo do arquivo em páginas e fui avançando (pressionando a barra de espaço) até encontrar a Zambia.
        <li>Rodei novamente <code>less countries.txt</code> mas agora pressionei <code>/Zambia</code> e dei enter para pesquisar o nome do país.
        <li>Agora busquei pelo Brasil utlizando o comando <code>grep Brazil countries.txt</code>.
        <li>Realizei a mesma busca novamente, mas utilizando <code>grep -i brazil countries.txt</code> para buscar ignorando maiúsculas e minúsculas.
        <li>Crie um novo arquivo chamado phrases.txt e adicione algumas frases em inglês utilizando a linha de comando <code>cat > phrases.txt</code>.
        <li>Procurei pelas frases que não contém a palavra fox: <code>grep -v fox phrases.txt</code>.
        <li>Contei o número de palavras do arquivo com <code>wc -w phrases.txt</code>.
        <li>O número de linhas com <code>wc -l phrases.txt</code>.
        <li>Criei os arquivos empty.tbt e empty.pdf com o comando <code>touch empty.tbt empty.pdf</code>.
        <li>Utilizei <code>ls -a</code> para listar todos os arquivos da parta unix_tests.
        <li>Executei <code>ls *txt</code> para listar todos os arquivos com extensão .txt.
        <li>Listei todos os arquivos que terminem com tbt ou txt, executando <code>ls *.t*t</code>.
        <li>Por último, acessei o manual do comando ls: <code>man ls</code>.
    </ol>
<h2 id="en">:us: English</h2>
<p>Today we learned about the Unix system, its history, how it influenced modern Operating Systems (such as Linux and MacOS), its internal structure and its file system. We also learned about bash, which is an extremely useful command-line interface (or shell) in the software development process. Then, we practiced some unix commands on the bash terminal to create, manipulate, and search files and directories.</p>
<h3>Part I — Creating files and directories</h3>
    <ol>
        <li>I ran <code>mkdir</code> to create the unix_tests directory and <code>cd unix_tests/</code> to navigate to it.
        <li>Created a new text file named trybe.txt running command <code>touch trybe.txt</code>.
        <li>Then, I created a copy of the file trybe.txt named trybe_backup.txt using  <code>cp trybe.txt trybe_backup.txt</code>.
        <li>Renamed the file trybe.txt to trybe_original.txt with the command line <code>mv trybe.txt trybe_original</code>.
        <li>While inside the unix_tests directory, I created a new folder called backup with <code>mkdir backup/</code>.
        <li>Then I moved the file trybe_backup.txt to the backup folder using <code>mv trybe_backup.txt backup/</code>.
        <li>After that, I created another directory inside unix_tests called backup2 running the line <code>mkdir backup2</code>.
        <li>Moved the file trybe_backup.txt from the backup directory to backup2: <code>mv backup/trybe_backup.txt backup2/</code>
        <li>Deleted the backup folder: <code>rm -rf backup/</code>.
        <li>Then I renamed the backup2 directory to backup: <code>mv backup2 backup</code>.
        <li>Ran the command <code>pwd</code> to see the complete path of the current directory and the terminal returned: <i>/home/raphael/Documentos/Trybe/trybe_exercicios/1_fundamentos-do-desv-web/b01_unix-e-shell/01.03/unix_tests</i>.
        <li>Deleted the backup directory, running the command <code>rm -rf backup</code>.
        <li>And I cleaned my terminal with the command <code>clear</code>.
        <li>Created a new text file called skills.txt (inside the unix_tests folder) using the GUI (Graphic User Interface) of my system with the following content:
        <blockquote>
        <pre>
Internet
Unix
Bash
HTML
CSS
JavaScript
React
SQL</pre>
        </blockquote>
        <li>Ran <code>head -5 skills.txt</code> to see the first five lines of the file on the terminal.
        <li>And to see the four last ones, I ran: <code>tail -4 skills.txt</code>.
        <li>Finally, I deleted every single file that had the .txt extension running the command line <code>rm *txt </code>.
    </ol>
<h3>Part II — Manipulation & Search</h3>
    <ol>
        <li>Inside the unix_tests directory again, I downloaded a text file that contains a list of every single country of the world running the command line <code>curl -o countries.txt "https://gist.githubusercontent.com/kalinchernev/486393efcca01623b18d/raw/daa24c9fea66afb7d68f8d69f0c4b8eeb9406e83/countries"</code>
        <li>Ran <code>cat countries.txt</code> to show the whole content of the file on the terminal itself.
        <li>Ran the command <code>less countries.txt</code> to show the content of the file divided in pages, and I moved from page to page using the space key until I found the country Zambia.
        <li>Ran <code>less countries.txt</code> again, but this time I typed <code>/Zambia</code> and pressed enter to search for the name of the country.
        <li>Looked for Brazil using the command <code>grep Brazil countries.txt</code>.
        <li>Performed the same search again, but using the command <code>grep -i brazil countries.txt</code> to ignore case.
        <li>Then I created a new text file named phrases.txt, and I put some random English phrases running  <code>cat > phrases.txt</code>.
        <li>Looked for the phrases that do not contain the word fox: <code>grep -v fox phrases.txt</code>.
        <li>Counted how many words there are in the file <code>wc -w phrases.txt</code>.
        <li>How many lines <code>wc -l phrases.txt</code>.
        <li>Created two new files empty.tbt and empty.pdf running <code>touch empty.tbt empty.pdf</code>.
        <li>Ran <code>ls -a</code> to list every single file inside unix_tests.
        <li>And <code>ls *txt</code> to list every file with the .txt extension.
        <li>Then I listed all the files having both the .tbt and .txt extensions running <code>ls *.t*t</code>.
        <li>Finally, I checked the manual for the command ls: <code>man ls</code>.
    </ol>