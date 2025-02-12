// import { Component, EventEmitter, Input, Output } from '@angular/core';

// @Component({
//   selector: 'app-button',
//   standalone: true,
//   imports: [],
//   template: './button.component.html',
//   styleUrls: ['./button.component.css'],
// })
// export class ButtonComponent {
//   @Input() label: string = 'Button';
//   @Input() backgroundColor: string = '#1D4ED8'; // Màu nền mặc định
//   @Output() onClick = new EventEmitter<Event>();
// }


import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'storybook-button',
  standalone: true,
  imports: [CommonModule],
  template: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent {
  /** Is this the principal call to action on the page? */
  @Input()
  primary = false;

  /** What background color to use */
  @Input()
  backgroundColor?: string = '#1D4ED8';

  /** How large should the button be? */
  @Input()
  size: 'small' | 'medium' | 'large' = 'medium';

  /**
   * Button contents
   *
   * @required
   */
  @Input()
  label = 'Button';

  /** Optional click handler */
  @Output()
  onClick = new EventEmitter<Event>();

  public get classes(): string[] {
    const mode = this.primary ? 'storybook-button--primary' : 'storybook-button--secondary';

    return ['storybook-button', `storybook-button--${this.size}`, mode];
  }
}
