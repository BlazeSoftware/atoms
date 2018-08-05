import { TestWindow } from '@stencil/core/dist/testing';
import { Tabs } from './blaze-tabs';
import { Tab } from './blaze-tab';

describe('Tabs', () => {
  it('should build', () => {
    expect(new Tabs()).toBeTruthy();
  });

  let element;

  const snapIt = (name, html) => {
    it(name, async () => {
      const window = new TestWindow();
      element = await window.load({
        components: [Tabs],
        html
      });
      window.flush();

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
    const window = new TestWindow();
      element = await window.load({
      components: [Tabs, Tab],
      html: `<blaze-tabs type="brand">
      <blaze-tab header="Tab one">This is tab one</blaze-tab>
      <blaze-tab header="Tab two" open>This is tab two</blaze-tab>
    </blaze-tabs>`
    });
    window.flush();

    expect(element.currentTab()).toEqual(1);
  });

  it('switches tabs', async () => {
    const window = new TestWindow();
      element = await window.load({
      components: [Tabs, Tab],
      html: `<blaze-tabs type="brand">
      <blaze-tab header="Tab one" open>This is tab one</blaze-tab>
      <blaze-tab header="Tab two">This is tab two</blaze-tab>
    </blaze-tabs>`
    });
    window.flush();
    expect(element.currentTab()).toEqual(0);

    element.openTab(1);
    window.flush();

    expect(element.currentTab()).toEqual(1);
  });

  it('switches tabs by clicking on them', async () => {
    const window = new TestWindow();
    element = await window.load({
      components: [Tabs, Tab],
      html: `<blaze-tabs type="brand">
      <blaze-tab header="Tab one">This is tab one</blaze-tab>
      <blaze-tab header="Tab two" open>This is tab two</blaze-tab>
    </blaze-tabs>`
    });
    window.flush();
    expect(element.currentTab()).toEqual(1);

    element.querySelector('.c-tab-heading').click();
    window.flush();

    expect(element.currentTab()).toEqual(0);
  });

  it('triggers onSwitch event', async (done) => {
    const window = new TestWindow();
    element = await window.load({
      components: [Tabs, Tab],
      html: `<blaze-tabs type="brand">
      <blaze-tab header="Tab one">This is tab one</blaze-tab>
      <blaze-tab header="Tab two" open>This is tab two</blaze-tab>
    </blaze-tabs>`
    });
    window.flush();

    element.addEventListener('onSwitch', ({ detail }) => {
      try {
        expect(element.currentTab()).toEqual(0);
        expect(detail.idx).toEqual(0);
        expect(detail.tab).toEqual(element.querySelector('blaze-tab'));
        done();
      } catch (err) {
        done.fail(err);
      }
    });

    expect(element.currentTab()).toEqual(1);
    element.querySelector('.c-tab-heading').click();
  });
});
