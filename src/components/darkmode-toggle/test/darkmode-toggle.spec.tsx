import { newSpecPage } from '@stencil/core/testing';
import { DarkmodeToggle } from '../darkmode-toggle';

describe('darkmode-toggle', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [DarkmodeToggle],
      html: `<darkmode-toggle></darkmode-toggle>`,
    });
    expect(page.root).toEqualHtml(`
      <darkmode-toggle>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </darkmode-toggle>
    `);
  });
});
