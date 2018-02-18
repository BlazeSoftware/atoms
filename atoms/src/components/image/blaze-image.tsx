import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'blaze-image'
})
export class Image {

  @Prop() src: string;
  @Prop() alt: string;

  // Placeholder settings
  @Prop() width: number;
  @Prop() height: number;
  @Prop() photo: string;        // specific photo
  @Prop() user: string;         // random photo from a user
  @Prop() likes: boolean;       // random photo from a user's likes
  @Prop() collection: string;   // random photo from a collection
  @Prop() filter: string = '';  // filter based on search term

  generateSrc() {
    if (this.src) return this.src;

    let size = '';
    if (this.width && this.height) {
      size = `${this.width}x${this.height}/`
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
        `https://source.unsplash.com/user/${this.user}/${size}${filter}`
    }

    if (this.collection) {
      return `https://source.unsplash.com/collection/${this.collection}/${size}${filter}`
    }

    return `https://source.unsplash.com/random/${size}${filter}`;
  }

  render() {
    const src = this.generateSrc();

    return (
      <img class="o-image" src={src} alt={this.alt} />
    );
  }
}
