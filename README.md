
<h1 align="center">
    <img src="./inventory.png" alt="Descrição da imagem" width="300" style="margin-top: 32px; display:block; margin: auto" >
</h1>


<div align="center">

  [![GitHub](https://img.shields.io/github/license/Thalles-HsA/Inventory-MERN)](#licença)
  ![GitHub package.json version (subfolder of monorepo)](https://img.shields.io/github/package-json/v/Thalles-HsA/Inventory-MERN)
  [![LinkedIn](https://img.shields.io/badge/LinkedIn-Perfil-blue?style=flat-square&logo=linkedin&link=https://www.linkedin.com/in/seu-nome-aqui/)](https://www.linkedin.com/in/thalleshsa/)
  ![GitHub Repo stars](https://img.shields.io/github/stars/Thalles-HsA/Inventory-MERN?style=social)

</div>


<br>

# Índice 

- [Índice](#índice)
- [Descrição do Projeto](#descrição-do-projeto)
- [Visão Geral](#visão-geral)
- [Processo de Desenvolvimento](#processo-de-desenvolvimento)
- [Funcionalidades Previstas](#funcionalidades-previstas)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
  - [Dependências do Backend](#dependências-do-backend)
  - [Dependências do Frontend](#dependências-do-frontend)
- [Instalação](#instalação)
  - [Backend:](#backend)
  - [Frontend:](#frontend)
- [Configuração das Variáveis de Ambiente](#configuração-das-variáveis-de-ambiente)
  - [Script Nodemon](#script-nodemon)
  - [Arquivo .env](#arquivo-env)
  - [Arquivo db.js](#arquivo-dbjs)
- [Contribuição](#contribuição)
- [Licença](#licença)
- [Contato](#contato)
- [Próximas etapas](#próximas-etapas)

<br>

# Descrição do Projeto

Olá! Me chamo Thalles Henrique e este é um projeto de ERP online que estou desenvolvendo voltado para vendedores do Mercado Livre. Sou um desenvolvedor júnior em busca da minha primeira vaga, e estou criando este projeto como uma carta de apresentação do meu trabalho. Meu objetivo é demonstrar minhas habilidades na construção de um aplicativo completo, desde a concepção até a implementação.

Estou utilizando a Stack MERN, que consiste em MongoDB, Express, React e Nodejs, para desenvolver o projeto. Acredito que essa escolha irá me permitir explorar diferentes aspectos do desenvolvimento web e me permitir evoluir como programador.

O resultado final deste projeto será um aplicativo que permitirá aos vendedores do Mercado Livre gerenciar suas vendas e estoque de forma mais eficiente, melhorando assim sua produtividade e aumentando seus resultados.

<br>

# Visão Geral

O Inventory é um projeto de ERP online com foco na qualidade de estoque e facilidade de implementação, diferenciando-se de outros sistemas tradicionais do mercado. Como desenvolvedor com experiência na área, estou empenhado em utilizar todo meu conhecimento para construir um produto de excelência.

Este projeto tem como objetivo fornecer uma solução completa para os vendedores do Mercado Livre gerenciarem suas operações de vendas. Além do controle de estoque, o ERP também abrange funções como emissão de notas fiscais, gestão de pedidos, análises de desempenho e gerenciamento de clientes.

<br>

# Processo de Desenvolvimento

No processo de desenvolvimento do meu aplicativo, eu segui uma abordagem iterativa e incremental. Primeiramente, começei com o planejamento, onde defini os objetivos do projeto, as funcionalidades que serão desenvolvidas e as tecnologias que serão utilizadas.

Em seguida, criei um esboço do design do aplicativo, definindo as telas, componentes e fluxos de navegação. Utilizei o canva uma ferramentas de design para criar protótipos de alta fidelidade, que me ajudam a visualizar como o aplicativo ficará antes mesmo de começar a codificar.

Com o design definido, começei a codificação, sempre seguindo as melhores práticas de desenvolvimento de software e utilizando as tecnologias escolhidas. Durante a codificação, utilizei ferramentas de versionamento de código como o Git e o Github para manter o controle de versões e colaboração com outros desenvolvedores.

Veja mais sobre o processo de desenvolvimento do frontend e do backend dentro de suas respesquitivas pastas.

<br>


# Funcionalidades Previstas

- Qualidade de estoque;
- IA para gerir a qualidade do estoque e dar sugesstões personalizadas;
- Controle de estoque;
- Emissão de notas fiscais;
- Gestão de pedidos;
- Gerenciamento de clientes;
- Análises de desempenho;

<br>

# Tecnologias Utilizadas

Nesse projeto utilizei da stack MERN em Typecript para o desenvolvimento

- MongoDB;
- Express;
- React;
- Node.js;

## Dependências do Backend


  - nodemon - (versão 2.0.22) devDepndencies
  - bcrypt - (versão 5.1.0)
  - bcryptjs - (versão 2.4.3)
  - cors - (versão 2.8.5)
  - cpf-cnpj-validator - (versão 1.0.3)
  - dotenv - (versão 16.0.3)
  - express - (versão 4.18.2)
  - express-validator - (versão 6.15.0)
  - jsonwebtoken - (versão 9.0.0)
  - mongoose - (versão 7.0.3)
  - multer - (versão 1.4.5-lts.1)

## Dependências do Frontend

  - react-redux - (versão 8.0.5)
  - react-icons - (versão 4.8.0)
  - formik - (versão 2.2.9)
  - yup - (versão 1.0.2)
  - cpf-cnpj-validator - (versão 1.0.3)
  - normalize.css - (versão 8.0.1)
  - typescript - (versão 4.4.4)
  - @types/jest - (versão 29.5.0)
  - @types/node - (versão 18.15.11)
  - @types/react - (versão 18.0.33)
  - @types/react-dom - (versão 18.0.11)

<br>

# Instalação

Para instalar e executar este projeto, siga os seguintes passos:

- Clone este repositório em sua máquina local

## Backend:
1. Instale as dependências do projeto com o comando `npm install`
2. Configure as variáveis de ambiente - consultar [Configuração das Variaveis de Ambiente](#configuração-das-variáveis-de-ambiente)
3. Inicie o servidor de desenvolvimento com o comando `npm run server`
4. Acesse o aplicativo no navegador no endereço `http://localhost:5000` ou utilize o Postman para testar as rostas

## Frontend:
1. Instale as dependências do projeto com o comando `npm install`
2. Inicie o servidor de desenvolvimento com o comando `npm start`
3. Acesse o aplicativo no navegador no endereço `http://localhost:3000`

>Lembrando que as pastas frontend e backend são projetos separados, lembre-se de acessar cada uma delas em seu terminal antes de rodar os camandos. 

>ATENÇÃO: A Versão 5.0.3 do TypeScript tem causado bug com a depêndencia react-script 5.0.1 portanto o projeto está usando a versão antiga 4.4.4. Caso tenha algum problema realacionado a isso desistale a versão recente do TS e instale a v4.4.4 que resolverá o problema. 

<br>

# Configuração das Variáveis de Ambiente

Este projeto utiliza o MongoDB como banco de dados, e para conectar o aplicativo ao seu banco de dados MongoDB, você precisará configurar as seguintes variáveis de ambiente na sua pasta do backend.

## Script Nodemon

- no package.json crie um script para que o nodemon possa rodar: 

```javascript
"scripts": {
    "server": "nodemon ./app.js",
    // ...restante dos seus scripts
  },
```

## Arquivo .env
- Criar um arquivo .env na raiz do seu projeto backend e definir as variáveis lá.

  Exemplo de configuração do .env: 

```javascript
  // Porta usada para conectar ao seu servidor backend
  PORT= 5000 

  // Dados de conexão do MongoDB
  DB_USER= Seu usuario no MongoDB
  DB_PASS= Sua senha no MongoDB
  DB_DB= endereço do servidor/nome do banco de dados // Copie tudo apos o @
```
> **ATENÇÃO:** Para manter as suas configurações seguras, é importante não compartilhar este arquivo publicamente no GitHub ou em qualquer outro lugar.

  <br>

## Arquivo db.js

- Dentro da pasta backend/config você deve criar um arquivo chamado "db.js" e colocar as seguintes configurações.

```javascript
//importando o mongoose
const mongoose = require("mongoose"); 

// importando as variaveis do arquivo .env que será usado na configuração do banco de dados
const dbUser = process.env.DB_USER; 
const dbPassword = process.env.DB_PASS;
const dbBanco = process.env.DB_DB;

const conn = async () => {
  try {
    const dbConn = await mongoose.connect(
      `mongodb+srv://${dbUser}:${dbPassword}@${dbBanco}` // Lembrando que essa linha de código vem pronta do MongoDB, basta copiar, colar em seu codigo e substituir o seu usuário, senha, endereço do servidor e nome do banco de dados pelos dados do arquivo .env (${dbUser}:${dbPassword}@${dbBanco}) como está no exemplo acima.
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

>NOTA: Com essas configurações feita da maneira correta você já está pronto(a) para começar o desenvolvimento. Para confirmar se tudo está correto rode o comando dentro da pasta backend "npm run server" e veja no seu terminal aparecer "Conectou ao banco e dados!"

<br>

![gif](./gif.gif)

<br>

# Contribuição

Este projeto foi criado por mim, Thalles Henrique, um desenvolvedor júnior em busca de minha primeira vaga como desenvolvedor FullStack. 

No meu [Linkedin](https://www.linkedin.com.br/in/thalleshsa) posto as atualizações e modificações recentes.  Diáriamente posto as atualizações do projeto e os passo-a-passo do desenvolvimento, sempre dando dicas importantes para ajudar mais Dev na sua evolução.

Se você gostou deste projeto e quer contribuir para seu desenvolvimento, sinta-se à vontade para abrir uma issue ou enviar uma pull request.

<br>

# Licença

Este projeto está licenciado sob a licença MIT. Consulte o arquivo LICENSE para obter mais informações.

<br>

# Contato

Entre em contato comigo atraves de um dos canais abaixo:

* Email - thsa.henrique@gmail.com 
* Linkedin - [Thalles Henrique](https://www.linkedin.com.br/in/thalleshsa)
  
Estou disponível para discutir oportunidades de trabalho e projetos de colaboração.

<br>

# Próximas etapas

As próximas etapas do desenvolvimento incluem:

- Codificação do backend do cadastros de produtos, clientes efornecedores, anuncios e etc...
- Desenvolvimento do frontend.
- Implementação da logica para o controle de estoque.
- Integração com a API do Mercado Livre.
- Adicionar recursos de análise de dados para permitir que os vendedores tomem decisões informadas com base em seus dados de vendas.
- Implementação de um IA para gerir a qualidade do estoque.

Estou ansioso para continuar a desenvolver este aplicativo e adicionar ainda mais recursos para ajudar os vendedores do Mercado Livre a gerenciar suas operações de vendas com eficiência.