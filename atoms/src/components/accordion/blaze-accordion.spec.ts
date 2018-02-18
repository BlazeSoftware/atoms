import { flush, render } from '@stencil/core/testing';
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
        element = await render({
          components: [Accordion, AccordionPane],
          html
        });
        await flush(element);

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
    const element = await render({
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
    await flush(element);

    element.querySelector('blaze-accordion-pane').show();
    await flush(element);

    expect(element).toMatchSnapshot();
  });

  it('headers close panes', async () => {
    const element = await render({
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
    await flush(element);

    element.querySelector('blaze-accordion-pane').show();
    await flush(element);

    element.querySelector('blaze-accordion-pane').close();
    await flush(element);

    expect(element).toMatchSnapshot();
  });

  it('clicking a header opens the pane', async () => {
    const element = await render({
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
    await flush(element);

    expect(element.querySelector('blaze-accordion-pane').isOpen()).toEqual(false);


    element.querySelector('blaze-accordion-pane div').click();
    await flush(element);

    expect(element.querySelector('blaze-accordion-pane').isOpen()).toEqual(true);
  });
});
