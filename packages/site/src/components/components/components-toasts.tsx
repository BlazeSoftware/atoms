import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'components-toasts',
})
export class ComponentsToasts {
  @Prop()
  name: string;

  render() {
    return (
      <page-template name={this.name}>
        <p slot="intro" class="c-paragraph">
          Toasts or growls are covered by special modifiers on{' '}
          <stencil-route-link url="/components/alerts">Alerts</stencil-route-link> and usually appear in one of the
          corners of your page to draw your attention to something that has happened.
        </p>

        <blaze-tabs>
          <blaze-tab header="CSS" open>
            <blaze-demo
              classes="fixed-height-demo"
              language="html"
              code={`<div aria-label="6 alerts" role="presentation" class="c-alerts c-alerts--bottomright">
  <div role="alert" class="c-alert">Default</div>
  <div role="alert" class="c-alert c-alert--brand">Brand</div>
  <div role="alert" class="c-alert c-alert--info">Info</div>
  <div role="alert" class="c-alert c-alert--warning">Warning</div>
  <div role="alert" class="c-alert c-alert--success">Success</div>
  <div role="alert" class="c-alert c-alert--error">Error</div>
</div>`}
            />

            <h2 id="positions" class="c-heading u-xlarge">
              Positions
            </h2>

            <p class="c-paragraph">Toasts can appear in either of the corners of the page</p>

            <h3 class="c-heading u-large u-text--mono">.c-alerts--topleft</h3>

            <div class="fixed-height-demo">
              <div aria-label="6 alerts" role="presentation" class="c-alerts c-alerts--topleft">
                <div role="alert" class="c-alert">
                  Default
                </div>
              </div>
            </div>

            <h3 class="c-heading u-large u-text--mono">.c-alerts--topright</h3>

            <div class="fixed-height-demo">
              <div aria-label="6 alerts" role="presentation" class="c-alerts c-alerts--topright">
                <div role="alert" class="c-alert">
                  Default
                </div>
              </div>
            </div>

            <h3 class="c-heading u-large u-text--mono">.c-alerts--bottomright</h3>

            <div class="fixed-height-demo">
              <div aria-label="6 alerts" role="presentation" class="c-alerts c-alerts--bottomright">
                <div role="alert" class="c-alert">
                  Default
                </div>
              </div>
            </div>

            <h3 class="c-heading u-large u-text--mono">.c-alerts--bottomleft</h3>

            <div class="fixed-height-demo">
              <div aria-label="6 alerts" role="presentation" class="c-alerts c-alerts--bottomleft">
                <div role="alert" class="c-alert">
                  Default
                </div>
              </div>
            </div>
          </blaze-tab>
          <blaze-tab header="JavaScript">
            <blaze-demo
              demo={false}
              classes="fixed-height-demo"
              language="html"
              code={`<blaze-alerts position="bottomright">
  <blaze-alert open dismissible type="brand">This is a toast</blaze-alert>
  <blaze-alert open dismissible type="info">Just for your information</blaze-alert>
  <blaze-alert open type="warning">You can't get rid of this warning</blaze-alert>
  <blaze-alert open dismissible type="success">Yay things worked</blaze-alert>
  <blaze-alert open dismissible type="error">Argh there is an error</blaze-alert>
</blaze-alerts>`}
            />

            <p class="c-paragraph">
              Since "toasts" are simply positioned Alerts you have{' '}
              <stencil-route-link url="/components/alerts">all the same attributes and methods</stencil-route-link>.
            </p>

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
                  <td class="c-table__cell">position: string</td>
                  <td class="c-table__cell">
                    Set on the toasts element for which corner the alerts are anchored to i.e.
                    topright|bottomright|bottomleft|topleft
                  </td>
                </tr>
                <tr class="c-table__row">
                  <td class="c-table__cell">dismissible: boolean</td>
                  <td class="c-table__cell">Turn on the close button</td>
                </tr>
                <tr class="c-table__row">
                  <td class="c-table__cell">open: boolean</td>
                  <td class="c-table__cell">Toggle the alert</td>
                </tr>
              </tbody>
            </table>
          </blaze-tab>
        </blaze-tabs>
      </page-template>
    );
  }
}
