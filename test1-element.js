import { Element as PolymerElement } from '../@polymer/polymer/polymer-element.js';
import { render } from '../lit-html/lib/lit-extended.js';
import { html } from '../lit-html/lit-html.js';

export class MyElement extends PolymerElement {

  static get properties() {
    return {
      title: {
        type: String,
        value: 'hola'
      },
      item: {
        type: Object,
        value: {a:1, b:2, c:3}
      },
      items: {
        type: Array,
        value: [1, 2, 3, 4]
      }
    }
  };



  constructor() {
    super();
    const arrayTemplate = this.arrayTemplate();
    const objectTemplate = this.objectTemplate();
    const helloTemplate = this.helloTemplate('Steve');
    const buttonChangeName = this.buttonChangeProperty();
    render(this.pageTemplate(arrayTemplate, objectTemplate, helloTemplate, buttonChangeName), document.body);

  }
  pageTemplate(x, y, z, t) {
    return html `<h1> Array iteration (dom-repeat)</h1> 
    ${x}
    <h1> Object iteration in attributes</h1> 
    ${y}
    <h1> Property for databinding</h1>
    ${z}
    ${t}
    `;
  }
  arrayTemplate() {
    return html `${this.forItem()}`
  }
  forItem() {
    return this.items.map((i) => html `<h3>item: ${i}</h3>`)
  }
  objectTemplate() {
    return html`${Object.entries(this.items)}`
  }
  helloTemplate(name) {
    return html `<div>Hello ${name}!</div> to the document body`
  }
  buttonChangeProperty() {
    return html `<button on-click="changeNameToBorja">Change</button>`
  }
  changeNameToBorja() {
    this.push('items', 'Borja')
  }
}
customElements.define('test1-element', MyElement);