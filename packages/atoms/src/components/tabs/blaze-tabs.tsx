import { Component, Element, Event, EventEmitter, Method, State } from '@stencil/core';

@Component({
  tag: 'blaze-tabs',
})
export class Tabs {
  @Element()
  elem: HTMLElement;

  @State()
  tabs: any[];

  @Event({ eventName: 'change' })
  onChange: EventEmitter;

  componentWillLoad() {
    this.tabs = Array.from(this.elem.querySelectorAll('blaze-tab'));
  }

  @Method()
  async currentTab() {
    return this.tabs.findIndex((tab) => tab.open);
  }

  @Method()
  openTab(tabIndex: number) {
    if (!this.tabs[tabIndex].disabled) {
      this.tabs = this.tabs.map((tab) => {
        tab.open = false;
        return tab;
      });
      this.tabs[tabIndex].open = true;
      this.onChange.emit({ idx: tabIndex });
    }
  }

  render() {
    return (
      <div class="c-tabs">
        <div role="tablist" class="c-tabs">
          <div class="c-tabs__nav">
            <div class="c-tabs__headings">
              {this.tabs.map((tab, i: number) => {
                const openClass = tab.open ? 'c-tab-heading--active' : '';
                const typeClass = tab.type ? `c-tab-heading--${tab.type}` : '';

                return (
                  <button
                    role="tab"
                    disabled={tab.disabled}
                    class={`c-tab-heading ${typeClass} ${openClass}`}
                    onClick={() => this.openTab(i)}>
                    {tab.header}
                  </button>
                );
              })}
            </div>
          </div>
          <slot />
        </div>
      </div>
    );
  }
}
