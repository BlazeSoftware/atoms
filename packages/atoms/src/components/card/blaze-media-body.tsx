import { h, Component } from '@stencil/core';

@Component({
  tag: 'blaze-media-body',
})
export class MediaBody {
  render() {
    return (
      <div class="o-media__body">
        <slot />
      </div>
    );
  }
}
