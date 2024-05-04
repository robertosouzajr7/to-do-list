# To-Do List API

![Node.js](https://img.shields.io/badge/Node.js-14.17.6-blue) ![Express](https://img.shields.io/badge/Express-4.17.1-brightgreen) ![Mongoose](https://img.shields.io/badge/Mongoose-5.13.7-red)

## Descrição

Uma API de To-Do List construída em Node.js, Express, e MongoDB, que permite criar, ler, atualizar e deletar (CRUD) tarefas, além de gerenciar usuários com autenticação JWT.

## Tecnologias

- **Node.js**: Plataforma de execução para JavaScript no servidor.
- **Express**: Framework para aplicações web.
- **MongoDB**: Banco de dados NoSQL.
- **Mongoose**: ODM (Object Data Modeling) para MongoDB.
- **JWT**: JSON Web Tokens para autenticação segura.

## Funcionalidades

- **Tarefas**:
  - **Criar**: Adiciona uma nova tarefa.
  - **Ler**: Retorna todas as tarefas ou uma tarefa específica.
  - **Atualizar**: Modifica uma tarefa existente.
  - **Deletar**: Remove uma tarefa.
- **Usuários**:
  - **Registrar**: Cria um novo usuário.
  - **Login**: Autentica um usuário.
  - **Logout**: Remove o token de autenticação.

## Configuração

### Pré-requisitos

- **Node.js**: Certifique-se de ter o Node.js instalado.
- **MongoDB**: Configure uma instância do MongoDB.

### Instalação

1. Clone o repositório:

   ```bash
   git clone https://github.com/robertosouzajr7/to-do-list-falcon.git
   ```

2.Navegue até o diretório do projeto:
cd todo-list-api

3.Instale as dependências:
npm install

4.Configure as variáveis de ambiente. Crie um arquivo .env na raiz do projeto e adicione as variáveis necessárias:
MONGO_URI=<YOUR_MONGO_URI>
JWT_SECRET=<YOUR_JWT_SECRET>
EMAIL_USER=<YOUR_EMAIL_USER>
EMAIL_PASS=<YOUR_EMAIL_PASS>
JWT_EXPIRES_IN=<YOUR_JWT_EXPIRES_IN>
PORT=5000

## Execução

# Desenvolvimento

npm run dev

# Produção

npm start

## Uso

### Endpoints

#### Tarefas

- **GET /api/tasks** - Retorna todas as tarefas.
- **POST /api/tasks** - Cria uma nova tarefa.
- **PUT /api/tasks/:id** - Atualiza uma tarefa.
- **DELETE /api/tasks/:id** - Deleta uma tarefa.

#### Usuários

- **POST /api/users/register** - Registra um novo usuário.
- **POST /api/users/login** - Faz login com um usuário.
- **POST /api/users/logout** - Faz logout de um usuário.

## Contribuição

1. **Fork este repositório.**
2. **Crie um branch para sua feature**:
   ```bash
   git checkout -b feature/nova-feature
   ```

## 2 Commit suas mudanças:

git commit -m 'Adiciona nova feature'

## 3 git push origin feature/nova-feature

git push origin feature/nova-feature

## 4 Push para seu branch:

git push origin feature/nova-feature

## 5.Abra um Pull Request.

### Licença

Este projeto está licenciado sob a licença MIT.

### Explicações sobre Markdown Utilizado

- **Cabeçalhos**: Os cabeçalhos são marcados com `#` para diferentes níveis. `##` para seções principais como Uso, Contribuição e Licença, e `###` para subseções como Endpoints.
- **Listas**: Usadas para organizar visualmente os endpoints e os passos para contribuição.
- **Código em Blocos**: Utilizado para comandos de terminal, facilitando a distinção visual entre texto comum e comandos a serem executados.
- **Negrito**: Aplicado para ênfase em métodos HTTP.

Este formato garante que o arquivo README seja fácil de ler e navegar, oferecendo uma visão clara das funcionalidades e processos associados ao seu projeto.
