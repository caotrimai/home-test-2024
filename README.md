This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

[DEMO](https://home-test-rep-run.vercel.app/)

## Setup
First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Project Structure

This project follows a specific structure to ensure code maintainability and readability. Here's a brief overview of the project's structure:

- `src/`: This is the main directory where all the source code of the application resides.
    - `app/`: This directory contains the main application logic.
        - `providers/`: Contains context providers like `TokenSendingProvider.tsx` which manages the state and functions related to token sending.
        - `components/`: Contains reusable components like `RecipientSummary` which displays a summary of the recipient's details.
    - `redux/`: This directory contains all the Redux related files for state management.
        - `features/`: Contains slices of the Redux store, for example `user/userSlice.ts` which manages the user state.
        - `hooks.ts`: Contains custom hooks for accessing and dispatching actions to the Redux store.
- `public/`: This directory contains all the static files like images.
- `styles/`: This directory contains all the global styles.
- `tests/`: This directory contains all the test files.
- `package.json`: This file contains the list of project dependencies and scripts.
- `tsconfig.json`: This file is used by TypeScript compiler to determine which files to compile and what compilation options to use.
- `README.md`: This file provides an overview of the project and instructions on how to run and contribute to the project.

## Implementation Decisions

This section outlines the reasons behind specific implementation choices made during the development of this project.

- **Next.js**: We chose Next.js as our primary framework due to its out-of-the-box support for server-side rendering and static site generation. This allows us to optimize our application for performance and SEO. Additionally, Next.js has a strong community and a rich ecosystem of plugins, which makes it a robust and reliable choice for our project.

- **TypeScript**: TypeScript was chosen for its static typing features. This helps us catch errors early in the development process, and enhances our development experience with features like autocompletion, type inference, and type checking.

- **React**: React was chosen for its component-based architecture, which allows us to build reusable components and manage their state effectively. It also has a large community and a wide range of third-party libraries.

- **Redux**: We chose Redux for state management to maintain a predictable state container that is easy to manage and debug. It also integrates well with our choice of UI library, React.

- **Ant Design (Antd)**: Antd was chosen for its rich set of high-quality React components out of the box. This helps us speed up development by reusing these components instead of building everything from scratch. Antd also provides a consistent design language, ensuring our application has a professional look and feel. Furthermore, it supports internationalization, allowing us to easily adapt our application for different locales.

- **Emotion**: We chose Emotion for styling our components. It allows us to write CSS in JavaScript, providing us with the power to dynamically style our components based on the component's props or a global theme.

## Completion Time

The project took approximately 2 days to complete, including setting up the project, implementing the features, writing tests, and documenting the project.