import { TestWindow } from '@stencil/core/testing';
import { Breadcrumbs } from './blaze-breadcrumbs';
import { Breadcrumb } from './blaze-breadcrumb';

describe('Breadcrumbs', () => {
  it('should build', () => {
    expect(new Breadcrumbs()).toBeTruthy();
    expect(new Breadcrumb()).toBeTruthy();
  });

  let element;

  const snapIt = (name, html) => {
    it(name, async () => {
      const window = new TestWindow();
      element = await window.load({
        components: [Breadcrumbs, Breadcrumb],
        html
      });
      window.flush();

      expect(element).toMatchSnapshot();
    });
  };

  snapIt(
    'nothing is rendered with no crumbs',
    '<blaze-breadcrumbs></blaze-breadcrumbs>'
  );

  snapIt(
    'one crumb',
    `<blaze-breadcrumbs>
      <blaze-breadcrumb>Home</blaze-breadcrumb>
    </blaze-breadcrumbs>`
  );

  snapIt(
    'two crumbs with a separator',
    `<blaze-breadcrumbs>
      <blaze-breadcrumb>Home</blaze-breadcrumb>
      <blaze-breadcrumb>Sub-section</blaze-breadcrumb>
    </blaze-breadcrumbs>`
  );

  snapIt(
    'linked crumb',
    `<blaze-breadcrumbs>
      <blaze-breadcrumb href="home.html">Home</blaze-breadcrumb>
      <blaze-breadcrumb href="another-page.html">Another page</blaze-breadcrumb>
      <blaze-breadcrumb>Sub-section</blaze-breadcrumb>
    </blaze-breadcrumbs>`
  );
});
