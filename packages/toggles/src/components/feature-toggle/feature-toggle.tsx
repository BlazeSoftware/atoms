import { Component, Element, Prop, State } from '@stencil/core';

declare const FeatureToggles: any;

@Component({
  tag: 'feature-toggle',
})
export class FeatureToggle {
  @Element()
  el: HTMLElement;
  contents: any;

  @Prop()
  feature: string = '';

  @Prop()
  variant: string;

  @State()
  visible: boolean = false;

  async getToggle() {
    if (typeof FeatureToggles !== 'undefined') {
      const toggle = this.feature.split('.').reduce((config, prop) => config[prop], FeatureToggles.config);
      this.setVisibility(toggle);
    }
  }

  async setVisibility(toggle: any) {
    switch (typeof toggle) {
      case 'boolean': {
        this.visible = toggle;
        break;
      }
      case 'string': {
        this.visible = toggle === this.variant;
        break;
      }
      case 'function': {
        const toggleReturnVal = await toggle();
        await this.setVisibility(toggleReturnVal);
        break;
      }
      default: {
        this.visible = false;
      }
    }

    this.renderContent();
  }

  componentWillLoad() {
    this.contents = document.createElement('feature-contents');
    Array.from(this.el.childNodes).forEach((n) => this.contents.appendChild(n));

    addEventListener('featureToggleChange', () => this.getToggle());
    this.getToggle();
  }

  renderContent() {
    try {
      if (this.visible) {
        this.el.appendChild(this.contents);
      } else {
        this.el.removeChild(this.contents);
      }
    } catch {}
  }
}
