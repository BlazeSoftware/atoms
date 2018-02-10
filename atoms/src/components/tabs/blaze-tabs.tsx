import { Component, State, Prop, Method, Element } from '@stencil/core';

@Component({
  tag: 'blaze-tabs'
})
export class Tabs {
  @Element() elem: HTMLElement;
  @Prop() type: string;
  @State() tabs: any[];

  componentWillLoad() {
    this.tabs = Array.from(this.elem.querySelectorAll('blaze-tab'));
  }

  @Method()
  currentTab() {
    return this.tabs.findIndex(tab => tab.open)
  }

  @Method()
  openTab(tabIndex: number) {
    if (!this.tabs[tabIndex].disabled) {

      this.tabs = this.tabs.map(tab => {
        tab.open = false;
        return tab;
      });
      this.tabs[tabIndex].open = true;
    }
  }

  render() {
    const typeClass = this.type ? `c-tabs--${this.type}` : '';

    return (
      <div class={`c-tabs ${typeClass}`}>
        <div class="c-tabs__nav">
          <div class="c-tabs__headings">
            {
              this.tabs.map((tab, i: number) => {
                const disabledClass = tab.disabled ? 'c-tab-heading--disabled' : '';
                const openClass = tab.open ? 'c-tab-heading--active' : '';

                return (
                  <div class={`c-tab-heading ${disabledClass} ${openClass}`} onClick={() => this.openTab(i)}>
                    {tab.header}
                  </div>
                )
              })
            }
          </div>
        </div>
        <slot />
      </div>
    );
  }
}
