/*! Built with http://stenciljs.com */
const { h, Context } = window.BlazeAtoms;

class Address {
    render() {
        return (h("address", { class: "c-text c-address" },
            h("slot", null)));
    }
    static get is() { return "blaze-address"; }
}

class AddressHeading {
    render() {
        return (h("span", { class: "c-address__heading" },
            h("slot", null)));
    }
    static get is() { return "blaze-address-heading"; }
}

export { Address as BlazeAddress, AddressHeading as BlazeAddressHeading };
