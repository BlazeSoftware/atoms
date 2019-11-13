import { h, Component, Prop } from '@stencil/core';

@Component({
  tag: 'example-login',
})
export class ExampleLogin {
  @Prop()
  name: string;

  render() {
    return (
      <page-template name={this.name}>
        <blaze-demo
          language="html"
          code={`<form class="o-container o-container--xsmall c-card u-high">
<header class="c-card__header">
  <h2 class="c-heading">
    Login
    <div class="c-heading__sub">Existing users</div>
  </h2>
</header>
  <div class="c-card__body">
    <div class="o-form-element">
      <label class="c-label">
        Email:
        <input class="c-field c-field--label" type="email" placeholder="your@email.com" />
        <div role="tooltip" class="c-hint">
          The email used to register the account
        </div>
      </label>
    </div>
    <label class="o-form-element c-label">
      Password:
      <input class="c-field c-field--label" type="password" />
    </label>
    <div class="o-form-element">
      <label class="c-toggle c-toggle--success">
        Remember me?
        <input type="checkbox" checked />
        <div class="c-toggle__track">
          <div class="c-toggle__handle"></div>
        </div>
      </label>
    </div>
  </div>
  <footer class="c-card__footer">
    <button type="button" class="c-button c-button--brand c-button--block">
      Login
    </button>
  </footer>
</form>`}
        />
      </page-template>
    );
  }
}
