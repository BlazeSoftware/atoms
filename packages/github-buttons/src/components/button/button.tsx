import { Component, Prop } from '@stencil/core';
import Icons from './octicons';

@Component({
  tag: 'github-button',
  styleUrl: 'button.scss',
  shadow: true,
})
export class GitHubButton {
  @Prop()
  user: string;

  @Prop()
  repo: string;

  @Prop()
  large: boolean;

  @Prop()
  type: string = 'star';

  @Prop()
  count: boolean = false;

  @Prop()
  text: string;

  stars: string;
  watchers: string;
  issues: string;
  forks: string;

  error: boolean;

  async componentWillLoad() {
    if (!this.count) return;
    try {
      const response = await fetch(`https://api.github.com/repos/${this.user}/${this.repo}`);
      if (!response.ok) return (this.error = true);
      const json = await response.json();
      this.stars = new Intl.NumberFormat().format(json.stargazers_count);
      this.watchers = new Intl.NumberFormat().format(json.watchers_count);
      this.issues = new Intl.NumberFormat().format(json.open_issues_count);
      this.forks = new Intl.NumberFormat().format(json.forks);
    } catch (e) {
      this.error = true;
    }
  }

  getCount() {
    if (this.error) return Icons.issue;

    switch (this.type) {
      case 'star':
        return this.stars;
      case 'watch':
      case 'follow':
        return this.watchers;
      case 'issue':
        return this.issues;
      case 'fork':
        return this.forks;
      default:
        break;
    }
  }

  render() {
    const largeClass = this.large ? 'u-large' : '';
    const errorClass = this.error ? 'c-github-button--error' : '';

    return (
      <div class={`c-github-button ${largeClass} ${errorClass}`}>
        <a
          href={`https://github.com/${this.user}/${this.repo}`}
          target="_blank"
          class="c-github-button__link c-github-button__link--button"
          aria-label={`Open ${this.user}/${this.repo} on GitHub`}>
          {Icons[this.type]} <span class="c-github-button__label">{this.text || this.type}</span>
        </a>
        {this.type !== 'download' &&
          this.count && (
            <a
              href={`https://github.com/${this.user}/${this.repo}`}
              target="_blank"
              class="c-github-button__link c-github-button__link--count"
              aria-label={`Open ${this.user}/${this.repo} on GitHub`}>
              <b />
              <i />
              <span>{this.getCount()}</span>
            </a>
          )}
      </div>
    );
  }
}
