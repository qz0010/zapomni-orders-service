import { FormControl } from '@angular/forms';
import { isValid } from 'date-fns';

export function validateDt(value: string, separator = '-'): boolean {
  const [year, month, date] = value.split(separator);
  const dd = new Date(value);
  const p = v => parseInt(v, 10);
  const y = p(year);
  const m = p(month) - 1;
  const d = p(date);

  return (
    y > 1000 &&
    isValid(dd) &&
    dd.getFullYear() === y && dd.getMonth() === m && dd.getDate() === d &&
    !!value.match(new RegExp(`^\\d{4}${separator}\\d{2}${separator}\\d{2}`))
  );
}

export function validateDtFactory() {
  return (formControl: FormControl) => {
    if (!formControl.value) {
      return null;
    }

    if (formControl.errors && !formControl.errors.dtValidator) {
      return null;
    }

    if (validateDt(formControl.value)) {
      return null;
    } else {
      return { dtValidator: true };
    }
  };
}
