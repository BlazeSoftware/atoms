/*! Built with http://stenciljs.com */
const { h, Context } = window.BlazeAtoms;

class Drawer {
    constructor() {
        this.open = false;
        this.dismissible = false;
        this.position = 'bottom';
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
        const isOpenClass = this._isOpen ? 'o-drawer--visible' : '';
        const dismissibleOverlayClass = this.dismissible ? 'c-overlay--dismissible' : '';
        return ([
            this._isOpen && h("div", { class: `c-overlay c-overlay--visible ${dismissibleOverlayClass}`, onClick: () => this.dismiss() }),
            h("div", { class: `o-drawer o-drawer--${this.position} ${isOpenClass}` },
                h("slot", null))
        ]);
    }
    static get is() { return "blaze-drawer"; }
    static get properties() { return { "_isOpen": { "state": true }, "close": { "method": true }, "dismissible": { "type": Boolean, "attr": "dismissible" }, "elem": { "elementRef": true }, "isOpen": { "method": true }, "open": { "type": Boolean, "attr": "open" }, "position": { "type": String, "attr": "position" }, "show": { "method": true } }; }
}

export { Drawer as BlazeDrawer };
