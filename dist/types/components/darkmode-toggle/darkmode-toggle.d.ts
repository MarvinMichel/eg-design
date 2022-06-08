export declare class DarkmodeToggle {
  private startX;
  private newX;
  /**
   * The label that's been read by screen readers
   */
  label: string;
  /**
   * The current state of the toggle button
   */
  active: boolean;
  /**
   * Only use an icon as the component instead of a toggle button
   */
  iconOnly: boolean;
  setHTMLDataTheme(newValue: boolean): void;
  toggleActive(): void;
  setStartCoordinate({ touches }: TouchEvent): void;
  swipeToggle({ touches }: TouchEvent): void;
  componentWillLoad(): void;
  render(): DarkmodeToggle;
}
