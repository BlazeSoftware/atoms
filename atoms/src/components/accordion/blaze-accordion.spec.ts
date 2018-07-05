import { TestWindow } from '@stencil/core/testing';
import { Accordion } from './blaze-accordion';
import { AccordionPane } from './blaze-accordion-pane';

describe('Accordion', () => {
  it('should build', () => {
    expect(new Accordion()).toBeTruthy();
    expect(new AccordionPane()).toBeTruthy();
  });

  describe('renders', () => {
    let element;

    const snapIt = (name, html) => {
      it(name, async () => {
        const window = new TestWindow();
        element = await window.load({
          components: [Accordion, AccordionPane],
          html
        });
        window.flush();

        expect(element).toMatchSnapshot();
      });
    };

    snapIt(
      'an emtpy accordion',
      `<blaze-accordion></blaze-accordion>`
    );

    snapIt(
      'two headers and two panes',
      `<blaze-accordion>
        <blaze-accordion-pane header="Click me">
          This is an accordion
        </blaze-accordion-pane>
        <blaze-accordion-pane header="Click me also">
          To toggle other panes
          </blaze-accordion-pane>
      </blaze-accordion>`
    );
  });

  it('headers open panes', async () => {
    const window = new TestWindow();
    const element = await window.load({
      components: [Accordion, AccordionPane],
      html: `<blaze-accordion>
              <blaze-accordion-pane header="Click me">
                This is an accordion
              </blaze-accordion-pane>
              <blaze-accordion-pane header="Click me also">
                To toggle other panes
                </blaze-accordion-pane>
            </blaze-accordion>`
    });
    window.flush();

    element.querySelector('blaze-accordion-pane').show();
    window.flush();

    expect(element).toMatchSnapshot();
  });

  it('headers close panes', async () => {
    const window = new TestWindow();
    const element = await window.load({
      components: [Accordion, AccordionPane],
      html: `<blaze-accordion>
              <blaze-accordion-pane header="Click me">
                This is an accordion
              </blaze-accordion-pane>
              <blaze-accordion-pane header="Click me also">
                To toggle other panes
                </blaze-accordion-pane>
            </blaze-accordion>`
    });
    window.flush();

    element.querySelector('blaze-accordion-pane').show();
    window.flush();

    element.querySelector('blaze-accordion-pane').close();
    window.flush();

    expect(element).toMatchSnapshot();
  });

  it('clicking a header opens the pane', async () => {
    const window = new TestWindow();
    const element = await window.load({
      components: [Accordion, AccordionPane],
      html: `<blaze-accordion>
              <blaze-accordion-pane header="Click me">
                This is an accordion
              </blaze-accordion-pane>
              <blaze-accordion-pane header="Click me also">
                To toggle other panes
                </blaze-accordion-pane>
            </blaze-accordion>`
    });
    window.flush();

    expect(element.querySelector('blaze-accordion-pane').isOpen()).toEqual(false);


    element.querySelector('blaze-accordion-pane button').click();
    window.flush();

    expect(element.querySelector('blaze-accordion-pane').isOpen()).toEqual(true);
  });

  it('triggers onToggle event', async (done) => {
    const window = new TestWindow();
    const element = await window.load({
      components: [Accordion, AccordionPane],
      html: `<blaze-accordion>
              <blaze-accordion-pane header="Click me">
                This is an accordion
              </blaze-accordion-pane>
              <blaze-accordion-pane header="Click me also">
                To toggle other panes
                </blaze-accordion-pane>
            </blaze-accordion>`
    });
    window.flush();

    element.addEventListener('onToggle', ({ detail }) => {
      try {
        expect(detail.open).toBe(true);
        expect(detail.pane).toEqual(element.querySelector('blaze-accordion-pane'));
        expect(detail.idx).toEqual(0);
        done();
      } catch (err) {
        done.fail(err);
      }
    });

    element.querySelector('blaze-accordion-pane button').click();
  });
});
