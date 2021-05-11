import { StateService } from './../../services/state.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Name, User, Location } from 'src/app/models';
import { UserService } from 'src/app/services';

@Component({
  selector: 'user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss'],
})
export class UserDetailComponent implements OnInit {
  userForm: FormGroup;
  user: User;
  isUpdating: boolean = false;
  states: string[] = [];
  get firstName(): FormControl {
    return this.userForm.get('firstName') as FormControl;
  }
  get lastName(): FormControl {
    return this.userForm.get('lastName') as FormControl;
  }
  get address1(): FormControl {
    return this.userForm.get('address1') as FormControl;
  }
  get address2(): FormControl {
    return this.userForm.get('address2') as FormControl;
  }
  get city(): FormControl {
    return this.userForm.get('city') as FormControl;
  }
  get state(): FormControl {
    return this.userForm.get('state') as FormControl;
  }
  get zip(): FormControl {
    return this.userForm.get('zip') as FormControl;
  }
  get phoneNumber(): FormControl {
    return this.userForm.get('phoneNumber') as FormControl;
  }
  constructor(
    private userService: UserService,
    private router: Router,
    private stateService: StateService
  ) {}

  ngOnInit() {
    this.user = this.userService.selectedUser;
    if (!this.user) {
      this.router.navigate(['/']);
    } else {
      this.initializeForm();
    }
  }

  initializeForm = () => {
    const address1 = `${this.user.location.street.number} ${this.user.location.street.name}`;
    this.states = this.stateService.getStates();
    const stateValue = this.states.filter(
      (x) => x.toLowerCase() === this.user.location.state.toLowerCase()
    );
    this.userForm = new FormGroup({
      firstName: new FormControl(
        { value: this.user.name.first, disabled: true },
        Validators.required
      ),
      lastName: new FormControl(
        { value: this.user.name.last, disabled: true },
        Validators.required
      ),
      address1: new FormControl(
        { value: address1, disabled: true },
        Validators.required
      ),
      address2: new FormControl({ value: '', disabled: true }),
      city: new FormControl(
        { value: this.user.location.city, disabled: true },
        Validators.required
      ),
      state: new FormControl(
        { value: stateValue, disabled: true },
        Validators.required
      ),
      zip: new FormControl(
        { value: this.user.location.postcode, disabled: true },
        Validators.required
      ),
      phoneNumber: new FormControl(
        { value: this.user.phone, disabled: true },
        Validators.required
      ),
    });
  };

  enableForm = () => {
    this.isUpdating = true;
    this.userForm.enable();
  };

  disableForm = () => {
    this.isUpdating = false;
    this.userForm.disable();
    this.initializeForm();
  };

  submitForm = () => {
    if (this.userForm.valid) {
      //Nothing being submitted
      console.log(this.userForm.value);
    }
    this.router.navigate(['/update-success']);
  };
}
