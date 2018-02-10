import { flush, render } from '@stencil/core/testing';
import { Tabs } from './blaze-tabs';
import { Tab } from './blaze-tab';

describe('Tabs', () => {
  it('should build', () => {
    expect(new Tabs()).toBeTruthy();
  });

  let element;

  const snapIt = (name, html) => {
    it(name, async () => {
      element = await render({
        components: [Tabs],
        html
      });
      await flush(element);

      expect(element).toMatchSnapshot();
    });
  };

  snapIt(
    'renders correctly with no props',
    `<blaze-tabs>
      <blaze-tab>This is tab one</blaze-tab>
      <blaze-tab>This is tab two</blaze-tab>
    </blaze-tabs>`
  );

  snapIt(
    'renders correctly with props set',
    `<blaze-tabs type="brand">
      <blaze-tab header="Tab one" open>This is tab one</blaze-tab>
      <blaze-tab header="Tab two" disabled>This is tab two</blaze-tab>
    </blaze-tabs>`
  );

  it('returns current tab', async () => {
    element = await render({
      components: [Tabs, Tab],
      html: `<blaze-tabs type="brand">
      <blaze-tab header="Tab one">This is tab one</blaze-tab>
      <blaze-tab header="Tab two" open>This is tab two</blaze-tab>
    </blaze-tabs>`
    });
    await flush(element);

    expect(element.currentTab()).toEqual(1);
  });

  it('switches tabs', async () => {
    element = await render({
      components: [Tabs, Tab],
      html: `<blaze-tabs type="brand">
      <blaze-tab header="Tab one" open>This is tab one</blaze-tab>
      <blaze-tab header="Tab two">This is tab two</blaze-tab>
    </blaze-tabs>`
    });
    await flush(element);
    expect(element.currentTab()).toEqual(0);

    element.openTab(1);
    await flush(element);

    expect(element.currentTab()).toEqual(1);
  });

  it('switches tabs by clicking on them', async () => {
    element = await render({
      components: [Tabs, Tab],
      html: `<blaze-tabs type="brand">
      <blaze-tab header="Tab one">This is tab one</blaze-tab>
      <blaze-tab header="Tab two" open>This is tab two</blaze-tab>
    </blaze-tabs>`
    });
    await flush(element);
    expect(element.currentTab()).toEqual(1);

    element.querySelector('.c-tab-heading').click();
    await flush(element);

    expect(element.currentTab()).toEqual(0);
  });
});
