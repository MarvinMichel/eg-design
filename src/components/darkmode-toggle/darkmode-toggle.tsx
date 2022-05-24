import { Component, Prop, h, Listen, Host, Watch } from '@stencil/core';

@Component({
  tag: 'eg-darkmode-toggle',
  styleUrl: 'darkmode-toggle.scss',
  shadow: true,
})
export class DarkmodeToggle {
  private startX: number;
  private newX: number;

  @Prop()
  label = 'Darkmode theme';

  @Prop({ mutable: true, reflect: true })
  active: boolean;

  @Prop({ reflect: true })
  iconOnly = false;

  @Watch('active')
  setHTMLDataTheme(newValue: boolean) {
    document.documentElement.setAttribute('data-theme', newValue ? 'dark' : 'light');
  }

  @Listen('click')
  toggleActive() {
    this.active = !this.active;
    localStorage.setItem('darkmode', JSON.stringify(this.active));
  }

  @Listen('touchstart')
  setStartCoordinate({ touches }: TouchEvent) {
    this.startX = touches[0].clientX;
  }

  @Listen('touchmove')
  swipeToggle({ touches }: TouchEvent) {
    this.newX = touches[0].clientX;

    if ((this.newX < this.startX && this.active) || (this.newX > this.startX && !this.active)) {
      this.toggleActive();
    }
  }

  componentWillLoad() {
    const savedTheme = localStorage.getItem('darkmode');
    const prefersDarkmode = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (savedTheme) {
      this.active = JSON.parse(savedTheme);
      return;
    }

    this.active = prefersDarkmode;
  }

  render() {
    return (
      <Host>
        <button aria-labelledby="toggleLabel">
          <span class="sr-label" id="toggleLabel">
            {this.label}, {this.active ? 'on' : 'off'}
          </span>
          <span id="toggle" part="toggle" aria-hidden="true">
            {!this.active ? (
              <slot key="a" name="iconIdle">
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
            ) : (
              <slot key="b" name="iconActive">
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
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                </svg>
              </slot>
            )}
          </span>
        </button>
      </Host>
    );
  }
}
