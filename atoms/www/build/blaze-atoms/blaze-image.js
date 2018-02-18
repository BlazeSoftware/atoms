/*! Built with http://stenciljs.com */
const { h, Context } = window.BlazeAtoms;

class Image {
    constructor() {
        this.filter = ''; // filter based on search term
    }
    generateSrc() {
        if (this.src)
            return this.src;
        let size = '';
        if (this.width && this.height) {
            size = `${this.width}x${this.height}/`;
        }
        let filter = '';
        if (this.filter) {
            filter = `?${this.filter}`;
        }
        if (this.photo) {
            return `https://source.unsplash.com/${this.photo}/${size}`;
        }
        if (this.user) {
            return this.likes ?
                `https://source.unsplash.com/user/${this.user}/likes/${size}${filter}` :
                `https://source.unsplash.com/user/${this.user}/${size}${filter}`;
        }
        if (this.collection) {
            return `https://source.unsplash.com/collection/${this.collection}/${size}${filter}`;
        }
        return `https://source.unsplash.com/random/${size}${filter}`;
    }
    render() {
        const src = this.generateSrc();
        return (h("img", { class: "o-image", src: src, alt: this.alt }));
    }
    static get is() { return "blaze-image"; }
    static get properties() { return { "alt": { "type": String, "attr": "alt" }, "collection": { "type": String, "attr": "collection" }, "filter": { "type": String, "attr": "filter" }, "height": { "type": Number, "attr": "height" }, "likes": { "type": Boolean, "attr": "likes" }, "photo": { "type": String, "attr": "photo" }, "src": { "type": String, "attr": "src" }, "user": { "type": String, "attr": "user" }, "width": { "type": Number, "attr": "width" } }; }
}

export { Image as BlazeImage };
