import { h, Component, Prop } from '@stencil/core';

@Component({
  tag: 'objects-containers',
})
export class ObjectsContainers {
  @Prop()
  name: string;

  render() {
    return (
      <page-template name={this.name}>
        <p class="c-paragraph">Containers provide media query screen width restrictions on your content.</p>

        <blaze-demo
          language="html"
          demo={false}
          code={`<div class="o-container o-container--xsmall"></div>
<div class="o-container o-container--small"></div>
<div class="o-container o-container--medium"></div>
<div class="o-container o-container--large"></div>
<div class="o-container o-container--xlarge"></div>
<div class="o-container o-container--super"></div>`}
        />

        <h2 id="sizes" class="c-heading u-xlarge">
          Container sizes
        </h2>
        <p class="c-paragraph">Containers work off the screen size variables:</p>
        <blaze-demo
          language="scss"
          demo={false}
          code={`$screen-width-xsmall:  20em;
$screen-width-small:   30em;
$screen-width-medium:  48em;
$screen-width-large:   64em;
$screen-width-xlarge:  78em;
$screen-width-super:   116em;`}
        />

        <h2 id="responsiveness" class="c-heading">
          Responsiveness
        </h2>
        <p class="c-paragraph">
          Each container can also be applied at certain screen sizes.{' '}
          <code class="u-code">.o-container--small@large</code> for example will restrict the horizontal width to small
          when the viewport has a large or more width. Each size container has an xsmall, small, medium, large, xlarge
          and super responsive suffix.
        </p>

        <h3 id="xsmall" class="c-heading u-large u-text--mono">
          .o-container--xsmall
        </h3>
        <div class="o-container o-container--xsmall">
          <p class="c-paragraph">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>
        </div>

        <h3 id="small" class="c-heading u-large u-text--mono">
          .o-container--small
        </h3>
        <div class="o-container o-container--small">
          <p class="c-paragraph">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>
        </div>

        <h3 id="medium" class="c-heading u-large u-text--mono">
          .o-container--medium
        </h3>
        <div class="o-container o-container--medium">
          <p class="c-paragraph">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>
        </div>

        <h3 id="large" class="c-heading u-large u-text--mono">
          .o-container--large
        </h3>
        <div class="o-container o-container--large">
          <p class="c-paragraph">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>
        </div>

        <h3 id="xlarge" class="c-heading u-large u-text--mono">
          .o-container--xlarge
        </h3>
        <div class="o-container o-container--xlarge">
          <p class="c-paragraph">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>
        </div>

        <h3 id="super" class="c-heading u-text--mono">
          .o-container--super
        </h3>
        <div class="o-container o-container--super">
          <p class="c-paragraph">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>
        </div>
      </page-template>
    );
  }
}
