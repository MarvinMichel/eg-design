import { newE2EPage } from '@stencil/core/testing';

describe('darkmode-toggle', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<darkmode-toggle></darkmode-toggle>');

    const element = await page.find('darkmode-toggle');
    expect(element).toHaveClass('hydrated');
  });
});
