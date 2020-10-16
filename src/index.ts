import { router } from "./router";

const pages = {
  "/": `
    <h1>Vanilla SPA</h1>
  `,
  "/home": `
    <h1>ようこそ！</h1>
  `,
  "/profile/:name": (params: { name?: string }) => `
    <h1>私は${params.name}です。</h1>
  `,
};
const container = document.getElementById("app");
container && router(pages, `<h1>404 : Not Found<h1>`, container);
