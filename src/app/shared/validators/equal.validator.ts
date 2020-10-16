import { AbstractControl, FormControl, ValidatorFn } from '@angular/forms';
import set = Reflect.set;

// custom validator to check that two fields match
export function validateEqualFactory(anotherFormControlName: string, reverse = false): ValidatorFn {
  return ((formControl: AbstractControl) => {
    const anotherFormControl: AbstractControl = formControl.root.get(anotherFormControlName);
    if ((!formControl.value && !formControl.dirty) || !anotherFormControl) {
      return null;
    }
    // if (formControl.errors && !formControl.errors.equalValidator) {
    //   return null;
    // }
    if (
      (!reverse && formControl.value === anotherFormControl.value) ||
      (reverse && formControl.value !== anotherFormControl.value)
    ) {
      if (anotherFormControl.errors && anotherFormControl.errors.equalValidator) {
        setTimeout(() => {
          anotherFormControl.updateValueAndValidity();
        }, 1);
      }
      return null;
    } else if (anotherFormControl.dirty || anotherFormControl.value) {
      if (
        !anotherFormControl.errors ||
        !(anotherFormControl.errors && anotherFormControl.errors.equalValidator)
      ) {
        setTimeout(() => {
          anotherFormControl.updateValueAndValidity();
        }, 1);
      }
      return { equalValidator: true };
    }
    // formControl.setErrors(Object.keys(errors).length ? errors : null);
    // return null;
  }) as ValidatorFn;
}
