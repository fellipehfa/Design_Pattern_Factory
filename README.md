# Design Pattern - Factory
## Aprendendo um pouco sobre arquitetura de software, Arquitetura Inception.

Design Patterns ou padrões de projetos são soluções generalistas para problemas recorrentes durante o desenvolvimento de um software. Não se trata de um framework ou um código pronto, mas de uma definição de alto nível de como um problema comum pode ser solucionado.

## Quais os benefícios de usar Design Patterns?

Design patterns são modelos que já foram utilizados e testados anteriormente, portanto podem representar um bom ganho de produtividade para os desenvolvedores. Seu uso também contribui para a organização e manutenção de projetos, já que esses padrões se baseiam em baixo acoplamento entre as classes e padronização do código.

Além disso, com a padronização dos termos, as discussões técnicas são facilitadas. É mais fácil falar o nome de um design pattern em vez de ter que explicar todo o seu comportamento.

Dentro desse repositório você encontrará um arquivo js com um exemplo simples de como e onde aplicar o Design Patterns Factory, que nada mais é que um function acessando varias outras functions, acessando assim a funcionalidade de cada uma em modulos separados, como um pRocesso de montagem de uma fabrica, trabalhando de forma dinamica o escopo da function, como uma arquitetura Inception.

Para entender melhor, imagine essa function Factory com um modulo que recebe um input, contendo nesse input uma requisição de informação, um CPF por exemplo, esse modulo principal irá executar uma serie de functions de verificação, como de sanitização (que removerá caracteres invalidos, espaços, de forma que só mantenha os numeros), depois coerção (para lidar de fato com uma string, conforme os padrões estipulados), validação (verifica se a informação está correta), então outra factory (function) irá buscar num banco de dados as informações desse CPF e por fim retorna as informações ao usuário.

## Quer saber mais?

Além de dar uma olhadinha no arquivo js, eu recomendo fortemente que você dê uma olhada nesse vídeo do canal do [Filipe Deschamps](https://www.youtube.com/watch?v=arAz2Ff8s88), pois é daqui que eu tirei as informções para criar esse repositório, fora vários outros vídeos dele que sempre me motivou e inspirou.

© [Fellipe Henrique](https://www.linkedin.com/in/fellipehfa/)
