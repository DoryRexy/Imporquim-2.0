This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

## Deploy Process

Deploy process starts by using the following command:

```bash
yarn version --patch
git push --tag
```

Its change the las patch revision on package.json
You can use this options to change major or minor version:

```bash
yarn version --major
yarn version --minor
```

For more information about this process, see [yarn documentation](https://classic.yarnpkg.com/lang/en/docs/cli/version/) - Updating versions

### Referencias técnicas

- https://blog.logrocket.com/guide-adding-gradients-tailwind-css/
- https://tailwindcss.com/docs/installation
- https://www.framer.com/motion/
