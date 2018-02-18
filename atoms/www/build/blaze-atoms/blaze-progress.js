/*! Built with http://stenciljs.com */
const { h, Context } = window.BlazeAtoms;

class Progress {
    constructor() {
        this.size = '';
    }
    render() {
        const typeClass = this.type ? `c-progress__bar--${this.type}` : '';
        const sizeClass = this.size ? `u-${this.size}` : '';
        const roundedClass = this.rounded ? `c-progress--rounded` : '';
        return (h("div", { class: `c-progress ${roundedClass} ${sizeClass}` },
            h("div", { class: `c-progress__bar ${typeClass}`, style: { width: `${this.percentage}%` } },
                h("slot", null))));
    }
    static get is() { return "blaze-progress"; }
    static get properties() { return { "percentage": { "type": String, "attr": "percentage" }, "rounded": { "type": Boolean, "attr": "rounded" }, "size": { "type": String, "attr": "size" }, "type": { "type": String, "attr": "type" } }; }
}

export { Progress as BlazeProgress };
