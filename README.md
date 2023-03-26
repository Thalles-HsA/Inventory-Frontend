# ERP Online para vendedores do Mercado Livre

Este é um projeto de ERP online que estou desenvolvendo voltado para vendedores do Mercado Livre. Como desenvolvedor júnior em busca da minha primeira vaga, estou criando este projeto como uma carta de apresentação do meu trabalho. Meu objetivo é demonstrar minhas habilidades na construção de um aplicativo completo, desde a concepção até a implementação.

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

1. Criar um arquivo .env na raiz do seu projeto e definir as variáveis lá.
    exemplo de configuração do .env: 

    ```javascript
    PORT= 5000 // Port usada para conectar ao seu servidor backend
    DB_USER= Seu usuario no MongoDB
    DB_PASS= Sua senha no MongoDB
    ```

2. Dentro da pasta config você deve criar um arquivo chamado "db.js" e colocar as seguintes configurações

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
 
> ATENÇÃO: Para manter as suas configurações seguras, é importante não compartilhar estes arquivos publicamente no GitHub ou em qualquer outro lugar.


## Contribuição

Este projeto foi criado por mim, Thalles Henrique, um desenvolvedor júnior em busca de minha primeira vaga como desenvolvedor fullStack. Se você gostou deste projeto e quer contribuir para seu desenvolvimento, sinta-se à vontade para abrir uma issue ou enviar uma pull request.

## Licença

Este projeto está licenciado sob a licença MIT. Consulte o arquivo LICENSE para obter mais informações.

## Contato

Para entrar em contato comigo, envie um e-mail para thsa.henrique@gmail.com ou abra uma issue neste repositório. Estou disponível para discutir oportunidades de trabalho e projetos de colaboração.
