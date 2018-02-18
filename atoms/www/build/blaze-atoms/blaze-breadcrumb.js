/*! Built with http://stenciljs.com */
const { h, Context } = window.BlazeAtoms;

class Breadcrumb {
    render() {
        return (h("li", { class: "c-breadcrumbs__crumb" }, this.href ?
            h("a", { class: "c-link", href: this.href },
                h("slot", null))
            :
                h("slot", null)));
    }
    static get is() { return "blaze-breadcrumb"; }
    static get properties() { return { "href": { "type": String, "attr": "href" } }; }
}

class Breadcrumbs {
    componentDidLoad() {
        const lastCrumb = this.el.querySelector('blaze-breadcrumb:last-child .c-breadcrumbs__crumb');
        if (lastCrumb) {
            lastCrumb.classList.add('c-breadcrumb__crumb--last');
        }
    }
    render() {
        return (h("ol", { class: "c-text c-breadcrumbs" },
            h("slot", null)));
    }
    static get is() { return "blaze-breadcrumbs"; }
    static get properties() { return { "el": { "elementRef": true } }; }
}

export { Breadcrumb as BlazeBreadcrumb, Breadcrumbs as BlazeBreadcrumbs };
