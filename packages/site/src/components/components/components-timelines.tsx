import { h, Component, Prop } from '@stencil/core';

@Component({
  tag: 'components-timelines',
})
export class ComponentsTimelines {
  @Prop()
  name: string;

  render() {
    return (
      <page-template name={this.name}>
        <p class="c-paragraph">
          Timelines are good to illustrate a connected set of events that have happened or are planned to happen.
        </p>

        <blaze-demo
          language="html"
          code={`<blaze-timeline loading>
  <blaze-timeline-item left>Nothing</blaze-timeline-item>
  <blaze-timeline-item type="brand">
    Big bang
    <p class="c-paragraph">
      Widely considered to be how the universe began
    </p>
  </blaze-timeline-item>
  <blaze-timeline-item type="info">Galaxies go everywhere</blaze-timeline-item>
  <blaze-timeline-item type="warning">Solar systems form</blaze-timeline-item>
  <blaze-timeline-item type="success">Earth appears</blaze-timeline-item>
  <blaze-timeline-item type="error">Human infestation occurs!</blaze-timeline-item>
  <blaze-timeline-item last>All this has happened before and will happen again</blaze-timeline-item>
  <blaze-timeline-item loading>Evolution</blaze-timeline-item>
</blaze-timeline>`}
        />

        <h2 class="c-heading">Attributes</h2>

        <h3 class="c-heading">Timeline</h3>
        <table class="c-table">
          <thead class="c-table__head">
            <tr class="c-table__row c-table__row--heading">
              <th class="c-table__cell">Name</th>
              <th class="c-table__cell">Description</th>
            </tr>
          </thead>
          <tbody class="c-table__body">
            <tr class="c-table__row">
              <td class="c-table__cell">alternate: boolean</td>
              <td class="c-table__cell">Styles the line of time centrally</td>
            </tr>
            <tr class="c-table__row">
              <td class="c-table__cell">loading: boolean</td>
              <td class="c-table__cell">Enables the loading item to occupy the last spot in the list</td>
            </tr>
          </tbody>
        </table>

        <h3 class="c-heading">Timeline item</h3>
        <table class="c-table">
          <thead class="c-table__head">
            <tr class="c-table__row c-table__row--heading">
              <th class="c-table__cell">Name</th>
              <th class="c-table__cell">Description</th>
            </tr>
          </thead>
          <tbody class="c-table__body">
            <tr class="c-table__row">
              <td class="c-table__cell">last: boolean</td>
              <td class="c-table__cell">Removes the line of time for this item</td>
            </tr>
            <tr class="c-table__row">
              <td class="c-table__cell">loading: boolean</td>
              <td class="c-table__cell">Styles the item differently to indicate the content is not ready</td>
            </tr>
          </tbody>
        </table>
        <h2 class="c-heading">CSS</h2>
        <h2 id="standard" class="c-heading u-xlarge">
          Standard
        </h2>

        <blaze-demo
          language="html"
          code={`<ul class="o-timeline">
  <li class="c-timeline-item">
    <div class="c-timeline-item__body">
      Nothing
    </div>
  </li>
  <li class="c-timeline-item">
    <div class="c-timeline-item__body">
      Big bang

      <p class="c-paragraph u-text--quiet u-small">
        Widely considered to be how the universe began
      </p>
    </div>
  </li>
  <li class="c-timeline-item">
    <div class="c-timeline-item__body">Galaxies go everywhere</div>
  </li>
  <li class="c-timeline-item">
    <div class="c-timeline-item__body">Solar systems form</div>
  </li>
  <li class="c-timeline-item">
    <div class="c-timeline-item__body">Earth appears</div>
  </li>
  <li class="c-timeline-item">
    <div class="c-timeline-item__body">Human infestation occurs!</div>
  </li>
  <li class="c-timeline-item c-timeline-item--last">
    <div class="c-timeline-item__body">
      All this has happened before, and will happen again
    </div>
  </li>
</ul>`}
        />

        <h2 id="colours" class="c-heading u-xlarge">
          Colours
        </h2>

        <blaze-demo
          language="html"
          code={`<ul class="o-timeline">
  <li class="c-timeline-item">
    <div class="c-timeline-item__body">
      Nothing
    </div>
  </li>
  <li class="c-timeline-item c-timeline-item--brand">
    <div class="c-timeline-item__body">
      Big bang

      <p class="c-paragraph u-text--quiet u-small">
        Widely considered to be how the universe began
      </p>
    </div>
  </li>
  <li class="c-timeline-item c-timeline-item--info">
    <div class="c-timeline-item__body">Galaxies go everywhere</div>
  </li>
  <li class="c-timeline-item c-timeline-item--warning">
    <div class="c-timeline-item__body">Solar systems form</div>
  </li>
  <li class="c-timeline-item c-timeline-item--success">
    <div class="c-timeline-item__body">Earth appears</div>
  </li>
  <li class="c-timeline-item c-timeline-item--error">
    <div class="c-timeline-item__body">Human infestation occurs!</div>
  </li>
  <li class="c-timeline-item c-timeline-item--last">
    <div class="c-timeline-item__body">
      All this has happened before, and will happen again
    </div>
  </li>
</ul>`}
        />

        <h2 id="loading" class="c-heading u-xlarge">
          Loading last item
        </h2>

        <blaze-demo
          language="html"
          code={`<ul class="o-timeline o-timeline--loading">
  <li class="c-timeline-item">
    <div class="c-timeline-item__body">
      Nothing
    </div>
  </li>
  <li class="c-timeline-item">
    <div class="c-timeline-item__body">
      Big bang

      <p class="c-paragraph u-text--quiet u-small">
        Widely considered to be how the universe began
      </p>
    </div>
  </li>
  <li class="c-timeline-item">
    <div class="c-timeline-item__body">Galaxies go everywhere</div>
  </li>
  <li class="c-timeline-item">
    <div class="c-timeline-item__body">Solar systems form</div>
  </li>
  <li class="c-timeline-item">
    <div class="c-timeline-item__body">Earth appears</div>
  </li>
  <li class="c-timeline-item">
    <div class="c-timeline-item__body">Human infestation occurs!</div>
  </li>
  <li class="c-timeline-item c-timeline-item--last">
    <div class="c-timeline-item__body">
      All this has happened before, and will happen again
    </div>
  </li>
  <li class="c-timeline-item c-timeline-item--loading">
    <div class="c-timeline-item__body">
      ...Evolution
    </div>
  </li>
</ul>`}
        />

        <h2 id="alternate" class="c-heading u-xlarge">
          Alternating items
        </h2>

        <blaze-demo
          language="html"
          code={`<ul class="o-timeline o-timeline--alternate o-timeline--loading">
  <li class="c-timeline-item c-timeline-item--left">
    <div class="c-timeline-item__body">
      Nothing
    </div>
  </li>
  <li class="c-timeline-item c-timeline-item--brand">
    <div class="c-timeline-item__body">
      Big bang

      <p class="c-paragraph u-text--quiet u-small">
        Widely considered to be how the universe began
      </p>
    </div>
  </li>
  <li class="c-timeline-item c-timeline-item--info c-timeline-item--left">
    <div class="c-timeline-item__body">Galaxies go everywhere</div>
  </li>
  <li class="c-timeline-item c-timeline-item--warning">
    <div class="c-timeline-item__body">Solar systems form</div>
  </li>
  <li class="c-timeline-item c-timeline-item--success c-timeline-item--left">
    <div class="c-timeline-item__body">Earth appears</div>
  </li>
  <li class="c-timeline-item c-timeline-item--error">
    <div class="c-timeline-item__body">Human infestation occurs!</div>
  </li>
  <li class="c-timeline-item c-timeline-item--left c-timeline-item--last">
    <div class="c-timeline-item__body">
      All this has happened before, and will happen again
    </div>
  </li>
  <li class="c-timeline-item c-timeline-item--loading">
    <div class="c-timeline-item__body">
      ...Evolution
    </div>
  </li>
</ul>`}
        />
      </page-template>
    );
  }
}
