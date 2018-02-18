/*! Built with http://stenciljs.com */
const { h, Context } = window.BlazeAtoms;

class Toggle {
    constructor() {
        this.toggled = false;
        this._toggled = false;
    }
    componentDidLoad() {
        this._toggled = this.toggled;
    }
    isToggled() {
        return this._toggled;
    }
    toggle(e) {
        e.preventDefault();
        this._toggled = !this._toggled;
    }
    render() {
        const type = this.type ? `c-toggle--${this.type}` : '';
        return (h("label", { class: `c-toggle ${type}`, onClick: (e) => this.toggle(e) },
            h("input", { type: "checkbox", checked: this._toggled }),
            h("div", { class: "c-toggle__track" },
                h("div", { class: "c-toggle__handle" })),
            h("slot", null)));
    }
    static get is() { return "blaze-toggle"; }
    static get properties() { return { "_toggled": { "state": true }, "isToggled": { "method": true }, "toggled": { "type": Boolean, "attr": "toggled" }, "type": { "type": String, "attr": "type" } }; }
}

export { Toggle as BlazeToggle };
