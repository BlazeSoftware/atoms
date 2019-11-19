import { h, Component, Prop } from '@stencil/core';

@Component({
  tag: 'example-email',
})
export class ExampleEmail {
  @Prop()
  name: string;

  render() {
    return (
      <page-template name={this.name}>
        <blaze-demo
          language="html"
          code={`<div class="o-grid o-grid--no-gutter u-high">
  <nav class="o-grid__cell o-grid__cell--width-20 c-nav">
    <a href="#" class="c-nav__item c-nav__item--brand">
      <i aria-hidden="" class="fas fa-inbox"></i>
      <span class="u-pillar-box-small">Inbox</span>
      <span class="c-badge c-badge--rounded c-badge--info">1,503</span>
    </a>
    <a href="#" class="c-nav__item c-nav__item--active c-nav__item--brand">
      <i aria-hidden="" class="fas fa-flag"></i>
      <span class="u-pillar-box-small">Flagged</span>
      <span class="c-badge c-badge--rounded c-badge--warning">4</span>
    </a>
    <a href="#" class="c-nav__item c-nav__item--brand">
      <i aria-hidden="" class="fas fa-paper-plane"></i>
      <span class="u-pillar-box-small">Sent</span>
    </a>
    <a href="#" class="c-nav__item c-nav__item--brand">
      <i aria-hidden="" class="fas fa-dumpster"></i>
      <span class="u-pillar-box-small">Junk</span>
    </a>
    <a href="#" class="c-nav__item c-nav__item--brand">
      <i aria-hidden="" class="fas fa-trash-alt"></i>
      <span class="u-pillar-box-small">Bin</span>
    </a>
    <a href="#" class="c-nav__item c-nav__item--brand">
      <i aria-hidden="" class="fas fa-archive"></i>
      <span class="u-pillar-box-small">Archive</span>
    </a>
  </nav>
  <div
    class="o-grid__cell o-grid__cell--width-30 c-card u-small">
    <button class="c-card__control">
      <div class="u-text--loud">Meeting cancelled tomorrow</div>
      <div class="u-text--quiet">
        Sorry about this but the meeting we've got tomorrow has had to be cancelled
      </div>
      <div class="u-right u-text--italic u-small">10:45</div>
    </button>
    <button class="c-card__control c-card__control--active">
      <div class="u-text--loud">Company Performance Report 2019</div>
      <div class="u-text--quiet">
        Hi, please find attached the PDF report on our company's performance over the last year.
      </div>
      <div class="u-right u-text--italic u-small">Yesterday</div>
    </button>
    <button class="c-card__control">
      <div class="u-text--loud">Your invoice</div>
      <div class="u-text--quiet">
        Last months invoice you requested has been approved
      </div>
      <div class="u-right u-text--italic u-small">15/09/2019</div>
    </button>
    <button class="c-card__control">
    <div class="u-text--loud">A new sign-in has been detected</div>
      <div class="u-text--quiet">
        An un-registered device was used to sign-in to your account
      </div>
      <div class="u-right u-text--italic u-small">13/08/2019</div>
    </button>
  </div>
  <div class="o-grid__cell o-grid__cell--width-50 u-pillar-box-medium">
    <div class="o-grid o-grid--no-gutter">
      <div class="o-grid__cell o-grid__cell--width-15">
        <div class="c-avatar">
          <img class="c-avatar__img" alt="placeholder" src="https://unsplash.it/200/?image=823">
        </div>
      </div>
      <div class="o-grid__cell">
        <h1 class="c-heading u-medium u-letter-box-small">Stacey Young</h1>
      </div>
    </div>
    <h2 class="c-heading u-xlarge u-letter-box-none">Company Performance Report 2019</h2>
    <section class="u-letter-box-small">
      <p class="c-paragraph">
        Hi, please find attached the PDF report on our company's performance over the last year.
      </p>
    </section>
  </div>
</div>`}
        />
      </page-template>
    );
  }
}
