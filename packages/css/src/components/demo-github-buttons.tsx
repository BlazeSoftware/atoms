import { Component } from '@stencil/core';

@Component({
  tag: 'demo-github-buttons',
})
export class GitHubButtons {
  render() {
    return (
      <section class="u-window-box-super">
        <h2 class="c-heading">GitHub Buttons</h2>
        <div class="c-github-button">
          <a
            href="https://github.com"
            target="_blank"
            class="c-github-button__link c-github-button__link--button"
            aria-label="Open on GitHub">
            <svg
              version="1.1"
              width="14"
              height="16"
              viewBox="0 0 14 16"
              class="c-github-button__icon c-github-button__icon--star"
              aria-hidden="true">
              <path
                fill-rule="evenodd"
                d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74L14 6z"
              />
            </svg>{' '}
            <span class="c-github-button__label">Star</span>
          </a>
          <a
            href="https://github.com"
            target="_blank"
            class="c-github-button__link c-github-button__link--count"
            aria-label="Open on GitHub">
            <b />
            <i />
            <span>1,337</span>
          </a>
        </div>{' '}
        <div class="c-github-button u-large">
          <a
            href="https://github.com"
            target="_blank"
            class="c-github-button__link c-github-button__link--button"
            aria-label="Open on GitHub">
            <svg
              version="1.1"
              width="14"
              height="16"
              viewBox="0 0 14 16"
              class="c-github-button__icon c-github-button__icon--star"
              aria-hidden="true">
              <path
                fill-rule="evenodd"
                d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74L14 6z"
              />
            </svg>{' '}
            <span class="c-github-button__label">Star</span>
          </a>
          <a
            href="https://github.com"
            target="_blank"
            class="c-github-button__link c-github-button__link--count"
            aria-label="Open on GitHub">
            <b />
            <i />
            <span>1,337</span>
          </a>
        </div>
      </section>
    );
  }
}
