import { h, Component, Element, Prop, State } from '@stencil/core';

@Component({
  tag: 'blaze-image',
})
export class Image {
  @Element()
  el: HTMLElement;

  @State()
  _src: string;

  @Prop()
  src: string;

  @Prop()
  alt: string;

  // Placeholder settings
  @Prop()
  width: number;

  @Prop()
  height: number;

  @Prop()
  photo: string; // specific photo

  @Prop()
  user: string; // random photo from a user

  @Prop()
  likes: boolean; // random photo from a user's likes

  @Prop()
  collection: string; // random photo from a collection

  @Prop()
  filter: string = ''; // filter based on search term

  io: IntersectionObserver;

  generateSrc() {
    if (this.src) return this.src;

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
      return this.likes
        ? `https://source.unsplash.com/user/${this.user}/likes/${size}${filter}`
        : `https://source.unsplash.com/user/${this.user}/${size}${filter}`;
    }

    if (this.collection) {
      return `https://source.unsplash.com/collection/${this.collection}/${size}${filter}`;
    }

    return `https://source.unsplash.com/random/${size}${filter}`;
  }

  componentDidLoad() {
    if ('IntersectionObserver' in window) {
      this.io = new IntersectionObserver((data: any[]) => {
        if (data[0].isIntersecting) {
          this.loadImage();
          this.cleanup();
        }
      });

      this.io.observe(this.el);
    } else {
      this.loadImage();
    }
  }

  disconnectedCallback() {
    this.cleanup();
  }

  loadImage() {
    this._src = this.generateSrc();
  }

  cleanup() {
    if (this.io) {
      this.io.disconnect();
      this.io = null;
    }
  }

  render() {
    return <img class="o-image" src={this._src} alt={this.alt} />;
  }
}
