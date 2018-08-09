import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'components-avatars'
})
export class ComponentsAvatars {
  @Prop() name: string;

  render() {
    return (
      <page-template name={this.name}>
        <p slot="intro" class="c-paragraph">
          Avatars are useful for chat UIs, profile pictures and account photos.
        </p>

        <blaze-tabs type="brand">
          <blaze-tab header="CSS" open>
            <blaze-demo language="html" code={`<div class="c-avatar c-avatar u-super">
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
</div>`} />

            <h2 class="c-heading">
              2 Images
            </h2>

            <blaze-demo language="html" code={`<div class="c-avatar c-avatar u-super">
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
</div>`} />

            <h2 class="c-heading">
              Initials
            </h2>

            <blaze-demo language="html" code={`<div class="c-avatar c-avatar u-super" data-text="GP"></div>
<div class="c-avatar c-avatar u-xlarge" data-text="GP"></div>
<div class="c-avatar c-avatar u-large" data-text="GP"></div>
<div class="c-avatar c-avatar" data-text="GP"></div>
<div class="c-avatar c-avatar u-small" data-text="GP"></div>
<div class="c-avatar c-avatar u-xsmall" data-text="GP"></div>`} />

          </blaze-tab>
          <blaze-tab header="JavaScript">
            <blaze-demo language="html" code={`<blaze-avatar size="super" alt="placeholder" src="https://unsplash.it/200/?image=823"></blaze-avatar>
<blaze-avatar size="xlarge" alt="placeholder" src="https://unsplash.it/200/?image=823"></blaze-avatar>
<blaze-avatar size="large" alt="placeholder" src="https://unsplash.it/200/?image=823"></blaze-avatar>
<blaze-avatar alt="placeholder" src="https://unsplash.it/200/?image=823"></blaze-avatar>
<blaze-avatar size="small" alt="placeholder" src="https://unsplash.it/200/?image=823"></blaze-avatar>
<blaze-avatar size="xsmall" alt="placeholder" src="https://unsplash.it/200/?image=823"></blaze-avatar>
<br />
<blaze-avatar text="GP" size="super"></blaze-avatar>
<blaze-avatar text="GP" size="xlarge"></blaze-avatar>
<blaze-avatar text="GP" size="large"></blaze-avatar>
<blaze-avatar text="GP"></blaze-avatar>
<blaze-avatar text="GP" size="small"></blaze-avatar>
<blaze-avatar text="GP" size="xsmall"></blaze-avatar>
<br />
<blaze-avatar text="GP" size="super" alt="placeholder" src="https://unsplash.it/200/?image=823"></blaze-avatar>
<blaze-avatar text="GP" size="xlarge" alt="placeholder" src="https://unsplash.it/200/?image=823"></blaze-avatar>
<blaze-avatar text="GP" size="large" alt="placeholder" src="https://unsplash.it/200/?image=823"></blaze-avatar>
<blaze-avatar text="GP" alt="placeholder" src="https://unsplash.it/200/?image=823"></blaze-avatar>
<blaze-avatar text="GP" size="small" alt="placeholder" src="https://unsplash.it/200/?image=823"></blaze-avatar>
<blaze-avatar text="GP" size="xsmall" alt="placeholder" src="https://unsplash.it/200/?image=823"></blaze-avatar>
<br />
<blaze-avatar size="super" alt="placeholder" src="https://unsplash.it/200/?image=823" alt-2="placeholder" src-2="https://unsplash.it/200/?image=815"></blaze-avatar>
<blaze-avatar size="xlarge" alt="placeholder" src="https://unsplash.it/200/?image=823" alt-2="placeholder" src-2="https://unsplash.it/200/?image=815"></blaze-avatar>
<blaze-avatar size="large" alt="placeholder" src="https://unsplash.it/200/?image=823" alt-2="placeholder" src-2="https://unsplash.it/200/?image=815"></blaze-avatar>
<blaze-avatar alt="placeholder" src="https://unsplash.it/200/?image=823" alt-2="placeholder" src-2="https://unsplash.it/200/?image=815"></blaze-avatar>
<blaze-avatar size="small" alt="placeholder" src="https://unsplash.it/200/?image=823" alt-2="placeholder" src-2="https://unsplash.it/200/?image=815"></blaze-avatar>
<blaze-avatar size="xsmall" alt="placeholder" src="https://unsplash.it/200/?image=823" alt-2="placeholder" src-2="https://unsplash.it/200/?image=815"></blaze-avatar>`} />

            <h2 class="c-heading">
              Attributes
            </h2>

            <table class="c-table c-table--condensed">
              <thead class="c-table__head">
                <tr class="c-table__row c-table__row--heading">
                  <th class="c-table__cell">Attribute</th>
                  <th class="c-table__cell">Description</th>
                </tr>
              </thead>
              <tbody class="c-table__body">
                <tr class="c-table__row">
                  <td class="c-table__cell">src</td>
                  <td class="c-table__cell">URL to the image to display</td>
                </tr>
                <tr class="c-table__row">
                  <td class="c-table__cell">src-2</td>
                  <td class="c-table__cell">URL to the smaller secondary image</td>
                </tr>
                <tr class="c-table__row">
                  <td class="c-table__cell">alt</td>
                  <td class="c-table__cell">Alternative text to the image</td>
                </tr>
                <tr class="c-table__row">
                  <td class="c-table__cell">alt-2</td>
                  <td class="c-table__cell">Alternative text to the secondary image</td>
                </tr>
                <tr class="c-table__row">
                  <td class="c-table__cell">size</td>
                  <td class="c-table__cell">The size of the Avatar</td>
                </tr>
                <tr class="c-table__row">
                  <td class="c-table__cell">text</td>
                  <td class="c-table__cell">Text to display in the middle of the circle</td>
                </tr>
              </tbody>
            </table>
          </blaze-tab>
        </blaze-tabs>

      </page-template>
    );
  }
}