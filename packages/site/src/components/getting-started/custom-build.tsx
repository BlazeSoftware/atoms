import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'custom-build',
})
export class CustomBuild {
  @Prop()
  name: string;

  card({ heading, subheading, body }) {
    return (
      <div class="c-card u-highest">
        <header class="c-card__header">
          <h2 class="c-heading">
            {heading}
            <div class="c-heading__sub">{subheading}</div>
          </h2>
        </header>
        <div class="c-card__body">{body}</div>
      </div>
    );
  }

  render() {
    return (
      <page-template name={this.name}>
        <p slot="intro" class="c-paragraph">
          You may want to theme or override so much of Blaze that you should really build a customised version. The best
          approach is to grab the code from GitHub, change the variables and mixins and build the toolkit yourself.
        </p>

        <div class="o-grid o-grid--wrap o-grid--top">
          <div class="o-grid__cell o-grid__cell--width-100 o-grid__cell--width-33@large u-letter-box-small">
            {this.card({
              heading: 'Step 1',
              subheading: 'Get Blaze',
              body: [
                <p class="c-paragraph">
                  Clone{' '}
                  <a class="c-link" href="https://github.com/BlazeUI/blaze">
                    the git repo:
                  </a>
                </p>,
                <p class="c-paragraph">
                  <blaze-demo language="bash" demo={false} code={`git clone https://github.com/BlazeUI/blaze.git`} />
                </p>,
              ],
            })}
          </div>

          <div class="o-grid__cell o-grid__cell--width-100 o-grid__cell--width-33@large u-letter-box-small">
            {this.card({
              heading: 'Step 2',
              subheading: 'Install',
              body: [
                <p class="c-paragraph">Install node modules per folder:</p>,
                <p class="c-paragraph">
                  <blaze-demo language="bash" demo={false} code={`cd scss && npm i gulp -g && npm i`} />
                </p>,
              ],
            })}
          </div>

          <div class="o-grid__cell o-grid__cell--width-100 o-grid__cell--width-33@large u-letter-box-small">
            {this.card({
              heading: 'Step 3',
              subheading: 'Install',
              body: [
                <p class="c-paragraph">To build Blaze run:</p>,
                <p class="c-paragraph">
                  <blaze-demo language="bash" demo={false} code={`npm run build`} />
                </p>,
              ],
            })}
          </div>

          <div class="o-grid__cell o-grid__cell--width-100 o-grid__cell--width-100@large u-letter-box-small">
            {this.card({
              heading: 'Ready to go!',
              subheading: 'Install',
              body: [
                <p class="c-paragraph">
                  The output of your changes will be available in <span class="u-text--loud">/dist</span>
                </p>,
                <p class="c-paragraph">
                  If you want to build the solution every time you make a change{' '}
                  <code class="u-code">npm run watch</code> will watch the appropriate files.
                </p>,
              ],
            })}
          </div>
        </div>
      </page-template>
    );
  }
}
