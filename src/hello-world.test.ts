import hello from "./hello-world";

test("hello-world", () => {
  const elm = document.createElement("div");
  hello(elm);
  expect(elm.innerText).toBe("HelloWorld");
});
