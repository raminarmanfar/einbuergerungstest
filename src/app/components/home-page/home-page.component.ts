import {Component} from '@angular/core';
import {MenuItemModel} from '../../models/menu-item.model';

@Component({
  selector: 'app-home',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {
  protected readonly menuItems: MenuItemModel[] = [
    {label: 'review-deutschland-tests', icon: 'flag', route: '/review-deutschland-tests'},
    {label: 'review-states-tests', icon: 'account_balance', route: '/review-states-tests'},
    {label: 'demo-exams', icon: 'checklist', route: '/demo-exams-list'},
    {label: 'about-me', icon: 'contact_mail', route: '/about-me'}
  ];
}
