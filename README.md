<h1 align="center">
    <img src="./public/img/inventory.png" alt="Descrição da imagem" width="300" style="margin-top: 32px; display:block; margin: auto" >
</h1>


<div align="center">

  [![GitHub](https://img.shields.io/github/license/Thalles-HsA/Inventory-Frontend)](#licença)
  ![GitHub package.json version (subfolder of monorepo)](https://img.shields.io/github/package-json/v/Thalles-HsA/Inventory-Frontend)
  [![LinkedIn](https://img.shields.io/badge/LinkedIn-Perfil-blue?style=flat-square&logo=linkedin&link=https://www.linkedin.com/in/seu-nome-aqui/)](https://www.linkedin.com/in/thalleshsa/)
  ![GitHub Repo stars](https://img.shields.io/github/stars/Thalles-HsA/Inventory-Frontend?style=social)

</div>


<br>

# Índice 

- [Índice](#índice)
- [Descrição do Projeto](#descrição-do-projeto)
- [Visão Geral](#visão-geral)
- [Processo de Desenvolvimento](#processo-de-desenvolvimento)
- [Funcionalidades Previstas](#funcionalidades-previstas)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
  - [Dependências do Frontend](#dependências-do-frontend)
- [Instalação](#instalação)
  - [Frontend:](#frontend)
- [Configuração das Variáveis de Ambiente](#configuração-das-variáveis-de-ambiente)
- [Contribuição](#contribuição)
- [Licença](#licença)
- [Contato](#contato)
- [Próximas etapas](#próximas-etapas)

<br>

# Descrição do Projeto

Olá! Me chamo Thalles Henrique e este é um projeto de ERP online que estou desenvolvendo voltado para vendedores do Mercado Livre. Sou um desenvolvedor júnior em busca da minha primeira vaga, e estou criando este projeto como uma carta de apresentação do meu trabalho. Meu objetivo é demonstrar minhas habilidades na construção de um aplicativo completo, desde a concepção até a implementação.

O Frontend foi construído usando a tecnologia NextJS, que é uma biblioteca baseada em React para desenvolvimento de aplicações web. O uso do NextJS permite a construção de aplicações de página única (SPA) e servidor-side rendering (SSR) de forma fácil e eficiente.

O gerenciamento de estados no frontend foi feito com o Redux, que é uma biblioteca para gerenciamento de estados global na aplicação. Isso permite que os dados da aplicação possam ser compartilhados entre componentes de forma eficiente e organizada.

Para a criação e validação de formulários, foram utilizadas as bibliotecas Formik e Yup. O Formik é uma biblioteca que ajuda a gerenciar o estado do formulário e simplifica o processo de manipulação dos dados de entrada. O Yup é uma biblioteca de validação de schema que permite definir as regras de validação de formulário de forma simples e clara.

Para a comunicação com a API, foi utilizado o Fetch, que é uma API nativa do JavaScript para fazer requisições HTTP. O Fetch permite enviar e receber dados de forma assíncrona e é compatível com a maioria dos navegadores modernos.

A estilização do aplicativo foi feita usando o SASS, que é uma extensão do CSS que permite escrever código mais organizado e eficiente. O SASS é compatível com o CSS e permite a criação de estilos reutilizáveis e modulares.

O código do frontend foi escrito em TypeScript, que é um superset do JavaScript que adiciona recursos como tipagem estática, interfaces e outros recursos avançados de programação orientada a objetos. O TypeScript ajuda a garantir a integridade do código, evita erros de digitação e melhora a manutenibilidade e escalabilidade do projeto.

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

- React;
- Next.js;
- TypeScript;

## Dependências do Frontend

- react-redux - (versão 8.0.5)
- @reduxjs/toolkit - (versão 1.9.3)
- react-icons - (versão 4.8.0)
- formik - (versão 2.2.9)
- yup - (versão 1.0.2)
- cpf-cnpj-validator - (versão 1.0.3)
- @types/node - (versão 18.15.11)
- @types/react - (versão 18.0.35)
- @types/react-dom - (versão 18.0.11)
- eslint - (versão 8.38.0)
- eslint-config-next - (versão 13.3.0)
- next - (versão 13.3.0)
- react - (versão 18.2.0)
- react-dom - (versão 18.2.0)
- sass - (versão 1.61.0)
- typescript - (versão 5.0.4)

<br>

# Instalação

Para instalar e executar este projeto, siga os seguintes passos:

- Clone este repositório em sua máquina local

## Frontend:
1. Instale as dependências do projeto com o comando `npm install` ou `yarn install+`
2. Inicie o servidor de desenvolvimento com o comando `npm start` ou `yarn dev`
3. Acesse o aplicativo no navegador no endereço `http://localhost:3000`

<br>

# Configuração das Variáveis de Ambiente

No frontend não necessita de configurar variáveis de ambiente, porem você deve ficar atento a configuração da URL da sua API que consta no arquivo utils/config.ts


```javascript
export const api = "https://backend-projeto-inventory.herokuapp.com/api";
```

A URL deve ser de onde seu servidor backend está rodando. No exemplo acima a API está no Heroku, mas você pode mudar para localhost:5000 por exemplo para se conectar quando estiver em fase de desenvolvimento. 


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