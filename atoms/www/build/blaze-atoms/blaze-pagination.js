/*! Built with http://stenciljs.com */
const { h, Context } = window.BlazeAtoms;

class Pagination {
    constructor() {
        this.page = 1;
        this.pages = 1;
    }
    goToPage(page) {
        if (page > 0 && page <= this.pages) {
            this._currentPage = page;
            this.onPageChange.emit(this._currentPage);
        }
    }
    currentPage() {
        return this._currentPage;
    }
    componentWillLoad() {
        this._currentPage = this.page;
    }
    render() {
        return (h("div", { class: "c-pagination" },
            h("div", { class: "c-pagination__controls c-pagination__controls--backward" },
                h("button", { class: "c-pagination__control", onClick: () => this.goToPage(1), disabled: this._currentPage === 1 }, "\u00AB"),
                h("button", { class: "c-pagination__control", onClick: () => this.goToPage(this._currentPage - 1), disabled: this._currentPage === 1 }, "\u2039")),
            h("div", { class: "c-pagination__controls" },
                this._currentPage > 1 && h("span", { class: "c-pagination__ellipsis" }, "\u2026"),
                this._currentPage > 1 && h("button", { onClick: () => this.goToPage(this._currentPage - 1), class: "c-pagination__page" }, this._currentPage - 1),
                h("button", { class: "c-pagination__page c-pagination__page--current" }, this._currentPage),
                this._currentPage < this.pages && h("button", { onClick: () => this.goToPage(this._currentPage + 1), class: "c-pagination__page" }, this._currentPage + 1),
                this._currentPage < this.pages && h("span", { class: "c-pagination__ellipsis" }, "\u2026")),
            h("div", { class: "c-pagination__controls c-pagination__controls--forward" },
                h("button", { class: "c-pagination__control", onClick: () => this.goToPage(this._currentPage + 1), disabled: this._currentPage === this.pages }, "\u203A"),
                h("button", { class: "c-pagination__control", onClick: () => this.goToPage(this.pages), disabled: this._currentPage === this.pages }, "\u00BB"))));
    }
    static get is() { return "blaze-pagination"; }
    static get properties() { return { "_currentPage": { "state": true }, "currentPage": { "method": true }, "goToPage": { "method": true }, "page": { "type": Number, "attr": "page" }, "pages": { "type": Number, "attr": "pages" } }; }
    static get events() { return [{ "name": "onPageChange", "method": "onPageChange", "bubbles": true, "cancelable": true, "composed": true }]; }
}

export { Pagination as BlazePagination };
