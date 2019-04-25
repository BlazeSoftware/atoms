import { Component } from '@stencil/core';

@Component({
  tag: 'demo-site',
  styleUrl: 'scss/blaze.scss',
})
export class Site {
  render() {
    return (
      <div>
        <h1 class="c-heading u-centered">Blaze :: Demo</h1>
        <demo-grid />
        <demo-typography />
        <demo-headings />
        <demo-breadcrumbs />
        <demo-lists />
        <demo-tables />
        <demo-images />
        <demo-cards />
        <demo-accordion />
        <demo-buttons />
        <demo-github-buttons />
        <demo-inputs />
        <demo-toggles />
        <demo-ranges />
        <demo-tabs />
        <demo-avatars />
        <demo-tags />
        <demo-overlays />
        <demo-modals />
        <demo-drawers />
        <demo-alerts />
        <demo-badges />
        <demo-calendars />
        <demo-pagination />
        <demo-trees />
        <demo-progress-bars />
        <demo-navs />
        <demo-timelines />
        <demo-dividers />
      </div>
    );
  }
}
