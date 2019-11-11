import { h, Component } from '@stencil/core';

@Component({
  tag: 'demo-tabs',
})
export class Tabs {
  render() {
    return (
      <section class="u-window-box-super">
        <h2 class="c-heading">Tabs</h2>
        <div role="tablist" class="c-tabs">
          <div class="c-tabs__nav">
            <div class="c-tabs__headings">
              <button role="tab" class="c-tab-heading c-tab-heading--active">
                Wide tabs with nav
              </button>
              <button role="tab" class="c-tab-heading" disabled={true}>
                Disabled
              </button>
              <button role="tab" class="c-tab-heading">
                Three
              </button>
              <button role="tab" class="c-tab-heading">
                Four
              </button>
              <button role="tab" class="c-tab-heading">
                Five
              </button>
              <button role="tab" class="c-tab-heading">
                Six
              </button>
              <button role="tab" class="c-tab-heading">
                Seven
              </button>
              <button role="tab" class="c-tab-heading">
                Eight
              </button>
              <button role="tab" class="c-tab-heading">
                Nine
              </button>
              <button role="tab" class="c-tab-heading">
                Ten
              </button>
            </div>
          </div>
          <div role="tabpanel" class="c-tabs__tab">
            This is tab one
          </div>
          <div role="tabpanel" hidden class="c-tabs__tab">
            This is tab two
          </div>
        </div>
        <div role="tablist" class="c-tabs">
          <div class="c-tabs__nav">
            <div class="c-tabs__headings">
              <button role="tab" class="c-tab-heading">
                Default
              </button>
              <button role="tab" class="c-tab-heading" disabled={true}>
                Disabled
              </button>
              <button role="tab" class="c-tab-heading c-tab-heading--brand">
                Brand
              </button>
              <button role="tab" class="c-tab-heading c-tab-heading--info">
                Info
              </button>
              <button role="tab" class="c-tab-heading c-tab-heading--warning">
                Warning
              </button>
              <button role="tab" class="c-tab-heading c-tab-heading--success">
                Success
              </button>
              <button role="tab" class="c-tab-heading c-tab-heading--error">
                Error
              </button>
            </div>
          </div>
          <div role="tabpanel" class="c-tabs__tab">
            This is tab one
          </div>
          <div hidden class="c-tabs__tab">
            This is tab two
          </div>
        </div>
        <div role="tablist" class="c-tabs">
          <div class="c-tabs__nav">
            <div class="c-tabs__headings">
              <button role="tab" class="c-tab-heading">
                Default
              </button>
              <button role="tab" class="c-tab-heading" disabled={true}>
                Disabled
              </button>
              <button role="tab" class="c-tab-heading c-tab-heading--active">
                Active
              </button>
              <button role="tab" class="c-tab-heading c-tab-heading--active c-tab-heading--brand">
                Brand
              </button>
              <button role="tab" class="c-tab-heading c-tab-heading--active c-tab-heading--info">
                Info
              </button>
              <button role="tab" class="c-tab-heading c-tab-heading--active c-tab-heading--warning">
                Warning
              </button>
              <button role="tab" class="c-tab-heading c-tab-heading--active c-tab-heading--success">
                Success
              </button>
              <button role="tab" class="c-tab-heading c-tab-heading--active c-tab-heading--error">
                Error
              </button>
            </div>
          </div>
          <div role="tabpanel" class="c-tabs__tab">
            This is tab one
          </div>
          <div hidden class="c-tabs__tab">
            This is tab two
          </div>
        </div>
      </section>
    );
  }
}
