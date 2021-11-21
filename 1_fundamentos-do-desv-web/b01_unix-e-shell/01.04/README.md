<small>(for the English version, <a href="#en">click here</a>)</small>
<h2>:brazil: Português</h2>
<p>Na aula de hoje aprendemos mais comandos unix e também aprendemos sobre permissões de arquivos.</p>
<h3>Parte I — Comandos de Input e Output</h3>
    <ol>
        <li>Naveguei até a pasta do módulo 1 e do bloco 01 com <code>cd 1_fundamentos-do-desv-web/b01_unix-e-shell</code> e criei um diretório para hoje com <code>mkdir 01.04</code>.
        <li>Copiei o diretório unix_tests do dia 01.03 para o 01.04 utilizando o comando <code>cd 01.03/unix_tests 01.04/</code>.
        <li>Com o comando <code>cat > skills2.txt</code>, criei um arquivo chamado skills2.txt e adicionei os valores:
            <blockquote>
                <pre>
Internet
Unix
Bash</pre>
            </blockquote>
        <li>Executei <code>cat >> skills2.txt</code> e adicionei mais cinco itens:
            <blockquote>
                <pre>
HTML
CSS
JavaScript
Python
React</pre>
            </blockquote>
        <li>Imprimi o conteúdo de skills2.txt em ordem alfabética no terminal com <code>sort skills2.txt</code>.
        <li>Com o comando <code>sort skills2.txt | head -3 > top_skills.txt</code>, criei um arquivo chamado top_skills.txt usando o skills2.txt , contendo as 3 primeiras skills em ordem alfabética.
        <li>Com <code>cat > phrases2.txt</code>, criei um arquivo chamado phrases2.txt e adicionei as seguintes frases em inglês:
            <blockquote>
                <pre>
I am from Brazil, how about you?
How old are you?
Trybe is a great school
I am a software developer</pre>
            </blockquote>
        <li>Contei quantas linhas do arquivo phrases2.txt contém "br": <code>grep -i "br" phrases2.txt | wc -l</code> e o terminal retornou: 1.
        <li>Contei quantas linhas do arquivo phrases2.txt <strong>não contém</strong> "br": <code>grep -iv "br" phrases2.txt | wc -l</code> e o terminal retornou: 3.
        <li>Adicionei dois nomes de países ao final do arquivo phrases2.txt com <code>cat >> phrases2.txt</code>.
        <li>Executei <code>cat phrases2.txt countries.txt > bunch_of_things.txt</code> para criar um novo arquivo chamado bunch_of_things.txt contendo os conteúdos dos arquivos phrases2.txt e countries.txt .
        <li>Por último, imprimi na tela o conteúdo do arquivo bunch_of_things.txt em ordem alfabética: <code>sort bunch_of_things.txt</code>.
    </ol>
<h3>Parte II — Permissões</h3>
    <ol>
        <li>Ainda no diretório 01.04/unix_tests, executei o comando <code>ls -l</code> para verificar as permissões dos arquivos, e o terminal retornou:
            <blockquote>
                <pre>
total 24
-rw-rw-r-- 1 raphael raphael 1964 nov 21 14:10 bunch_of_things.txt
-rw-rw-r-- 1 raphael raphael 1843 nov 18 23:20 countries.txt
-rw-rw-r-- 1 raphael raphael    0 nov 18 23:20 empty.pdf
-rw-rw-r-- 1 raphael raphael    0 nov 18 23:20 empty.tbt
-rw-rw-r-- 1 raphael raphael  121 nov 21 14:08 phrases2.txt
-rw-rw-r-- 1 raphael raphael   99 nov 18 23:20 phrases.txt
-rw-rw-r-- 1 raphael raphael   52 nov 21 13:23 skills2.txt
-rw-rw-r-- 1 raphael raphael   14 nov 21 13:25 top_skills.txt</pre>
            </blockquote>
        <li>Com o comando <code>chmod a+rw bunch_of_things.txt</code>, alterei as permissões do arquivo bunch_of_things.txt para que todos os usuários tenham acesso à leitura e escrita. Resultado obtido ao executar <code>ls -l</code> após a alteração:
            <blockquote>
                <pre>
-rw-rw-rw- 1 raphael raphael 1964 nov 21 14:10 bunch_of_things.txt</pre>
            </blockquote>
        <li>Com o comando <code>chmod a-w bunch_of_things.txt</code>, removi as permissões de escrita para todos os usuários. Resultado obtido ao executar <code>ls -l</code> após a alteração:
            <blockquote>
                <pre>
-r--r--r-- 1 raphael raphael 1964 nov 21 14:10 bunch_of_things.txt</pre>
            </blockquote>
        <li>Por último, reverti as permissões para o estado original executando <code>chmod 644 bunch_of_things.txt</code>. Resultado:
            <blockquote>
                <pre>
-rw-r--r-- 1 raphael raphael 1964 nov 21 14:10 bunch_of_things.txt</pre>
            </blockquote>
    </ol>
<h3>Parte III — Processos & Jobs</h3>
    <ol>
        <li>Listei todos os processos com <code>ps</code>:
    <blockquote>
        <pre>
    PID TTY          TIME CMD
        6950 pts/0    00:00:02 zsh
        18505 pts/0    00:00:00 sleep
        18531 pts/0    00:00:00 ps</pre>
    </blockquote>
        <li>Executei o comando <code>sleep 30 &</code> para rodar um processo em segundo plano.
        <li>Utilizei a listagem de processos novamente para encontrar o PID do processo que está executando o comando <code>sleep 30</code> e o encerrei com o comando <code>kill 18505</code>.
        <li>Executei novamente o comando <code>sleep 30</code>, mas sem o <code>&</code>. Pressionei <em>ctrl+z</em> para suspender o processo e em seguida executei o comando <code>bg</code> para que ele continue em background.
        <li>Com o comando <code>jobs</code>, verifiquei os processos em execução:
<blockquote>
    <pre>
[1]    suspended  sleep 30
[2]    running    sleep 300
[3]  - suspended  sleep 200
[4]  + suspended  sleep 100</pre>
</blockquote>
        <li>Movi o processo do comando <code>sleep 300</code> para o foreground com <code>fg %2</code>.
        <li>Retomei a execução do processo do comando <code>sleep 100</code> em background com o comando <code>bg %4</code>.
        <li>Por último, encerrei todos os processos com <code>kill %1 %2 %3 %4</code>.
    </ol>

<h2 id="en">:us: English</h2>
<p>In today's class we learned more unix commands and we also learned about file permissions.</p>
<h3>Part I — Input and Output commands</h3>
    <ol>
        <li>Navigated to the folder of the module 1 book 1 by running <code>cd 1_fundamentos-do-desv-web/b01_unix-e-shell</code> and I created a directory for today with <code>mkdir 01.04</code>.
        <li>Copied the unix_tests directory from the 01.03 folder to the 01.04 folder using the command <code>cd 01.03/unix_tests 01.04/</code>.
        <li>Running <code>cat > skills2.txt</code>, I created a new file named skills2.txt , and I added the following content:
            <blockquote>
                <pre>
Internet
Unix
Bash</pre>
            </blockquote>
        <li>Ran <code>cat >> skills2.txt</code> and added five more items:
            <blockquote>
                <pre>
HTML
CSS
JavaScript
Python
React</pre>
            </blockquote>
        <li>Printed the content of the file skills2.txt in alphabetic order on the terminal using <code>sort skills2.txt</code>.
        <li>Using the command <code>sort skills2.txt | head -3 > top_skills.txt</code>, I created a new file named top_skills.txt using the file skills2.txt , containing the first 3 skills in alphabetic order.
        <li>With <code>cat > phrases2.txt</code>, I created a file named phrases2.txt , and I added the following English phrases:
            <blockquote>
                <pre>
I am from Brazil, how about you?
How old are you?
Trybe is a great school
I am a software developer</pre>
            </blockquote>
        <li>Counted how many lines there are in the file phrases2.txt containing "br": <code>grep -i "br" phrases2.txt | wc -l</code>. The terminal returned: 1.
        <li>Counted how many lines there are in the file phrases2.txt that <strong>do not contain</strong> "br": <code>grep -iv "br" phrases2.txt | wc -l</code>. The terminal returned: 3.
        <li>Added two country names to the end of the file phrases.txt running <code>cat >> phrases2.txt</code>.
        <li>Ran <code>catphrases2.txt countries.txt > bunch_of_things.txt</code> to create a file named bunch_of_things.txt containing the content of both phrases2.txt and countries.txt .
        <li>Finally, I printed the content of the file bunch_of_things.txt on the screen in alphabetic order: <code>sort bunch_of_things.txt</code>.
    </ol>
<h3>Part II — Permissions</h3>
    <ol>
        <li>While inside the 01.04/unix_tests directory, I ran the command <code>ls -l</code> to list all the files permissions. The terminal returned:
            <blockquote>
                <pre>
total 24
-rw-rw-r-- 1 raphael raphael 1964 nov 21 14:10 bunch_of_things.txt
-rw-rw-r-- 1 raphael raphael 1843 nov 18 23:20 countries.txt
-rw-rw-r-- 1 raphael raphael    0 nov 18 23:20 empty.pdf
-rw-rw-r-- 1 raphael raphael    0 nov 18 23:20 empty.tbt
-rw-rw-r-- 1 raphael raphael  121 nov 21 14:08 phrases2.txt
-rw-rw-r-- 1 raphael raphael   99 nov 18 23:20 phrases.txt
-rw-rw-r-- 1 raphael raphael   52 nov 21 13:23 skills2.txt
-rw-rw-r-- 1 raphael raphael   14 nov 21 13:25 top_skills.txt</pre>
            </blockquote>
        <li>With the command <code>chmod a+rw bunch_of_things.txt</code>, I changed the permissions of the file bunch_of_things.txt , so every user now have read and write permissions:
            <blockquote>
                <pre>
-rw-rw-rw- 1 raphael raphael 1964 nov 21 14:10 bunch_of_things.txt</pre>
            </blockquote>
        <li>With the command <code>chmod a-w bunch_of_things.txt</code>, I removed the write permission of all users:
            <blockquote>
                <pre>
-r--r--r-- 1 raphael raphael 1964 nov 21 14:10 bunch_of_things.txt</pre>
            </blockquote>
        <li>Finally, I reverted the permissions back to their original state by running <code>chmod 644 bunch_of_things.txt</code>:
            <blockquote>
                <pre>
-rw-r--r-- 1 raphael raphael 1964 nov 21 14:10 bunch_of_things.txt</pre>
            </blockquote>
    </ol>
<h3>Part III — Processes & Jobs</h3>
    <ol>
        <li>Listed all process <code>ps</code>:
    <blockquote>
        <pre>
    PID TTY          TIME CMD
        6950 pts/0    00:00:02 zsh
        18505 pts/0    00:00:00 sleep
        18531 pts/0    00:00:00 ps</pre>
    </blockquote>
        <li>Used the command <code>sleep 30 &</code> to run a process in background.
        <li>Ran <code>ps</code> again to see the PID of the <code>sleep 30</code> process, and I killed by using the command <code>kill 18505</code>.
        <li>Ran <code>sleep 30</code> again, but without the <code>&</code>. I pressed <em>ctrl+z</em> to suspend the process, and ran the command <code>bg</code> for the process to continue in the background.
        <li>By using the command <code>jobs</code>, I listed the running processes:
<blockquote>
    <pre>
[1]    suspended  sleep 30
[2]    running    sleep 300
[3]  - suspended  sleep 200
[4]  + suspended  sleep 100</pre>
</blockquote>
        <li>Moved the process <code>sleep 300</code> to the foreground by running <code>fg %2</code>.
        <li>Resumed the process <code>sleep 100</code> in the background by using <code>bg %4</code>.
        <li>Finally, I killed all the processes by running <code>kill %1 %2 %3 %4</code>.
    </ol>
