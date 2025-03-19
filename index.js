import { header, nav, main, footer } from "./components";

function render() {
  document.querySelector("#root").innerHTML = `
  ${header()}
  ${nav()}
  ${main()}
  ${footer()}
  `;
}
render();
