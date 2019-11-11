import { h, Component, Prop } from '@stencil/core';

@Component({
  tag: 'custom-build',
})
export class CustomBuild {
  @Prop()
  name: string;

  card({ heading, subheading, body }) {
    return (
      <div class="u-letter-box-small">
        <div class="c-card">
          <header class="c-card__header">
            <h2 class="c-heading">
              {heading}
              <div class="c-heading__sub">{subheading}</div>
            </h2>
          </header>
          <div class="c-card__body">{body}</div>
        </div>
      </div>
    );
  }

  render() {
    return (
      <page-template name={this.name}>
        <p class="c-paragraph">
          You may want to theme or override so much of Blaze that you should really build a customised version. The best
          approach is to grab the code from GitHub, change the variables and mixins and build the toolkit yourself.
        </p>

        {[
          {
            heading: 'Step 1',
            subheading: 'Download',
            body: [
              <p class="c-paragraph">
                Clone{' '}
                <a class="c-link" href="https://github.com/BlazeSoftware/blaze">
                  the git repo:
                </a>
              </p>,
              <p class="c-paragraph">
                <blaze-demo
                  language="bash"
                  demo={false}
                  code={`git clone https://github.com/BlazeSoftware/blaze.git`}
                />
              </p>,
            ],
          },
          {
            heading: 'Step 2',
            subheading: 'Install',
            body: [
              <p class="c-paragraph">Install all node modules:</p>,
              <p class="c-paragraph">
                <blaze-demo language="bash" demo={false} code={`npm i`} />
              </p>,
            ],
          },
          {
            heading: 'Step 3',
            subheading: 'Develop',
            body: [
              <p class="c-paragraph">Each pacakge should be developed independantly.</p>,
              <p class="c-paragraph">
                You can make changes to the CSS, Atoms and Site separately using the following commands:
              </p>,
              <p class="c-paragraph">
                <blaze-demo
                  language="bash"
                  demo={false}
                  code={`npm run scss.dev
npm run atoms.dev
npm run site.dev`}
                />
              </p>,
              <p class="c-paragraph">
                There is a demo output per package, that will be served on localhost and will update automatically as
                changes are detected.
              </p>,
            ],
          },
          {
            heading: 'Step 4',
            subheading: 'Test',
            body: [
              <p class="c-paragraph">Every component should have tests.</p>,
              <p class="c-paragraph">The CSS is linted and the Atoms are unit and snapshot tested.</p>,
              <p class="c-paragraph">
                <blaze-demo
                  language="bash"
                  demo={false}
                  code={`npm run scss.test
npm run atoms.test`}
                />
              </p>,
            ],
          },
          {
            heading: 'Step 5',
            subheading: 'Commit',
            body: [
              <p class="c-paragraph">
                Every change that is committed should have a committ message that follows the{' '}
                <a class="c-link" href="https://www.conventionalcommits.org/">
                  Conventional Commits
                </a>{' '}
                specification.
              </p>,
              <p class="c-paragraph">
                To help construct good commit messages run the following command which will take you through a command
                line prompt which will construct the message based on your answers.
              </p>,
              <p class="c-paragraph">
                <blaze-demo language="bash" demo={false} code={`npm run commit`} />
              </p>,
            ],
          },
        ].map((step) => this.card(step))}
      </page-template>
    );
  }
}
