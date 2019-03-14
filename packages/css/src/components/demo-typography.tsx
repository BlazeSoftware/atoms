import { Component } from '@stencil/core';

@Component({
  tag: 'demo-typography',
})
export class Typography {
  render() {
    return (
      <section class="u-window-box-super">
        <h2 class="c-heading">Typography</h2>
        <h3 class="c-heading">Body text</h3>
        <p class="u-paragraph">
          This is a paragraph{' '}
          <a class="c-link" href="#">
            with a link in it
          </a>
          . It has a bit of margin bottom.
        </p>
        <p class="u-paragraph">
          so that subsequent paragraphs don't look bunched up. Also{' '}
          <span role="link" class="c-link">
            this isn't really a link
          </span>
          .
        </p>
        <p class="u-paragraph">
          If you ever need to <span class="u-text--highlight">highlight some text</span> wrap the highlight class around
          it, and
          <span class="u-text--quiet">
            if you want to speak quietly use the <span class="u-text--quiet">quite class</span>
          </span>
          . Don't you think{' '}
          <abbr title="Cascading StyleSheets" class="u-text--help">
            CSS
          </abbr>{' '}
          is awesome?! <span class="u-text--loud">We think so!</span>
        </p>
        <p class="u-paragraph">
          Make a button
          <button class="c-button c-button--nude" type="button">
            nude
          </button>{' '}
          when you want it to look like text.
        </p>
        <address class="c-address">
          <span class="c-address__heading">Addresses</span>
          10010 The Street,
          <br /> Binary Town,
          <br /> Offandon City,
          <br />
          <abbr class="u-text--help" title="Postcode">
            CPU01
          </abbr>
        </address>
        <blockquote class="u-blockquote">
          <p class="u-blockquote__body">
            Energy is inversely equal to the number of children you have multiplied by how young they are!
          </p>
          <footer class="u-blockquote__footer">- Every parent everywhere</footer>
        </blockquote>
        <blockquote class="u-blockquote u-blockquote--brand">
          <p class="u-blockquote__body">
            Energy is inversely equal to the number of children you have multiplied by how young they are!
          </p>
          <footer class="u-blockquote__footer">- Every parent everywhere</footer>
        </blockquote>
        <blockquote class="u-blockquote u-blockquote--info">
          <p class="u-blockquote__body">
            Energy is inversely equal to the number of children you have multiplied by how young they are!
          </p>
          <footer class="u-blockquote__footer">- Every parent everywhere</footer>
        </blockquote>
        <blockquote class="u-blockquote u-blockquote--warning">
          <p class="u-blockquote__body">
            Energy is inversely equal to the number of children you have multiplied by how young they are!
          </p>
          <footer class="u-blockquote__footer">- Every parent everywhere</footer>
        </blockquote>
        <blockquote class="u-blockquote u-blockquote--success">
          <p class="u-blockquote__body">
            Energy is inversely equal to the number of children you have multiplied by how young they are!
          </p>
          <footer class="u-blockquote__footer">- Every parent everywhere</footer>
        </blockquote>
        <blockquote class="u-blockquote u-blockquote--error">
          <p class="u-blockquote__body">
            Energy is inversely equal to the number of children you have multiplied by how young they are!
          </p>
          <footer class="u-blockquote__footer">- Every parent everywhere</footer>
        </blockquote>
        <p class="u-paragraph">
          Need to write some code? You can <span class="u-code">console.log('write it inline');</span> or if you want:
        </p>
        <div class="u-code u-code--multiline">
          {`(demo = () => {alert('you can write code on multiple lines!')}
            )()`}
        </div>
        <p class="u-paragraph">
          To format your code press <span class="u-kbd">ctrl + alt + l</span>
        </p>
      </section>
    );
  }
}
