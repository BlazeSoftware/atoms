import { h, Component, Prop } from '@stencil/core';

@Component({
  tag: 'components-breadcrumbs',
})
export class ComponentsBreadcrumbs {
  @Prop()
  name: string;

  render() {
    return (
      <page-template name={this.name}>
        <p class="c-paragraph">Breadcrumbs are useful to indicate the navigational route into a website.</p>
        <blaze-demo
          language="html"
          code={`<blaze-breadcrumbs aria-label="Breadcrumbs">
  <blaze-breadcrumb href="/">Home</blaze-breadcrumb>
  <blaze-breadcrumb href="/">Cars</blaze-breadcrumb>
  <blaze-breadcrumb href="/">Electric</blaze-breadcrumb>
  <blaze-breadcrumb href="/">Tesla</blaze-breadcrumb>
  <blaze-breadcrumb>P100d</blaze-breadcrumb>
</blaze-breadcrumbs>`}
        />
        <h2 class="c-heading">CSS</h2>
        <blaze-demo
          language="html"
          code={`<nav aria-label="Breadcrumb">
  <ol class="c-breadcrumbs">
    <li class="c-breadcrumbs__crumb">
      <a class="c-link">Home</a>
    </li>
    <li class="c-breadcrumbs__crumb">
      <a class="c-link">Cars</a>
    </li>
    <li class="c-breadcrumbs__crumb">
      <a class="c-link">Electric</a>
    </li>
    <li class="c-breadcrumbs__crumb">
      <a class="c-link">Tesla</a>
    </li>
    <li class="c-breadcrumbs__crumb" aria-current="page">P100d</li>
  </ol>
</nav>`}
        />
      </page-template>
    );
  }
}
