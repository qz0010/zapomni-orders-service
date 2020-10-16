import { parsePhoneNumberFromString } from 'libphonenumber-js';

export class ValidationService {

  static emailValidator(control) {
    // RFC 2822 compliant regex
    if (
      control.value.match(
        /[a-zA-Z0-9!#$%&'*+\/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+\/=?^_`{|}~-]+)*@(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])$/
      )
    ) {
      return null;
    } else {
      return { invalidEmailAddress: true };
    }
  }

  static phoneValidator(control) {
    if (control.value) {
      const value = ValidationService.trimPhone(control.value);
      const parsedValue = parsePhoneNumberFromString(value);

      return parsedValue && parsedValue.isValid() ? null : { invalidPhoneValidator: true };
    }
  }

  static trimPhone(value: string) {
    return value
      .replace(/[^\+\d]/g, '')
      .replace(/^8/, '+7')
      .replace(/^9/, '+79')
      .replace(/^([^+])/, '+$1');
  }
}
