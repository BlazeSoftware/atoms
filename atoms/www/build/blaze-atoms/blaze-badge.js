/*! Built with http://stenciljs.com */
const { h, Context } = window.BlazeAtoms;

class Badge {
    render() {
        const typeClass = this.type ? `c-badge--${this.type}` : '';
        const roundedClass = this.rounded ? `c-badge--rounded` : '';
        const ghostClass = this.ghost ? `c-badge--ghost` : '';
        return (h("span", { class: `c-text c-badge ${typeClass} ${roundedClass} ${ghostClass}` },
            h("slot", null)));
    }
    static get is() { return "blaze-badge"; }
    static get properties() { return { "ghost": { "type": Boolean, "attr": "ghost" }, "rounded": { "type": Boolean, "attr": "rounded" }, "type": { "type": String, "attr": "type" } }; }
}

export { Badge as BlazeBadge };
