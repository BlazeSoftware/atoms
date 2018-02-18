/*! Built with http://stenciljs.com */
const { h, Context } = window.BlazeAtoms;

class Toasts {
    constructor() {
        this.position = 'topright';
    }
    render() {
        return (h("div", { class: `c-alerts c-alerts--${this.position}` },
            h("slot", null)));
    }
    static get is() { return "blaze-toasts"; }
    static get properties() { return { "position": { "type": String, "attr": "position" } }; }
}

export { Toasts as BlazeToasts };
