import { h, Component, Prop } from '@stencil/core';

@Component({
  tag: 'components-tables',
})
export class ComponentTables {
  @Prop()
  name: string;

  render() {
    return (
      <page-template name={this.name}>
        <p class="c-paragraph">Tables; great for displaying tabular data.</p>

        <h2 class="c-heading u-xlarge">Basic Table</h2>

        <blaze-demo
          language="html"
          code={`<table class="c-table">
  <caption class="c-table__caption">Basic table</caption>
  <thead class="c-table__head">
    <tr class="c-table__row c-table__row--heading">
      <th class="c-table__cell">First name</th>
      <th class="c-table__cell">Last name</th>
      <th class="c-table__cell">Username</th>
    </tr>
  </thead>
  <tbody class="c-table__body">
    <tr class="c-table__row">
      <td class="c-table__cell">Jim</td>
      <td class="c-table__cell">Kirk</td>
      <td class="c-table__cell">@captaink</td>
    </tr>
    <tr class="c-table__row">
      <td class="c-table__cell">Mr.</td>
      <td class="c-table__cell">Spock</td>
      <td class="c-table__cell">@science101</td>
    </tr>
    <tr class="c-table__row">
      <td class="c-table__cell">Nyota</td>
      <td class="c-table__cell">Uhura</td>
      <td class="c-table__cell">@comms</td>
    </tr>
  </tbody>
</table>`}
        />

        <h2 id="striped" class="c-heading u-xlarge">
          Striped Table
        </h2>

        <blaze-demo
          language="html"
          code={`<table class="c-table c-table--striped">
  <caption class="c-table__caption">Striped rows</caption>
  <thead class="c-table__head">
  <tr class="c-table__row c-table__row--heading">
    <th class="c-table__cell">First name</th>
    <th class="c-table__cell">Last name</th>
    <th class="c-table__cell">Username</th>
  </tr>
  </thead>
  <tbody class="c-table__body">
  <tr class="c-table__row">
    <td class="c-table__cell">Jim</td>
    <td class="c-table__cell">Kirk</td>
    <td class="c-table__cell">@captaink</td>
  </tr>
  <tr class="c-table__row">
    <td class="c-table__cell">Mr.</td>
    <td class="c-table__cell">Spock</td>
    <td class="c-table__cell">@science101</td>
  </tr>
  <tr class="c-table__row">
    <td class="c-table__cell">Nyota</td>
    <td class="c-table__cell">Uhura</td>
    <td class="c-table__cell">@comms</td>
  </tr>
  </tbody>
</table>`}
        />

        <h2 id="clickable" class="c-heading u-xlarge">
          Clickable Table
        </h2>

        <blaze-demo
          language="html"
          code={`<table class="c-table c-table--clickable">
  <caption class="c-table__caption">Clickable table with disabled row</caption>
  <thead class="c-table__head">
  <tr class="c-table__row c-table__row--heading">
    <th class="c-table__cell">First name</th>
    <th class="c-table__cell">Last name</th>
    <th class="c-table__cell">Username</th>
  </tr>
  </thead>
  <tbody class="c-table__body">
  <tr class="c-table__row c-table__row--disabled">
    <td class="c-table__cell">Jim</td>
    <td class="c-table__cell">Kirk</td>
    <td class="c-table__cell">@captaink</td>
  </tr>
  <tr class="c-table__row">
    <td class="c-table__cell">Mr.</td>
    <td class="c-table__cell">Spock</td>
    <td class="c-table__cell">@science101</td>
  </tr>
  <tr class="c-table__row">
    <td class="c-table__cell">Nyota</td>
    <td class="c-table__cell">Uhura</td>
    <td class="c-table__cell">@comms</td>
  </tr>
  </tbody>
</table>`}
        />

        <h2 id="clickable-row" class="c-heading u-xlarge">
          Clickable Row
        </h2>

        <blaze-demo
          language="html"
          code={`<table class="c-table">
  <caption class="c-table__caption">Clickable row, disabled row</caption>
  <thead class="c-table__head">
  <tr class="c-table__row c-table__row--heading">
    <th class="c-table__cell">First name</th>
    <th class="c-table__cell">Last name</th>
    <th class="c-table__cell">Username</th>
  </tr>
  </thead>
  <tbody class="c-table__body">
  <tr class="c-table__row c-table__row--clickable">
    <td class="c-table__cell">Jim</td>
    <td class="c-table__cell">Kirk</td>
    <td class="c-table__cell">@captaink</td>
  </tr>
  <tr class="c-table__row c-table__row--disabled">
    <td class="c-table__cell">Mr.</td>
    <td class="c-table__cell">Spock</td>
    <td class="c-table__cell">@science101</td>
  </tr>
  <tr class="c-table__row">
    <td class="c-table__cell">Nyota</td>
    <td class="c-table__cell">Uhura</td>
    <td class="c-table__cell">@comms</td>
  </tr>
  </tbody>
</table>`}
        />

        <h2 id="condensed" class="c-heading u-xlarge">
          Condensed
        </h2>

        <blaze-demo
          language="html"
          code={`<table class="c-table c-table--condensed">
  <caption class="c-table__caption">Small table and text</caption>
  <thead class="c-table__head">
  <tr class="c-table__row c-table__row--heading">
    <th class="c-table__cell">First name</th>
    <th class="c-table__cell">Last name</th>
    <th class="c-table__cell">Username</th>
  </tr>
  </thead>
  <tbody class="c-table__body">
  <tr class="c-table__row">
    <td class="c-table__cell">Jim</td>
    <td class="c-table__cell">Kirk</td>
    <td class="c-table__cell">@captaink</td>
  </tr>
  <tr class="c-table__row">
    <td class="c-table__cell">Mr.</td>
    <td class="c-table__cell">Spock</td>
    <td class="c-table__cell">@science101</td>
  </tr>
  <tr class="c-table__row">
    <td class="c-table__cell">Nyota</td>
    <td class="c-table__cell">Uhura</td>
    <td class="c-table__cell">@comms</td>
  </tr>
  </tbody>
</table>`}
        />

        <h2 id="divs" class="c-heading u-xlarge">
          Using divs
        </h2>

        <blaze-demo
          language="html"
          code={`<div class="c-table c-table--striped">
  <div class="c-table__caption">divs instead of trs ths tds</div>
  <div class="c-table__row c-table__row--heading">
    <span class="c-table__cell">First name</span>
    <span class="c-table__cell">Last name</span>
    <span class="c-table__cell">Username</span>
  </div>
  <div class="c-table__row">
    <span class="c-table__cell">Jim</span>
    <span class="c-table__cell">Kirk</span>
    <span class="c-table__cell">@captaink</span>
  </div>
  <div class="c-table__row">
    <span class="c-table__cell">Mr.</span>
    <span class="c-table__cell">Spock</span>
    <span class="c-table__cell">@science101</span>
  </div>
  <div class="c-table__row">
    <span class="c-table__cell">Nyota</span>
    <span class="c-table__cell">Uhura</span>
    <span class="c-table__cell">@comms</span>
  </div>
</div>`}
        />
      </page-template>
    );
  }
}
