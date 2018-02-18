/*! Built with http://stenciljs.com */
const { h, Context } = window.BlazeAtoms;

class Alert {
    constructor() {
        this.dismissible = false;
        this.open = false;
        this._isOpen = false;
    }
    close() {
        this._isOpen = false;
    }
    show() {
        this._isOpen = true;
    }
    isOpen() {
        return this._isOpen;
    }
    componentWillLoad() {
        this._isOpen = this.open;
    }
    render() {
        const isOpenClass = !this._isOpen ? 'u-display-none' : '';
        return (h("div", { class: `c-text c-alert c-alert--${this.type} ${isOpenClass}` },
            this.dismissible &&
                h("button", { class: "c-button c-button--close", onClick: () => this.close() }, "\u00D7"),
            h("slot", null)));
    }
    static get is() { return "blaze-alert"; }
    static get properties() { return { "_isOpen": { "state": true }, "close": { "method": true }, "dismissible": { "type": Boolean, "attr": "dismissible" }, "isOpen": { "method": true }, "open": { "type": Boolean, "attr": "open" }, "show": { "method": true }, "type": { "type": String, "attr": "type" } }; }
}

export { Alert as BlazeAlert };
