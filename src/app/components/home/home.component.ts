import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { finalize, switchMap, tap } from 'rxjs/operators';
import { User } from 'src/app/models';
import { UserService } from 'src/app/services';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  users: User[];
  userCount: number;
  nextSet: number;
  pageCount = 1;
  isLoading: boolean = true;
  subscriptions: Subscription = new Subscription();
  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.subscriptions.add(
      this.userService.queryUsers(this.pageCount).pipe(finalize(() => {
        this.isLoading = false;
      })).subscribe(response => {
        this.users = response;
      })
    )
  }

  nextPage = () => {
    this.pageCount++;
    this.isLoading = true;
    this.subscriptions.add(
      this.userService.queryUsers(this.pageCount).pipe(finalize(() => {
        this.isLoading = false;
      })).subscribe(response => {
        this.users = response;
      })
    )

  }

  lastPage = () => {
    this.pageCount--;
    this.isLoading = true;
    this.subscriptions.add(
      this.userService.queryUsers(this.pageCount).pipe(finalize(() => {
        this.isLoading = false;
      })).subscribe(response => {
        this.users = response;
      })
    )
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
}
