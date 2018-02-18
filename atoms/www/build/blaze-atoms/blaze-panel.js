/*! Built with http://stenciljs.com */
const { h, Context } = window.BlazeAtoms;

class Panel {
    constructor() {
        this.height = 0;
    }
    render() {
        return (h("div", { class: "o-panel-container", style: { height: `${this.height}px` } },
            h("div", { class: "o-panel" },
                h("slot", null))));
    }
    static get is() { return "blaze-panel"; }
    static get properties() { return { "height": { "type": Number, "attr": "height" } }; }
}

export { Panel as BlazePanel };
