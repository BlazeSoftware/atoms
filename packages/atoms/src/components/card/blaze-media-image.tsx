import { h, Component, Prop } from '@stencil/core';

@Component({
  tag: 'blaze-media-image',
})
export class MediaImage {
  @Prop()
  src: string;

  @Prop()
  alt: string;

  render() {
    return (
      <div class="o-media__image">
        <img class="o-image" alt={this.alt} src={this.src} />
      </div>
    );
  }
}
