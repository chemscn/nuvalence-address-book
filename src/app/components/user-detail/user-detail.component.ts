import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {
  userForm: FormGroup;
  constructor() {
    this.userForm = new FormGroup({
      firstName: new FormControl(''),
      lastName: new FormControl(''),
      address1: new FormControl(''),
      address2: new FormControl(''),
      city: new FormControl(''),
      state: new FormControl(''),
      zip: new FormControl(''),
    })
  }

  ngOnInit(): void {
  }

}
