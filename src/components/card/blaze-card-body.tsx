import { h, Component } from '@stencil/core';

@Component({
  tag: 'blaze-card-body',
})
export class CardBody {
  render() {
    return (
      <div class="c-card__body">
        <slot />
      </div>
    );
  }
}
