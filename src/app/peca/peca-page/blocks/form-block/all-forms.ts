import {
    requiredAndNormalText,
    normalText,
    requiredAndNaturalNumber,
    naturalNumber,
    requiredAndEmail,
    email,
    requiredAndOnlyLetters,
    onlyLetters,
    requiredAndOnlyLettersAndNumbers,
    onlyLettersAndNumbers
} from '../../../../web/shared/forms/custom-validators';
import { MESSAGES } from '../../../../web/shared/forms/validation-messages';

const controlProps = {
    onlyLettersAndRequired: {
      type:        'text',
      validations: requiredAndOnlyLetters,
      messages:    { pattern: MESSAGES.ONLY_LETTERS_MESSAGE }
    },
    onlyLetters: {
        type:        'text',
        validations: onlyLetters,
        messages:    { pattern: MESSAGES.ONLY_LETTERS_MESSAGE }
      },
    onlyLettersNumbersAndRequired: {
      type:        'text',
      validations: requiredAndOnlyLettersAndNumbers,
      messages:    { pattern: MESSAGES.ONLY_LETTERS_NUMBERS_MESSAGE }
    },
    onlyLettersNumbers: {
        type:        'text',
        validations: onlyLettersAndNumbers,
        messages:    { pattern: MESSAGES.ONLY_LETTERS_NUMBERS_MESSAGE }
      },
    normalTextAndRequired: {
      type:        'text',
      validations: requiredAndNormalText,
      messages:    { pattern: MESSAGES.TEXT_MESSAGE }
    },
    normalText: {
        type:        'text',
        validations: normalText,
        messages:    { pattern: MESSAGES.TEXT_MESSAGE }
      },
    emailAndRequired: {
      type:        'email',
      validations: requiredAndEmail,
      messages:    { pattern: MESSAGES.EMAIL_MESSAGE }
    },
    email: {
        type:        'email',
        validations: email,
        messages:    { pattern: MESSAGES.EMAIL_MESSAGE }
      },
    numberAndRequired: {
      type:        'number',
      validations: requiredAndNaturalNumber,
      messages:    { pattern: MESSAGES.NATURAL_NUMBER_MESSAGE }
    },
    number: {
        type:        'number',
        validations: naturalNumber,
        messages:    { pattern: MESSAGES.NATURAL_NUMBER_MESSAGE }
      },
    phoneAndRequired: {
      type:        "tel",
      validations: requiredAndNaturalNumber,
      messages:    { pattern: MESSAGES.PHONE_MESSAGE }
    },
    phone: {
        type:        "tel",
        validations: naturalNumber,
        messages:    { pattern: MESSAGES.PHONE_MESSAGE }
      },
    dateAndRequired: {
      type:        "date",
      validations: { required: true }
    },
    date: {
        type:        "date",
        validations: { required: false }
      },
    selectAndRequired: {
      type:        'select',
      options:     [],
      validations: { required: true }
    },    
    select: {
        type:        'select',
        options:     [],
        validations: { required: false }
    },    
}

export const sampleFormData = {
    name: { label: "Nombre del campo", placeholder: "Nombre del campo", ...controlProps.normalTextAndRequired},    
}