import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/models';
import { UserService } from 'src/app/services';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  users: Observable<User[]>;
  constructor(private userService: UserService) {
    this.users = this.userService.getSeededUserSet();
  }

}
