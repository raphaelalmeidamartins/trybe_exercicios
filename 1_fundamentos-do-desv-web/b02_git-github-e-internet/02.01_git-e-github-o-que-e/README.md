# Dia 1/Day 1
<small>(for the English version, <a href="#en">click here</a>)</small>
<h2>:brazil: Português</h2>
<h3>Git & Github - O que é e para que serve</h3>
<p>Na aula de hoje aprendemos sobre o sistema de controle de versões Git e sobre a plataforma Github. Neste exercício, praticamos como criar um repositório local e vincular a um remoto atrelado a nossa conta do Github utilizando o bash.</p>
<h3>Parte I — Instalação e configuração</h3>
    <ol>   
        <li>Instalei o Git no Linux usando o seguinte comando no terminal: <code>sudo apt-get install git-all</code>.
        <li>Configurei a minha identidade executando os seguintes comandos:
            <blockquote>
                <pre>
git config --global user.name "Seu nome"
git config --global user.email seuemail@exemplo.br</pre>
            </blockquote>
        <li>Defini o Visual Studio Code como editor padrão para abrir o arquivo de configuração do git: <code>git config --global core.editor "code --wait"</code>.
        <li>Executei <code>git --version</code> para verificar a instação, e o terminal retornou:
            <blockquote>
<pre>git version 2.32.0</pre>
            </blockquote>
        <li>Verifiquei se a identidade foi configurada corretamente, executando <code>git config --lis</code>. O terminal retornou meu nome de usuário e e-mail configurados no passo 2.
    </ol>
<h3>Parte II — Criar conta no Github</h3>
    <p>Criei minha conta no site do Github utilizando meu e-mail pessoal.</p>
<h3>Parte III — Adicionando uma chave SSH na minha conta do Github</h3>
    <ol>
        <li>Gerando uma nova chave SSH executando o comando: <code>ssh-keygen -t rsa -b 4096 -C "meuemail@gmail.com"</code>. Pressionei enter para aceitar a localização padrão da chave e em seguida defini a minha senha.
        <li>Adicionei a minha chave SSH ao ssh-agent executando os comandos: <code>eval "$(ssh-agent -s)"</code> e <code>ssh-add ~/.ssh/id_rsa</code>.
        <li>Executei <code>sudo apt-get install xclip</code> para instalar o comando <code>xclip</code> no meu terminal.
        <li>Então executei <code>xclip -sel clip < ~/.ssh/id_rsa.pub</code> para copiar a chave SSH para minha área de transferência.
        <li>Entrei no site do Github, fui em <strong>Settings</strong>, <strong>SSH and GPD keys</strong>.
        <li>Cliquei em <strong>New SSH key</strong>, adicionei uma descrição para minha chave, depois cliquei em <strong>Add SSH key</strong>.
        <li>Por último, inseri a minha senha do Github para confirmar.
    </ol>

<h2 id="en">:us: English</h2>
<h3>Git & Github - What are they and what are they used for</h3>
<p>In today's class we learned about the Git version control system and the Github platform. In this exercise, we practiced creating and linking a local Git repository to one of our Github account using bash.</p>
<h3>Part I — Instalation and settings</h3>
    <ol>   
        <li>Installed Git in my Linux distro by running the command <code>sudo apt-get install git-all</code> on the terminal.
        <li>Set my identity  by running the following commands:
            <blockquote>
                <pre>
git config --global user.name "Seu nome"
git config --global user.email seuemail@exemplo.br</pre>
            </blockquote>
        <li>Set Visual Studio Code as the default editor to edit the git configuration file: <code>git config --global core.editor "code --wait"</code>.
        <li>Then I ran <code>git --version</code> to see if I did the installation correctly. The terminal returned:
            <blockquote>
<pre>git version 2.32.0</pre>
            </blockquote>
        <li>To verify if I set my identity correctly,  I ran <code>git config --lis</code>. The terminal returned the username and e-mail I set on the step 2.
    </ol>
<h3>Part II — Create a Github account</h3>
    <p>Created my Github account using my personal e-mail.</p>
<h3>Part III — Adding a SSH key to my Github account</h3>
    <ol>
        <li>Generated a new SSH key by running the command: <code>ssh-keygen -t rsa -b 4096 -C "myemail@gmail.com"</code>. Pressed enter to accept the default location to the key and right after that I set my passphrase.
        <li>Added the SSH key to the ssh-agent by running the commands: <code>eval "$(ssh-agent -s)"</code> and <code>ssh-add ~/.ssh/id_rsa</code>.
        <li>Ran <code>sudo apt-get install xclip</code> to install the <code>xclip</code> command in my terminal.
        <li>Then I ran: <code>xclip -sel clip < ~/.ssh/id_rsa.pub</code> to copy the SSH key to my Clipboard.
        <li>Went to Github website, went to <strong>Settings</strong>, <strong>SSH and GPD keys</strong>.
        <li>Clicked in <strong>New SSH key</strong>, added a description to my key, then I clicked in <strong>Add SSH key</strong>.
        <li>Finally, I entered my Github password to confirm..
    </ol>