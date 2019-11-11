import { h, Component } from '@stencil/core';

@Component({
  tag: 'demo-timelines',
})
export class Timelines {
  render() {
    return (
      <section class="u-window-box-super">
        <h2 class="c-heading" />
        <ul class="o-timeline">
          <li class="c-timeline-item">
            <div class="c-timeline-item__body">Nothing</div>
          </li>
          <li class="c-timeline-item">
            <div class="c-timeline-item__body">
              Big bang
              <p class="c-paragraph u-text--quiet u-small">Widely considered to be how the universe began</p>
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
            <div class="c-timeline-item__body">All this has happened before, and will happen again</div>
          </li>
        </ul>
        <h3 class="c-heading">Colours</h3>
        <ul class="o-timeline">
          <li class="c-timeline-item">
            <div class="c-timeline-item__body">Nothing</div>
          </li>
          <li class="c-timeline-item c-timeline-item--brand">
            <div class="c-timeline-item__body">
              Big bang
              <p class="c-paragraph u-text--quiet u-small">Widely considered to be how the universe began</p>
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
            <div class="c-timeline-item__body">All this has happened before, and will happen again</div>
          </li>
        </ul>
        <h3 class="c-heading">Alternating</h3>
        <ul class="o-timeline o-timeline--alternate">
          <li class="c-timeline-item c-timeline-item--left">
            <div class="c-timeline-item__body">Nothing</div>
          </li>
          <li class="c-timeline-item c-timeline-item--brand">
            <div class="c-timeline-item__body">
              Big bang
              <p class="c-paragraph u-text--quiet u-small">Widely considered to be how the universe began</p>
            </div>
          </li>
          <li class="c-timeline-item c-timeline-item--left c-timeline-item--info">
            <div class="c-timeline-item__body">Galaxies go everywhere</div>
          </li>
          <li class="c-timeline-item c-timeline-item--warning">
            <div class="c-timeline-item__body">Solar systems form</div>
          </li>
          <li class="c-timeline-item c-timeline-item--left c-timeline-item--success">
            <div class="c-timeline-item__body">Earth appears</div>
          </li>
          <li class="c-timeline-item c-timeline-item--error">
            <div class="c-timeline-item__body">Human infestation occurs!</div>
          </li>
          <li class="c-timeline-item c-timeline-item--left c-timeline-item--last">
            <div class="c-timeline-item__body">All this has happened before, and will happen again</div>
          </li>
        </ul>
        <h3 class="c-heading">Loading</h3>
        <ul class="o-timeline o-timeline--alternate o-timeline--loading">
          <li class="c-timeline-item c-timeline-item--left c-timeline-item--info">
            <div class="c-timeline-item__body">Nothing</div>
          </li>
          <li class="c-timeline-item c-timeline-item--last c-timeline-item--warning">
            <div class="c-timeline-item__body">
              Big bang
              <p class="c-paragraph u-text--quiet u-small">Widely considered to be how the universe began</p>
            </div>
          </li>
          <li class="c-timeline-item c-timeline-item--left c-timeline-item--error c-timeline-item--loading">
            <div class="c-timeline-item__body">Loading...</div>
          </li>
        </ul>
      </section>
    );
  }
}
