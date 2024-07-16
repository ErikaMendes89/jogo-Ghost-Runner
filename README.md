# Ghost Tower Game

<p>"Ghost Tower Game" é um jogo simples e divertido desenvolvido com JavaScript e a biblioteca p5.js.<br>
O objetivo do jogo é controlar um fantasma que sobe uma torre infinita, evitando obstáculos como portas e escaladores, e coletando pontos.
O jogador deve mover o fantasma para a esquerda e direita e pular para evitar cair e perder vidas.<br> O jogo termina quando todas as vidas do fantasma se esgotam.</p>

## Funcionalidades
<ul>
<li>Movimentação do Fantasma: Use as teclas de seta para mover o fantasma para a esquerda e direita, e a barra de espaço para pular.</li>
<li>Obstáculos: Portas e escaladores aparecem aleatoriamente enquanto a torre rola para baixo.</li>
<li>Sistema de Vidas: O fantasma tem 3 vidas. O jogo termina quando todas as vidas se esgotam.</li>
<li>Pontuação: A pontuação aumenta continuamente enquanto o jogo está em andamento.</li>
<li>Som Ambiente: Um som ambiente assustador toca em loop enquanto o jogo está em andamento.</li>
</ul>

## Como Jogar
<ol>
<li>Mover para a Esquerda: Pressione a tecla de seta esquerda.</li>
<li>Mover para a Direita: Pressione a tecla de seta direita.</li>
<li>Pular: Pressione a barra de espaço.</li>
<li>Evitar Obstáculos: Evite colidir com os blocos invisíveis. Se tocar neles, você perde uma vida.</li>
<li>Pontuação: Tente obter a maior pontuação possível antes de perder todas as vidas.</li>
</ol>

## Tecnologias Utilizadas
<ul>
<li>JavaScript: Linguagem principal utilizada para desenvolver o jogo.</li>
<li>p5.js: Biblioteca JavaScript para gráficos e animação.</li>
<li>HTML5 Canvas: Utilizado para renderizar os gráficos do jogo.</li>
<li>Sound.js: Utilizado para adicionar efeitos sonoros ao jogo.</li>
</ul>

# Código Fonte
## Estrutura do Projeto
<ul>
<li>index.html: Contém a estrutura básica do HTML.</li>
<li>style.css: Contém os estilos CSS para o jogo.</li>
<li>sketch.js: Contém o código JavaScript principal para o jogo.</li>
<li>assets: Pasta que contém as imagens e sons utilizados no jogo.</li>
</ul>

## Funções Principais
<ul>
<li>preload(): Carrega as imagens e sons antes do início do jogo.</li>
<li>setup(): Configura o ambiente inicial do jogo, incluindo a criação de sprites.</li>
<li>draw(): Função principal que é executada continuamente, controlando a lógica do jogo.</li>
<li>spawnDoors(): Gera portas, escaladores e blocos invisíveis aleatoriamente enquanto a torre rola.</li>
</ul>

<br>
Projeto desenvolvido durante as aulas que ministrei na Byjus.

<img src="https://github.com/ErikaMendes89/jogo-Ghost-Runner/blob/master/Anima%C3%A7%C3%A3o%20(0).gif">
