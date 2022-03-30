import { Component, Prop, h, State, Listen, Host } from '@stencil/core';

@Component({
  tag: 'eg-darkmode-toggle',
  styleUrl: 'darkmode-toggle.scss',
  shadow: true,
})
export class DarkmodeToggle {
  @State()
  active: boolean;

  @Prop()
  label: string = 'Darkmode theme';

  @Listen('click')
  toggleTheme() {
    this.active = !this.active;
    document.documentElement.setAttribute('data-theme', this.active ? 'dark' : 'light');
  }

  componentWillLoad() {
    this.active = false;
  }

  render() {
    return (
      <Host aria-checked={`${this.active}`}>
        <button role="switch" aria-labelledby="toggleLabel" aria-checked={`${this.active}`}>
          <span class="sr-label" id="toggleLabel">
            {this.label}
          </span>
          <span id="toggle" part="toggle" aria-hidden="true">
            <div hidden={this.active}>
              <slot name="iconIdle">{'\u263C'}</slot>
            </div>
            <div hidden={!this.active}>
              <slot name="iconActive">{'\u263D'}</slot>
            </div>
          </span>
        </button>
      </Host>
    );
  }
}
