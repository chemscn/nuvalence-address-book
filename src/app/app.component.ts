import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './models';
import { UserService } from './services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'nv-address-book';
  contacts: Observable<User[]>;
  constructor(private userService: UserService) {
    this.contacts = this.userService.getSeededUserSet();
  }
}
