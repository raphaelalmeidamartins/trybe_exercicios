# Dia 1/Day 1
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

<h2>:us: English</h2>
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