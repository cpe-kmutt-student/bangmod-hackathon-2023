<img width="" src="https://i.imgur.com/V6GkTVv.png" alt="Bangmod Hackathon 2023 banner">

# Bangmod Hackathon 2023

Monorepo for Bangmod Hackthon 2023 registration platform using [Turborepo](https://turborepo.org/) and [Yarn](https://yarnpkg.com/)

## 📄 Project structure

- **`/apps`** Subprojects included frontend and backend
  - `/backend` All backend services ([Springpress](https://github.com/vectier/springpress))
  - `/register` Registration platform ([Preact](https://preactjs.com/))
- **`/shared`** Shared packages used by `/apps`
  - `/tailwind` [Tailwind CSS](https://tailwindcss.com/) config and common stylesheets
  - `/vite-preact-ts` [Vite](https://vitejs.dev/) & [TypeScript](https://www.typescriptlang.org/) base config

## 🔧 To Develop

Each app will be started in development server in difference port:

- **Backend**: http://localhost:3000
- **Registration**: http://localhost:3001

Each project can also be run individually

```
yarn dev:backend
yarn dev:registration
```

or, to develop all apps and packages

```
yarn dev
```

## Guildlines Table

- [Building a Component](.github/guildelines/building-component.md)

## 💿 Infrastructure

This repository contains only registration platform.  
For Auto grader, we use the powerful software crafted by **[Vectier](https://github.com/vectier)** named **Codern** which is closed-source software.

<img src="https://i.imgur.com/49EvTfF.png" alt="" >
