import { h, Component, Prop } from '@stencil/core';

@Component({
  tag: 'components-autocomplete',
})
export class ComponentsAutocomplete {
  @Prop()
  name: string;

  demoSearch(e) {
    var items = [];
    if (e.detail) {
      for (var i = 0; i < 5; i++) {
        var text = e.detail;
        for (var j = 0; j < i; j++) {
          text += e.detail;
        }
        items.push({ id: i, text });
      }
    }
    e.target.setItems(items);
  }

  render() {
    return (
      <page-template name={this.name}>
        <div class="u-letter-box-large">
          <blaze-autocomplete placeholder="Enter some text..." onSearch={(e) => this.demoSearch(e)} />
        </div>
        <blaze-demo
          language="html"
          demo={false}
          code={`<blaze-autocomplete placeholder="Enter some text..."></blaze-autocomplete>`}
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
              <td class="c-table__cell">placeholder: string</td>
              <td class="c-table__cell">Initial text to display</td>
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
              <td class="c-table__cell">setItems(items: Array)</td>
              <td class="c-table__cell">Sets the menu items list</td>
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
              <td class="c-table__cell">search: string</td>
              <td class="c-table__cell">Triggered as the user types in the input passing the value of the text box</td>
            </tr>
            <tr class="c-table__row">
              <td class="c-table__cell">select: object</td>
              <td class="c-table__cell">Raised when an item is selected from the menu</td>
            </tr>
          </tbody>
        </table>
      </page-template>
    );
  }
}
