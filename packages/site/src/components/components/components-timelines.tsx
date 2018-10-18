import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'components-timelines',
})
export class ComponentsTimelines {
  @Prop()
  name: string;

  render() {
    return (
      <page-template name={this.name}>
        <p slot="intro" class="c-paragraph">
          Timelines are good to illustrate a connected set of events that have happened or are planned to happen.
        </p>

        <blaze-tabs>
          <blaze-tab header="CSS" open>
            <h2 id="single-selection" class="c-heading u-xlarge">
              Standard
            </h2>

            <blaze-demo
              language="html"
              code={`<ul class="o-timeline">
  <li class="c-timeline-item">
    <div class="c-timeline-item__tail"></div>
    <div class="c-timeline-item__point"></div>
    <div class="c-timeline-item__body">
      Nothing
    </div>
  </li>
  <li class="c-timeline-item">
    <div class="c-timeline-item__tail"></div>
    <div class="c-timeline-item__point"></div>
    <div class="c-timeline-item__body">
      Big bang

      <p class="c-paragraph u-text--quiet u-small">
        Widely considered to be how the universe began
      </p>
    </div>
  </li>
  <li class="c-timeline-item">
    <div class="c-timeline-item__tail"></div>
    <div class="c-timeline-item__point"></div>
    <div class="c-timeline-item__body">Galaxies go everywhere</div>
  </li>
  <li class="c-timeline-item">
    <div class="c-timeline-item__tail"></div>
    <div class="c-timeline-item__point"></div>
    <div class="c-timeline-item__body">Solar systems form</div>
  </li>
  <li class="c-timeline-item">
    <div class="c-timeline-item__tail"></div>
    <div class="c-timeline-item__point"></div>
    <div class="c-timeline-item__body">Earth appears</div>
  </li>
  <li class="c-timeline-item">
    <div class="c-timeline-item__tail"></div>
    <div class="c-timeline-item__point"></div>
    <div class="c-timeline-item__body">Human infestation occurs!</div>
  </li>
  <li class="c-timeline-item c-timeline-item--last">
    <div class="c-timeline-item__tail"></div>
    <div class="c-timeline-item__point"></div>
    <div class="c-timeline-item__body">
      All this has happened before, and will happen again
    </div>
  </li>
</ul>`}
            />

            <h2 id="single-selection" class="c-heading u-xlarge">
              Colours
            </h2>

            <blaze-demo
              language="html"
              code={`<ul class="o-timeline">
  <li class="c-timeline-item">
    <div class="c-timeline-item__tail"></div>
    <div class="c-timeline-item__point"></div>
    <div class="c-timeline-item__body">
      Nothing
    </div>
  </li>
  <li class="c-timeline-item c-timeline-item--brand">
    <div class="c-timeline-item__tail"></div>
    <div class="c-timeline-item__point"></div>
    <div class="c-timeline-item__body">
      Big bang

      <p class="c-paragraph u-text--quiet u-small">
        Widely considered to be how the universe began
      </p>
    </div>
  </li>
  <li class="c-timeline-item c-timeline-item--info">
    <div class="c-timeline-item__tail"></div>
    <div class="c-timeline-item__point"></div>
    <div class="c-timeline-item__body">Galaxies go everywhere</div>
  </li>
  <li class="c-timeline-item c-timeline-item--warning">
    <div class="c-timeline-item__tail"></div>
    <div class="c-timeline-item__point"></div>
    <div class="c-timeline-item__body">Solar systems form</div>
  </li>
  <li class="c-timeline-item c-timeline-item--success">
    <div class="c-timeline-item__tail"></div>
    <div class="c-timeline-item__point"></div>
    <div class="c-timeline-item__body">Earth appears</div>
  </li>
  <li class="c-timeline-item c-timeline-item--error">
    <div class="c-timeline-item__tail"></div>
    <div class="c-timeline-item__point"></div>
    <div class="c-timeline-item__body">Human infestation occurs!</div>
  </li>
  <li class="c-timeline-item c-timeline-item--last">
    <div class="c-timeline-item__tail"></div>
    <div class="c-timeline-item__point"></div>
    <div class="c-timeline-item__body">
      All this has happened before, and will happen again
    </div>
  </li>
</ul>`}
            />

            <h2 id="single-selection" class="c-heading u-xlarge">
              Loading last item
            </h2>

            <blaze-demo
              language="html"
              code={`<ul class="o-timeline o-timeline--loading">
  <li class="c-timeline-item">
    <div class="c-timeline-item__tail"></div>
    <div class="c-timeline-item__point"></div>
    <div class="c-timeline-item__body">
      Nothing
    </div>
  </li>
  <li class="c-timeline-item">
    <div class="c-timeline-item__tail"></div>
    <div class="c-timeline-item__point"></div>
    <div class="c-timeline-item__body">
      Big bang

      <p class="c-paragraph u-text--quiet u-small">
        Widely considered to be how the universe began
      </p>
    </div>
  </li>
  <li class="c-timeline-item">
    <div class="c-timeline-item__tail"></div>
    <div class="c-timeline-item__point"></div>
    <div class="c-timeline-item__body">Galaxies go everywhere</div>
  </li>
  <li class="c-timeline-item">
    <div class="c-timeline-item__tail"></div>
    <div class="c-timeline-item__point"></div>
    <div class="c-timeline-item__body">Solar systems form</div>
  </li>
  <li class="c-timeline-item">
    <div class="c-timeline-item__tail"></div>
    <div class="c-timeline-item__point"></div>
    <div class="c-timeline-item__body">Earth appears</div>
  </li>
  <li class="c-timeline-item">
    <div class="c-timeline-item__tail"></div>
    <div class="c-timeline-item__point"></div>
    <div class="c-timeline-item__body">Human infestation occurs!</div>
  </li>
  <li class="c-timeline-item c-timeline-item--last">
    <div class="c-timeline-item__tail"></div>
    <div class="c-timeline-item__point"></div>
    <div class="c-timeline-item__body">
      All this has happened before, and will happen again
    </div>
  </li>
  <li class="c-timeline-item c-timeline-item--loading">
    <div class="c-timeline-item__tail"></div>
    <div class="c-timeline-item__point"></div>
    <div class="c-timeline-item__body">
      ...Evolution
    </div>
  </li>
</ul>`}
            />
          </blaze-tab>
          <blaze-tab header="JavaScript">
            <blaze-demo
              demo={false}
              language="html"
              code={`<blaze-alert open dismissible>Default</blaze-alert>
<blaze-alert open dismissible type="brand">Brand</blaze-alert>
<blaze-alert open dismissible type="info">Info</blaze-alert>
<blaze-alert open dismissible type="warning">Warning</blaze-alert>
<blaze-alert open dismissible type="success">Success</blaze-alert>
<blaze-alert open type="error">Error (also not dismissible)</blaze-alert>`}
            />

            <h2 class="c-heading">Attributes</h2>

            <table class="c-table c-table--condensed">
              <thead class="c-table__head">
                <tr class="c-table__row c-table__row--heading">
                  <th class="c-table__cell">Attribute</th>
                  <th class="c-table__cell">Description</th>
                </tr>
              </thead>
              <tbody class="c-table__body">
                <tr class="c-table__row">
                  <td class="c-table__cell">open (boolean)</td>
                  <td class="c-table__cell">Initial open/close state of the alert</td>
                </tr>
                <tr class="c-table__row">
                  <td class="c-table__cell">dismissible (boolean)</td>
                  <td class="c-table__cell">Allow the alert to be closed</td>
                </tr>
              </tbody>
            </table>

            <h2 class="c-heading">Methods</h2>

            <p class="c-paragraph">
              To access public methods on the element first select it using{' '}
              <code class="u-code">document.querySelector()</code>.
            </p>

            <table class="c-table c-table--condensed">
              <thead class="c-table__head">
                <tr class="c-table__row c-table__row--heading">
                  <th class="c-table__cell">Method</th>
                  <th class="c-table__cell">Description</th>
                </tr>
              </thead>
              <tbody class="c-table__body">
                <tr class="c-table__row">
                  <td class="c-table__cell">show()</td>
                  <td class="c-table__cell">Opens the alert</td>
                </tr>
                <tr class="c-table__row">
                  <td class="c-table__cell">close()</td>
                  <td class="c-table__cell">Hides the alert</td>
                </tr>
                <tr class="c-table__row">
                  <td class="c-table__cell">isOpen()</td>
                  <td class="c-table__cell">Promise&lt;true or false></td>
                </tr>
              </tbody>
            </table>
          </blaze-tab>
        </blaze-tabs>
      </page-template>
    );
  }
}
