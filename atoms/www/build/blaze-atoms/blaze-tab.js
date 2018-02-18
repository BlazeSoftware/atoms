/*! Built with http://stenciljs.com */
const { h, Context } = window.BlazeAtoms;

class Tab {
    render() {
        const openClass = this.open ? 'c-tabs__tab--active' : '';
        return (h("div", { class: `c-tabs__tab ${openClass}` },
            h("slot", null)));
    }
    static get is() { return "blaze-tab"; }
    static get properties() { return { "disabled": { "type": Boolean, "attr": "disabled" }, "header": { "type": String, "attr": "header" }, "open": { "type": Boolean, "attr": "open" } }; }
}

class Tabs {
    componentWillLoad() {
        this.tabs = Array.from(this.elem.querySelectorAll('blaze-tab'));
    }
    currentTab() {
        return this.tabs.findIndex(tab => tab.open);
    }
    openTab(tabIndex) {
        if (!this.tabs[tabIndex].disabled) {
            this.tabs = this.tabs.map(tab => {
                tab.open = false;
                return tab;
            });
            this.tabs[tabIndex].open = true;
        }
    }
    render() {
        const typeClass = this.type ? `c-tabs--${this.type}` : '';
        return (h("div", { class: `c-tabs ${typeClass}` },
            h("div", { class: "c-tabs__nav" },
                h("div", { class: "c-tabs__headings" }, this.tabs.map((tab, i) => {
                    const disabledClass = tab.disabled ? 'c-tab-heading--disabled' : '';
                    const openClass = tab.open ? 'c-tab-heading--active' : '';
                    return (h("div", { class: `c-tab-heading ${disabledClass} ${openClass}`, onClick: () => this.openTab(i) }, tab.header));
                }))),
            h("slot", null)));
    }
    static get is() { return "blaze-tabs"; }
    static get properties() { return { "currentTab": { "method": true }, "elem": { "elementRef": true }, "openTab": { "method": true }, "tabs": { "state": true }, "type": { "type": String, "attr": "type" } }; }
}

export { Tab as BlazeTab, Tabs as BlazeTabs };
