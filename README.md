# Cadastro de pessoa Fisica/Juridica simplificado


[![GitHub issues](https://img.shields.io/github/issues/devfullstack77/cadastro-nestjs)](https://github.com/devfullstack77/cadastro-nestjs/issues) [![GitHub forks](https://img.shields.io/github/forks/devfullstack77/cadastro-nestjs)](https://github.com/devfullstack77/cadastro-nestjs/network) [![GitHub stars](https://img.shields.io/github/stars/devfullstack77/cadastro-nestjs)](https://github.com/devfullstack77/cadastro-nestjs/stargazers) [![GitHub license](https://img.shields.io/github/license/devfullstack77/cadastro-nestjs)](https://github.com/devfullstack77/cadastro-nestjs/blob/main/LICENSE) <img src="https://img.shields.io/badge/coverage-65.61-brightgreen"/>


## Descrição 
Projeto criado com o objetivo em compartilhar o código com o foco em colaboração.


## Objetivo 

Cadastro simples destinado aos dados de pessoa física/jurídica, usando docker-compose para ter o ambiente com o banco de dados  Postgres e pgAdmin4. 


## 🛠 Status do Projeto
<h4 align="center"> 
	🚧 ...Em construção...  🚧
</h4>



## 🚀 Tecnologias utilizadas
- [Node.js](https://nodejs.org/en/) 
- [Nestjs](https://nestjs.com/)
- [Typescript](https://www.typescriptlang.org/)
- [TypeORM](https://typeorm.io/)
- [Postgres](https://www.postgresql.org/)
- [Swagger](https://swagger.io/)
- [Jest](https://jestjs.io/pt-BR/)
- [Docker](https://docs.docker.com/)


## ✅ Campos 
- (*) Tipo: Pessoa física / Pessoa jurídica
- (*) Nome
- (*) Razão social (quando PJ)
- (*) CPF (quando PF)
- (*) CNPJ (quando PJ)
- (*) Sexo (quando PF)
- (*) Data de nascimento (quando PF)
- Email
- Telefone
- Celular
- Foto (apenas URL)
- Endereços
  - (*) Endereço
  - (*) Número
  - Complemento
  - Bairro
  - (*) Cidade
  - (*) Estado
  - (*) CEP


## 🎲 Instalação

1- Iniciando Docker Banco + pgAdmin 4
```bash
├── docker
│   └── docker-compose.yml

$ docker-compose up -d
```

Dados para a conexão com o banco.     
```bash
  host localhost:5432
  username postgres
  password admin
  database cadastro
```

Acessando pgAdmin4
```bash
   http://localhost:5050/
```

2- Instalando as dependências da aplicação 

```bash
$ npm install
```

3- Rodando a Migration
```bash
$ npm run typeorm:run
```
  
## ✨ Iniciando a aplicação

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

Deverá rodar na porta 3000 
```bash
   http://localhost:3000
```

## Swagger
```bash
   http://localhost:3000/api-docs/#/
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Postman 
Facilitando o uso da API, importe o json no Postman.
```bash
├── postman
│   └── Cadastro_Pessoa_Fisica_Juridica_NestJs.postman_collection.json

```

 ## Estrutura das pastas

```bash
├── docker
│   ├── createDatabase.sql
│   └── docker-compose.yml
├── nest-cli.json
├── ormconfig.js
├── ormconfig-migrations.js
├── package.json
├── package-lock.json
├── postman
│   └── Cadastro_Pessoa_Fisica_Juridica_NestJs.postman_collection.json
├── README.md
├── src
│   ├── app.controller.spec.ts
│   ├── app.controller.ts
│   ├── app.module.ts
│   ├── app.service.ts
│   ├── main.ts
│   ├── migrations
│   │   └── 1629261246731-CreateTables.ts
│   ├── pessoafisica
│   │   ├── dto
│   │   │   ├── create-pessoafisica.dto.ts
│   │   │   └── update-pessoafisica.dto.ts
│   │   ├── entities
│   │   │   ├── pessoa-fisica-endereco.entity.ts
│   │   │   └── pessoafisica.entity.ts
│   │   ├── pessoafisica.controller.spec.ts
│   │   ├── pessoafisica.controller.ts
│   │   ├── pessoafisica.module.ts
│   │   ├── pessoafisica.service.spec.ts
│   │   └── pessoafisica.service.ts
│   └── pessoajuridica
│       ├── dto
│       │   ├── create-pessoajuridica.dto.ts
│       │   ├── create-pessoajuridica-endereco.dto.ts
│       │   └── update-pessoajuridicadto.ts
│       ├── entities
│       │   ├── pessoa-juridica-endereco.entity.ts
│       │   └── pessoa-juridica.entity.ts
│       ├── pessoajuridica.controller.spec.ts
│       ├── pessoajuridica.controller.ts
│       ├── pessoajuridica.module.ts
│       ├── pessoajuridica.service.spec.ts
│       └── pessoajuridica.service.ts
├── test
│   ├── app.e2e-spec.ts
│   └── jest-e2e.json
├── tsconfig.build.json
└── tsconfig.json
```