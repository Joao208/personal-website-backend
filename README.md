# Backend do meu site pessoal

[![codecov](https://codecov.io/gh/Joao208/bk_personal_website/branch/main/graph/badge.svg?token=XSGPVGWKKO)](https://codecov.io/gh/Joao208/bk_personal_website)
[![Sonarcloud Status](https://sonarcloud.io/api/project_badges/measure?project=Joao208_bk_personal_website&metric=alert_status)](https://sonarcloud.io/dashboard?id=Joao208_bk_personal_website)

Backend do meu site pessoal https://joaobarros.blog, usando next, typescript com api routes, para postar artigos, dicas, meus projetos e minha história como desenvolvedor

Para rodar pode executar os seguintes comandos:

```shell
git clone https://github.com/Joao208/bk_personal_website
cd bk_personal_website
yarn
yarn start
```

Dessa forma ele ira criar as models com o prisma e iniciar o projeto, para isso você precisa ter as envs em seu repositório, que são:

```js
DATABASE_URL=
AUTH_TOKEN=
APP_URL=http://localhost:5001
```

Para o provedor de banco, usamos mongodb, facilitando a implementação.
