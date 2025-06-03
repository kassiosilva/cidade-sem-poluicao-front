# Cidade Sem Poluição - Frontend

## Sobre o projeto

O propósito é ajudar alguns moradores e trabalhadores do bairro Farias Brito a identificar os tipos de poluição e como lidam com ela, bem como demonstrar a maneira certa de descartar o lixo. Objetivos do documento: apresentar aos entrevistados uma aplicação, dentro do contexto apresentado relacionado aos problemas envolvendo o lixo e a poluição, desenvolvida pela equipe.

### Público alvo do projeto
O público-alvo do projeto é constituído por alguns moradores e trabalhadores do bairro Farias Brito, mas especificamente das ruas Bela Cruz e Dom Jerônimo e da Travessa Nossa Senhora das Graças.

### Resultado esperado e impacto social
É esperado que o projeto desenvolvido pela equipe leve algum impacto positivo para o público-alvo, bem como a conscientização a respeito dos diferentes tipos de poluição e de como descartar o lixo corretamente.

Acesse no site no link: https://cidade-sem-poluicao-front.vercel.app

> ℹ️ Quer saber mais?
>
> Este repositório é um dos componentes da nossa aplicação. Para conhecer os outros repositórios do projeto, acesse os seguintes links:
> - [cidade-sem-poluicao-api-gateway](https://github.com/kassiosilva/cidade-sem-poluicao-api-gateway)
> - [cidade-sem-poluicao-microservice](https://github.com/kassiosilva/cidade-sem-poluicao-microservices)

## Plataforma de Hospedagem
Estamos utilizando a *Vercel* para hospedar os nossos microsserviços, api gateway e o frontend. Os serviços podem ser acessados através dessas url's públicas:
- `donation-service`: https://cd-donation-service.vercel.app
- `contact-us-service`: https://cd-contact-us-service.vercel.app
- `authentication-service`: https://cd-authentication-service.vercel.app
- `frontend`: https://cidade-sem-poluicao-front.vercel.app
- `api-gateway`: https://cidade-sem-poluicao-api-gateway.vercel.app

## Estrutura do projeto
```
.
├── .editorconfig
├── .env.local
├── .env.local.example
├── .eslintignore
├── .eslintrc.json
├── .gitignore
├── index.html
├── mise.toml
├── .npmrc
├── package.json
├── package-lock.json
├── README.md
├── src
│   ├── api
│   │   ├── register-donation.js
│   │   ├── register-donor.js
│   │   ├── send-contact.js
│   │   ├── sign-in.js
│   │   └── sign-up.js
│   ├── App.jsx
│   ├── components
│   │   ├── button-feature.jsx
│   │   ├── button-feature.module.css
│   │   ├── card.jsx
│   │   ├── header.jsx
│   │   ├── header.module.css
│   │   └── redirect-root.jsx
│   ├── hooks
│   │   └── useAuth.js
│   ├── images
│   │   ├── ecofor.png
│   │   ├── fortaleza-ambiental.png
│   │   ├── garrafas.png
│   │   ├── marquise-ambiental.png
│   │   ├── papel-higienico.png
│   │   ├── prefeitura-fortaleza.png
│   │   ├── reciclagem.png
│   │   └── resto-de-alimentos.png
│   ├── lib
│   │   ├── axios.js
│   │   └── react-query.js
│   ├── main.jsx
│   ├── pages
│   │   ├── app
│   │   ├── auth
│   │   └── layouts
│   ├── routes.jsx
│   └── utils
│       └── redirect-external-link.js
├── vercel.json
└── vite.config.js
```

## Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

- React com Vite
- React Router Dom
- Bootstrap
- Axios
- React Query
- Sonner (para toast notifications)

## Como executar?

> ⚠️ Atenção
>
> A aplicação consome uma API. Para o funcionamento correto, instale e configure a API primeiro. [Clique aqui para o passo a passo](https://github.com/kassiosilva/cidade-sem-poluicao-api-gateway).

Clone o projeto e depois de baixado entre na raiz do projeto e execute:

```bash
  npm install
```

Como falado anteriormente, você precisa rodar o backend feito para essa aplicação para o funcionamento correto. Defina um arquivo `.env.local` na raiz do projeto e copie todas as variavéis do `.env.local.example`.

```
VITE_API_URL="https://cidade-sem-poluicao-api-gateway.vercel.app"
```

Feito isso, execute o comando na raiz:

```bash
npm run dev
```

Se tudo estiver certo, o frontend irá iniciar 🚀
