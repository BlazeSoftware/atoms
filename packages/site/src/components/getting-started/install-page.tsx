import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'install-page',
})
export class InstallPage {
  @Prop()
  name: string;

  render() {
    return (
      <page-template name={this.name}>
        <p slot="intro" class="c-paragraph">
          The easiest way to use the toolkit is via CDN.
        </p>

        <blaze-tabs>
          <blaze-tab header="CSS" open>
            <h2 class="c-heading u-xlarge">Installing the CSS</h2>

            <p class="c-paragraph">
              <a class="c-link" href="https://unpkg.com/blaze-css/dist/blaze.min.css">
                blaze.min.css
              </a>{' '}
              <span class="u-text--loud">contains everything you need</span>. Link to it by adding the following to your{' '}
              <code class="u-code">{`<head></head>`}</code>.
            </p>

            <blaze-demo
              demo={false}
              language="html"
              code={`<link rel="stylesheet" href="https://unpkg.com/blaze-css@x.x.x/dist/blaze.min.css">`}
            />

            <p class="c-paragraph">
              The x.x.x is the specific version of the library, specifying a version is optional but it prevents against
              breaking changes.
            </p>

            <h2 id="modules" class="c-heading u-xlarge">
              Modules
            </h2>

            <p class="c-paragraph">
              <a class="c-link" href="https://unpkg.com/blaze-css/dist/">
                Each module is also available via CDN
              </a>{' '}
              in-case you only want bits and pieces of Blaze and not the whole toolkit.
            </p>

            <blaze-demo
              demo={false}
              language="html"
              code={`<link rel="stylesheet" href="https://unpkg.com/blaze-css/dist/generics.global.min.css">
<link rel="stylesheet" href="https://unpkg.com/blaze-css/dist/objects.grid.min.css">
<link rel="stylesheet" href="https://unpkg.com/blaze-css/dist/components.typography.min.css">
<link rel="stylesheet" href="https://unpkg.com/blaze-css/dist/components.buttons.min.css">
...etc...`}
            />

            <p class="c-paragraph">
              <a href="https://unpkg.com/blaze-css/dist/" class="c-link">
                See all modules available on the CDN
              </a>
            </p>

            <h2 id="applying-styles" class="c-heading u-xlarge">
              How to start applying styles
            </h2>

            <p class="c-paragraph">
              We've designed the toolkit not to interfere with others or your own styles, hence Blaze won't
              automatically do anything to your site.
            </p>

            <p class="c-paragraph">
              The following won't change by simply linking to blaze.min.css like it would with others such as Bootstrap
              or Foundation:
            </p>

            <blaze-demo demo={false} language="html" code={`<button type="button">Button</button>`} />

            <p class="c-paragraph">
              <button type="button">Button</button>
            </p>

            <p class="c-paragraph">You need to apply our button classes:</p>

            <blaze-demo demo={false} language="html" code={`<button class="c-button" type="button">Button</button>`} />

            <p class="c-paragraph">
              <button class="c-button" type="button">
                Button
              </button>
            </p>

            <p class="c-paragraph">
              This means you have to add classes to each part of your site where you want Blaze to apply. Take a look at
              the documentation for our objects, components, typography etc. and you'll see how intuitive it is to use.
            </p>
          </blaze-tab>
          <blaze-tab header="JavaScript">
            <h2 class="c-heading u-xlarge">Installing the JavaScript Components</h2>

            <h2 id="script-tag" class="c-heading u-xlarge">
              Script tag
            </h2>

            <p class="c-paragraph">
              Link to it by adding the following to your <code class="u-code">{`<head></head>`}</code>.
            </p>

            <blaze-demo
              demo={false}
              language="html"
              code={`<script src="https://unpkg.com/blaze-atoms@x.x.x/dist/blaze-atoms.js"></script>`}
            />

            <p class="c-paragraph">
              The x.x.x is the specific version of the library, specifying a version is optional but it prevents against
              breaking changes.
            </p>

            <p class="c-paragraph">That's it! Start using the components in your HTML.</p>

            <h2 id="node-modules" class="c-heading u-xlarge">
              Node Modules
            </h2>

            <p class="c-paragraph">
              Run <code class="u-code">npm install blaze-atoms --save</code>.
            </p>

            <p class="c-paragraph">Put a script tag similar to this:</p>
            <blaze-demo
              demo={false}
              language="html"
              code={`<script src="node_modules/blaze-atoms/dist/blaze-atoms.js"></script>`}
            />
            <p class="c-paragraph">
              in the head of your index.html Then you can use the element anywhere in your template, JSX, html etc.
            </p>

            <h2 id="stencil" class="c-heading u-xlarge">
              In a Stencil App
            </h2>
            <p class="c-paragraph">
              Run <code class="u-code">npm install blaze-atoms --save</code>.
            </p>

            <p class="c-paragraph">Add an import:</p>

            <blaze-demo demo={false} language="js" code={`import blaze-atoms;`} />
            <p class="c-paragraph">and you can use the elements anywhere in your template, JSX, html etc.</p>

            <h2 id="integrating-framework" class="c-heading u-xlarge">
              Integrating with a Framework
            </h2>

            <p class="c-paragraph">
              Blaze uses{' '}
              <a class="c-link" href="https://stenciljs.com">
                Stencil
              </a>{' '}
              to compile our components into Web Components. And since they can be used within frameworks or in standard
              HTML websites the best resource to read is the{' '}
              <a class="c-link" href="https://stenciljs.com/docs/overview">
                Stencil documentation
              </a>{' '}
              regarding framework integration.
            </p>
          </blaze-tab>
        </blaze-tabs>
      </page-template>
    );
  }
}
