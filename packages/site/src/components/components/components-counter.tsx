import { h, Component, Prop, Listen, State } from '@stencil/core';

@Component({
  tag: 'components-counter',
})
export class ComponentsCounter {
  @Prop()
  name: string;

  @State()
  transferComplete: boolean = false;

  @Listen('completed')
  onComplete() {
    this.transferComplete = true;
  }

  render() {
    return (
      <page-template name={this.name}>
        <p class="c-paragraph">When you want to display a number with a bit more flair than usual.</p>

        <blaze-alerts position="bottomright">
          {this.transferComplete && (
            <blaze-alert open dismissible type="success">
              Transfer complete...
            </blaze-alert>
          )}
        </blaze-alerts>

        <blaze-demo
          language="html"
          code={`<blaze-counter
  class="u-super u-text--mono"
  auto-start
  start-value="120"
  end-value="0"
  duration="10"
  decimals="2"
  delay="2000">
  <span slot="prefix">&pound;</span>
  <span slot="suffix" class="u-text--quiet u-xsmall"> in bank account</span>
</blaze-counter>`}
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
              <td class="c-table__cell">auto-start: boolean</td>
              <td class="c-table__cell">Automatically start the counter</td>
            </tr>
            <tr class="c-table__row">
              <td class="c-table__cell">start-value: number</td>
              <td class="c-table__cell">The initial value of the counter</td>
            </tr>
            <tr class="c-table__row">
              <td class="c-table__cell">end-value: number</td>
              <td class="c-table__cell">The value the counter will end on</td>
            </tr>
            <tr class="c-table__row">
              <td class="c-table__cell">duration: number (seconds)</td>
              <td class="c-table__cell">The time in seconds the counter will take to go from start to value</td>
            </tr>
            <tr class="c-table__row">
              <td class="c-table__cell">delay: number (millisecond)</td>
              <td class="c-table__cell">How long the counter will wait before starting</td>
            </tr>
            <tr class="c-table__row">
              <td class="c-table__cell">decimals: number</td>
              <td class="c-table__cell">Number of decimal places to display</td>
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
              <td class="c-table__cell">start(): void</td>
              <td class="c-table__cell">Starts the counter taking the delay into account</td>
            </tr>
            <tr class="c-table__row">
              <td class="c-table__cell">reset(): void</td>
              <td class="c-table__cell">Resets the display to the initial start value</td>
            </tr>
            <tr class="c-table__row">
              <td class="c-table__cell">restart(): void</td>
              <td class="c-table__cell">Will reset the display and it will immediately start the counter again</td>
            </tr>
            <tr class="c-table__row">
              <td class="c-table__cell">pauseResume(): void</td>
              <td class="c-table__cell">Pause or resume the counter</td>
            </tr>
            <tr class="c-table__row">
              <td class="c-table__cell">update(value: number): void</td>
              <td class="c-table__cell">Changes the value and automatically starts the counter</td>
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
              <td class="c-table__cell">completed: void</td>
              <td class="c-table__cell">Trigged when the counter has finished</td>
            </tr>
          </tbody>
        </table>
      </page-template>
    );
  }
}
