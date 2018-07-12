import { TestWindow } from '@stencil/core/testing';
import { Progress } from './blaze-progress';
import { ProgressBar } from './blaze-progress-bar';

describe('Progress', () => {
  it('should build', () => {
    expect(new Progress()).toBeTruthy();
    expect(new ProgressBar()).toBeTruthy();
  });

  describe('renders', () => {
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
      'basic progress bar',
      '<blaze-progress percentage="5">5%</blaze-progress>'
    );

    snapIt(
      'size correctly',
      '<blaze-progress size="small" percentage="15">15%</blaze-progress>'
    );

    snapIt(
      'type correctly',
      '<blaze-progress size="medium" type="info" percentage="20">20%</blaze-progress>'
    );

    snapIt(
      'rounded ends correctly',
      '<blaze-progress size="large" type="success" percentage="25" rounded>25%</blaze-progress>'
    );
  });

  it('triggers onChange event', async (done) => {
    const window = new TestWindow();
    const element = await window.load({
      components: [Progress, ProgressBar],
      html: `<blaze-progress>
              <blaze-progress-bar value="30">30</blaze-progress-bar>
            </blaze-progress>`
    });
    window.flush();

    element.addEventListener('onChange', ({ detail }) => {
      try {
        expect(detail.value).toBe(40);
        expect(detail.bar).toEqual(element.querySelector('blaze-progress-bar'));
        expect(detail.idx).toEqual(0);
        done();
      } catch (err) {
        done.fail(err);
      }
    });

    const progressBar = element.querySelector('blaze-progress-bar');
    expect(progressBar.value).toEqual(30);
    progressBar.value = 40;
  });
});
