import { Component, Prop, Element, Method } from '@stencil/core';
import '@blaze/atoms';

@Component({
  tag: 'blaze-login',
})
export class Login {
  @Element()
  el: HTMLElement;

  @Prop()
  usernameLabel: string = 'Username';

  @Prop()
  usernameType: string = 'text';

  @Prop()
  usernameAutocomplete: string;

  @Prop()
  usernameHint: string;

  @Prop()
  passwordLabel: string = 'Password';

  @Prop()
  passwordHint: string;

  @Prop()
  rememberMe: boolean = false;

  @Prop()
  rememberMeLabel: string = 'Keep me signed in';

  @Method()
  async getDetails() {
    const username: HTMLInputElement = this.el.querySelector('.username');
    const password: HTMLInputElement = this.el.querySelector('.password');
    const rememberMe: boolean = await this.el.querySelector('blaze-toggle').isToggled();

    return {
      username: username.value,
      password: password.value,
      rememberMe,
    };
  }

  autoCompleteEmail(e) {
    if (this.usernameType === 'email' && e.target.value && !e.target.value.includes('@')) {
      e.target.value = e.target.value + this.usernameAutocomplete;
    }
  }

  render() {
    return (
      <fieldset class="o-fieldset c-list c-list--inline c-list--unstyled">
        <label class="c-label o-form-element">
          {this.usernameLabel}
          <input
            type={this.usernameType}
            class="c-field c-field--label username"
            onBlur={(e) => this.autoCompleteEmail(e)}
          />
          {this.usernameHint && (
            <div role="tooltip" class="c-hint">
              {this.usernameHint}
            </div>
          )}
        </label>
        <label class="c-label o-form-element">
          {this.passwordLabel}
          <input type="password" class="c-field c-field--label password" />
          {this.passwordHint && (
            <div role="tooltip" class="c-hint">
              {this.passwordHint}
            </div>
          )}
        </label>
        {this.rememberMe && (
          <div class="o-form-element">
            <blaze-toggle type="brand">{this.rememberMeLabel}</blaze-toggle>
          </div>
        )}
      </fieldset>
    );
  }
}
