import { h, Component, Prop } from '@stencil/core';

@Component({
  tag: 'objects-grid',
})
export class ObjectsGrid {
  @Prop()
  name: string;

  render() {
    return (
      <page-template name={this.name}>
        <p class="c-paragraph">
          The grid is the easiest way to produce a fluid responsive layout. Its easy to use and very flexible.
        </p>

        <p class="c-paragraph">
          color key:
          <div class="o-grid-key o-grid-key--grid">&mdash; grids are pink</div>
          <div class="o-grid-key o-grid-key--grid-cell">&mdash; cells are blue</div>
          <div class="o-grid-key o-grid-key--padding">&mdash; padding is green</div>
        </p>

        <h2 id="basic" class="c-heading u-xlarge">
          Basic Grid
        </h2>
        <p class="c-paragraph">
          Use the <code class="u-code">.o-grid</code> class to wrap your <code class="u-code">.o-grid__cell</code>{' '}
          elements.
        </p>

        <blaze-demo
          language="html"
          code={`<div class="o-grid o-grid--demo">
  <div class="o-grid__cell">
    <div class="o-grid-text">first</div>
  </div>
  <div class="o-grid__cell">
    <div class="o-grid-text">second</div>
  </div>
  <div class="o-grid__cell">
    <div class="o-grid-text">third</div>
  </div>
</div>`}
        />

        <h2 id="widths" class="c-heading u-xlarge">
          Widths
        </h2>
        <p class="c-paragraph">
          Use the <code class="u-code">.o-grid__cell--width-xx</code> class to apply widths to your cells. If you add a
          width to one cell the other cells will automatically take up the rest of the space equally.
        </p>

        <blaze-demo
          language="html"
          code={`<div class="o-grid o-grid--demo">
  <div class="o-grid__cell o-grid__cell--width-50">
    <div class="o-grid-text">first</div>
  </div>
  <div class="o-grid__cell">
    <div class="o-grid-text">second</div>
  </div>
  <div class="o-grid__cell">
    <div class="o-grid-text">third</div>
  </div>
</div>`}
        />

        <p class="c-paragraph">
          and use the <code class="u-code">.o-grid--full</code> class to make all the cells full width.
        </p>

        <blaze-demo
          language="html"
          code={`<div class="o-grid o-grid--full o-grid--demo">
  <div class="o-grid__cell">
    <div class="o-grid-text">first</div>
  </div>
  <div class="o-grid__cell">
    <div class="o-grid-text">second</div>
  </div>
  <div class="o-grid__cell">
    <div class="o-grid-text">third</div>
  </div>
</div>`}
        />

        <h2 id="offsets" class="c-heading u-xlarge">
          Offsets
        </h2>
        <p class="c-paragraph">
          To "push" a cell horizontally across the grid use the <code class="u-code">.o-grid__cell--offset-xx</code>{' '}
          class. Use in-conjunction with widths to perfectly align your cells.
        </p>

        <blaze-demo
          language="html"
          code={`<div class="o-grid o-grid--demo">
  <div class="o-grid__cell o-grid__cell--width-20">
    <div class="o-grid-text">first</div>
  </div>
  <div class="o-grid__cell o-grid__cell--width-20 o-grid__cell--offset-60">
    <div class="o-grid-text">second</div>
  </div>
</div>`}
        />

        <h2 id="wrapping" class="c-heading u-xlarge">
          Wrapping
        </h2>
        <p class="c-paragraph">
          A grid is essentially a row of cells. However cells can wrap onto the next line within the grid.
        </p>
        <p class="c-paragraph">
          Here we have 2 cells, <span class="loud">50%</span> and <span class="loud">66.6666%</span> wide, but the grid
          is only <span class="loud">100%</span> wide...eek!
        </p>

        <blaze-demo
          language="html"
          code={`<div class="o-grid o-grid--demo">
  <div class="o-grid__cell o-grid__cell--width-50">
    <div class="o-grid-text">first</div>
  </div>
  <div class="o-grid__cell o-grid__cell--width-66">
    <div class="o-grid-text">second</div>
  </div>
</div>`}
        />

        <p class="c-paragraph">
          To solve this we can wrap the cells within the grid by adding the <code class="u-code">.o-grid--wrap</code>{' '}
          modifier class.
        </p>

        <blaze-demo
          language="html"
          code={`<div class="o-grid o-grid--wrap o-grid--demo">
  <div class="o-grid__cell o-grid__cell--width-50">
    <div class="o-grid-text">first</div>
  </div>
  <div class="o-grid__cell o-grid__cell--width-66">
    <div class="o-grid-text">second</div>
  </div>
</div>`}
        />

        <h2 id="nesting" class="c-heading u-xlarge">
          Nesting
        </h2>
        <p class="c-paragraph">
          You can nest grids inside cells with relative ease...with nesting you're into advanced territory!
        </p>

        <blaze-demo
          language="html"
          code={`<div class="o-grid o-grid--demo">
  <div class="o-grid__cell">
    <div class="o-grid">
      <div class="o-grid__cell">
        <div class="o-grid-text">first</div>
      </div>
      <div class="o-grid__cell">
        <div class="o-grid-text">second</div>
      </div>
    </div>
    <div class="o-grid">
      <div class="o-grid__cell">
        <div class="o-grid-text">third</div>
      </div>
      <div class="o-grid__cell">
        <div class="o-grid-text">fourth</div>
      </div>
    </div>
  </div>
  <div class="o-grid__cell">
    <div class="o-grid-text">fifth</div>
  </div>
</div>`}
        />

        <small class="c-paragraph">We've added padding to the cells as part of the demo.</small>

        <h2 id="vertical-alignment" class="c-heading u-xlarge">
          Vertical Alignment
        </h2>
        <h3 id="vertical-alignment-per-grid" class="c-heading u-large">
          Per <span class="mono">.o-grid</span>
        </h3>
        <p class="c-paragraph">
          If one of your cells is tall you can apply a vertical alignment modifier class to the grid.
        </p>
        <p class="c-paragraph">
          <code class="u-code">.o-grid--top</code>, <code class="u-code">.o-grid--center</code> and{' '}
          <code class="u-code">.o-grid--bottom</code> are supported.
        </p>

        <blaze-demo
          language="html"
          code={`<div class="o-grid o-grid--bottom o-grid--demo">
  <div class="o-grid__cell">
    <div class="o-grid-text">first</div>
  </div>
  <div class="o-grid__cell">
    <div class="o-grid-text">second</div>
  </div>
  <div class="o-grid__cell">
    <div class="o-grid-text">third</div>
  </div>
  <div class="o-grid__cell">
    <div class="o-grid-text">fourth
      <br/>fourth
      <br/>fourth
      <br/>fourth
      <br/>fourth
      <br/>
    </div>
  </div>
  <div class="o-grid-text">fifth</div>
</div>`}
        />

        <h3 id="vertical-alignment-per-cell" class="c-heading u-large">
          Per <span class="mono">.o-grid__cell</span>
        </h3>
        <p class="c-paragraph">
          You can override the vertical alignment of all the cells in the grid by specifying per cell.
        </p>
        <p class="c-paragraph">
          <code class="u-code">.o-grid__cell--top</code>, <code class="u-code">.o-grid__cell--center</code> and{' '}
          <code class="u-code">.o-grid__cell--bottom</code> are supported.
        </p>

        <blaze-demo
          language="html"
          code={`<div class="o-grid o-grid--bottom o-grid--demo">
  <div class="o-grid__cell o-grid__cell--top">
    <div class="o-grid-text">first</div>
  </div>
  <div class="o-grid__cell o-grid__cell--center">
    <div class="o-grid-text">second</div>
  </div>
  <div class="o-grid__cell">
    <div class="o-grid-text">third</div>
  </div>
  <div class="o-grid__cell">
    <div class="o-grid-text">fourth
      <br/>fourth
      <br/>fourth
      <br/>fourth
      <br/>fourth
      <br/>
    </div>
  </div>
</div>`}
        />

        <h2 id="responsiveness" class="c-heading u-xlarge">
          Responsiveness
        </h2>
        <p class="c-paragraph">
          The grid can be instructed to go full width at certain break points to maximise the screen space and help
          produce great user experiences on all sorts of devices.
        </p>
        <p class="c-paragraph">
          The grid has a <span class="loud">fit</span> or <span class="loud">full</span> class modifier that is used at
          different screen sizes.
        </p>
        <p class="c-paragraph">
          <code class="u-code">{`.o-grid--{small | medium | large}-{fit | full}`}</code>
        </p>

        <blaze-demo
          language="html"
          code={`<div class="o-grid o-grid--small-full o-grid--medium-fit o-grid--large-full o-grid--demo">
    <div class="o-grid__cell">
      <div class="o-grid-text">first</div>
    </div>
    <div class="o-grid__cell">
      <div class="o-grid-text">second</div>
    </div>
    <div class="o-grid__cell">
      <div class="o-grid-text">third</div>
    </div>
  </div>`}
        />

        <p class="c-paragraph">
          The above example will display the cells full width for small and large size screens. For medium screens the
          cells will adjust to fit the available space. Try it out, either resize your browser or rotate your phone into
          landscape.
        </p>

        <h2 id="responsive-suffixes" class="c-heading u-xlarge">
          Responsive Suffixes
        </h2>
        <p class="c-paragraph">
          As well as grid level responsiveness you also have control over the cells within a grid.
        </p>
        <p class="c-paragraph">
          Individual cells can change width at specific break points by using{' '}
          <a
            href="http://csswizardry.com/2015/08/bemit-taking-the-bem-naming-convention-a-step-further/#responsive-suffixes"
            class="c-link">
            responsive suffixes
          </a>
          .
        </p>

        <blaze-demo
          language="html"
          code={`<div class="o-grid o-grid--wrap o-grid--demo">
  <div class="o-grid__cell o-grid__cell--width-100 o-grid__cell--width-33@small">
    <div class="o-grid-text">small</div>
  </div>
  <div class="o-grid__cell o-grid__cell--width-100 o-grid__cell--width-33@medium">
    <div class="o-grid-text">medium</div>
  </div>
  <div class="o-grid__cell o-grid__cell--width-100 o-grid__cell--width-33@large">
    <div class="o-grid-text">large</div>
  </div>
</div>`}
        />

        <p class="c-paragraph">
          As the viewport increases in size the cells go from 100% wide to 33% wide one after another, rather than all
          at once.
        </p>
        <p class="c-paragraph">
          The suffixes apply to the screen sizes <em class="u-text--loud">and up</em>, in a mobile first manner. In
          other words:
        </p>
        <p class="paragraph u-text--mono">
          Set cell width to 33% when screen width is greater than or equal to xsmall | small | medium | large | xlarge |
          super
        </p>

        <h2 id="gutters" class="c-heading u-xlarge">
          Gutters
        </h2>
        <p class="c-paragraph">Blaze's grid comes with a gutter around each grid cell; some padding either side.</p>
        <p class="c-paragraph">
          Sometimes you want your cells to be flush with each other. To turn off all gutters use{' '}
          <code class="u-code">.o-grid--no-gutter</code>
        </p>

        <blaze-demo
          language="html"
          code={`<div class="o-grid o-grid--no-gutter o-grid--demo">
  <div class="o-grid__cell">
    <div class="o-grid-text">first</div>
  </div>
  <div class="o-grid__cell">
    <div class="o-grid-text">second</div>
  </div>
  <div class="o-grid__cell">
    <div class="o-grid-text">third</div>
  </div>
</div>`}
        />

        <p class="c-paragraph">
          ...or cell specific <code class="u-code">.o-grid__cell--no-gutter</code>
        </p>

        <blaze-demo
          language="html"
          code={`<div class="o-grid o-grid--demo">
  <div class="o-grid__cell">
    <div class="o-grid-text">first</div>
  </div>
  <div class="o-grid__cell">
    <div class="o-grid-text">second</div>
  </div>
  <div class="o-grid__cell o-grid__cell--no-gutter">
    <div class="o-grid-text">third</div>
  </div>
</div>`}
        />

        <h2 id="fixed-widths" class="c-heading u-xlarge">
          Fixed widths
        </h2>
        <p class="c-paragraph">
          Usually cells in a grid will be <em class="u-text--loud">fluid and responsive</em>. If however you want to set
          a cell to a fixed width add the <code class="u-code">.o-grid__cell--width-fixed</code> modifier and give it a
          specific width.
        </p>

        <blaze-demo
          language="html"
          code={`<div class="o-grid o-grid--demo">
  <div class="o-grid__cell">
    <div class="o-grid-text">first</div>
  </div>
  <div class="o-grid__cell o-grid__cell--width-fixed" style={{width: '250px'}}>
    <div class="o-grid-text">static width of 250px</div>
  </div>
  <div class="o-grid__cell">
    <div class="o-grid-text">third</div>
  </div>
</div>`}
        />
      </page-template>
    );
  }
}
