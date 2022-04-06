import { Component, Prop, h, State, Listen, Host, Watch } from '@stencil/core';

@Component({
  tag: 'eg-darkmode-toggle',
  styleUrl: 'darkmode-toggle.scss',
  shadow: true,
})
export class DarkmodeToggle {

  @Prop({ mutable: true, reflect: true })
  active: boolean;

  @Prop()
  label: string = 'Darkmode theme';

  @State()
  activated: boolean;

  @Watch('activated')
  watchStateHandler(newValue: boolean) {
    this.active = newValue;
  }

  @Listen('click')
  toggleTheme() {
    this.activated = !this.activated;
    document.documentElement.setAttribute('data-theme', this.activated ? 'dark' : 'light');
  }

  componentWillLoad() {
    this.active = false;
  }

  render() {
    return (
      <Host active={`${this.active}`}>
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
