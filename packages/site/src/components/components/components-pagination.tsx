import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'components-pagination'
})
export class ComponentsPagination {
  @Prop() name: string;

  render() {
    return (
      <page-template name={this.name}>
        <blaze-tabs type="brand">
          <blaze-tab header="CSS" open>
            <blaze-demo language="html" code={`<nav class="c-pagination">
  <button class="c-pagination__control">‹</button>
  <div class="c-pagination__pages">
    <button class="c-pagination__control">4</button>
    <button class="c-pagination__control" aria-current="page">5</button>
    <button class="c-pagination__control">6</button>
  </div>
  <button class="c-pagination__control">›</button>
</nav>`} />
          </blaze-tab>
          <blaze-tab header="JavaScript">
            <blaze-demo language="html" code={`<blaze-pagination pages="15" page="4"></blaze-pagination>`} />            

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
                  <td class="c-table__cell">pages</td>
                  <td class="c-table__cell">The total number of available pages</td>
                </tr>
                <tr class="c-table__row">
                  <td class="c-table__cell">page</td>
                  <td class="c-table__cell">The current page to initialise at</td>
                </tr>
              </tbody>
            </table>

            <h2 class="c-heading">
              Methods
            </h2>

            <table class="c-table c-table--condensed">
              <thead class="c-table__head">
                <tr class="c-table__row c-table__row--heading">
                  <th class="c-table__cell">Method</th>
                  <th class="c-table__cell">Description</th>
                </tr>
              </thead>
              <tbody class="c-table__body">
                <tr class="c-table__row">
                  <td class="c-table__cell">currentPage()</td>
                  <td class="c-table__cell">Returns the currently selected page</td>
                </tr>
              </tbody>
            </table>

            <h2 class="c-heading">
              Events
            </h2>

            <table class="c-table c-table--condensed">
              <thead class="c-table__head">
                <tr class="c-table__row c-table__row--heading">
                  <th class="c-table__cell">Event</th>
                  <th class="c-table__cell">Description</th>
                </tr>
              </thead>
              <tbody class="c-table__body">
                <tr class="c-table__row">
                  <td class="c-table__cell">onPageChange</td>
                  <td class="c-table__cell">Raised when the pages changes, returns the current page</td>
                </tr>
              </tbody>
            </table>
          </blaze-tab>
        </blaze-tabs>

      </page-template>
    );
  }
}