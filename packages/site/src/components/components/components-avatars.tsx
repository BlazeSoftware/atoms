import { h, Component, Prop } from '@stencil/core';

@Component({
  tag: 'components-avatars',
})
export class ComponentsAvatars {
  @Prop()
  name: string;

  render() {
    return (
      <page-template name={this.name}>
        <p class="c-paragraph">Avatars are useful for chat UIs, profile pictures and account photos.</p>
        <blaze-demo
          language="html"
          code={`<blaze-avatar size="super"
              alt="placeholder"
              src="https://unsplash.it/200/?image=823"
              alt-2="placeholder"
              src-2="https://unsplash.it/200/?image=815">
</blaze-avatar>`}
        />

        <h2 class="c-heading">Attributes</h2>

        <table class="c-table">
          <thead class="c-table__head">
            <tr class="c-table__row c-table__row--heading">
              <th class="c-table__cell">Name</th>
              <th class="c-table__cell">Description</th>
            </tr>
          </thead>
          <tbody class="c-table__body">
            <tr class="c-table__row">
              <td class="c-table__cell">src: string</td>
              <td class="c-table__cell">URL to the image to display</td>
            </tr>
            <tr class="c-table__row">
              <td class="c-table__cell">src-2: string</td>
              <td class="c-table__cell">URL to the smaller secondary image</td>
            </tr>
            <tr class="c-table__row">
              <td class="c-table__cell">alt: string</td>
              <td class="c-table__cell">Alternative text to the image</td>
            </tr>
            <tr class="c-table__row">
              <td class="c-table__cell">alt-2: string</td>
              <td class="c-table__cell">Alternative text to the secondary image</td>
            </tr>
            <tr class="c-table__row">
              <td class="c-table__cell">size: string</td>
              <td class="c-table__cell">The size of the Avatar</td>
            </tr>
            <tr class="c-table__row">
              <td class="c-table__cell">text: string</td>
              <td class="c-table__cell">Text to display in the middle of the circle</td>
            </tr>
          </tbody>
        </table>
        <h2 class="c-heading">CSS</h2>
        <blaze-demo
          language="html"
          code={`<div class="c-avatar c-avatar u-super">
  <img class="c-avatar__img" alt="placeholder" src="http://placehold.it/1024x963/3B6DC6/FFF">
</div>
<div class="c-avatar c-avatar u-xlarge">
  <img class="c-avatar__img" alt="placeholder" src="http://placehold.it/1024x963/3B6DC6/FFF">
</div>
<div class="c-avatar c-avatar u-large">
  <img class="c-avatar__img" alt="placeholder" src="http://placehold.it/1024x963/3B6DC6/FFF">
</div>
<div class="c-avatar">
  <img class="c-avatar__img" alt="placeholder" src="http://placehold.it/1024x963/3B6DC6/FFF">
</div>
<div class="c-avatar c-avatar u-small">
  <img class="c-avatar__img" alt="placeholder" src="http://placehold.it/1024x963/3B6DC6/FFF">
</div>
<div class="c-avatar c-avatar u-xsmall">
  <img class="c-avatar__img" alt="placeholder" src="http://placehold.it/1024x963/3B6DC6/FFF">
</div>`}
        />

        <h2 class="c-heading">2 Images</h2>

        <blaze-demo
          language="html"
          code={`<div class="c-avatar c-avatar u-super">
  <img class="c-avatar__img" alt="placeholder" src="http://placehold.it/1024x963/3B6DC6/FFF">
  <img class="c-avatar__img" alt="placeholder" src="http://placehold.it/1024x963/BADA55/FFF">
</div>
<div class="c-avatar c-avatar u-xlarge">
  <img class="c-avatar__img" alt="placeholder" src="http://placehold.it/1024x963/3B6DC6/FFF">
  <img class="c-avatar__img" alt="placeholder" src="http://placehold.it/1024x963/BADA55/FFF">
</div>
<div class="c-avatar c-avatar u-large">
  <img class="c-avatar__img" alt="placeholder" src="http://placehold.it/1024x963/3B6DC6/FFF">
  <img class="c-avatar__img" alt="placeholder" src="http://placehold.it/1024x963/BADA55/FFF">
</div>
<div class="c-avatar">
  <img class="c-avatar__img" alt="placeholder" src="http://placehold.it/1024x963/3B6DC6/FFF">
  <img class="c-avatar__img" alt="placeholder" src="http://placehold.it/1024x963/BADA55/FFF">
</div>
<div class="c-avatar c-avatar u-small">
  <img class="c-avatar__img" alt="placeholder" src="http://placehold.it/1024x963/3B6DC6/FFF">
  <img class="c-avatar__img" alt="placeholder" src="http://placehold.it/1024x963/BADA55/FFF">
</div>
<div class="c-avatar c-avatar u-xsmall">
  <img class="c-avatar__img" alt="placeholder" src="http://placehold.it/1024x963/3B6DC6/FFF">
  <img class="c-avatar__img" alt="placeholder" src="http://placehold.it/1024x963/BADA55/FFF">
</div>`}
        />

        <h2 class="c-heading">Initials</h2>

        <blaze-demo
          language="html"
          code={`<div class="c-avatar c-avatar u-super" data-text="GP"></div>
<div class="c-avatar c-avatar u-xlarge" data-text="GP"></div>
<div class="c-avatar c-avatar u-large" data-text="GP"></div>
<div class="c-avatar c-avatar" data-text="GP"></div>
<div class="c-avatar c-avatar u-small" data-text="GP"></div>
<div class="c-avatar c-avatar u-xsmall" data-text="GP"></div>`}
        />
      </page-template>
    );
  }
}
