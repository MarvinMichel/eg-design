import { newSpecPage } from '@stencil/core/testing';
import { DarkmodeToggle } from '../darkmode-toggle';

describe('eg-darkmode-toggle', () => {
  it('render default', async () => {
    const page = await newSpecPage({
      components: [DarkmodeToggle],
      html: `<eg-darkmode-toggle />`,
    });
    expect(page.root).toEqualHtml(`
      <eg-darkmode-toggle>
        <mock:shadow-root>
          <button aria-labelledby="toggleLabel">
            <span class="sr-label" id="toggleLabel">darkmode theme, off</span>
            <span id="knob" part="knob" aria-hidden="true">
              <slot name="iconIdle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <circle cx="12" cy="12" r="5"></circle>
                  <line x1="12" y1="1" x2="12" y2="3"></line>
                  <line x1="12" y1="21" x2="12" y2="23"></line>
                  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                  <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                  <line x1="1" y1="12" x2="3" y2="12"></line>
                  <line x1="21" y1="12" x2="23" y2="12"></line>
                  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                  <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
                </svg>
              </slot>
            </span>
          </button>
        </mock:shadow-root>
      </eg-darkmode-toggle>
    `);
    page.setContent = async () => await `<eg-darkmode-toggle active />`;
  });

  it('render custom label', async () => {
    const page = await newSpecPage({
      components: [DarkmodeToggle],
      html: `<eg-darkmode-toggle label="This is a different label" />`,
    });
    expect(page.root).toEqualHtml(`
      <eg-darkmode-toggle label="This is a different label">
        <mock:shadow-root>
          <button aria-labelledby="toggleLabel">
            <span class="sr-label" id="toggleLabel">This is a different label, off</span>
            <span id="knob" part="knob" aria-hidden="true">
              <slot name="iconIdle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <circle cx="12" cy="12" r="5"></circle>
                  <line x1="12" y1="1" x2="12" y2="3"></line>
                  <line x1="12" y1="21" x2="12" y2="23"></line>
                  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                  <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                  <line x1="1" y1="12" x2="3" y2="12"></line>
                  <line x1="21" y1="12" x2="23" y2="12"></line>
                  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                  <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
                </svg>
              </slot>
            </span>
          </button>
        </mock:shadow-root>
      </eg-darkmode-toggle>
    `);
  });

  it('render custom idle icon', async () => {
    const page = await newSpecPage({
      components: [DarkmodeToggle],
      html: `
        <eg-darkmode-toggle>
          <svg slot="iconIdle" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><circle cx="12" cy="12" r="3" /><path d="M6 6h3.5l2.5 -2.5l2.5 2.5h3.5v3.5l2.5 2.5l-2.5 2.5v3.5h-3.5l-2.5 2.5l-2.5 -2.5h-3.5v-3.5l-2.5 -2.5l2.5 -2.5z" /></svg>
          <svg slot="iconActive" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z" />
</svg>
        </eg-darkmode-toggle>
      `,
    });
    expect(page.root).toEqualHtml(`
      <eg-darkmode-toggle>
        <mock:shadow-root>
          <button aria-labelledby="toggleLabel">
            <span class="sr-label" id="toggleLabel">darkmode theme, off</span>
            <span id="knob" part="knob" aria-hidden="true">
              <slot name="iconIdle">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>
              </slot>
            </span>
          </button>
        </mock:shadow-root>
        <svg slot="iconIdle" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><circle cx="12" cy="12" r="3" /><path d="M6 6h3.5l2.5 -2.5l2.5 2.5h3.5v3.5l2.5 2.5l-2.5 2.5v3.5h-3.5l-2.5 2.5l-2.5 -2.5h-3.5v-3.5l-2.5 -2.5l2.5 -2.5z" /></svg>
        <svg slot="iconActive" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z" />
      </eg-darkmode-toggle>
    `);
  });
});
