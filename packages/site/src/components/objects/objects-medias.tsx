import { h, Component, Prop } from '@stencil/core';

@Component({
  tag: 'objects-medias',
})
export class ObjectsMedias {
  @Prop()
  name: string;

  render() {
    return (
      <page-template name={this.name}>
        <p class="c-paragraph">
          Media objects are usually used for comment engines and other image and related text displays.
        </p>

        <blaze-demo
          language="html"
          code={`<div class="c-card">
  <div class="c-card__item c-card__item--brand o-media">
    <div class="o-media__image">
      <img class="o-image" src="https://placehold.it/80"/>
    </div>
    <div class="o-media__body">
      <h2 class="c-heading">Title <span class="c-heading__sub">Subtitle</span></h2>
      <p class="c-paragraph">
        Lorem ipsum dolor sit amet, feugiat corpora ex eam. Lorem ipsum dolor sit amet, feugiat corpora ex eam. Lorem ipsum dolor sit amet, feugiat corpora ex eam.
      </p>
    </div>
  </div>
</div>`}
        />

        <blaze-demo
          language="html"
          code={`<div class="c-card">
  <div class="c-card__item c-card__item--info o-media">
    <div class="o-media__body">
      <h2 class="c-heading">Title <span class="c-heading__sub">Subtitle</span></h2>
      <p class="c-paragraph">
        Lorem ipsum dolor sit amet, feugiat corpora ex eam. Lorem ipsum dolor sit amet, feugiat corpora ex eam. Lorem ipsum dolor sit amet, feugiat corpora ex eam.
      </p>
    </div>
    <div class="o-media__image">
      <img class="o-image" src="https://placehold.it/80"/>
    </div>
  </div>
</div>`}
        />

        <p class="c-paragraph">
          To position the image or content append the <code class="u-code">--top</code>,{' '}
          <code class="u-code">--center</code> or <code class="u-code">--bottom</code> modifiers.
        </p>

        <div class="o-grid o-grid--xsmall-full o-grid--small-full o-grid--medium-full o-grid--large-full">
          <div class="o-grid__cell o-grid__cell--width-33">
            <blaze-demo
              language="html"
              code={`<div class="c-card">
  <div class="c-card__item o-media">
    <div class="o-media__image o-media__image--bottom">
      <img class="o-image" src="https://placehold.it/80"/>
    </div>
    <div class="o-media__body">
      <h2 class="c-heading">Title <span class="c-heading__sub">Subtitle</span></h2>
      <p class="c-paragraph">
        Lorem ipsum dolor sit amet, feugiat corpora ex eam. Lorem ipsum dolor sit amet, feugiat corpora ex eam. Lorem ipsum dolor sit amet, feugiat corpora ex eam. Lorem ipsum dolor sit amet, feugiat corpora ex eam.
      </p>
    </div>
  </div>
</div>`}
            />
          </div>

          <div class="o-grid__cell o-grid__cell--width-33">
            <blaze-demo
              language="html"
              code={`<div class="c-card">
  <div class="c-card__item o-media">
    <div class="o-media__image o-media__image--center">
      <img class="o-image" src="https://placehold.it/80"/>
    </div>
    <div class="o-media__body">
      <h2 class="c-heading">Title <span class="c-heading__sub">Subtitle</span></h2>
      <p class="c-paragraph">
        Lorem ipsum dolor sit amet, feugiat corpora ex eam. Lorem ipsum dolor sit amet, feugiat corpora ex eam. Lorem ipsum dolor sit amet, feugiat corpora ex eam. Lorem ipsum dolor sit amet, feugiat corpora ex eam.
      </p>
    </div>
  </div>
</div>`}
            />
          </div>

          <div class="o-grid__cell o-grid__cell--width-33">
            <blaze-demo
              language="html"
              code={`<div class="c-card">
  <div class="c-card__item o-media">
    <div class="o-media__image o-media__image--top">
      <img class="o-image" src="https://placehold.it/80"/>
    </div>
    <div class="o-media__body">
      <h2 class="c-heading">Title <span class="c-heading__sub">Subtitle</span></h2>
      <p class="c-paragraph">
        Lorem ipsum dolor sit amet, feugiat corpora ex eam. Lorem ipsum dolor sit amet, feugiat corpora ex eam. Lorem ipsum dolor sit amet, feugiat corpora ex eam. Lorem ipsum dolor sit amet, feugiat corpora ex eam.
      </p>
    </div>
  </div>
</div>`}
            />
          </div>
        </div>
      </page-template>
    );
  }
}
