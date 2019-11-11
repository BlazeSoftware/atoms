import { h, Component, Element, Prop, State } from '@stencil/core';

declare const hljs: any;

@Component({
  tag: 'blaze-demo',
})
export class Demo {
  @Element()
  el: HTMLElement;

  @Prop()
  classes: string;

  @Prop()
  code: string;

  @Prop()
  language: string = '';

  @Prop()
  demo: boolean = true;

  @State()
  markup: string;

  componentDidLoad() {
    this.markup = this.code;
  }

  updateDemo(e) {
    this.markup = e.target.innerText;
  }

  componentDidUpdate() {
    if (typeof hljs !== 'undefined') {
      const codeEl = this.el.querySelector('code');
      hljs.highlightBlock(codeEl);
    }
  }

  render() {
    return [
      this.demo && (
        <div
          aria-label="Demo component"
          class={`demo-markup-source u-letter-box-small ${this.classes}`}
          innerHTML={this.markup}
        />
      ),
      <div class="u-letter-box-small">
        <pre class="u-pre">
          <code
            aria-hidden
            tabindex="-1"
            class={`u-code u-code--multiline ${this.language}`}
            contenteditable={this.demo}
            onBlur={(e) => this.updateDemo(e)}>
            {this.markup}
          </code>
        </pre>
      </div>,
    ];
  }
}
