/*! Built with http://stenciljs.com */
const { h, Context } = window.BlazeAtoms;

class Modal {
    constructor() {
        this.ghost = false;
        this.full = false;
        this.open = false;
        this.dismissible = false;
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
    dismiss() {
        if (this.dismissible)
            this.close();
    }
    render() {
        const ghostClass = this.ghost ? `o-modal--ghost` : '';
        const fullClass = this.full ? `o-modal--full` : '';
        const isOpenClass = !this._isOpen ? 'u-display-none' : '';
        const dismissibleOverlayClass = this.dismissible ? 'c-overlay--dismissible' : '';
        return ([
            this._isOpen && h("div", { class: `c-overlay c-overlay--visible ${dismissibleOverlayClass}`, onClick: () => this.dismiss() }),
            h("div", { class: `o-modal ${ghostClass} ${fullClass} ${isOpenClass}` },
                this.dismissible &&
                    h("button", { type: "button", class: "c-button c-button--close", onClick: () => this.close() }, "\u00D7"),
                h("slot", null))
        ]);
    }
    static get is() { return "blaze-modal"; }
    static get properties() { return { "_isOpen": { "state": true }, "close": { "method": true }, "dismissible": { "type": Boolean, "attr": "dismissible" }, "elem": { "elementRef": true }, "full": { "type": Boolean, "attr": "full" }, "ghost": { "type": Boolean, "attr": "ghost" }, "isOpen": { "method": true }, "open": { "type": Boolean, "attr": "open" }, "show": { "method": true } }; }
}

export { Modal as BlazeModal };
