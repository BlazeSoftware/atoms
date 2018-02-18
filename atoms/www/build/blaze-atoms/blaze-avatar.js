/*! Built with http://stenciljs.com */
const { h, Context } = window.BlazeAtoms;

class Avatar {
    constructor() {
        this.size = '';
    }
    render() {
        if (!this.src && !this.text)
            return;
        const sizeClass = this.size.length > 0 ? `u-${this.size}` : '';
        return (h("div", { class: `c-text c-avatar ${sizeClass}`, "data-text": this.text },
            this.src && h("img", { class: "c-avatar__img", src: this.src }),
            this.src2 && h("img", { class: "c-avatar__img", src: this.src2 })));
    }
    static get is() { return "blaze-avatar"; }
    static get properties() { return { "size": { "type": String, "attr": "size" }, "src": { "type": String, "attr": "src" }, "src2": { "type": String, "attr": "src2" }, "text": { "type": String, "attr": "text" } }; }
}

export { Avatar as BlazeAvatar };
