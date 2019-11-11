import { h, Component, Prop } from '@stencil/core';

@Component({
  tag: 'objects-images',
})
export class ObjectsImages {
  @Prop()
  name: string;

  render() {
    return (
      <page-template name={this.name}>
        <p class="c-paragraph">
          The Blaze image component doubles up as a placeholder image if a specific source isn't provided.
        </p>

        <p class="c-paragraph">The images are also lazy loaded once they come into view.</p>

        <p class="c-paragraph">
          Images supplied by{' '}
          <a class="c-link" href="https://source.unsplash.com/">
            Unsplash
          </a>
          .
        </p>

        <blaze-demo
          language="html"
          code={`<blaze-image alt="random placeholder image" user="erondu" width="1024" height="768" filter="mountains" likes></blaze-image>`}
        />

        <h2 class="c-heading">Image attributes</h2>

        <table class="c-table">
          <thead class="c-table__head">
            <tr class="c-table__row c-table__row--heading">
              <th class="c-table__cell">Attribute</th>
              <th class="c-table__cell">Description</th>
            </tr>
          </thead>
          <tbody class="c-table__body">
            <tr class="c-table__row">
              <td class="c-table__cell">src="&lt;url>"</td>
              <td class="c-table__cell">URL to a specific image</td>
            </tr>
            <tr class="c-table__row">
              <td class="c-table__cell">alt="&lt;alt text>"</td>
              <td class="c-table__cell">URL to a specific image</td>
            </tr>
            <tr class="c-table__row">
              <td class="c-table__cell">user="&lt;username>"</td>
              <td class="c-table__cell">To choose a random photo from a specific user</td>
            </tr>
            <tr class="c-table__row">
              <td class="c-table__cell">filter="&lt;search term>"</td>
              <td class="c-table__cell">
                To narrow the selection of a random photo by supply a list of comma-separated search terms
              </td>
            </tr>
            <tr class="c-table__row">
              <td class="c-table__cell">likes (boolean)</td>
              <td class="c-table__cell">
                Similar to finding a photo taken by a user, you can fetch a random photo that has been liked by a
                specific user
              </td>
            </tr>
            <tr class="c-table__row">
              <td class="c-table__cell">width="&lt;number>"</td>
              <td class="c-table__cell">The width of the image to fetch</td>
            </tr>
            <tr class="c-table__row">
              <td class="c-table__cell">height="&lt;number>"</td>
              <td class="c-table__cell">The height of the image to fetch</td>
            </tr>
          </tbody>
        </table>

        <h2 class="c-heading">CSS</h2>
        <blaze-demo
          language="html"
          code={`<img alt="random placeholder image" class="o-image" src="https://source.unsplash.com/random" />`}
        />
      </page-template>
    );
  }
}
