/*! Built with http://stenciljs.com */
const { h, Context } = window.BlazeAtoms;

class Accordion {
    render() {
        return (h("div", { class: "c-text c-card c-card--accordion" },
            h("slot", null)));
    }
    static get is() { return "blaze-accordion"; }
}

class AccordionPane {
    constructor() {
        this._isOpen = false;
        this.open = false;
    }
    componentWillLoad() {
        this._isOpen = this.open;
    }
    show() {
        this._isOpen = true;
    }
    close() {
        this._isOpen = false;
    }
    toggle() {
        this._isOpen ? this.close() : this.show();
    }
    isOpen() {
        return this._isOpen;
    }
    render() {
        const isOpenClass = this._isOpen ? 'c-card__item--active' : '';
        return ([
            h("div", { class: `c-card__item c-card__item--title ${isOpenClass}`, onClick: () => this.toggle() }, this.header),
            h("div", { class: "c-card__item c-card__item--pane" },
                h("slot", null))
        ]);
    }
    static get is() { return "blaze-accordion-pane"; }
    static get properties() { return { "_isOpen": { "state": true }, "close": { "method": true }, "header": { "type": String, "attr": "header" }, "isOpen": { "method": true }, "open": { "type": Boolean, "attr": "open" }, "show": { "method": true } }; }
}

export { Accordion as BlazeAccordion, AccordionPane as BlazeAccordionPane };
