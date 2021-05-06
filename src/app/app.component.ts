import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { RandomUsers, User } from './models';
import { UserService } from './services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'nv-address-book';
  subscriptions: Subscription = new Subscription();
  contacts: User[] = [];
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.subscriptions.add(
      this.userService.getSeededUserSet().subscribe((response: RandomUsers) => {
        this.contacts = response.results;
        console.log(this.contacts);
      })
    );
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();

  }
}
