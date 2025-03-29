# Pokedex Backend - TypeScript, Node.js, Express, CORS, PokeAPI

## Sobre o Projeto

Este é o backend do projeto **Pokedex**, desenvolvido utilizando **TypeScript**, **Node.js** e **Express**. Ele serve como uma camada intermediária entre o frontend (Vue) e a API pública **PokeAPI**, gerenciando requisições e implementando medidas de segurança como o uso de **CORS**.

O objetivo principal é fornecer um serviço eficiente para recuperar e processar dados dos Pokémon, garantindo uma integração fluida com o frontend.

---

## Funcionalidades

- Endpoints para:
  - Listar Pokémon com paginação.
  - Buscar informações detalhadas de um Pokémon por ID ou nome.
  - Filtrar Pokémon por tipo.
- Tratamento de erros com respostas claras.
- Suporte a CORS para integração com o frontend Vue.

---

## Tecnologias Utilizadas

- **TypeScript**: Linguagem principal para maior segurança e manutenibilidade.
- **Node.js**: Ambiente de execução para JavaScript no servidor.
- **Express**: Framework web rápido e minimalista para Node.js.
- **CORS**: Middleware para controle de acesso entre origens diferentes.
- **PokeAPI**: API RESTful para dados de Pokémon.

---

## Pré-requisitos

Certifique-se de ter instalado:

- **Node.js** (v14 ou superior)
- **npm** ou **yarn**

---

## Como Executar o Projeto

### 1. Clone o repositório

```bash
git clone https://github.com/samuelbaldasso/PokedexWebBackend.git
```

### 2. Acesse o diretório do projeto

```bash
cd PokedexWebBackend
```

### 3. Instale as dependências

```bash
npm install
# ou
yarn install
```

### 4. Inicie o servidor

```bash
npm run start
# ou
yarn start
```

O servidor estará disponível em `http://localhost:3000`.

---

## Endpoints Disponíveis

### Base URL:

```
http://localhost:3000/api
```

### Endpoints Principais:

1. **Listar Pokémon (com paginação)**
   - **GET** `/pokemon?page=<n>&limit=<m>`
   - **Parâmetros**:
     - `page`: Número da página.
     - `limit`: Quantidade de Pokémon por página.
   - **Exemplo**:
     ```bash
     curl http://localhost:3000/api/pokemon?page=1&limit=10
     ```

2. **Detalhes de um Pokémon**
   - **GET** `/pokemon/:idOrName`
   - **Parâmetros**:
     - `idOrName`: ID ou nome do Pokémon.
   - **Exemplo**:
     ```bash
     curl http://localhost:3000/api/pokemon/25
     ```
     
---

## Scripts Disponíveis

- **`npm run start`**: Inicia o servidor em modo de produção.
- **`npm run dev`**: Inicia o servidor em modo de desenvolvimento com hot-reload.
- **`npm run build`**: Compila o projeto para produção.
- **`npm run lint`**: Analisa o código em busca de problemas de formatação e sintaxe.

---

## Próximos Passos

- Implementar cache para melhorar a performance das requisições.
- Adicionar suporte para idiomas diferentes.
- Criar testes unitários e de integração para os endpoints.

---

## Contribuindo

Contribuições são sempre bem-vindas! Para colaborar:

1. Faça um fork do repositório.
2. Crie uma branch para a sua feature (`git checkout -b minha-feature`).
3. Commit suas alterações (`git commit -m 'Adiciona minha feature'`).
4. Envie para o repositório remoto (`git push origin minha-feature`).
5. Abra um Pull Request.

---

## Licença

Este projeto está licenciado sob a [MIT License](./LICENSE).
