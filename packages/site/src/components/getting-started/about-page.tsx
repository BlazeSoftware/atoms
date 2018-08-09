import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'about-page'
})
export class AboutPage {
  @Prop() name: string;

  render() {
    return (
      <page-template name={this.name}>
        <h2 class="c-heading u-xlarge">What makes Blaze different?</h2>

        <p class="c-paragraph">
          Blaze fills the gap between monolithic frameworks like Bootstrap, UIKit and Semantic, and "micro" ones such as
          Skeleton, Milligram and Min.
        </p>

        <h2 id="opt-in" class="c-heading u-xlarge">
          <i class="fas fa-hand-paper"></i>
          <span class="u-pillar-box-small">Opt-in</span>
        </h2>

        <p class="c-paragraph">
          Blaze won't automatically take control of any of your design unless you want it to. With other toolkits all
          you need to do is reference the stylesheet and an unknown number of elements have CSS applied. We think you'd
          prefer to be in control.
        </p>
        <p class="c-paragraph">
          We also think providing a opt-in approach will reduce the number of conflicts you might experience between
          Blaze and your own CSS, not to mention any other frameworks you use in-conjunction.
        </p>

        <h2 id="bem-itcss" class="c-heading u-xlarge">
          <i class="fas fa-play" style={{ transform: 'rotate(90deg)' }}></i>
          <span class="u-pillar-box-small">BEM and ITCSS</span></h2>

        <p class="c-paragraph">
          Blaze follows <span class="u-text--loud">BEM</span> and <span class="u-text--loud">Inverted
          Triangle</span> naming conventions to give meaning and context to our selectors.
        </p>

        <p class="c-paragraph">
          We've worked hard on making our selectors meaningful. Our classes provide clarity to
          anyone reading the code which makes maintaining your code a lot easier.
        </p>


        <h2 id="components" class="c-heading u-xlarge">
          <i class="fas fa-cogs"></i>
          <span class="u-pillar-box-small">Components</span>
        </h2>

        <p class="c-paragraph">
          Micro-frameworks tend to sacrifice a lot of usefulness for the file size, leaving the
          developer wanting more. We took the approach that provides a decent set of components
          built on top of solid foundations.
        </p>

        <h2 id="components" class="c-heading u-xlarge">
          <i class="fas fa-plug"></i>
          <span class="u-pillar-box-small">Atoms</span>
        </h2>

        <p class="c-paragraph">
          Blaze comes with a set of totally portable framework agnostic atomic components that you
          can use anywhere with no additional framework or JavaScript library.
        </p>
      </page-template>
    );
  }
}
