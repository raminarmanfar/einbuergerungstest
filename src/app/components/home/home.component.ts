import {Component} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  menuItems = [
    {label: 'all-tests', icon: 'subject'},
    {label: 'state-tests', icon: 'location_city'},
    {label: 'demo-all-tests', icon: 'book_2'},
    {label: 'sample-demo-test', icon: 'add_task'},
    {label: 'about-me', icon: 'info'}
  ];
}
