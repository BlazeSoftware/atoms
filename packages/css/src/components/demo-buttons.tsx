import { h, Component } from '@stencil/core';

@Component({
  tag: 'demo-buttons',
})
export class Buttonss {
  render() {
    return (
      <section class="u-window-box-super">
        <h2 class="c-heading">Buttons</h2>
        <a class="c-button" href="#">
          Link
        </a>
        <button class="c-button" type="button">
          Button
        </button>
        <button class="c-button c-button--link" type="button">
          Link Button
        </button>
        <button class="c-button" type="button">
          <i aria-hidden class="fas fa-car c-button__icon-left" />
          Button
        </button>
        <button class="c-button" type="button">
          Button
          <i aria-hidden class="fas fa-shopping-cart c-button__icon-right" />
        </button>
        <input class="c-button" type="button" value="Input" />
        <input class="c-button" type="submit" value="Submit" />
        <button disabled={true} class="c-button" type="button">
          Disabled button
        </button>
        This is a{' '}
        <button class="c-button c-button--nude" type="button">
          nude button
        </button>
        .
        <div class="u-letter-box-small">
          <span class="c-input-group">
            <button class="c-button c-button--info" type="button">
              This
            </button>
            <button class="c-button c-button--warning" type="button">
              is a set
            </button>
            <button class="c-button c-button" type="button">
              of buttons
            </button>
            <button class="c-button c-button--success" type="button">
              in a
            </button>
            <button class="c-button c-button--error" type="button">
              group
            </button>
            <button class="c-button c-button--brand c-button--brand" type="button">
              now with brand
            </button>
          </span>
        </div>
        <div class="u-letter-box-small">
          <span class="c-input-group">
            <button class="c-button c-button--active c-button--info" type="button">
              Button 1
            </button>
            <button class="c-button c-button--info" type="button">
              Button 2
            </button>
          </span>
        </div>
        <div class="u-letter-box-small">
          <span class="c-input-group">
            <button class="c-button c-button--active c-button--warning" type="button">
              Button 1
            </button>
            <button class="c-button c-button--warning" type="button">
              Button 2
            </button>
          </span>
        </div>
        <div class="u-letter-box-small">
          <span class="c-input-group">
            <button class="c-button c-button--active" type="button">
              Button 1
            </button>
            <button class="c-button" type="button">
              Button 2
            </button>
          </span>
        </div>
        <div class="u-letter-box-small">
          <span class="c-input-group">
            <button class="c-button c-button--active c-button--success" type="button">
              Button 1
            </button>
            <button class="c-button c-button--success" type="button">
              Button 2
            </button>
          </span>
        </div>
        <div class="u-letter-box-small">
          <span class="c-input-group">
            <button class="c-button c-button--active c-button--error" type="button">
              Button 1
            </button>
            <button class="c-button c-button--error" type="button">
              Button 2
            </button>
          </span>
        </div>
        <div class="u-letter-box-small">
          <span class="c-input-group">
            <button class="c-button c-button--active c-button--brand" type="button">
              Button 1
            </button>
            <button class="c-button c-button--brand" type="button">
              Button 2
            </button>
          </span>
        </div>
        <div class="u-letter-box-small">
          <span class="c-input-group">
            <button class="c-button c-button--active c-button--ghost c-button--info" type="button">
              Button 1
            </button>
            <button class="c-button c-button--ghost c-button--info" type="button">
              Button 2
            </button>
          </span>
        </div>
        <div class="u-letter-box-small">
          <span class="c-input-group">
            <button class="c-button c-button--active c-button--ghost c-button--warning" type="button">
              Button 1
            </button>
            <button class="c-button c-button--ghost c-button--warning" type="button">
              Button 2
            </button>
          </span>
        </div>
        <div class="u-letter-box-small">
          <span class="c-input-group">
            <button class="c-button c-button--ghost c-button--active" type="button">
              Button 1
            </button>
            <button class="c-button c-button--ghost" type="button">
              Button 2
            </button>
          </span>
        </div>
        <div class="u-letter-box-small">
          <span class="c-input-group">
            <button class="c-button c-button--active c-button--ghost c-button--success" type="button">
              Button 1
            </button>
            <button class="c-button c-button--ghost c-button--success" type="button">
              Button 2
            </button>
          </span>
        </div>
        <div class="u-letter-box-small">
          <span class="c-input-group">
            <button class="c-button c-button--active c-button--ghost c-button--error" type="button">
              Button 1
            </button>
            <button class="c-button c-button--ghost c-button--error" type="button">
              Button 2
            </button>
          </span>
        </div>
        <div class="u-letter-box-small">
          <span class="c-input-group">
            <button class="c-button c-button--active c-button--ghost c-button--brand" type="button">
              Button 1
            </button>
            <button class="c-button c-button--ghost c-button--brand" type="button">
              Button 2
            </button>
          </span>
        </div>
        <div class="u-letter-box-small">
          <span class="c-input-group">
            <button class="c-button c-link c-link--info" type="button">
              This
            </button>
            <button class="c-button c-link c-link--warning" type="button">
              is a set
            </button>
            <button class="c-button c-link" type="button">
              of link buttons
            </button>
            <button class="c-button c-link c-link--success" type="button">
              in an
            </button>
            <button class="c-button c-link c-link--error" type="button">
              input group
            </button>
            <button class="c-button c-link" type="button" disabled={true}>
              disabled
            </button>
          </span>
        </div>
        <div class="u-letter-box-small">
          <span class="c-input-group c-input-group--rounded">
            <button disabled={true} class="c-button c-button--info" type="button">
              This
            </button>
            <button disabled={true} class="c-button c-button--warning" type="button">
              is a set
            </button>
            <button disabled={true} class="c-button c-button" type="button">
              of disabled buttons
            </button>
            <button disabled={true} class="c-button c-button--success" type="button">
              in a
            </button>
            <button disabled={true} class="c-button c-button--error" type="button">
              group
            </button>
          </span>
        </div>
        <div class="u-letter-box-small">
          <span class="c-input-group c-input-group--rounded">
            <button class="c-button c-button--info" type="button">
              This
            </button>
            <button class="c-button c-button--warning" type="button">
              is a set
            </button>
            <button class="c-button c-button" type="button">
              of buttons
            </button>
            <button class="c-button c-button--success" type="button">
              in a
            </button>
            <button class="c-button c-button--error" type="button">
              group
            </button>
          </span>
        </div>
        <div class="u-letter-box-small">
          <span class="c-input-group">
            <button class="c-button c-button--ghost" type="button">
              This
            </button>
            <button class="c-button c-button--ghost" type="button">
              is a set
            </button>
            <button class="c-button c-button--ghost" type="button">
              of buttons
            </button>
            <button class="c-button c-button--ghost" type="button">
              in a
            </button>
            <button class="c-button c-button--ghost" type="button">
              group
            </button>
          </span>
        </div>
        <div class="u-letter-box-small">
          <span class="c-input-group c-input-group--rounded">
            <button class="c-button c-button--ghost c-button--info" type="button">
              This
            </button>
            <button class="c-button c-button--ghost c-button--warning" type="button">
              is a set
            </button>
            <button class="c-button c-button--ghost" type="button">
              of buttons
            </button>
            <button class="c-button c-button--ghost c-button--success" type="button">
              in a
            </button>
            <button class="c-button c-button--ghost c-button--error" type="button">
              group
            </button>
          </span>
        </div>
        <div class="u-letter-box-small">
          <span class="c-input-group c-input-group--rounded">
            <button disabled={true} class="c-button c-button--ghost c-button--info" type="button">
              This
            </button>
            <button disabled={true} class="c-button c-button--ghost c-button--warning" type="button">
              is a set
            </button>
            <button disabled={true} class="c-button c-button--ghost" type="button">
              of disabled buttons
            </button>
            <button disabled={true} class="c-button c-button--ghost c-button--success" type="button">
              in a
            </button>
            <button disabled={true} class="c-button c-button--ghost c-button--error" type="button">
              group
            </button>
          </span>
        </div>
        <h3 class="c-heading">Button sizes</h3>
        <button class="c-button u-xsmall" type="button">
          xsmall
        </button>
        <button class="c-button u-small" type="button">
          small
        </button>
        <button class="c-button u-medium" type="button">
          medium
        </button>
        <button class="c-button u-large" type="button">
          large
        </button>
        <button class="c-button u-xlarge" type="button">
          xlarge
        </button>
        <button class="c-button u-super" type="button">
          super
        </button>
        <h3 class="c-heading">Full width</h3>
        <button class="c-button c-button--block u-xsmall" type="button">
          xsmall
        </button>
        <button class="c-button c-button--block u-small" type="button">
          small
        </button>
        <button class="c-button c-button--block u-medium" type="button">
          medium
        </button>
        <button class="c-button c-button--block u-large" type="button">
          large
        </button>
        <button class="c-button c-button--block u-xlarge" type="button">
          xlarge
        </button>
        <button class="c-button c-button--block u-super" type="button">
          super
        </button>
        <h3 class="c-heading">Colours</h3>
        <button class="c-button" type="button">
          Default
        </button>
        <button class="c-button c-button--brand" type="button">
          Brand
        </button>
        <button class="c-button c-button--info" type="button">
          Info
        </button>
        <button class="c-button c-button--warning" type="button">
          Warning
        </button>
        <button class="c-button c-button--success" type="button">
          Success
        </button>
        <button class="c-button c-button--error" type="button">
          Error
        </button>
        <h3 class="c-heading">Ghosts</h3>
        <button class="c-button c-button--ghost" type="button">
          Ghost
        </button>
        <button class="c-button c-button--ghost c-button--brand" type="button">
          Brand
        </button>
        <button class="c-button c-button--ghost c-button--info" type="button">
          Info
        </button>
        <button class="c-button c-button--ghost c-button--warning" type="button">
          Warning
        </button>
        <button class="c-button c-button--ghost c-button--success" type="button">
          Success
        </button>
        <button class="c-button c-button--ghost c-button--error" type="button">
          Error
        </button>
        <h3 class="c-heading">Rounded (and Ghosted)</h3>
        <button class="c-button c-button--rounded c-button--ghost c-button--brand u-xsmall" type="button">
          xsmall
        </button>
        <button class="c-button c-button--rounded c-button--ghost c-button--info u-small" type="button">
          small
        </button>
        <button class="c-button c-button--rounded c-button--ghost c-button--warning u-medium" type="button">
          medium
        </button>
        <button class="c-button c-button--rounded c-button--ghost c-button--success u-large" type="button">
          large
        </button>
        <button class="c-button c-button--rounded c-button--ghost c-button--error u-xlarge" type="button">
          xlarge
        </button>
        <button class="c-button c-button--rounded c-button--ghost u-super" type="button">
          super
        </button>
      </section>
    );
  }
}
