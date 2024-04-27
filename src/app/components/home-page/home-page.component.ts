import {Component} from '@angular/core';
import {MenuItemModel} from '../../models/menu-item.model';

@Component({
  selector: 'app-home',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {
  protected readonly menuItems: MenuItemModel[] = [
    {label: 'review-deutschland-questions', icon: 'flag', route: '/review-deutschland-questions'},
    {label: 'practice-deutschland-questions', icon: 'model_training', route: '/practice-deutschland-questions'},
    {label: 'review-states-questions', icon: 'account_balance', route: '/review-states-questions'},
    {label: 'demo-exams', icon: 'checklist', route: '/demo-exams-list'},
    {label: 'about-me', icon: 'contact_mail', route: '/about-me'}
  ];
}
