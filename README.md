# API com Cache em Node.js, TypeScript e Redis

![Badge de Licença](https://img.shields.io/badge/license-MIT-blue.svg) ![Badge de Status do Projeto](https://img.shields.io/badge/status-em%20desenvolvimento-yellow.svg)

Este projeto é uma API desenvolvida com Node.js, Express e TypeScript, que implementa um sistema de cache utilizando Redis para otimizar as respostas de requisições.

## 📖 Sobre

O objetivo principal deste projeto é demonstrar a implementação de um middleware de cache com `ioredis`. A aplicação expõe endpoints para consulta de dados mockados de clientes e produtos, permitindo comparar o tempo de resposta com e sem o uso do cache em Redis.

## ✨ Funcionalidades

*   ✅ **API RESTful:** Endpoints para consultar dados de produtos e clientes.
*   ✅ **Cache com Redis:** Middleware para armazenar e servir dados do cache, reduzindo a latência.
*   ✅ **Demonstração de Cache:** Rotas específicas para testar o acesso direto aos dados e o acesso via cache.
*   ✅ **Limpeza de Cache:** Endpoints para limpar o cache de produtos e clientes manualmente.

## 🛠️ Tecnologias Utilizadas

*   [Node.js](https://nodejs.org/): Ambiente de execução para o JavaScript no servidor.
*   [TypeScript](https://www.typescriptlang.org/): Superset do JavaScript que adiciona tipagem estática.
*   [Express.js](https://expressjs.com/): Framework para a construção da API.
*   [ioredis](https://github.com/redis/ioredis): Cliente Redis para Node.js, utilizado para a comunicação com o banco de dados em memória.
*   [Docker](https://www.docker.com/): Utilizado para executar a instância do Redis de forma isolada.

## 🚀 Instalação e Execução

Siga os passos abaixo para configurar e executar o projeto em seu ambiente local.

### Pré-requisitos

*   [Node.js](https://nodejs.org/) (versão 18.x ou superior)
*   [NPM](https://www.npmjs.com/) ou [Yarn](https://yarnpkg.com/)
*   [Docker](https://www.docker.com/) e Docker Compose

### Passos para Execução

1.  Clone o repositório:
    ```bash
    git clone https://github.com/Adolfo-Machado/Node-Redis-Typescript-v2.git
    ```
2.  Navegue até o diretório do projeto:
    ```bash
    cd Node-Redis-Typescript-v2
    ```
3.  Instale as dependências:
    ```bash
    npm install
    ```
4.  **Execute o Redis com Docker:** Para que a aplicação funcione, é necessário ter uma instância do Redis em execução. O comando abaixo irá iniciar um container Docker com o Redis na porta padrão (`6379`).
    ```bash
    docker run --name redis-cache -p 6379:6379 -d redis
    ```
    > **Observação:** A aplicação está configurada para se conectar ao Redis em `redis://127.0.0.1:6379`. Se sua configuração for diferente, ajuste a variável `REDIS_CONNECTION` no arquivo `src/config/config.ts` ou crie um arquivo `.env`.

5.  Execute o projeto em modo de desenvolvimento:
    ```bash
    npm run dev
    ```
    O servidor estará disponível em `http://localhost:2000`.

## 🎮 Como Usar (Endpoints da API)

### Produtos
*   `GET /prod-mock`: Retorna uma lista de produtos (sem cache).
*   `GET /prod-mock-redis`: Retorna a lista de produtos. Na primeira chamada, busca os dados e os armazena no cache (com expiração de 60 segundos). Nas chamadas seguintes, retorna os dados do cache.
*   `GET /clear-prod-redis`: Limpa o cache de produtos.

### Clientes
*   `GET /cli-mock`: Retorna uma lista de clientes (sem cache).
*   `GET /cli-mock-redis`: Retorna a lista de clientes, utilizando a mesma lógica de cache dos produtos.
*   `GET /clear-cli-redis`: Limpa o cache de clientes.

## 📄 Licença

Este projeto está sob a licença MIT.
