# 🌐 Welcome TS API

![status](https://img.shields.io/badge/status-finalizado-green)
![typescript](https://img.shields.io/badge/typescript-%5E4.x-blue)
![node](https://img.shields.io/badge/node-%3E%3D14.x-green)
![express](https://img.shields.io/badge/express-%5E4.x-blue)
![license](https://img.shields.io/badge/license-MIT-blue)

**Welcome TS API** é um projeto backend básico desenvolvido em **TypeScript** para treinar conceitos fundamentais de APIs REST. Ele permite receber dados do usuário, processá-los e retornar respostas personalizadas, como mensagens de boas-vindas. Ideal para iniciantes que desejam praticar TypeScript e estruturação de projetos backend.


## 📌 Funcionalidades

- Receber dados do usuário via requisições HTTP.
- Processar informações como nome e idade.
- Retornar mensagens personalizadas de boas-vindas.
- Validar se o usuário é maior de idade.
- Utilizar boas práticas de desenvolvimento com TypeScript.


## 🛠️ Tecnologias Utilizadas

- **Node.js**: Ambiente de execução JavaScript.
- **TypeScript**: Superset de JavaScript para tipagem estática.
- **Express**: Framework para criação de APIs REST.
- **dotenv**: Gerenciamento de variáveis de ambiente.
- **Zod**: Validação de dados.
- **ESLint**: Ferramenta para padronização de código.


## 📦 Estrutura do Projeto

```
server/
├── src/
│   ├── dtos/
│   │   ├── get.request.ts       # Interface para requisições GET
│   │   ├── post.request.ts      # Interface para requisições POST
│   │   └── post.response.ts     # Interface para respostas POST
│   ├── helpers/
│   │   ├── bemVindo.helper.ts   # Lógica para criar mensagens de boas-vindas
│   │   └── idade.helper.ts      # Lógica para verificar maioridade
│   ├── index.ts                 # Arquivo principal do servidor
│   └── routes/
│       └── welcome.routes.ts    # Rotas para o endpoint de boas-vindas
├── .env_exemple                 # Exemplo de variáveis de ambiente
├── .gitignore                   # Arquivos ignorados pelo Git
├── package.json                 # Dependências do projeto
└── tsconfig.json                # Configuração do TypeScript
```

---

## 🚀 Como executar o projeto

#### **Pré-requisitos**
- Certifique-se de ter o **Node.js** instalado (versão >= 14.x).
- Instale o gerenciador de pacotes **npm** (vem junto com o Node.js).

#### **Configuração**
1. Clone o repositório:

2. Instale as dependências:

3. Configure as variáveis de ambiente no arquivo `.env`:

4. Use o arquivo `.env_exemple` como referência para criar o arquivo `.env`.

### **Executando o servidor**
Inicie o servidor com o seguinte comando:
```bash
npm run dev
```

O servidor estará disponível


## 🔗 Rotas da API

### **GET /welcome**
- **Descrição**: Retorna uma mensagem de boas-vindas personalizada.
- **Exemplo de Requisição**:
  ```http
  GET /welcome?nome=Fernando&idade=25 HTTP/1.1
  ```
- **Exemplo de Resposta**:
  ```json
  {
      "mensagem": "Bem-vindo, Fernando, você é maior de idade!"
  }
  ```

### **POST /welcome**
- **Descrição**: Recebe dados do usuário e retorna uma mensagem personalizada.
- **Exemplo de Requisição**:
  ```http
  POST /welcome HTTP/1.1
  Content-Type: application/json

  {
      "nome": "Fernando",
      "idade": 25,
      "email": "teste@email.com"
  }
  ```
- **Exemplo de Resposta**:
  ```json
  {
      "id": "12345",
      "nome": "Fernando",
      "email": "test@email.com",
      "ehAdulto": true,
      "dataCadastro": "2025-06-27T12:00:00Z"
  }
  ```


## 🛡️ Segurança
- As variáveis de ambiente são gerenciadas com **dotenv**.
- O projeto utiliza boas práticas de validação de dados com **Zod**.


🔹 **Projeto criado para aprendizado e prática!** 🚀 Sinta-se à vontade para contribuir ou sugerir melhorias. 😊