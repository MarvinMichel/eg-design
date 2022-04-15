import { Component, Prop, h, Listen, Host, Watch } from '@stencil/core';

@Component({
  tag: 'eg-darkmode-toggle',
  styleUrl: 'darkmode-toggle.scss',
  shadow: true,
})
export class DarkmodeToggle {
  @Prop()
  label: string = 'Darkmode theme';

  @Prop({ mutable: true, reflect: true })
  active: boolean;

  @Watch('active')
  watchStateHandler(newValue: boolean) {
    document.documentElement.setAttribute('data-theme', newValue ? 'dark' : 'light');
  }

  @Listen('click')
  toggleActive() {
    this.active = !this.active;
  }

  componentWillLoad() {
    const savedTheme = JSON.parse(localStorage.getItem('darkmode'));
    const prefersDarkmode = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (savedTheme) {
      this.active = savedTheme;
      return;
    }

    this.active = prefersDarkmode;
  }

  render() {
    return (
      <Host active={`${this.active}`}>
        <button role="switch" aria-labelledby="toggleLabel" aria-checked={`${this.active}`}>
          <span class="sr-label" id="toggleLabel">
            {this.label}
          </span>
          <span id="toggle" part="toggle" aria-hidden="true">
            {!this.active ? (
              <slot key="a" name="iconIdle">
                <img src="/images/sun.svg" alt="" role="icon" />
              </slot>
            ) : (
              <slot key="b" name="iconActive">
                <img src="/images/moon.svg" alt="" role="icon" />
              </slot>
            )}
          </span>
        </button>
      </Host>
    );
  }
}
