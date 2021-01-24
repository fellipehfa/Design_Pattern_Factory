# Design Pattern - Factory
## Aprendendo um pouco sobre arquitetura de software, Arquitetura Inception.

<p alingn = 'justify'>Design Patterns são padrões de códigos poderosos que um programador ou programadora DEVE aprender para programar sistemas mais sofisticados, sem fazer o código perder a simplicidade e as propriedades de um código limpo (clean code).</p>
<p alingn = 'justify'>Dentro desse repositório você encontrará um arquivo js com um exemplo simples de como e onde aplicar o Design Patterns Factory, que nada mais é que um function acessando varias outras functions, acessando assim a funcionalidade de cada uma em modulos separados, como um pRocesso de montagem de uma fabrica, trabalhando de forma dinamica o escopo da function, como uma arquitetura Inception.</p>
<p alingn = 'justify'>Para entender melhor, imagine essa function Factory com um modulo que recebe um input, contendo nesse input uma requisição de informação, um CPF por exemplo, esse modulo principal irá executar uma serie de functions de verificação, como de sanitização (que removerá caracteres invalidos, espaços, de forma que só mantenha os numeros), depois coerção (para lidar de fato com uma string, conforme os padrões estipulados), validação (verifica se a informação está correta), então outra factory (function) irá buscar num banco de dados as informações desse CPF e por fim retorna as informações ao usuário.</p>
## Quer saber mais?

Além de dar uma olhadinha no arquivo js, eu recomendo fortemente que você dê uma olhada nesse vídeo do canal do [Filipe Deschamps](https://www.youtube.com/watch?v=arAz2Ff8s88), pois é daqui que eu tirei as informções para criar esse repositório, fora vários outros vídeos dele que sempre me motivou e inspirou.

© [Fellipe Henrique](https://www.linkedin.com/in/fellipehfa/)