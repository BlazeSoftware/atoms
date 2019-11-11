import { h, Component, Prop } from '@stencil/core';

@Component({
  tag: 'components-inputs',
})
export class ComponentsInputs {
  @Prop()
  name: string;

  render() {
    return (
      <page-template name={this.name}>
        <p class="c-paragraph">From single input controls like text boxes to full form patterns.</p>

        <h2 id="text-input" class="c-heading u-xlarge">
          Text Input
        </h2>

        <blaze-demo language="html" code={`<input class="c-field" placeholder="Type in here..." type="text" />`} />
        <blaze-demo language="html" code={`<textarea class="c-field" placeholder="Type in here..."></textarea>`} />
        <blaze-demo
          language="html"
          code={`<select class="c-field">
  <option>Choose me...</option>
</select>`}
        />

        <h2 id="colors" class="c-heading u-xlarge">
          Colors
        </h2>

        <blaze-demo
          language="html"
          code={`<input class="c-field c-field--success" placeholder=".c-field--success" type="text">`}
        />
        <blaze-demo
          language="html"
          code={`<input class="c-field c-field--error" placeholder=".c-field--error" type="text">`}
        />
        <blaze-demo language="html" code={`<input class="c-field" disabled placeholder="disabled" type="text">`} />

        <h2 id="icons" class="c-heading u-xlarge">
          Icons
        </h2>

        <blaze-demo
          language="html"
          code={`<div class="o-field o-field--icon-left">
  <i class="far fa-calendar-alt c-icon"></i>
  <input class="c-field" type="text">
</div>`}
        />

        <blaze-demo
          language="html"
          code={`<div class="o-field o-field--icon-right">
  <input class="c-field" type="text">
  <i class="fas fa-search c-icon"></i>
</div>`}
        />

        <blaze-demo
          language="html"
          code={`<div class="o-field o-field--icon-left o-field--icon-right">
  <i class="fas fa-user c-icon u-color-brand"></i>
  <input class="c-field c-field--success" type="text">
  <i class="fas fa-check c-icon u-color-green"></i>
</div>`}
        />

        <h2 id="size" class="c-heading u-xlarge">
          Sizes
        </h2>

        <blaze-demo language="html" code={`<input class="c-field u-xsmall" placeholder=".u-xsmall" type="text">`} />
        <blaze-demo language="html" code={`<input class="c-field u-small" placeholder=".u-small" type="text">`} />
        <blaze-demo language="html" code={`<input class="c-field u-medium" placeholder=".u-medium" type="text">`} />
        <blaze-demo language="html" code={`<input class="c-field u-large" placeholder=".u-large" type="text">`} />
        <blaze-demo language="html" code={`<input class="c-field u-xlarge" placeholder=".u-xlarge" type="text">`} />
        <blaze-demo language="html" code={`<input class="c-field u-super" placeholder=".u-super" type="text">`} />

        <h2 id="input-groups" class="c-heading u-xlarge">
          Input Groups
        </h2>

        <h3 id="input-group-inline" class="c-heading u-large">
          Inline
        </h3>

        <blaze-demo
          language="html"
          code={`<div class="c-input-group">
  <div class="o-field">
    <input class="c-field" placeholder=".c-input-group">
  </div>
  <div class="o-field">
    <input class="c-field" placeholder=".c-input-group">
  </div>
  <div class="o-field">
    <input class="c-field" placeholder=".c-input-group">
  </div>
</div>`}
        />

        <h3 id="input-group-fixed-width" class="c-heading u-large">
          Fixed Width
        </h3>

        <p class="c-paragraph">
          Use <code class="u-code">.o-field--fixed</code> to fix the width of the field without it breaking the layout
          of the group.
        </p>
        <blaze-demo
          language="html"
          code={`<div class="c-input-group">
  <div class="o-field">
    <input class="c-field" placeholder=".c-input-group">
  </div>
  <div class="o-field o-field--fixed" style="width:50%">
    <input class="c-field" placeholder=".c-input-group">
  </div>
  <div class="o-field">
    <input class="c-field" placeholder=".c-input-group">
  </div>
</div>`}
        />

        <h3 id="input-group-stacked" class="c-heading u-large">
          Stacked
        </h3>

        <blaze-demo
          language="html"
          code={`<div class="c-input-group c-input-group--stacked">
  <div class="o-field">
    <input class="c-field" placeholder=".c-input-group">
  </div>
  <div class="o-field">
    <input class="c-field" placeholder=".c-input-group">
  </div>
  <div class="o-field">
    <input class="c-field" placeholder=".c-input-group">
  </div>
</div>`}
        />

        <h3 id="input-group-buttons" class="c-heading u-large">
          Buttons
        </h3>

        <blaze-demo
          language="html"
          code={`<div class="c-input-group">
  <div class="o-field">
    <input class="c-field" placeholder=".c-input-group">
  </div>
  <button class="c-button c-button--brand">Action</button>
</div>`}
        />

        <blaze-demo
          language="html"
          code={`<div class="c-input-group">
  <button class="c-button c-button--brand">Action</button>
  <div class="o-field">
    <input class="c-field" placeholder=".c-input-group">
  </div>
</div>`}
        />

        <blaze-demo
          language="html"
          code={`<div class="c-input-group">
  <button class="c-button c-button--brand">Action</button>
  <div class="o-field">
    <input class="c-field" placeholder=".c-input-group">
  </div>
  <button class="c-button c-button--brand">Action</button>
</div>`}
        />

        <h3 id="input-group-rounded" class="c-heading u-large">
          Rounded
        </h3>

        <blaze-demo
          language="html"
          code={`<div class="c-input-group c-input-group--rounded">
  <div class="o-field">
    <input class="c-field" placeholder=".c-input-group">
  </div>
  <div class="o-field">
    <input class="c-field" placeholder=".c-input-group">
  </div>
  <div class="o-field">
    <input class="c-field" placeholder=".c-input-group">
  </div>
</div>`}
        />

        <blaze-demo
          language="html"
          code={`<div class="c-input-group c-input-group--rounded">
  <button class="c-button c-button--brand">Action</button>
  <div class="o-field">
    <input class="c-field" placeholder=".c-input-group">
  </div>
  <button class="c-button c-button--brand">Action</button>
</div>`}
        />

        <blaze-demo
          language="html"
          code={`<div class="c-input-group c-input-group--rounded-left">
  <button class="c-button c-button--brand">Action</button>
  <div class="o-field">
    <input class="c-field" placeholder=".c-input-group">
  </div>
  <button class="c-button c-button--brand">Action</button>
</div>`}
        />

        <blaze-demo
          language="html"
          code={`<div class="c-input-group c-input-group--rounded-right">
  <button class="c-button c-button--brand">Action</button>
  <div class="o-field">
    <input class="c-field" placeholder=".c-input-group">
  </div>
  <button class="c-button c-button--brand">Action</button>
</div>`}
        />

        <h2 id="checkboxes-radios" class="c-heading u-xlarge">
          Checkboxes and Radios
        </h2>

        <p class="c-paragraph">
          Place your checkboxes and radios within labels and append the <code class="u-code">.c-field--choice</code>{' '}
          modifier class.
        </p>

        <blaze-demo
          language="html"
          code={`<label class="c-field c-field--choice">
  <input type="checkbox"> Tick the box
</label>
<label class="c-field c-field--choice">
  <input name="radios" type="radio" checked> Yes
</label>
<label class="c-field c-field--choice">
  <input name="radios" type="radio"> No
</label>`}
        />

        <h2 id="fieldsets-legends" class="c-heading u-xlarge">
          Fieldsets and Legends
        </h2>

        <p class="c-paragraph">
          Use <code class="u-code">.fieldset</code> and <code class="u-code">.fieldset__legend</code> classes to apply
          Blaze's styles to ensure consistent fieldset behaviours.
        </p>

        <blaze-demo
          language="html"
          code={`<fieldset class="o-fieldset">
  <legend class="o-fieldset__legend">A group of controls</legend>
  <label class="c-field c-field--choice">
    <input type="radio" name="optionsRadios">
    Option one
  </label>
  <label class="c-field c-field--choice">
    <input type="radio" name="optionsRadios">
    Option two
  </label>
  <label class="c-field c-field--choice">
    <input type="radio" name="optionsRadios">
    Option three
  </label>
  <label class="c-field c-field--choice">
    <input type="radio" name="optionsRadios">
    Option four
  </label>
</fieldset>`}
        />

        <h2 id="disabled-fieldset" class="c-heading u-xlarge">
          Disabled Fieldset
        </h2>

        <p class="c-paragraph">
          Disabling a fieldset will disable all controls within it and Blaze will apply the disabled styling.
        </p>

        <blaze-demo
          language="html"
          code={`<fieldset class="o-fieldset" disabled>
  <legend class="o-fieldset__legend">A group of controls</legend>
  <label class="c-field c-field--choice">
    <input type="radio" name="optionsRadios">
    Option one
  </label>
  <label class="c-field c-field--choice">
    <input type="radio" name="optionsRadios">
    Option two
  </label>
  <label class="c-field c-field--choice">
    <input type="radio" name="optionsRadios">
    Option three
  </label>
  <label class="c-field c-field--choice">
    <input type="radio" name="optionsRadios">
    Option four
  </label>
</fieldset>`}
        />

        <h2 id="labels-forms-elements" class="c-heading u-xlarge">
          Labels and Form Elements
        </h2>

        <blaze-demo
          language="html"
          code={`<div class="o-form-element">
  <label class="c-label" for="nickname">Nickname:</label>
  <input id="nickname" placeholder="Nickname" class="c-field">
</div>
<label class="c-label o-form-element">
  Real name:
  <input class="c-field c-field--label" placeholder="Real name">
</label>`}
        />

        <h2 id="hints" class="c-heading u-xlarge">
          Hints
        </h2>

        <blaze-demo
          language="html"
          code={`<label class="c-label">
  Username:
  <input class="c-field c-field--label">
  <div role="tooltip" class="c-hint">Make up a username or use your email address</div>
</label>`}
        />

        <p class="c-paragraph">
          <code class="u-code">.c-hint--static</code> will make the hint visible at all times.
        </p>

        <h2 id="forms" class="c-heading u-xlarge">
          Forms
        </h2>

        <p class="c-paragraph">
          Blaze has no classes for forms, rather it relies on styling the child blocks of forms; fieldsets, legends,
          labels and fields.
        </p>

        <blaze-demo
          language="html"
          code={`<fieldset class="o-fieldset">
  <legend class="o-fieldset__legend">And all together now!</legend>
  <div class="o-form-element">
    <label class="c-label" for="houseno">Address line 1:</label>
    <input id="houseno" placeholder="House name or number" class="c-field">
  </div>
  <label class="c-label o-form-element">
    Postcode:
    <input class="c-field c-field--label" placeholder="e.g. AB12 3CD">
    <div role="tooltip" class="c-hint">e.g. AB12 3CD</div>
  </label>
  <label class="c-label c-field c-field--choice o-form-element">
    <input type="checkbox">
    Send me spam
  </label>
  <fieldset class="o-fieldset c-list c-list--inline c-list--unstyled">
    <legend class="o-fieldset__legend">Account login:</legend>
    <label class="c-label c-field c-field--choice c-list__item">
      <input type="radio" name="account" checked>
      New user
    </label>
  <label class="c-label c-field c-field--choice c-list__item">
    <input type="radio" name="account">
    Existing user
  </label>
  <div class="o-form-element">
    <label class="c-toggle">
      Activate lockdown?
      <input type="checkbox" checked>
      <div class="c-toggle__track">
        <div class="c-toggle__handle"></div>
      </div>
    </label>
  </div>
</fieldset>`}
        />
      </page-template>
    );
  }
}
