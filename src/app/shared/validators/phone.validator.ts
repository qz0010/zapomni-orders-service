import { AbstractControl } from '@angular/forms';
import { parsePhoneNumberFromString } from 'libphonenumber-js';

// custom validator to check that two fields match
export function validatePhoneFactory(): (formControl: AbstractControl) => any {
  return (formControl: AbstractControl): { phoneValidator: boolean } | null => {
    if (!formControl.value) {
      return null;
    }
    const trimPhone = (value: string) => {
      return value
        .replace(/[^\+\d]/g, '')
        .replace(/^8/, '+7')
        .replace(/^9/, '+79')
        .replace(/^([^+])/, '+$1');
    };
    const phone = trimPhone(formControl.value);
    const parsedValue = parsePhoneNumberFromString(phone);

    if (parsedValue && parsedValue.isValid()) {
      return null;
    } else {
      return { phoneValidator: true };
    }
  };
}
