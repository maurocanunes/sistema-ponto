
# Sistema Ponto Ilumeo

Este projeto é um case técnico para uma vaga de programaor JR. Full Stack na empresa Ilumeo.

### Foram feitas algumas suposições referentes a este projeto.

#### Usuários
- Não se possui informação de quantos usuários existem e tão pouco possuo acesso a seus registros.
- Qualquer usuário pode entrar no sistema e controlar seu tempo.

#### Jornada de trabalho
- Parti do princípio que ninguém registra seu ponto mais de uma vez no dia.
- O trabalho iniciado em um dia termina no mesmo dia, ou seja, não há a possibilidade de se começar hoje e terminar amanhã.
- Uma vez que no dia foi dado início só será possível marcar a saída (que resulta no cálculo do trabalho do dia)
- Uma vez que início e saída estejam registrados, nesta data não poderá mais ter outro registro.

### Informações relevantes

#### Banco de dados
- Ao utilizar AWS DynamoDB entende-se que consultas excessívas e longas custam mais caro, por isso optei por ter redundância de dados e guardar as horas trabalhadas junto do registro do usuário.
- Caso fosse utilizado PostgreSQL seria utilizada outra estruturação de dados.

#### AWS Lambda Function
- Foi criado uma function em Node.js para realizar toda a parte do lado do servidor.
- Esta function realiza todas as ações necessárias.

#### Rect
- Foi utilizado Ract v19 para desenvolvimento.
- O projeto foi desenvolvido em TypeScript
- Foram utilizadas as seguintes dependências
    - [@tachyons](https://tachyons.io/)
    - [@styled-components](https://styled-components.com/)
    - [@prettier](https://prettier.io/)
    - [@eslint](https://eslint.org/)

## Rode localmente

Clone o projeto

```bash
  git clone https://github.com/maurocanunes/sistema-ponto
```

Vá para a pasta do projeto

```bash
  cd my-project
```

Instale as dependências

```bash
  npm install
```

Inicie o servidor

```bash
  npm run start
```


## Autor

- [@maurocanunes](https://github.com/maurocanunes)

