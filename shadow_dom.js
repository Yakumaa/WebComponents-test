const host = document.querySelector("#host");
const shadow = host.attachShadow({ mode: "open" });
const template = document.getElementById("my-element");
const span = document.createElement("span");
span.textContent = "Hello, I'm in Shadow DOM!";
shadow.appendChild(span);
shadow.appendChild(template.content);

const upper = document.querySelector("#upper")
upper.addEventListener("click", () => {
  const spans = Array.from(document.querySelectorAll("span"));
  // const spans = Array.from(host.shadowRoot.querySelectorAll("span"));  for shadow dom
  for (const span of spans) {
    span.textContent = span.textContent.toUpperCase();
  }
})

const reload = document.querySelector("#reload");
reload.addEventListener("click", () => {
  document.location.reload();
});