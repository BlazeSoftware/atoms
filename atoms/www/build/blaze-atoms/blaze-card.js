/*! Built with http://stenciljs.com */
const { h, Context } = window.BlazeAtoms;

class Card {
    render() {
        return (h("div", { class: "c-card" },
            h("slot", null)));
    }
    static get is() { return "blaze-card"; }
}

class CardBody {
    render() {
        return (h("div", { class: "c-card__body" },
            h("slot", null)));
    }
    static get is() { return "blaze-card-body"; }
}

class CardFooter {
    render() {
        return (h("footer", { class: "c-card__footer" },
            h("slot", null)));
    }
    static get is() { return "blaze-card-footer"; }
}

class CardHeader {
    render() {
        return (h("header", { class: "c-card__header" },
            h("slot", null)));
    }
    static get is() { return "blaze-card-header"; }
}

export { Card as BlazeCard, CardBody as BlazeCardBody, CardFooter as BlazeCardFooter, CardHeader as BlazeCardHeader };
