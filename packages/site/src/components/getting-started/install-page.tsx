import { h, Component, Prop, State } from '@stencil/core';

@Component({
  tag: 'install-page',
})
export class InstallPage {
  @Prop()
  name: string;

  @State()
  cssVersion: string;

  @State()
  atomsVersion: string;

  async componentDidLoad() {
    try {
      const corsAnywhere = 'https://cors-anywhere.herokuapp.com/https://registry.npmjs.org/@blaze';
      const cssRes = await fetch(`${corsAnywhere}/css`, {
        mode: 'cors',
      });
      const atomsRes = await fetch(`${corsAnywhere}/atoms`, {
        mode: 'cors',
      });

      const cssData = await cssRes.json();
      const atomsData = await atomsRes.json();

      this.cssVersion = cssData['dist-tags'].latest;
      this.atomsVersion = atomsData['dist-tags'].latest;
    } catch {
      this.cssVersion = 'x.x.x';
      this.atomsVersion = 'x.x.x';
    }
  }

  render() {
    return (
      <page-template name={this.name}>
        <p class="c-paragraph">The easiest way to use the toolkit is via CDN.</p>

        <h2 class="c-heading">CSS</h2>
        <h2 class="c-heading u-xlarge">Installing the CSS</h2>

        <p class="c-paragraph">
          <a class="c-link" href="https://unpkg.com/@blaze/css/dist/blaze/blaze.css">
            blaze.css
          </a>{' '}
          <span class="u-text--loud">contains everything you need</span>. Link to it by adding the following to your{' '}
          <code class="u-code">{`<head></head>`}</code>.
        </p>

        <blaze-demo
          demo={false}
          language="html"
          code={`<link rel="stylesheet" href="https://unpkg.com/@blaze/css@x.x.x/dist/blaze/blaze.css">`}
        />

        <p class="c-paragraph">
          {this.cssVersion && (
            <span>
              <strong>{this.cssVersion}</strong> is the current version
            </span>
          )}
        </p>

        <p class="c-paragraph">Specifying a version is optional but it prevents against breaking changes.</p>

        <h2 id="applying-styles" class="c-heading u-xlarge">
          How to start applying styles
        </h2>

        <p class="c-paragraph">
          We've designed the toolkit not to interfere with others or your own styles, hence Blaze won't automatically do
          anything to your site.
        </p>

        <p class="c-paragraph">
          The following won't change by simply linking to blaze.css like it would with others such as Bootstrap or
          Foundation:
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
          This means you have to add classes to each part of your site where you want Blaze to apply. Take a look at the
          documentation for our objects, components, typography etc. and you'll see how intuitive it is to use.
        </p>

        <h2 class="c-heading">JavaScript</h2>
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
          code={`<script src="https://unpkg.com/@blaze/atoms@x.x.x/dist/blaze-atoms.js"></script>`}
        />

        <p class="c-paragraph">
          {this.atomsVersion && (
            <span>
              <strong>{this.atomsVersion}</strong> is the current version
            </span>
          )}
        </p>

        <p class="c-paragraph">That's it! Start using the components in your HTML.</p>

        <h2 id="node-modules" class="c-heading u-xlarge">
          Node Modules
        </h2>

        <p class="c-paragraph">
          Run <code class="u-code">npm install @blaze/atoms --save</code>.
        </p>

        <p class="c-paragraph">Put a script tag similar to this:</p>
        <blaze-demo
          demo={false}
          language="html"
          code={`<script src="node_modules/@blaze/atoms/dist/blaze-atoms.js"></script>`}
        />
        <p class="c-paragraph">
          in the head of your index.html Then you can use the element anywhere in your template, JSX, html etc.
        </p>

        <h2 id="stencil" class="c-heading u-xlarge">
          In a Stencil App
        </h2>
        <p class="c-paragraph">
          Run <code class="u-code">npm install @blaze/atoms --save</code>.
        </p>

        <p class="c-paragraph">Add an import:</p>

        <blaze-demo demo={false} language="js" code={`import @blaze/atoms;`} />
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
      </page-template>
    );
  }
}
