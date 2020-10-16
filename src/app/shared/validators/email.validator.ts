import { FormControl } from '@angular/forms';
import { ValidationService } from '../services/validation.service';

// custom validator to check that two fields match
export function validateEmailFactory() {
  return (formControl: FormControl) => {
    // return null if controls haven't initialised yet
    if (!formControl.value) {
      return null;
    }

    // set error on matchingControl if validation fails
    return ValidationService.emailValidator(formControl);
  };
}
