import { Component } from '@stencil/core';

@Component({
  tag: 'demo-tables',
})
export class Tables {
  render() {
    return (
      <section class="u-window-box-super">
        <h2 class="c-heading">Tables</h2>
        <table class="c-table">
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
              <td class="c-table__cell">Gregory</td>
              <td class="c-table__cell">Pratt</td>
              <td class="c-table__cell">@_____gp_____</td>
            </tr>
            <tr class="c-table__row">
              <td class="c-table__cell">Jim</td>
              <td class="c-table__cell">Krik</td>
              <td class="c-table__cell">@captaink</td>
            </tr>
            <tr class="c-table__row">
              <td class="c-table__cell">Mr.</td>
              <td class="c-table__cell">Spock</td>
              <td class="c-table__cell">@science101</td>
            </tr>
          </tbody>
        </table>
        <h3 class="c-heading">Striped</h3>
        <table class="c-table c-table--striped">
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
              <td class="c-table__cell">Gregory</td>
              <td class="c-table__cell">Pratt</td>
              <td class="c-table__cell">@_____gp_____</td>
            </tr>
            <tr class="c-table__row">
              <td class="c-table__cell">Jim</td>
              <td class="c-table__cell">Krik</td>
              <td class="c-table__cell">@captaink</td>
            </tr>
            <tr class="c-table__row">
              <td class="c-table__cell">Mr.</td>
              <td class="c-table__cell">Spock</td>
              <td class="c-table__cell">@science101</td>
            </tr>
          </tbody>
        </table>
        <h3 class="c-heading">Clickable table</h3>
        <table class="c-table c-table--clickable">
          <caption class="c-table__caption">Clickable table, row inactive</caption>
          <thead class="c-table__head">
            <tr class="c-table__row c-table__row--heading">
              <th class="c-table__cell">First name</th>
              <th class="c-table__cell">Last name</th>
              <th class="c-table__cell">Username</th>
            </tr>
          </thead>
          <tbody class="c-table__body">
            <tr class="c-table__row">
              <td class="c-table__cell">Gregory</td>
              <td class="c-table__cell">Pratt</td>
              <td class="c-table__cell">@_____gp_____</td>
            </tr>
            <tr class="c-table__row c-table__row--inactive">
              <td class="c-table__cell">Jim</td>
              <td class="c-table__cell">Krik</td>
              <td class="c-table__cell">@captaink</td>
            </tr>
            <tr class="c-table__row">
              <td class="c-table__cell">Mr.</td>
              <td class="c-table__cell">Spock</td>
              <td class="c-table__cell">@science101</td>
            </tr>
          </tbody>
        </table>
        <h3 class="c-heading">Clickable row</h3>
        <table class="c-table">
          <caption class="c-table__caption">Clickable row, inactive row</caption>
          <thead class="c-table__head">
            <tr class="c-table__row c-table__row--heading">
              <th class="c-table__cell">First name</th>
              <th class="c-table__cell">Last name</th>
              <th class="c-table__cell">Username</th>
            </tr>
          </thead>
          <tbody class="c-table__body">
            <tr class="c-table__row">
              <td class="c-table__cell">Gregory</td>
              <td class="c-table__cell">Pratt</td>
              <td class="c-table__cell">@_____gp_____</td>
            </tr>
            <tr class="c-table__row c-table__row--clickable">
              <td class="c-table__cell">Jim</td>
              <td class="c-table__cell">Krik</td>
              <td class="c-table__cell">@captaink</td>
            </tr>
            <tr class="c-table__row c-table__row--inactive">
              <td class="c-table__cell">Mr.</td>
              <td class="c-table__cell">Spock</td>
              <td class="c-table__cell">@science101</td>
            </tr>
          </tbody>
        </table>
        <h3 class="c-heading">Condensed</h3>
        <table class="c-table c-table--condensed">
          <caption class="c-table__caption">Condensed</caption>
          <thead class="c-table__head">
            <tr class="c-table__row c-table__row--heading">
              <th class="c-table__cell">First name</th>
              <th class="c-table__cell">Last name</th>
              <th class="c-table__cell">Username</th>
            </tr>
          </thead>
          <tbody class="c-table__body">
            <tr class="c-table__row">
              <td class="c-table__cell">Gregory</td>
              <td class="c-table__cell">Pratt</td>
              <td class="c-table__cell">@_____gp_____</td>
            </tr>
            <tr class="c-table__row">
              <td class="c-table__cell">Jim</td>
              <td class="c-table__cell">Krik</td>
              <td class="c-table__cell">@captaink</td>
            </tr>
            <tr class="c-table__row">
              <td class="c-table__cell">Mr.</td>
              <td class="c-table__cell">Spock</td>
              <td class="c-table__cell">@science101</td>
            </tr>
          </tbody>
        </table>
        <h3 class="c-heading">Using divs</h3>
        <div class="c-table c-table--striped">
          <div class="c-table__caption">divs instead of trs ths tds</div>
          <div class="c-table__row c-table__row--heading">
            <span class="c-table__cell">First name</span>
            <span class="c-table__cell">Last name</span>
            <span class="c-table__cell">Username</span>
          </div>
          <div class="c-table__row">
            <span class="c-table__cell">Gregory</span>
            <span class="c-table__cell">Pratt</span>
            <span class="c-table__cell">@_____gp_____</span>
          </div>
          <div class="c-table__row">
            <span class="c-table__cell">Jim</span>
            <span class="c-table__cell">Krik</span>
            <span class="c-table__cell">@captaink</span>
          </div>
          <div class="c-table__row">
            <span class="c-table__cell">Mr.</span>
            <span class="c-table__cell">Spock</span>
            <span class="c-table__cell">@science101</span>
          </div>
        </div>
      </section>
    );
  }
}
