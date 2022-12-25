import { Component } from '@angular/core';
import {LoginModel} from "../models/login.model";
import {AuthService} from "../auth.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent {
  public SignInForm = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.email
    ]),
    password: new FormControl('', Validators.required),
  });

  public get email(): FormControl {
    return this.SignInForm.get('email') as FormControl;
  }

  public get password(): FormControl {
    return this.SignInForm.get('password') as FormControl;
  }

  public isSignInFailed: boolean = false;

  constructor(
    private authService: AuthService
  ) {
  }

  public signin(): void {
    let model = new LoginModel();
    model.email = this.email.value;
    model.password = this.password.value;
    this.authService.login(model).subscribe((result) => {
      this.isSignInFailed = !result;
    });
  }
}
