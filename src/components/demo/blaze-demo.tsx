import { h, Component, Prop, State } from '@stencil/core';

declare const hljs: any;

@Component({
  tag: 'blaze-demo',
})
export class Demo {
  codeRef: any;

  @Prop()
  classes: string = '';

  @Prop()
  code: string;

  @Prop()
  language: string = '';

  @Prop()
  demo: boolean = true;

  @State()
  markup: string;

  componentWillLoad() {
    this.markup = this.code;
  }

  updateDemo(e) {
    this.markup = e.target.innerText;
  }

  highlight() {
    if (typeof hljs !== 'undefined') {
      hljs.highlightElement(this.codeRef);
    }
  }

  componentDidUpdate() {
    this.highlight();
  }

  componentDidLoad() {
    this.highlight();
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
            ref={(ref) => (this.codeRef = ref)}
            aria-hidden
            tabindex="-1"
            class={`u-code u-code--multiline ${this.language}`}
            contenteditable={this.demo}
            onBlur={(e) => this.updateDemo(e)}
          >
            {this.markup}
          </code>
        </pre>
      </div>,
    ];
  }
}
