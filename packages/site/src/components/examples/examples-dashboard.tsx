import { h, Component, Prop } from '@stencil/core';

declare const Chart: any;

@Component({
  tag: 'example-dashboard',
})
export class ExampleDashboard {
  myChart: HTMLCanvasElement;

  @Prop()
  name: string;

  componentDidLoad() {
    const ctx = this.myChart.getContext('2d');
    new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm'],
        datasets: [
          {
            label: 'value',
            data: [3, 2, 5, 4, 19, 12, 20, 39],
            backgroundColor: '#87ceeb',
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
            },
          ],
        },
      },
    });
  }

  render() {
    return (
      <page-template name={this.name}>
        <script src="https://cdn.jsdelivr.net/npm/chart.js@2.9.3/dist/Chart.min.js"></script>
        <div class="c-card">
          <div class="o-grid o-grid--no-gutter o-grid--small-full c-card__body">
            <div class="o-grid__cell o-grid__cell--width-33 u-gradient-text u-gradient-text--success">
              <div class="u-large">Dow +0.01%</div>
              17,978.37 / +1.13
            </div>
            <div class="o-grid__cell o-grid__cell--width-33 u-gradient-text u-gradient-text--error">
              <div class="u-large">Nasdaq -0.20%</div>
              4,886.09 / -9.70
            </div>
            <div class="o-grid__cell o-grid__cell--width-33 u-gradient-text u-gradient-text--success">
              <div class="u-large">S&amp;P +0.13%</div>
              2,090.60 / +2.81
            </div>
          </div>
        </div>
        <div class="o-grid o-grid--wrap o-grid--small-full u-letter-box-medium">
          <div class="o-grid__cell o-grid__cell--width-50">
            <div class="c-card c-card--accordion">
              <button role="heading" aria-expanded="true" class="c-card__control">
                Most Popular Stocks
              </button>
              <section class="c-card__item c-card__item--pane">
                <div class="o-grid o-grid--not-gutter o-grid--center">
                  <div class="o-grid__cell">
                    <span class="u-xlarge u-gradient-text u-gradient-text--info">Twitter</span>
                  </div>
                  <div class="o-grid__cell u-right u-gradient-text u-gradient-text--info">17.66 +3.34%</div>
                </div>
                <canvas ref={(el) => (this.myChart = el)} width="400" height="400"></canvas>
              </section>
            </div>
          </div>
          <div class="o-grid__cell o-grid__cell--width-50">
            <div class="c-card c-card--accordion">
              <button role="heading" aria-expanded="true" class="c-card__control">
                Key Stats
              </button>
              <section class="c-card__item c-card__item--pane">
                <table class="c-table c-table--striped">
                  <tbody class="c-table__body">
                    <tr class="c-table__row">
                      <td class="c-table__cell">10-year yield</td>
                      <td class="c-table__cell">1.93%</td>
                      <td class="c-table__cell u-gradient-text u-gradient-text--error">+0.03</td>
                    </tr>
                    <tr class="c-table__row">
                      <td class="c-table__cell">Oil</td>
                      <td class="c-table__cell">$44.02</td>
                      <td class="c-table__cell">-0.05%</td>
                    </tr>
                    <tr class="c-table__row">
                      <td class="c-table__cell">Yen</td>
                      <td class="c-table__cell">¥111.46</td>
                      <td class="c-table__cell">+0.24</td>
                    </tr>
                    <tr class="c-table__row">
                      <td class="c-table__cell">Euro</td>
                      <td class="c-table__cell">$1.13</td>
                      <td class="c-table__cell">+0.13</td>
                    </tr>
                    <tr class="c-table__row">
                      <td class="c-table__cell">Gold</td>
                      <td class="c-table__cell">$1,243.50</td>
                      <td class="c-table__cell u-gradient-text u-gradient-text--success">+0.01%</td>
                    </tr>
                  </tbody>
                </table>
              </section>
            </div>
            <div class="c-card c-card--accordion">
              <button role="heading" aria-expanded="true" class="c-card__control">
                Top Stories
              </button>
              <section class="c-card__item c-card__item--pane">
                <div class="c-card u-small">
                  <div class="c-card__item c-card__item--warning o-media">
                    <div class="o-media__image o-media__image--top">
                      <img class="o-image" src="https://placehold.it/80" />
                    </div>
                    <div class="o-media__body">
                      <h2 class="c-heading">ExxonMobil loses AAA rating</h2>
                      <p class="c-paragraph">Lorem ipsum dolor sit amet</p>
                    </div>
                  </div>
                </div>
                <div class="c-card u-small">
                  <div class="c-card__item c-card__item--info o-media">
                    <div class="o-media__image o-media__image--top">
                      <img class="o-image" src="https://placehold.it/80" />
                    </div>
                    <div class="o-media__body">
                      <h2 class="c-heading">Facebook needs to live up to the hype</h2>
                      <p class="c-paragraph">Lorem ipsum dolor sit amet</p>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
        <blaze-demo
          language="html"
          demo={false}
          code={`<div class="c-card">
  <div class="o-grid o-grid--no-gutter o-grid--small-full c-card__body">
    <div class="o-grid__cell o-grid__cell--width-33 u-gradient-text u-gradient-text--success">
      <div class="u-large">Dow +0.01%</div>
      17,978.37 / +1.13
    </div>
    <div class="o-grid__cell o-grid__cell--width-33 u-gradient-text u-gradient-text--error">
      <div class="u-large">Nasdaq -0.20%</div>
      4,886.09 / -9.70
    </div>
    <div class="o-grid__cell o-grid__cell--width-33 u-gradient-text u-gradient-text--success">
      <div class="u-large">S&amp;P +0.13%</div>
      2,090.60 / +2.81
    </div>
  </div>
</div>
<div class="o-grid o-grid--wrap o-grid--small-full u-letter-box-medium">
  <div class="o-grid__cell o-grid__cell--width-50">
    <div class="c-card c-card--accordion">
      <button role="heading" aria-expanded="true" class="c-card__control">
        Most Popular Stocks
      </button>
      <section class="c-card__item c-card__item--pane">
        <div class="o-grid o-grid--not-gutter o-grid--center">
          <div class="o-grid__cell">
            <span class="u-xlarge u-gradient-text u-gradient-text--info">Twitter</span>
          </div>
          <div class="o-grid__cell u-right u-gradient-text u-gradient-text--info">17.66 +3.34%</div>
        </div>
        <canvas id="myChart" width="400" height="400"></canvas>
      </section>
    </div>
  </div>
  <div class="o-grid__cell o-grid__cell--width-50">
    <div class="c-card c-card--accordion">
      <button role="heading" aria-expanded="true" class="c-card__control">
        Key Stats
      </button>
      <section class="c-card__item c-card__item--pane">
        <table class="c-table c-table--striped">
          <tbody class="c-table__body">
            <tr class="c-table__row">
              <td class="c-table__cell">10-year yield</td>
              <td class="c-table__cell">1.93%</td>
              <td class="c-table__cell u-gradient-text u-gradient-text--error">+0.03</td>
            </tr>
            <tr class="c-table__row">
              <td class="c-table__cell">Oil</td>
              <td class="c-table__cell">$44.02</td>
              <td class="c-table__cell">-0.05%</td>
            </tr>
            <tr class="c-table__row">
              <td class="c-table__cell">Yen</td>
              <td class="c-table__cell">¥111.46</td>
              <td class="c-table__cell">+0.24</td>
            </tr>
            <tr class="c-table__row">
              <td class="c-table__cell">Euro</td>
              <td class="c-table__cell">$1.13</td>
              <td class="c-table__cell">+0.13</td>
            </tr>
            <tr class="c-table__row">
              <td class="c-table__cell">Gold</td>
              <td class="c-table__cell">$1,243.50</td>
              <td class="c-table__cell u-gradient-text u-gradient-text--success">+0.01%</td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
    <div class="c-card c-card--accordion">
      <button role="heading" aria-expanded="true" class="c-card__control">
        Top Stories
      </button>
      <section class="c-card__item c-card__item--pane">
        <div class="c-card u-small">
          <div class="c-card__item c-card__item--warning o-media">
            <div class="o-media__image o-media__image--top">
              <img class="o-image" src="https://placehold.it/80" />
            </div>
            <div class="o-media__body">
              <h2 class="c-heading">ExxonMobil loses AAA rating</h2>
              <p class="c-paragraph">Lorem ipsum dolor sit amet</p>
            </div>
          </div>
        </div>
        <div class="c-card u-small">
          <div class="c-card__item c-card__item--info o-media">
            <div class="o-media__image o-media__image--top">
              <img class="o-image" src="https://placehold.it/80" />
            </div>
            <div class="o-media__body">
              <h2 class="c-heading">Facebook needs to live up to the hype</h2>
              <p class="c-paragraph">Lorem ipsum dolor sit amet</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</div>`}
        />
      </page-template>
    );
  }
}
3;
