This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app). The project uses Next13 App Directory to be precise. So please read up on nextJs docs if you are unfamiliar with nextJs

## Getting Started

#### First Clone the project from Github with:

```
git clone https://github.com/Plently/website-fe
```

#### Now open the cloned project in vscode or any IDE of your choice and run:

```bash
npm install
```

#### Create a .env.local file

Before you can run the project locally you need to create a `.env.local` file that will be placed at the root folder, also at the root of the project you should see a `.env.example` file, this file should give you a template of what the values are meant to be in the `.env.local` file

#### Now you should be able to run the project locally on your computer, you need to run:

```bash
npm run dev
```

Open [http://localhost:(port)](<http://localhost:(port)>) with your browser to see the result.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

> **Note:** Make sure you don't push directly to the main branch, all your work should and must be done on the staging branch. Also always pull before you push

<br />
<br />
<br />
<br />

# Project Folder Architecture

The entry point for this project is in the `/src`. The project also uses a Feature Based Architecture whereby you have all the files of a particular feature, component or page colocated together in the same folder.

> **Please Note:** That when you see the word "Feature Folder" this is referring to a Components folder or a Route folder.

> **Please Note:** Feature root folder mostly have a `index.ts` or `index.tsx` files that export the main components used by all other components.

## app dir

This is a point of entry into NextJs route system [Read Docs](https://nextjs.org/docs/app). <br />
Two main folder to pay attention to in the app dir is the `_global-components` folder and `(Routes)` folder.

- `(Routes)` Folder As the name dictates contains all route pages on the website and you probably already know that NextJs uses a folder --> route structure which means each folder with a `page.tsx` becomes a route. As per nextJs docs each Route are grouped logically with `(<Grouped Route>)` folder pattern. <br />
  Also due to the fact that each page design are broken down into logical sections (for proper optimization) represented as react components to enable RSC and Client Component data fetching seperately, each route folder have a `_local-components` which contains Chunks of server and clients components used in the `page.tsx` file of that route folder.

- `_global-components` Folder contains chunks of components that are used all over the project route pages. In essence when you have a particular page section (React component) that is displayed or used in more than 1 page e.g Home Page and about Page then such a component needs to be extracted into this folder.
  <br />

> --> **Please Note:** `_local-components` folder is local to a particular route folder and components in there are not shared with other route folder, while `_global-components` contains React components that can be used and is shared in more than 1 route folder.
> <br /> > <br />
> --> **Please Note:** That neither `_local-components` nor `_global-components` are included in nextJs route system. Chucks inside this folders are purely Server or Client React Components.

Also a key file in the app dir root is the `layout.tsx`, this layout wraps and is parent to all routes. So any provider or context you want to define once should be handled here, also any component that need to be rendered just once and not any time a route page changes should be placed here, the component will also be avialable globally (in all route pages).

## base-styles dir

This project uses css module and scss together, so files in this dir are used in all component and pages scss files. This folder has two export point which are `index.scss` and `exportValues.module.scss` file.

- `index.scss` is the single entry point used in all feature folder with an scss file. Please Note that absolute import alias is enabled for this file in the `next.config.js`. This is what makes a single `@import "index.scss";` possible in all scss files in a feature folder.
- `exportValues.module.scss` is used to export variables declared in scss into react components or js files. E.g Colors

## customHooks dir

As the name entails files kept in the folder are custom hooks that are used and shared all over the project. You can see it as a Utils folder but for hooks.

## fetchEndpoints dir

This folder contains all the code that consumes the Backend Rest API. Each folder are logically named base on what type of API consumption it does, if you are familiar with NextJs then you should know NextJs allows you to fetch data on the server with RSC (React Server Componet) and on the client with Client Compoent so for this reason data is fetched on the client with **rtk query** [check docs here](https://redux-toolkit.js.org/tutorials/rtk-query) while data is fetched on the server with default node fetch api.

Each logically named folder contains:

- `clientFetchApi.ts` which store code that make request on the client side.
- `serverFetchApi.ts` which store code that make request on the server side.
- `path.ts` which store api paths shared between `clientFetchApi.ts` and `serverFetchApi.ts`
- `types.d.ts` stores types.

One other special folder that isn't a logically named folder is the `_shared` folder. This folder contains files and code that are shared by all `clientFetchApi.ts` and `serverFetchApi.ts` in logically named folder.

## helpers dir

This folder contains code that either needs to be defined onced and used everywhere in the project or config wrapper for third party libabry.

## redux-toolkit dir

This folder contains code that used for global state management click [here](https://redux-toolkit.js.org/introduction/getting-started) to read up on redux-toolkit docs.

## utils dir

Contains reuseable chuncks of code that are used evrrywhere in the project
