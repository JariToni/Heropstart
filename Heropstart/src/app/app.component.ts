import { Component } from '@angular/core';
import { HomeComponent } from './component/home/home.component';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl:  "./app.component.html",
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Home';

}
