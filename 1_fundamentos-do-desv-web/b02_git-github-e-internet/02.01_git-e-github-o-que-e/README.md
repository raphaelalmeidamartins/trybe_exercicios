# Dia 1/Day 1
<small>(for the English version, <a href="#en">click here</a>)</small>
<h2>:brazil: Português</h2>
<h3>Git & GitHub - O que é e para que serve</h3>
<p>Na aula de hoje aprendemos sobre o sistema de controle de versões Git e sobre a plataforma GitHub. Neste exercício, praticamos como criar um repositório local e vincular a um remoto atrelado a nossa conta do GitHub utilizando o bash.</p>
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
<h3>Parte II — Criar conta no GitHub</h3>
  <p>Criei minha conta no site do GitHub utilizando meu e-mail pessoal.</p>
<h3>Parte III — Adicionando uma chave SSH na minha conta do GitHub</h3>
  <ol>
    <li>Gerando uma nova chave SSH executando o comando: <code>ssh-keygen -t rsa -b 4096 -C "meuemail@gmail.com"</code>. Pressionei enter para aceitar a localização padrão da chave e em seguida defini a minha senha.
    <li>Adicionei a minha chave SSH ao ssh-agent executando os comandos: <code>eval "$(ssh-agent -s)"</code> e <code>ssh-add ~/.ssh/id_rsa</code>.
    <li>Executei <code>sudo apt-get install xclip</code> para instalar o comando <code>xclip</code> no meu terminal.
    <li>Então executei <code>xclip -sel clip < ~/.ssh/id_rsa.pub</code> para copiar a chave SSH para minha área de transferência.
    <li>Entrei no site do GitHub, fui em <strong>Settings</strong>, <strong>SSH and GPD keys</strong>.
    <li>Cliquei em <strong>New SSH key</strong>, adicionei uma descrição para minha chave, depois cliquei em <strong>Add SSH key</strong>.
    <li>Por último, inseri a minha senha do GitHub para confirmar.
  </ol>
<h3>Parte IV — Meu repositório no GitHub</h3>
  <ol>
    <li>Criei um diretório chamado trybe-exercicios para ser meu portfólio de exercícios.
    <li>Organizei as pastas conforme módulos, blocos e dias.
    <li>Naveguei pelo terminal até a pasta do dia de hoje com o comando <code>cd</code>.
    <li>Criei um arquivo chamada trybe-skills.txt com o comando <code>cat > trybe.skills.txt</code> e inseri o seguinte conteúdo nele:
      <blockquote>
        <pre>
O que eu vou aprender na Trybe:
- Unix
- Bash
- Git</pre>
      </blockquote>
    <li>Naveguei de volta para a pasta trybe-exercicios e executei <code>git init</code> para transforma-la em um repositório git.
    <li>Executei <code>git add .</code> e <code>git commit -m "Initial commit"</code> para fazer o meu primeiro commit.
    <li>Fui até o site do GitHub e criei um repositório público com o nome trybe-exercicios e copiei a URL SSH dele.
    <li>Executei <code>git remote add origin git@github.com:raphaelalmeidamartins/trybe_exercicios.git</code> para vincular meu repositório local com remote.
    <li>Executei <code>git push origin master</code> para submeter meu primeiro commit para o repositório remoto.
    <li>Criei um arquivo README.md descrevendo o repositório.
    <li>Por último, commitei a criação do arquivo e dei um push.
  </ol>

<h2 id="en">:us: English</h2>
<h3>Git & GitHub - What are they and what are they used for</h3>
<p>In today's class, we learned about the Git version control system and the GitHub platform. In this exercise, we practiced creating and linking a local Git repository to one of our GitHub account using bash.</p>
<h3>Part I — Installation and settings</h3>
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
    <li>To verify if I set my identity correctly,  I ran <code>git config --lis</code>. The terminal returned the username and e-mail I set on step 2.
  </ol>
<h3>Part II — Create a GitHub account</h3>
  <p>Created my GitHub account using my personal e-mail.</p>
<h3>Part III — Adding an SSH key to my GitHub account</h3>
  <ol>
    <li>Generated a new SSH key by running the command: <code>ssh-keygen -t rsa -b 4096 -C "myemail@gmail.com"</code>. Pressed enter to accept the default location to the key and right after that, I set my passphrase.
    <li>Added the SSH key to the ssh-agent by running the commands: <code>eval "$(ssh-agent -s)"</code> and <code>ssh-add ~/.ssh/id_rsa</code>.
    <li>Ran <code>sudo apt-get install xclip</code> to install the <code>xclip</code> command in my terminal.
    <li>Then I ran: <code>xclip -sel clip < ~/.ssh/id_rsa.pub</code> to copy the SSH key to my Clipboard.
    <li>Went to the GitHub website, went to <strong>Settings</strong>, <strong>SSH, and GPD keys</strong>.
    <li>Clicked on <strong>New SSH key</strong>, added a description to my key, then clicked on <strong>Add SSH key</strong>.
    <li>Finally, I entered my Github password to confirm.
  </ol>
<h3>Part IV — My GitHub repository</h3>
  <ol>
    <li>Created a directory called trybe-exercicios to be my exercises portfolio.
    <li>Organized the folders with the modules, units, and days.
    <li>Navigated to today's folder through the terminal by using the command <code>cd</code>.
    <li>Created a file named trybe-skills.txt by using the command <code>cat > trybe.skills.txt</code> and I entered the following content in it:
      <blockquote>
        <pre>
O que eu vou aprender na Trybe:
- Unix
- Bash
- Git</pre>
      </blockquote>
    <li>Navigated back to the trybe-exercicios directory, and I ran <code>git init</code> to make the folder a Git repository.
    <li>Ran <code>git add .</code> and <code>git commit -m "Initial commit"</code> to commit for the very first time.
    <li>Entered the GitHub website and created a public repository named trybe-exercicios, and I copied its SSH URL.
    <li>Ran <code>git remote add origin git@github.com:raphaelalmeidamartins/trybe_exercicios.git</code> to synchronize my local and remote repositories.
    <li>Ran <code>git push origin master</code> to submit my first commit to the remote repository.
    <li>Created a README.md file describing the repository.
    <li>Finally, committed the new file and pushed it.
  </ol>
