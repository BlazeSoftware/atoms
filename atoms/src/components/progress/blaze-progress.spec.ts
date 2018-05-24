import { TestWindow } from '@stencil/core/testing';
import { Progress } from './blaze-progress';

describe('Progress', () => {
  it('should build', () => {
    expect(new Progress()).toBeTruthy();
  });

  let element;

  const snapIt = (name, html) => {
    it(name, async () => {
      const window = new TestWindow();
      element = await window.load({
        components: [Progress],
        html
      });
      window.flush();

      expect(element).toMatchSnapshot();
    });
  };


  snapIt(
    'renders basic progress bar',
    '<blaze-progress percentage="5">5%</blaze-progress>'
  );

  snapIt(
    'renders size correctly',
    '<blaze-progress size="small" percentage="15">15%</blaze-progress>'
  );

  snapIt(
    'renders type correctly',
    '<blaze-progress size="medium" type="info" percentage="20">20%</blaze-progress>'
  );

  snapIt(
    'renders rounded ends correctly',
    '<blaze-progress size="large" type="success" percentage="25" rounded>25%</blaze-progress>'
  );
});
