import { h, Component, Prop } from '@stencil/core';

@Component({
  tag: 'components-calendars',
})
export class ComponentsCalendars {
  @Prop()
  name: string;

  render() {
    return (
      <page-template name={this.name}>
        <p class="c-paragraph">
          Calendars are probably the most complicated markup you'll encounter in a Blaze component but we've tried to
          make it straightforward.
        </p>

        <p class="c-paragraph">
          There are 8 classes involved in total. Each one is self explanatory so explore the code snippet to see how
          they affect the calendar.
        </p>

        <blaze-demo language="html" code={`<blaze-calendar date="January 14, 2016"></blaze-calendar>`} />
        <h2 class="c-heading">CSS</h2>
        <blaze-demo
          language="html"
          code={`<div class="c-calendar">
  <button class="c-calendar__control c-calendar__control--prev-year">‹</button>
  <div class="c-calendar__header c-calendar__header--year">2016</div>
  <button class="c-calendar__control c-calendar__control--next-year">›</button>
  <button class="c-calendar__control c-calendar__control--prev-month">‹</button>
  <div class="c-calendar__header c-calendar__header--month">January</div>
  <button class="c-calendar__control c-calendar__control--next-month">›</button>
  <div class="c-calendar__day">Su</div>
  <div class="c-calendar__day">Mo</div>
  <div class="c-calendar__day">Tu</div>
  <div class="c-calendar__day">We</div>
  <div class="c-calendar__day">Th</div>
  <div class="c-calendar__day">Fr</div>
  <div class="c-calendar__day">Sa</div>
  <button class="c-calendar__date c-button" aria-selected="false">
    27
  </button>
  <button class="c-calendar__date c-button" aria-selected="false">
    28
  </button>
  <button class="c-calendar__date c-button" aria-selected="false">
    29
  </button>
  <button class="c-calendar__date c-button" aria-selected="false">
    30
  </button>
  <button class="c-calendar__date c-button" aria-selected="false">
    31
  </button>
  <button class="c-calendar__date c-calendar__date--in-month c-button" aria-selected="false">
    1
  </button>
  <button class="c-calendar__date c-calendar__date--in-month c-button" aria-selected="false">
    2
  </button>
  <button class="c-calendar__date c-calendar__date--in-month c-button" aria-selected="false">
    3
  </button>
  <button class="c-calendar__date c-calendar__date--in-month c-button" aria-selected="false">
    4
  </button>
  <button class="c-calendar__date c-calendar__date--in-month c-button" aria-selected="false">
    5
  </button>
  <button class="c-calendar__date c-calendar__date--in-month c-button" aria-selected="false">
    6
  </button>
  <button class="c-calendar__date c-calendar__date--in-month c-button" aria-selected="false">
    7
  </button>
  <button class="c-calendar__date c-calendar__date--in-month c-button" aria-selected="false">
    8
  </button>
  <button class="c-calendar__date c-calendar__date--in-month c-button" aria-selected="false">
    9
  </button>
  <button class="c-calendar__date c-calendar__date--in-month c-button" aria-selected="false">
    10
  </button>
  <button class="c-calendar__date c-calendar__date--in-month c-button" aria-selected="false">
    11
  </button>
  <button class="c-calendar__date c-calendar__date--in-month c-button" aria-selected="false">
    12
  </button>
  <button class="c-calendar__date c-calendar__date--in-month c-button" aria-selected="false">
    13
  </button>
  <button
    class="c-calendar__date c-calendar__date--in-month c-button c-calendar__date--selected c-button--brand"
    aria-selected="true">
    14
  </button>
  <button class="c-calendar__date c-calendar__date--in-month c-button" aria-selected="false">
    15
  </button>
  <button class="c-calendar__date c-calendar__date--in-month c-button" aria-selected="false">
    16
  </button>
  <button class="c-calendar__date c-calendar__date--in-month c-button" aria-selected="false">
    17
  </button>
  <button class="c-calendar__date c-calendar__date--in-month c-button" aria-selected="false">
    18
  </button>
  <button class="c-calendar__date c-calendar__date--in-month c-button" aria-selected="false">
    19
  </button>
  <button class="c-calendar__date c-calendar__date--in-month c-button" aria-selected="false">
    20
  </button>
  <button class="c-calendar__date c-calendar__date--in-month c-button" aria-selected="false">
    21
  </button>
  <button class="c-calendar__date c-calendar__date--in-month c-button" aria-selected="false">
    22
  </button>
  <button class="c-calendar__date c-calendar__date--in-month c-button" aria-selected="false">
    23
  </button>
  <button class="c-calendar__date c-calendar__date--in-month c-button" aria-selected="false">
    24
  </button>
  <button class="c-calendar__date c-calendar__date--in-month c-button" aria-selected="false">
    25
  </button>
  <button class="c-calendar__date c-calendar__date--in-month c-button" aria-selected="false">
    26
  </button>
  <button class="c-calendar__date c-calendar__date--in-month c-button" aria-selected="false">
    27
  </button>
  <button class="c-calendar__date c-calendar__date--in-month c-button" aria-selected="false">
    28
  </button>
  <button class="c-calendar__date c-calendar__date--in-month c-button" aria-selected="false">
    29
  </button>
  <button class="c-calendar__date c-calendar__date--in-month c-button" aria-selected="false">
    30
  </button>
  <button class="c-calendar__date c-calendar__date--in-month c-button" aria-selected="false">
    31
  </button>
  <button class="c-calendar__date c-button" aria-selected="false">
    1
  </button>
  <button class="c-calendar__date c-button" aria-selected="false">
    2
  </button>
  <button class="c-calendar__date c-button" aria-selected="false">
    3
  </button>
  <button class="c-calendar__date c-button" aria-selected="false">
    4
  </button>
  <button class="c-calendar__date c-button" aria-selected="false">
    5
  </button>
  <button class="c-calendar__date c-button" aria-selected="false">
    6
  </button>
  <div class="c-calendar__footer">
    <button class="c-calendar__today c-button c-button--block c-button--brand">Today</button>
  </div>
</div>
`}
        />
      </page-template>
    );
  }
}
