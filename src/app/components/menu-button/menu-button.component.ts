import {Component, EventEmitter, Input, Output} from '@angular/core';
import {MenuItemModel} from '../../models/menu-item.model';

@Component({
  selector: 'app-menu-button',
  templateUrl: './menu-button.component.html',
  styleUrls: ['./menu-button.component.scss']
})
export class MenuButtonComponent {

  @Input() data!: MenuItemModel;
  @Input() tooltipPosition: 'left' | 'right' | 'above' | 'below' | 'before' | 'after' = 'above';

  @Output() buttonClick = new EventEmitter<MenuItemModel>();
}
