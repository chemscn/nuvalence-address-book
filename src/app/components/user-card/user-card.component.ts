import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models';
import { UserService } from 'src/app/services';

@Component({
  selector: 'user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent {

  @Input() user: User;
  constructor(private userService: UserService, private router: Router) {

  }

  viewDetails = () => {
    this.userService.setSelectedUser(this.user);
    this.router.navigate(['/user-detail']);
  }

}
