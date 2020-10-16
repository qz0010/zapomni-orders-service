import { FormControl } from '@angular/forms';

export interface IFileValidatorOptions {
  required?: boolean;
  maxSize?: {w: number, h: number};
  maxWeight?: number;
}

// custom validator to check that two fields match
export function validateFileFactory(opt?: IFileValidatorOptions, imgSize?: {w: number, h: number, clientW: number, clientH: number}) {
  return (formControl: FormControl) => {
    const value: File = formControl.value;
    const _opt = {...opt};

    if (value && imgSize && (!imgSize.clientH || !imgSize.clientW)) {
      return { fileValidatorEmptySize: true };
    }

    if (
      !value && _opt.required ||
      value && _opt.maxWeight && value.size > _opt.maxWeight ||
      value && _opt.maxSize && imgSize && (imgSize.w > _opt.maxSize.w || imgSize.h > _opt.maxSize.h)
    ) {
      return { fileValidator: true };
    }
    return null;
  };
}
