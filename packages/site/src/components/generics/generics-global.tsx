import { h, Component, Prop } from '@stencil/core';

@Component({
  tag: 'generics-global',
})
export class GenericsGlobal {
  @Prop()
  name: string;

  render() {
    return (
      <page-template name={this.name}>
        <p class="c-paragraph">
          Almost all of Blaze's styles build on top of <span class="u-text--loud">generic.global.css</span>. It's a tiny
          file that handles box-sizing and body margin.
        </p>

        <p class="c-paragraph">
          The rest of Blaze takes cues from{' '}
          <a class="c-link" href="https://necolas.github.io/normalize.css/">
            Normalize.css
          </a>
          - A modern, HTML5-ready alternative to CSS resets.
        </p>
        <blockquote class="u-blockquote">
          <div class="u-blockquote__body">
            Normalize.css makes browsers render all elements more consistently and in line with modern standards. It
            precisely targets only the styles that need normalizing.
          </div>
          <div class="u-blockquote__footer">
            <a class="c-link" href="https://necolas.github.io/normalize.css">
              https://necolas.github.io/normalize.css
            </a>
          </div>
        </blockquote>
      </page-template>
    );
  }
}
