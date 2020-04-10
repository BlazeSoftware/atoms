import { h, Component } from '@stencil/core';

@Component({
  tag: 'blaze-media-item',
})
export class MediaItem {
  render() {
    return (
      <div class="c-card__item o-media">
        <slot />
      </div>
    );
  }
}
