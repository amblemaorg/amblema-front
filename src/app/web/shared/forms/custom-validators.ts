import { Validators } from '@angular/forms';
export const EMAIL_PATTERN = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,6}$/;
export const LETTERS_PATTERN = /^[A-Za-zÀ-ÿ. '´`]*$/;
export const LETTERS_NUMBERS_PATTERN = '^[a-z A-Zá-úÁ-Ú0-9]*$';
export const TEXT_PATTERN = /^[a-z A-Zá-úÁ-Ú0-9\W]*$/;
export const NUMBER_PATTERN = /^[0-9]*$/;
export const VIDEO_PATTERN = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/;
export const SOCIAL_NETWORK_PATTERN = /^.*$/; // /^[a-z A-Z0-9\W]*$/;
export const PASSWORD_PATTERN = /^[^ ]*$/;

export class CustomValidators extends Validators {
  static normalText = Validators.pattern(TEXT_PATTERN);
  static onlyLetters = Validators.pattern(LETTERS_PATTERN);
  static onlyLettersAndNumbers = Validators.pattern(LETTERS_NUMBERS_PATTERN);
  static naturalNumber = Validators.pattern(NUMBER_PATTERN);
  static email = Validators.pattern(EMAIL_PATTERN);
  static password = Validators.pattern(PASSWORD_PATTERN);

  static requiredAndNormalText = [
    Validators.required,
    Validators.pattern(TEXT_PATTERN),
  ];
  static requiredAndOnlyLetters = [
    Validators.required,
    Validators.pattern(LETTERS_PATTERN),
  ];
  static requiredAndOnlyLettersAndNumbers = [
    Validators.required,
    Validators.pattern(LETTERS_NUMBERS_PATTERN),
  ];
  static requiredAndNaturalNumber = [
    Validators.required,
    Validators.pattern(NUMBER_PATTERN),
  ];
  static requiredAndEmail = [
    Validators.required,
    Validators.pattern(EMAIL_PATTERN),
  ];
  static requiredAndPassword = [
    Validators.required,
    Validators.pattern(PASSWORD_PATTERN),
  ];
}

export const normalText = { pattern: TEXT_PATTERN };
export const onlyLetters = { pattern: LETTERS_PATTERN };
export const onlyLettersAndNumbers = { pattern: LETTERS_NUMBERS_PATTERN };
export const naturalNumber = { pattern: NUMBER_PATTERN };
export const email = { pattern: EMAIL_PATTERN };
export const password = { pattern: PASSWORD_PATTERN };
export const socialNetwork = { pattern: SOCIAL_NETWORK_PATTERN };
export const requiredAndNormalText = { required: true, pattern: TEXT_PATTERN };
export const requiredAndOnlyLetters = {
  required: true,
  pattern: LETTERS_PATTERN,
};
export const requiredAndOnlyLettersAndNumbers = {
  required: true,
  pattern: LETTERS_NUMBERS_PATTERN,
};
export const requiredAndNaturalNumber = {
  required: true,
  pattern: NUMBER_PATTERN,
};
export const requiredAndEmail = { required: true, pattern: EMAIL_PATTERN };
export const requiredAndPassword = {
  required: true,
  pattern: PASSWORD_PATTERN,
};
export const requiredAndSocialNetwork = {
  required: true,
  pattern: SOCIAL_NETWORK_PATTERN,
};
