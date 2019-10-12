import hello from "./hello-world";
const elm: HTMLElement | null = document.getElementById("app");
if (elm) {
  hello(elm);
}
