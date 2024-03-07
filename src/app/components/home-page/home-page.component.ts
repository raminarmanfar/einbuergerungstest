import {Component} from '@angular/core';
import {MenuItemModel} from '../../models/menu-item.model';

@Component({
  selector: 'app-home',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {
  menuItems: MenuItemModel[] = [
    {label: 'review-deutschland-tests', icon: 'subject', route: '/review-deutschland-tests'},
    {label: 'review-states-tests', icon: 'location_city', route: '/review-states-tests'},
    {label: 'demo-exams', icon: 'book_2', route: '/demo-exams-list'},
    {label: 'about-me', icon: 'info', route: 'about-me'}
  ];
}
