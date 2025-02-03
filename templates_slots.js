customElements.define("custom-element", class extends HTMLElement {
  constructor() {
    super();
    let template = document.getElementById("custom-element");
    let templateContent = template.content;

    const shadowRoot = this.attachShadow({mode: "open"});
    shadowRoot.appendChild(templateContent.cloneNode(true));

  }
}
)