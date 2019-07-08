import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators, ReactiveFormsModule} from '@angular/forms';
import {first} from 'rxjs/internal/operators/first';
import {PasswordValidator} from './PasswordValidator.component';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  submitted = false;
  signUpForm: FormGroup;
  passwordForm: FormGroup;
  password: string;
  username: string;
  confirmPassword: string;
  @Output() signUpRequested = new EventEmitter<boolean>();
  @Output() isValidUsername = new EventEmitter<boolean>();



  constructor(private formBuilder: FormBuilder) {
    this.signUpForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(4)]],
      password: ['', Validators.required,  Validators.minLength(6)],
      confirmPassword: ['', Validators.required]
    }, {
      validator: PasswordValidator.validate.bind(this)
    });
  }

  ngOnInit() {
  }

  signUp(signUp: boolean) {
    this.signUpRequested.emit(signUp);
  }

  onSubmit() {
    this.submitted = true;
    this.signUpRequested.emit(true);
    if (this.signUpForm.invalid) {
      console.log('For is not valid  >  ');
      return;
    }
  }

}
