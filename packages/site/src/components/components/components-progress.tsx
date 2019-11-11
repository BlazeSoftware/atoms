import { h, Component, Prop } from '@stencil/core';

@Component({
  tag: 'components-progress',
})
export class ComponentsProgress {
  @Prop()
  name: string;

  render() {
    return (
      <page-template name={this.name}>
        <blaze-demo
          language="html"
          code={`<blaze-progress size="xsmall" rounded>
  <blaze-progress-bar value="10">
    10%
  </blaze-progress-bar>
</blaze-progress>
<br />
<blaze-progress size="small">
  <blaze-progress-bar value="20" type="brand">
    20%
  </blaze-progress-bar>
</blaze-progress>
<br />
<blaze-progress size="medium" rounded>
  <blaze-progress-bar value="35" type="info">
    35%
  </blaze-progress-bar>
</blaze-progress>
<br />
<blaze-progress size="large">
  <blaze-progress-bar value="65" type="warning">
    65%
  </blaze-progress-bar>
</blaze-progress>
<br />
<blaze-progress size="xlarge" rounded>
  <blaze-progress-bar value="80" type="success">
    80%
  </blaze-progress-bar>
</blaze-progress>
<br />
<blaze-progress size="super">
  <blaze-progress-bar value="100" type="error">
    100%
  </blaze-progress-bar>
</blaze-progress>`}
        />

        <h2 class="c-heading">Stacked</h2>

        <blaze-demo
          language="html"
          code={`<blaze-progress>
  <blaze-progress-bar value="25">
    25%
  </blaze-progress-bar>
  <blaze-progress-bar value="10" type="brand">
    10%
  </blaze-progress-bar>
  <blaze-progress-bar value="20" type="info">
    20%
  </blaze-progress-bar>
  <blaze-progress-bar value="15" type="warning">
    15%
  </blaze-progress-bar>
  <blaze-progress-bar value="15" type="success">
    15%
  </blaze-progress-bar>
  <blaze-progress-bar value="10" type="error">
    10%
  </blaze-progress-bar>
</blaze-progress>`}
        />

        <blaze-demo
          language="html"
          code={`<blaze-progress size="medium" rounded>
  <blaze-progress-bar min="10000" value="15000" max="20000" type="info">
    £15,000
  </blaze-progress-bar>
</blaze-progress>`}
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
              <td class="c-table__cell">type: string</td>
              <td class="c-table__cell">The color of the bar</td>
            </tr>
            <tr class="c-table__row">
              <td class="c-table__cell">rounded: boolean</td>
              <td class="c-table__cell">Toggle the rounded borders</td>
            </tr>
            <tr class="c-table__row">
              <td class="c-table__cell">value: number</td>
              <td class="c-table__cell">The amount of "progress"</td>
            </tr>
            <tr class="c-table__row">
              <td class="c-table__cell">min: number</td>
              <td class="c-table__cell">The starting value of progress</td>
            </tr>
            <tr class="c-table__row">
              <td class="c-table__cell">max: number</td>
              <td class="c-table__cell">The value of "100%"</td>
            </tr>
            <tr class="c-table__row">
              <td class="c-table__cell">size: string</td>
              <td class="c-table__cell">The size of the bar</td>
            </tr>
          </tbody>
        </table>

        <h2 class="c-heading">CSS</h2>
        <blaze-demo
          language="html"
          code={`<div class="c-progress">
  <div role="progressbar"
       aria-valuenow="35"
       aria-valuemin="0"
       aria-valuemax="100"
       style="width: 35%;"
       class="c-progress__bar c-progress__bar--info">
  </div>
</div>`}
        />

        <h2 class="c-heading u-xlarge">Rounded</h2>

        <blaze-demo
          language="html"
          code={`<div class="c-progress c-progress--rounded">
  <div role="progressbar"
       aria-valuenow="35"
       aria-valuemin="0"
       aria-valuemax="100"
       style="width: 35%;"
       class="c-progress__bar c-progress__bar--info">
  </div>
</div>`}
        />

        <h2 class="c-heading u-xlarge">Colors and Sizes</h2>

        <blaze-demo
          language="html"
          code={`<div class="c-progress u-xsmall">
  <div role="progressbar" aria-valuetext="15% complete" aria-valuenow="15" aria-valuemin="0" aria-valuemax="100" style="width: 15%;"
    class="c-progress__bar">
    15% complete
  </div>
</div>
<br>
<div class="c-progress c-progress--rounded u-small">
  <div role="progressbar" aria-valuetext="20% complete" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100" style="width: 20%;"
    class="c-progress__bar c-progress__bar--brand">
    20% complete
  </div>
</div>
<br>
<div class="c-progress u-medium">
  <div role="progressbar" aria-valuetext="35% complete" aria-valuenow="35" aria-valuemin="0" aria-valuemax="100" style="width: 35%;"
    class="c-progress__bar c-progress__bar--info">
    35% complete
  </div>
</div>
<br>
<div class="c-progress c-progress--rounded u-large">
  <div role="progressbar" aria-valuetext="45% complete" aria-valuenow="45" aria-valuemin="0" aria-valuemax="100" style="width: 45%;"
    class="c-progress__bar c-progress__bar--warning">
    45% complete
  </div>
</div>
<br>
<div class="c-progress u-xlarge">
  <div role="progressbar" aria-valuetext="60% complete" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 60%;"
    class="c-progress__bar c-progress__bar--success">
    60% complete
  </div>
</div>
<br>
<div class="c-progress c-progress--rounded u-super">
  <div role="progressbar" aria-valuetext="100% complete" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style="width: 100%;"
    class="c-progress__bar c-progress__bar--error">
    100% complete
  </div>
</div>`}
        />

        <h2 class="c-heading">Stacked</h2>

        <blaze-demo
          language="html"
          code={`<div class="c-progress">
  <div role="progressbar" aria-valuenow="15" aria-valuemin="0" aria-valuemax="100" style="width: 15%;" class="c-progress__bar"></div>
  <div role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" style="width: 25%;" class="c-progress__bar c-progress__bar--brand"></div>
  <div role="progressbar" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100" style="width: 10%;" class="c-progress__bar c-progress__bar--info"></div>
  <div role="progressbar" aria-valuenow="12" aria-valuemin="0" aria-valuemax="100" style="width: 12%;" class="c-progress__bar c-progress__bar--warning"></div>
  <div role="progressbar" aria-valuenow="18" aria-valuemin="0" aria-valuemax="100" style="width: 18%;" class="c-progress__bar c-progress__bar--success"></div>
  <div role="progressbar" aria-valuenow="3" aria-valuemin="0" aria-valuemax="100" style="width: 3%;" class="c-progress__bar c-progress__bar--error"></div>
</div>`}
        />
      </page-template>
    );
  }
}
