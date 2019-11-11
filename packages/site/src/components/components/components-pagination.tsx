import { h, Component, Prop } from '@stencil/core';

@Component({
  tag: 'components-pagination',
})
export class ComponentsPagination {
  @Prop()
  name: string;

  render() {
    return (
      <page-template name={this.name}>
        <blaze-demo language="html" code={`<blaze-pagination pages="15" page="4"></blaze-pagination>`} />

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
              <td class="c-table__cell">pages: number</td>
              <td class="c-table__cell">The total number of available pages</td>
            </tr>
            <tr class="c-table__row">
              <td class="c-table__cell">page: number</td>
              <td class="c-table__cell">The current page to initialise at</td>
            </tr>
          </tbody>
        </table>

        <h2 class="c-heading">Methods</h2>

        <table class="c-table">
          <thead class="c-table__head">
            <tr class="c-table__row c-table__row--heading">
              <th class="c-table__cell">Name</th>
              <th class="c-table__cell">Description</th>
            </tr>
          </thead>
          <tbody class="c-table__body">
            <tr class="c-table__row">
              <td class="c-table__cell">currentPage(): Promise&lt;number></td>
              <td class="c-table__cell">returns currently selected page index</td>
            </tr>
          </tbody>
        </table>

        <h2 class="c-heading">Events</h2>

        <table class="c-table">
          <thead class="c-table__head">
            <tr class="c-table__row c-table__row--heading">
              <th class="c-table__cell">Name</th>
              <th class="c-table__cell">Description</th>
            </tr>
          </thead>
          <tbody class="c-table__body">
            <tr class="c-table__row">
              <td class="c-table__cell">change: object</td>
              <td class="c-table__cell">Raised when the pages changes, returns the current page</td>
            </tr>
          </tbody>
        </table>
        <h2 class="c-heading">CSS</h2>
        <blaze-demo
          language="html"
          code={`<nav class="c-pagination">
  <button class="c-pagination__control">‹</button>
  <div class="c-pagination__pages">
    <button class="c-pagination__control">4</button>
    <button class="c-pagination__control" aria-current="page">5</button>
    <button class="c-pagination__control">6</button>
  </div>
  <button class="c-pagination__control">›</button>
</nav>`}
        />
      </page-template>
    );
  }
}
