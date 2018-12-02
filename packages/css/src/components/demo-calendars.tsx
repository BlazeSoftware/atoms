import { Component } from '@stencil/core';

@Component({
  tag: 'demo-calendars',
})
export class Calendar {
  render() {
    return (
      <section class="u-window-box-super">
        <h2 class="c-heading">Calendar</h2>
        <div class="c-calendar u-highest">
          <button class="c-calendar__control">&lsaquo;</button>
          <div class="c-calendar__header">2016</div>
          <button class="c-calendar__control">&rsaquo;</button>

          <button class="c-calendar__control">&lsaquo;</button>
          <div class="c-calendar__header">January</div>
          <button class="c-calendar__control">&rsaquo;</button>

          <div class="c-calendar__day">Sun</div>
          <div class="c-calendar__day">Mon</div>
          <div class="c-calendar__day">Tue</div>
          <div class="c-calendar__day">Wed</div>
          <div class="c-calendar__day">Thu</div>
          <div class="c-calendar__day">Fri</div>
          <div class="c-calendar__day">Sat</div>

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
          <button class="c-calendar__date c-calendar__date--in-month c-calendar__date--selected" aria-selected="true">
            14
          </button>
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

          <button class="c-button c-button--block c-button--info">Today</button>
        </div>
      </section>
    );
  }
}
