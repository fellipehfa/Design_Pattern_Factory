  function criaObjeto ( ) {
    let objeto = { };
    return objeto;
  }
    //função que cria objetos vazios
  
  let pessoaA = criaObjeto ( );
  let pessoaB = criaObjeto ( );
    // cria duas pessoas com nenhuma informação inserida.
  
  pessoaA.nome = 'Fellipe';
  pessoaB.nome = 'Baiana';
    // essa função se transformou em uma fabrica, que cria pessoas, com uma função simples. Agora vamos entender melhor o que podemos fazer com isso.
  
  function fabricarPessoa (nome, sobrenome) {
    let pessoa = { };
  
    pessoa.nome = nome;
    pessoa.sobrenome = sobrenome;
  
    return pessoa;
  }
    // A fabrica que cria pessoas já está pronta, agora é só rotular cada uma.
  
  let pessoaA = fabricarPessoa ('Fellipe', 'Henrique');
  let pessoaB = fabricarPessoa ('Baiana', 'Lindona');
    //É importante entender com isso que trabalhamos com uma questão de escopo aqui, onde o que é tratado dentro da function não pode ser acessado de fora da function, mas as informações que atribuímos as pessoas, graças a "fabrica de pessoas", se torna público, podendo ser acessada de fora da function.
  
  function fabricarPessoa (nome, sobrenome) {
    let pessoa = { };
  
    pessoa.nome = nome;
    pessoa.sobrenome = sobrenome;
    
    function nomeCompleto ( ) {
      return `${pessoa.nome} ${pessoa.sobrenome}`;
    }
    
    pessoa.nomeCompleto = nomeCompleto; //dessa forma expomos essa função para fora da segunda function.
    return pessoa;
  
  }
  
  /*Com isso podemos adquirir um nivel de isolamento e composição de código mais avançado. 
  
  Onde se aplica?
  
  Para entender melhor, imagine essa function Factory com um modulo que recebe um input, contendo nesse input uma requisição de informação, um CPF por exemplo, esse modulo principal irá executar uma serie de functions de verificação, como de sanitização (que removerá caracteres invalidos, espaços, de forma que só mantenha os numeros), depois coerção (para lidar de fato com uma string, conforme os padrões estipulados), validação (verifica se a informação está correta), então outra factory (function) irá buscar num banco de dados as informações desse CPF e por fim retorna as informações ao usuário.
  */