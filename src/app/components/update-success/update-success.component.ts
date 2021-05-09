import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-success',
  templateUrl: './update-success.component.html',
  styleUrls: ['./update-success.component.scss'],
})
export class UpdateSuccessComponent {
  constructor(private router: Router) {}

  done = () => {
    this.router.navigate(['/']);
  };
}
