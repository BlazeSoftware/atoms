import { h, Component } from '@stencil/core';

@Component({
  tag: 'demo-badges',
})
export class Badges {
  render() {
    return (
      <section class="u-window-box-super">
        <h2 class="c-heading">Badges</h2>
        <p class="u-paragraph">
          This is a<span class="c-badge">badge</span> and this is a rounded
          <span class="c-badge c-badge--rounded">badge</span>
        </p>
        <p class="u-paragraph">
          They're useful when you want to add additional info. Like a version number to a page, such as
          <span class="c-badge">v.1.0.0</span>
        </p>
        <span class="c-badge">Default</span>
        <span class="c-badge c-badge--brand c-tooltip c-tooltip--top" aria-label="top tooltip">
          brand
        </span>
        <span class="c-badge c-badge--info c-tooltip c-tooltip--top" aria-label="top tooltip">
          info
        </span>
        <span class="c-badge c-badge--warning c-tooltip c-tooltip--right" aria-label="right tooltip">
          warning
        </span>
        <span class="c-badge c-badge--success c-tooltip c-tooltip--bottom" aria-label="bottom tooltip">
          success
        </span>
        <span class="c-badge c-badge--error c-tooltip c-tooltip--left" aria-label="left tooltip">
          error
        </span>
        <span class="c-badge c-badge--rounded">Default</span>
        <span class="c-badge c-badge--rounded c-badge--brand">brand</span>
        <span class="c-badge c-badge--rounded c-badge--info">info</span>
        <span class="c-badge c-badge--rounded c-badge--warning">warning</span>
        <span class="c-badge c-badge--rounded c-badge--success">success</span>
        <span class="c-badge c-badge--rounded c-badge--error">error</span>
        <br />
        <span class="c-badge c-badge--ghost">Default</span>
        <span class="c-badge c-badge--ghost c-badge--brand c-tooltip c-tooltip--top" aria-label="top tooltip">
          brand
        </span>
        <span class="c-badge c-badge--ghost c-badge--info c-tooltip c-tooltip--top" aria-label="top tooltip">
          info
        </span>
        <span class="c-badge c-badge--ghost c-badge--warning c-tooltip c-tooltip--right" aria-label="right tooltip">
          warning
        </span>
        <span class="c-badge c-badge--ghost c-badge--success c-tooltip c-tooltip--bottom" aria-label="bottom tooltip">
          success
        </span>
        <span class="c-badge c-badge--ghost c-badge--error c-tooltip c-tooltip--left" aria-label="left tooltip">
          error
        </span>
        <span class="c-badge c-badge--ghost c-badge--rounded">Default</span>
        <span class="c-badge c-badge--ghost c-badge--rounded c-badge--brand">brand</span>
        <span class="c-badge c-badge--ghost c-badge--rounded c-badge--info">info</span>
        <span class="c-badge c-badge--ghost c-badge--rounded c-badge--warning">warning</span>
        <span class="c-badge c-badge--ghost c-badge--rounded c-badge--success">success</span>
        <span class="c-badge c-badge--ghost c-badge--rounded c-badge--error">error</span>
      </section>
    );
  }
}
