import { FormControl } from '@angular/forms';

// custom validator to check that two fields match
export function validateMinFactory(min: number) {
  return (formControl: FormControl) => {
    const value = formControl.value;
    // return null if controls haven't initialised yet
    if (value && value >= min) {
      return null;
    }

    // set error on matchingControl if validation fails
    return { minValidator: true };
  };
}
