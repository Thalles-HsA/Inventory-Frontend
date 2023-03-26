# ERP Online para vendedores do Mercado Livre

Este é um projeto de ERP online que estou desenvolvendo voltado para vendedores do Mercado Livre. Como desenvolvedor júnior em busca da minha primeira vaga, estou criando este projeto como uma carta de apresentação do meu trabalho. Meu objetivo é demonstrar minhas habilidades na construção de um aplicativo completo, desde a concepção até a implementação.

## Processo de Desenvolvimento

No processo de desenvolvimento do meu aplicativo, eu sigui uma abordagem iterativa e incremental. Primeiramente, começei com o planejamento, onde defini os objetivos do projeto, as funcionalidades que serão desenvolvidas e as tecnologias que serão utilizadas. Para isso, utilizei o Trello uma ferramentas de gerenciamento de projetos.

Em seguida, criei um esboço do design do aplicativo, definindo as telas, componentes e fluxos de navegação. Utilizei o figma uma ferramentas de design para criar protótipos de alta fidelidade, que me ajudam a visualizar como o aplicativo ficará antes mesmo de começar a codificar.

Com o design definido, começei a codificação, sempre seguindo as melhores práticas de desenvolvimento de software e utilizando as tecnologias escolhidas. Durante a codificação, utilizei ferramentas de versionamento de código como o Git e o Github para manter o controle de versões e colaboração com outros desenvolvedores.

Começei a codificação pelo backend, onde os primeiros passos foram fazer todo a parte de autenticação do usuário começando pelo cadastro, passando pelo login e por fim terminando com o logout.

## Visão Geral

Este projeto visa fornecer aos vendedores do Mercado Livre uma solução completa para gerenciar suas operações de vendas, desde o controle de estoque até a emissão de notas fiscais e a gestão de pedidos. O ERP também permitirá que os vendedores gerenciem seus clientes e façam análises de desempenho.

## Funcionalidades

- Controle de estoque
- Emissão de notas fiscais
- Gestão de pedidos
- Gerenciamento de clientes
- Análises de desempenho

## Tecnologias Utilizadas

- MongoDB
- Express
- React
- Node.js

## Instalação

Para instalar e executar este projeto, siga os seguintes passos:

- Clone este repositório em sua máquina local

Para o backend:
1. Instale as dependências do projeto com o comando `npm install`
2. Configure as variaveis de ambiente (consultar o tópico "Configuração das Variaveis de Ambiente")
3. Inicie o servidor de desenvolvimento com o comando `npm run server`
4. Acesse o aplicativo no navegador no endereço `http://localhost:5000` ou utilize o Postman para testar as rostas

Para o frontend:
1. Instale as dependências do projeto com o comando `npm install`
2. Inicie o servidor de desenvolvimento com o comando `npm start`
3. Acesse o aplicativo no navegador no endereço `http://localhost:3000`

Lembrando que as pastas frontend e backend são projetos separados, lembre-se de acessar cada uma delas em seu terminal antes de rodar os camandos. 

## Configuração das Variáveis de Ambiente

Este projeto utiliza o MongoDB como banco de dados, e para conectar o aplicativo ao seu banco de dados MongoDB, você precisará configurar as seguintes variáveis de ambiente:

1. Criar um arquivo .env na raiz do seu projeto backend e definir as variáveis lá.
    exemplo de configuração do .env: 

    ```javascript
    PORT= 5000 // Port usada para conectar ao seu servidor backend
    DB_USER= Seu usuario no MongoDB
    DB_PASS= Sua senha no MongoDB
    ```

2. Dentro da pasta backend/config você deve criar um arquivo chamado "db.js" e colocar as seguintes configurações

```javascript
//importando o mongoose
const mongoose = require("mongoose"); 

// importando as variaveis do arquivo .env que será usado na configuração do banco de dados
const dbUser = process.env.DB_USER; 
const dbPassword = process.env.DB_PASS;

const conn = async () => {
  try {
    const dbConn = await mongoose.connect(
      `mongodb+srv://${dbUser}:${dbPassword}@<endereço do servidor>/<nome do banco de dados>` // Lembrando que essa linha de código vem pronta do MongoDB, basta copiar, colar em seu codigo e substituir o seu usuario e senha por "${dbUser}:${dbPassword}" como está no exemplo acima
    );
    console.log("Conectou ao banco de dados!");

    return dbConn;
  } catch (error) {
    console.log(error);
  }
};

conn();

module.exports = conn;

```
 
> **ATENÇÃO:** Para manter as suas configurações seguras, é importante não compartilhar estes arquivos publicamente no GitHub ou em qualquer outro lugar.

## Contribuição

Este projeto foi criado por mim, Thalles Henrique, um desenvolvedor júnior em busca de minha primeira vaga como desenvolvedor FullStack. Se você gostou deste projeto e quer contribuir para seu desenvolvimento, sinta-se à vontade para abrir uma issue ou enviar uma pull request.

## Licença

Este projeto está licenciado sob a licença MIT. Consulte o arquivo LICENSE para obter mais informações.

## Contato

Para entrar em contato comigo, envie um e-mail para thsa.henrique@gmail.com ou abra uma issue neste repositório. Estou disponível para discutir oportunidades de trabalho e projetos de colaboração.

## Próximas etapas

As próximas etapas do desenvolvimento incluem:

- Desenvolvimento do frontend de todo o processo de autenticação.
- Codificação do backend do restante da aplicação.
- Desenvolvimento do frontend do restante da aplicação.
- Implementação da logica para o controle de estoque.
- Integração com a API do Mercado Livre.
- Adicionar recursos de análise de dados para permitir que os vendedores tomem decisões informadas com base em seus dados de vendas.

Estou ansioso para continuar a desenvolver este aplicativo e adicionar ainda mais recursos para ajudar os vendedores do Mercado Livre a gerenciar suas operações de vendas com eficiência.
