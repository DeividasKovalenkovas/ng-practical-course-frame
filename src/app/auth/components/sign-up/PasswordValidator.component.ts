
import { FormGroup } from '@angular/forms';

export class PasswordValidator {
  static validate(signUpForm: FormGroup) {
    const password = signUpForm.controls.password.value;
    const confirmPassword = signUpForm.controls.confirmPassword.value;

    if (confirmPassword.length <= 0) {
      return null;
    }

    if (confirmPassword !== password) {
      console.log('Validating passwords>  ' + confirmPassword + ' ' + password);
      console.log('Are they equal  >  ' + confirmPassword === password);
      return {
        doesMatchPassword: true
      };
    }

    return null;

  }
}
