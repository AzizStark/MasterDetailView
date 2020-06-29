import { Component } from '@angular/core';
// import "@angular/material/prebuilt-themes/indigo-pink.css";

@Component({
  selector: 'angular-core-workshop-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
  
export class AppComponent {
  title = 'master-detail-view';
  links = [
    { path: '/', icon: 'home', title: 'Home' },
    { path: '/projects', icon: 'note', title: 'Projects' },
    { path: '/customers', icon: 'face', title: 'Customers' },
  ]
}
