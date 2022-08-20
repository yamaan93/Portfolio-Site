# Portfolio Website

[![Netlify Status](https://api.netlify.com/api/v1/badges/a2d903e8-a706-40ca-a3e3-52958e4069c1/deploy-status)](https://app.netlify.com/sites/focused-euclid-9e5cfd/deploys)

Based in React, using Next.js as the framework. Simple Portfolio Site for showcasing my projects!

## Dependencies

- Next.js
- React
- React-Dom
- MUI (Material UI)

**To set up project**: Make sure you have Node.js installed, then clone this repository. In the terminal in the project folder, run the following commands to get the project dependancies:

`npm install next react react-dom`
`npm install @mui/material @emotion/react @emotion/styled`

Then, in the root directory, Open or create `package.json` and add the following scripts:

```
"scripts": {
  "dev": "next dev",
  "build": "next build",
  "start": "next start",
  "lint": "next lint"
}
```

After the set up is complete:

Run `npm run dev` or `yarn dev` or `pnpm dev` to start the development server on http://localhost:3000
