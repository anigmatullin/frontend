import { LitElement, html } from "lit";
import { customElement, property } from 'lit/decorators.js'

export function run()
{
    console.log("Salam!");
}

export class AppNavBar extends HTMLElement
{
    constructor()
    {
        super();
        this.attachShadow({mode: "open"});
        console.log("from constructor");
    }

    connectedCallback()
    {
        const name = this.getAttribute('name');
        console.log(name);

        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = `Salam ${name}`;
        }
    }
}




export class SomeEl extends LitElement
{
    @property()
    name = 'World';

    @property()
    counter: number = 0;

    protected render(): unknown
    {
        return html`
        <h3 @click=${this.inc}>
        Hey ${this.name} ${this.counter}!
        </h3>
        `
    }

    protected inc()
    {
        this.counter++;
    }
}


window.customElements.define('app-navbar', AppNavBar);
window.customElements.define('app-el', SomeEl);

run();
