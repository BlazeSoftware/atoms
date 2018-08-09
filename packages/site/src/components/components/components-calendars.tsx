import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'components-calendars'
})
export class ComponentsCalendars {
  @Prop() name: string;

  render() {
    return (
      <page-template name={this.name}>
        <p slot="intro" class="c-paragraph">
          Calendars are probably the most complicated markup you'll encounter in a Blaze component but we've tried to make it straightforward.
        </p>

        <p class="c-paragraph">
          There are 8 classes involved in total. Each one is self explanatory so explore the code snippet to see how they affect the calendar.
        </p>

        <blaze-demo language="html" code={`<div class="c-calendar c-calendar--higher">
  <button class="c-calendar__control">&lsaquo;</button>
  <div class="c-calendar__header">2016</div>
  <button class="c-calendar__control">&rsaquo;</button>

  <button class="c-calendar__control">&lsaquo;</button>
  <div class="c-calendar__header">January</div>
  <button class="c-calendar__control">&rsaquo;</button>

  <div class="c-calendar__day">Su</div>
  <div class="c-calendar__day">Mo</div>
  <div class="c-calendar__day">Tu</div>
  <div class="c-calendar__day">We</div>
  <div class="c-calendar__day">Th</div>
  <div class="c-calendar__day">Fr</div>
  <div class="c-calendar__day">Sa</div>

  <button class="c-calendar__date">27</button>
  <button class="c-calendar__date">28</button>
  <button class="c-calendar__date">29</button>
  <button class="c-calendar__date">30</button>
  <button class="c-calendar__date">31</button>
  <button class="c-calendar__date c-calendar__date--in-month">01</button>
  <button class="c-calendar__date c-calendar__date--in-month">02</button>
  <button class="c-calendar__date c-calendar__date--in-month c-calendar__date--today">03</button>
  <button class="c-calendar__date c-calendar__date--in-month">04</button>
  <button class="c-calendar__date c-calendar__date--in-month">05</button>
  <button class="c-calendar__date c-calendar__date--in-month">06</button>
  <button class="c-calendar__date c-calendar__date--in-month">07</button>
  <button class="c-calendar__date c-calendar__date--in-month">08</button>
  <button class="c-calendar__date c-calendar__date--in-month">09</button>
  <button class="c-calendar__date c-calendar__date--in-month">10</button>
  <button class="c-calendar__date c-calendar__date--in-month">11</button>
  <button class="c-calendar__date c-calendar__date--in-month">12</button>
  <button class="c-calendar__date c-calendar__date--in-month">13</button>
  <button class="c-calendar__date c-calendar__date--in-month c-calendar__date--selected">14</button>
  <button class="c-calendar__date c-calendar__date--in-month">15</button>
  <button class="c-calendar__date c-calendar__date--in-month">16</button>
  <button class="c-calendar__date c-calendar__date--in-month">17</button>
  <button class="c-calendar__date c-calendar__date--in-month">18</button>
  <button class="c-calendar__date c-calendar__date--in-month">19</button>
  <button class="c-calendar__date c-calendar__date--in-month">20</button>
  <button class="c-calendar__date c-calendar__date--in-month">21</button>
  <button class="c-calendar__date c-calendar__date--in-month">22</button>
  <button class="c-calendar__date c-calendar__date--in-month">23</button>
  <button class="c-calendar__date c-calendar__date--in-month">24</button>
  <button class="c-calendar__date c-calendar__date--in-month">25</button>
  <button class="c-calendar__date c-calendar__date--in-month">26</button>
  <button class="c-calendar__date c-calendar__date--in-month">27</button>
  <button class="c-calendar__date c-calendar__date--in-month">28</button>
  <button class="c-calendar__date c-calendar__date--in-month">29</button>
  <button class="c-calendar__date c-calendar__date--in-month">30</button>
  <button class="c-calendar__date c-calendar__date--in-month">31</button>
  <button class="c-calendar__date">01</button>
  <button class="c-calendar__date">02</button>
  <button class="c-calendar__date">03</button>
  <button class="c-calendar__date">04</button>
  <button class="c-calendar__date">05</button>

  <button class="c-button c-button--block">Today</button>
</div>
`}/>

      </page-template>
    );
  }
}