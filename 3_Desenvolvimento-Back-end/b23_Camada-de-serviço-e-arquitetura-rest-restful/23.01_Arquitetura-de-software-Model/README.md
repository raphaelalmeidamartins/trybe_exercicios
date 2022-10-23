# Dia 1/Day 1

<small>(for the English version, <a href="#en">click here</a>)</small>

<h2>:brazil: Português</h2>
<h3>Arquitetura de Software - Camada de Model</h3>
<p>Na aula de hoje, fomos introduzidos a arquitetura de software MSC (Model Service Controller) Ela consiste na divisão da aplicação em três camadas distintas que devem ter suas responsabilidades únicas. Cada camada deve se comunicar diretamente apenas com a camada do nível subsequente. Por exemplo, a camada Controller se comunica com a camada Service, mas não deve se comunicar com a camada Model. Níveis e responsabilidades:</p>

3. Controller - recebimento e retorno das requisições
2. Service - validação e aplicação de regras de negócio
1. Model - comunicação com banco de dados

<p>Hoje aprendemos a implementar a camada Model.</p>

<br>

<h2 id="en">:us: English</h2>
<h3>Software Architecture - Model Layer</h3>
<p>In today's class, we were introduced to the MSC software architecture (Model Service Controller). It consists of dividing the application into three distinct layers that must have their own unique responsibilities. Each layer must communicate directly only with the layer of the subsequent level. For example, the Controller layer communicates with the Service layer, but must not communicate with the Model layer. Levels and Responsibilities:</p>

3. Controller - receives and responds to the requests
2. Service - validation and application of business rules
1. Model - communication with the database

<p>Today, we learned how to implement the Model layer.</p>
