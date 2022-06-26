import { newE2EPage } from '@stencil/core/testing';

describe('eg-darkmode-toggle', () => {
  it('default render', async () => {
    const page = await newE2EPage();
    await page.setContent('<eg-darkmode-toggle></eg-darkmode-toggle>');

    const element = await page.find('eg-darkmode-toggle');
    const button = await page.find('eg-darkmode-toggle >>> button');
    const label = await page.find('eg-darkmode-toggle >>> span#toggleLabel');
    const knob = await page.find('eg-darkmode-toggle >>> span#knob');

    expect(element).toHaveClass('hydrated');
    expect(button).toHaveAttribute('aria-labelledby');
    expect(label).toHaveClass('sr-label');
    expect(knob).toHaveAttribute('aria-hidden');
  });
});
