import { h, Component } from '@stencil/core';

@Component({
  tag: 'demo-inputs',
})
export class Inputs {
  render() {
    return (
      <section class="u-window-box-super">
        <h2 class="c-heading">Inputs</h2>
        <input class="c-field" placeholder="Textbox" />
        <input class="c-field c-field--error" placeholder="Error" />
        <input class="c-field c-field--success" placeholder="Success" />
        <input class="c-field c-field--success c-field--disabled" placeholder="Disabled" disabled={true} />
        <h3 class="c-heading">Input icons</h3>
        <div class="o-field o-field--icon-left">
          <i aria-hidden class="fas fa-calendar c-icon" />
          <input class="c-field" placeholder="Textbox" />
        </div>
        <div class="o-field o-field--icon-left o-field--icon-right">
          <i aria-hidden class="fas fa-search c-icon" />
          <input class="c-field c-field--error" placeholder="Error" />
          <i aria-hidden class="fas fa-times c-icon" />
        </div>
        <div class="o-field o-field--icon-right">
          <input class="c-field c-field--success" placeholder="Success" />
          <i aria-hidden class="fas fa-check c-icon" />
        </div>
        <div class="o-field o-field--icon-left">
          <i aria-hidden class="fas fa-ban c-icon" />
          <input class="c-field c-field--success c-field--disabled" placeholder="Disabled" disabled={true} />
        </div>
        <h3 class="c-heading">Textarea</h3>
        <textarea class="c-field" placeholder="Textarea" />
        <textarea class="c-field c-field--error" placeholder="Error" />
        <textarea class="c-field c-field--success" placeholder="Success" />
        <textarea class="c-field c-field--disabled" placeholder="Disabled" disabled={true} />
        <h2 class="c-heading">Sizes</h2>
        <input class="c-field" placeholder="Textbox" />
        <input class="c-field u-super" placeholder="super" />
        <input class="c-field u-xlarge" placeholder="xlarge" />
        <input class="c-field u-large" placeholder="large" />
        <input class="c-field u-medium" placeholder="medium" />
        <input class="c-field u-small" placeholder="small" />
        <input class="c-field u-xsmall" placeholder="xsmall" />
        <h3 class="c-heading">Select</h3>
        <select class="c-field">
          <option>First option</option>
          <option>Second option</option>
          <option>Third option</option>
          <option>Fourth option</option>
          <option>Fifth option</option>
        </select>
        <select class="c-field c-field--error">
          <option>Wrong option</option>
        </select>
        <select class="c-field c-field--success">
          <option>Correct option</option>
        </select>
        <select class="c-field" disabled={true}>
          <option>Disabled option</option>
        </select>
        <select multiple class="c-field">
          <option>First option</option>
          <option>Second option</option>
          <option>Third option</option>
          <option>Fourth option</option>
          <option>Fifth option</option>
          <option>Sixth option</option>
          <option>Seventh option</option>
          <option>Eighth option</option>
          <option>Ninth option</option>
          <option>Tenth option</option>
        </select>
        <select class="c-field u-super">
          <option>super</option>
        </select>
        <select class="c-field u-xlarge">
          <option>xlarge</option>
        </select>
        <select class="c-field u-large">
          <option>large</option>
        </select>
        <select class="c-field u-medium">
          <option>medium</option>
        </select>
        <select class="c-field u-small">
          <option>small</option>
        </select>
        <select class="c-field u-xsmall">
          <option>xsmall</option>
        </select>
        <h3 class="c-heading">Checkboxes</h3>
        <label class="c-field c-field--choice">
          <input type="checkbox" /> Wrap your checkboxes in labels
        </label>
        <ul class="c-list c-list--unstyled">
          <li>
            <label class="c-field c-field--choice">
              <input type="checkbox" /> Wrap your checkboxes in labels
            </label>
          </li>
          <li>
            <label class="c-field c-field--choice c-field--disabled">
              <input type="checkbox" disabled={true} /> Wrap your checkboxes in labels
            </label>
          </li>
          <li>
            <label class="c-field c-field--choice c-field--error">
              <input type="checkbox" /> Wrap your checkboxes in labels
            </label>
          </li>
          <li>
            <label class="c-field c-field--choice c-field--success">
              <input type="checkbox" /> Wrap your checkboxes in labels
            </label>
          </li>
        </ul>
        <h3 class="c-heading">Radios</h3>
        <label class="c-field c-field--choice">
          <input type="radio" name="optionsRadios" /> Wrap your radios in labels too
        </label>
        <ul class="c-list c-list--unstyled">
          <li class="c-list__item">
            <label class="c-field c-field--choice">
              <input type="radio" name="radios" /> Wrap your radios in labels too
            </label>
          </li>
          <li class="c-list__item">
            <label class="c-field c-field--choice c-field--disabled">
              <input type="radio" name="radios" disabled={true} /> Wrap your radios in labels too
            </label>
          </li>
          <li class="c-list__item">
            <label class="c-field c-field--choice c-field--error">
              <input type="radio" name="radios" /> Wrap your radios in labels too
            </label>
          </li>
          <li class="c-list__item">
            <label class="c-field c-field--choice c-field--success">
              <input type="radio" name="radios" /> Wrap your radios in labels too
            </label>
          </li>
        </ul>
        <h3 class="c-heading">Fieldsets and legends</h3>
        <fieldset class="o-fieldset">
          <legend class="o-fieldset__legend">A group of controls</legend>
          <label class="c-field c-field--choice">
            <input type="radio" name="optionsRadios" /> Option zero
          </label>
          <label class="c-field c-field--choice c-field--success">
            <input type="radio" name="optionsRadios" /> Option one
          </label>
          <label class="c-field c-field--choice c-field--disabled">
            <input type="radio" name="optionsRadios" disabled={true} /> Option two
          </label>
          <label class="c-field c-field--choice c-field--error">
            <input type="radio" name="optionsRadios" /> Option three
          </label>
        </fieldset>
        <fieldset class="o-fieldset" disabled={true}>
          <legend class="o-fieldset__legend">This fieldset is disabled</legend>
          <label class="c-field c-field--choice">
            <input type="checkbox" /> Option zero
          </label>
          <label class="c-field c-field--choice c-field--success">
            <input type="checkbox" /> Option one
          </label>
          <label class="c-field c-field--choice">
            <input type="checkbox" checked /> Option two
          </label>
          <label class="c-field c-field--choice c-field--error">
            <input type="checkbox" /> Option three
          </label>
        </fieldset>
        <h3 class="c-heading">Input groups</h3>
        <div class="o-form-element">
          <label class="c-label" htmlFor="inputgroup1">
            Label one:
          </label>

          <div class="c-input-group c-input-group--rounded">
            <div class="o-field">
              <input class="c-field" placeholder="Textbox" id="inputgroup1" />
            </div>
            <button class="c-button">Action</button>
          </div>
        </div>
        <div class="o-form-element">
          <label class="c-label" htmlFor="inputgroup2">
            Label one:
          </label>

          <div class="c-input-group">
            <button class="c-button">Action</button>
            <div class="o-field">
              <input class="c-field" placeholder="Textbox" id="inputgroup2" />
            </div>
          </div>
        </div>
        <div class="o-form-element">
          <label class="c-label" htmlFor="inputgroup3">
            Label one:
          </label>

          <div class="c-input-group">
            <button class="c-button c-button--warning">Action</button>
            <button class="c-button c-button--success">Action</button>
            <div class="o-field">
              <input class="c-field" placeholder="Textbox" id="inputgroup3" />
            </div>
            <button class="c-button c-button--error">Action</button>
            <button class="c-button c-button--info">Action</button>
          </div>
        </div>
        <div class="o-form-element">
          <label class="c-label" htmlFor="inputgroup4">
            Label one:
          </label>

          <div class="c-input-group">
            <button class="c-button c-button--ghost">Action</button>
            <div class="o-field">
              <input class="c-field" placeholder="Textbox" id="inputgroup4" />
            </div>
            <button class="c-button c-button--ghost c-button--info">Action</button>
          </div>
        </div>
        <div class="o-form-element">
          <label class="c-label" htmlFor="inputgroup5">
            Label one:
          </label>

          <div class="c-input-group c-input-group--rounded">
            <button class="c-button c-button--ghost">Action</button>
            <button class="c-button c-button--ghost">Action</button>
            <div class="o-field">
              <input class="c-field" placeholder="Textbox" id="inputgroup5" />
            </div>
            <button class="c-button c-button--ghost c-button--warning">Action</button>
            <button class="c-button c-button--ghost c-button--info">Action</button>
          </div>
        </div>
        <div class="o-form-element">
          <label class="c-label" htmlFor="fieldgroup1">
            Enter your address:
          </label>

          <div class="c-input-group c-input-group--stacked">
            <div class="o-field">
              <input class="c-field" placeholder="Textbox" id="fieldgroup1" />
            </div>
            <div class="o-field">
              <textarea class="c-field" placeholder="Textarea" />
            </div>
            <div class="o-field">
              <input class="c-field" placeholder="Textbox" />
            </div>
          </div>
        </div>
        <div class="o-form-element">
          <div class="c-input-group">
            <div class="o-field">
              <input class="c-field" />
              <div role="tooltip" class="c-hint">
                Hint 1
              </div>
            </div>
            <div class="o-field o-field--icon-left o-field--icon-right">
              <i aria-hidden class="c-icon fa fa-search" />
              <input class="c-field" />
              <i aria-hidden class="c-icon fa fa-times" />
              <div role="tooltip" class="c-hint">
                Hint 2
              </div>
            </div>
            <div class="o-field">
              <input class="c-field" />
              <div role="tooltip" class="c-hint">
                Hint 3
              </div>
            </div>
          </div>
        </div>
        <div class="o-form-element">
          <div class="c-input-group">
            <div class="o-field">
              <select class="c-field">
                <option>Day</option>
              </select>
            </div>
            <div class="o-field">
              <select class="c-field">
                <option>Month</option>
              </select>
            </div>
            <div class="o-field">
              <select class="c-field">
                <option>Year</option>
              </select>
            </div>
          </div>
        </div>
        <div class="o-form-element">
          <div class="c-input-group">
            <div class="o-field">
              <select class="c-field">
                <option>Dropdown</option>
              </select>
            </div>
            <div class="o-field">
              <input class="c-field" placeholder="Textbox" />
            </div>
            <button class="c-button c-button--info">Action</button>
            <button class="c-button c-button--warning">Action</button>
            <div class="o-field o-field--icon-right">
              <input class="c-field c-field--success" placeholder="Textbox" />
              <i aria-hidden class="fas fa-check c-icon" />
              <div role="tooltip" class="c-hint">
                Hint
              </div>
            </div>
            <button class="c-button c-button--ghost c-button--info">Action</button>
            <button class="c-button c-button--ghost c-button--warning">Action</button>
            <button class="c-button c-button--warning">Action</button>
            <div class="o-field">
              <select class="c-field c-field--error">
                <option>Dropdown</option>
              </select>
            </div>
            <button class="c-button c-button--error">Action</button>
          </div>
        </div>
        <h3 class="c-heading">Labels, Fieldsets and Forms</h3>
        <div class="o-form-element">
          <label class="c-label" htmlFor="nickname">
            Nickname:
          </label>
          <input id="nickname" placeholder="Nickname" class="c-field" />
        </div>
        <label class="c-label o-form-element">
          Surname:
          <input class="c-field c-field--label" placeholder="These look better!" />
        </label>
        <fieldset class="o-fieldset">
          <legend class="o-fieldset__legend">And all together now!</legend>
          <div class="o-form-element">
            <label class="c-label" htmlFor="houseno">
              Address line 1:
            </label>
            <input id="houseno" placeholder="House name or number" class="c-field" />
          </div>
          <label class="c-label o-form-element">
            Postcode:
            <input class="c-field c-field--label" placeholder="e.g. AB12 3CD" />
          </label>
          <label class="c-label c-field c-field--choice o-form-element">
            <input type="checkbox" /> Send me spam
          </label>
          <fieldset class="o-fieldset">
            <legend class="o-fieldset__legend">Account login:</legend>
            <label class="c-label c-field c-field--choice">
              <input type="radio" name="account" checked /> New user
            </label>
            <label class="c-label c-field c-field--choice">
              <input type="radio" name="account" /> Existing user
            </label>
          </fieldset>
          <div class="o-form-element">
            <label class="c-toggle">
              Activate lockdown?
              <input type="checkbox" checked />
              <div class="c-toggle__track">
                <div class="c-toggle__handle" />
              </div>
            </label>
          </div>
        </fieldset>
        <h3 class="c-heading">Input hints</h3>
        <label class="c-label">
          Hint:
          <input class="c-field c-field--label" />
          <div role="tooltip" class="c-hint">
            Hint
          </div>
        </label>
        <label class="c-label">
          Static Hint:
          <input class="c-field c-field--label" />
          <div role="tooltip" class="c-hint c-hint--static">
            Static hint
          </div>
        </label>
        <label class="c-label">
          Complex input Hint:
          <div class="o-field o-field--icon-left">
            <i aria-hidden class="fas fa-search c-icon" />
            <input class="c-field c-field--label" />
            <div role="tooltip" class="c-hint">
              Hello, hint
            </div>
          </div>
        </label>
        <h3 class="c-heading">Floating labels</h3>
        <div class="o-form-element">
          <label class="c-label" htmlFor="none-floater">
            Address line 1
          </label>
          <input id="none-floater" placeholder="House name or number" class="c-field" />
        </div>
        <div class="o-form-element">
          <label class="c-label">
            Postcode
            <input class="c-field c-field--label" placeholder="e.g. LS1 2AB" />
            <div role="tooltip" class="c-hint">
              e.g. LS1 2AB
            </div>
          </label>
        </div>
        <div class="o-form-element">
          <label htmlFor="floater" class="c-label">
            Mobile Phone Number
          </label>
          <input id="floater" class="c-field" placeholder="e.g 07654321000" />
          <div role="tooltip" class="c-hint">
            e.g 07654321000
          </div>
        </div>
      </section>
    );
  }
}
