import { h, Component, Prop } from '@stencil/core';

@Component({
  tag: 'example-chat',
})
export class ExampleChat {
  @Prop()
  name: string;

  render() {
    return (
      <page-template name={this.name}>
        <blaze-demo
          language="html"
          code={`<div class="o-grid o-grid--no-gutter">
  <div class="o-grid__cell o-grid__cell--width-40">
    <div class="c-card">
      <div role="separator" class="c-card__item c-card__item--divider">
        <div class="o-field o-field--icon-left u-small">
          <i class="fas fa-search c-icon"></i>
          <input class="c-field" type="text" />
        </div>
      </div>
      <div class="o-grid o-grid--no-gutter c-card__item">
        <div class="o-grid__cell o-grid__cell--width-25 u-display-none u-display-block@medium">
          <div class="c-avatar">
            <img class="c-avatar__img" alt="placeholder" src="http://placehold.it/1024x963/3B6DC6/FFF" />
          </div>
        </div>
        <div class="o-grid__cell">
          <div class="u-text--loud">Greg</div>
          <div class="u-text--quiet u-small">I'm outside the gates...</div>
        </div>
        <div class="o-grid__cell o-grid__cell--width-25">
          <div class="u-text--quiet u-small u-right">10:10</div>
        </div>
      </div>
      <div class="o-grid o-grid--no-gutter c-card__item c-card__item--info">
        <div class="o-grid__cell o-grid__cell--width-25 u-display-none u-display-block@medium">
          <div class="c-avatar">
            <img class="c-avatar__img" alt="placeholder" src="http://placehold.it/1024x963/F53BC2/FFF" />
          </div>
        </div>
        <div class="o-grid__cell">
          <div class="u-text--loud">James</div>
          <div class="u-text--quiet u-small">Where are you?!!</div>
        </div>
        <div class="o-grid__cell o-grid__cell--width-25">
          <div class="u-text--quiet u-small u-right">00:05</div>
        </div>
      </div>
      <div class="o-grid o-grid--no-gutter c-card__item">
        <div class="o-grid__cell o-grid__cell--width-25 u-display-none u-display-block@medium">
          <div class="c-avatar">
            <img class="c-avatar__img" alt="placeholder" src="http://placehold.it/1024x963/1CA87E/FFF" />
          </div>
        </div>
        <div class="o-grid__cell">
          <div class="u-text--loud">Scarlett</div>
          <div class="u-text--quiet u-small">We should go out tonight...</div>
        </div>
        <div class="o-grid__cell o-grid__cell--width-25">
          <div class="u-text--quiet u-small u-right">Yesterday</div>
        </div>
      </div>
    </div>
  </div>
  <div class="o-grid__cell o-grid__cell--width-60">
    <div class="o-grid">
      <div class="o-grid__cell o-grid__cell--width-50">
        <div class="c-card">
          <div class="c-card__item">Shall we meet at the main entrance tomorrow night?</div>
        </div>
      </div>
    </div>
    <div class="o-grid__cell u-small u-text--loud u-text--quiet u-centered u-letter-box-medium">
      10/08/2019 10:23
    </div>
    <div class="o-grid">
      <div class="o-grid__cell o-grid__cell--width-50 o-grid__cell--offset-50">
        <div class="c-card">
          <div class="c-card__item c-card__item--info">Sounds like a good idea, meet you there.</div>
        </div>
      </div>
    </div>
    <div class="o-grid__cell u-small u-text--loud u-text--quiet u-centered u-letter-box-medium">
      11/08/2019 00:05
    </div>
    <div class="o-grid">
      <div class="o-grid__cell o-grid__cell--width-50">
        <div class="c-card">
          <div class="c-card__item">Where are you??</div>
        </div>
      </div>
    </div>
    <div class="o-grid">
      <div class="o-grid__cell o-grid__cell--width-50 o-grid__cell--offset-50">
        <div class="c-card">
          <div class="c-card__item c-card__item--info">
            Sorry, I'm caught in traffic, I'll be there in 10 minutes...
          </div>
        </div>
      </div>
    </div>
    <div class="c-input-group u-letter-box-medium">
      <div class="o-field o-field--icon-right">
        <input class="c-field" placeholder="Message" />
        <i class="fa-fw far fa-smile c-icon"></i>
      </div>
      <button class="c-button c-button--brand" aria-label="Send message">
        <i class="fa-fw far fa-paper-plane"></i>
      </button>
    </div>
  </div>
</div>`}
        />
      </page-template>
    );
  }
}
