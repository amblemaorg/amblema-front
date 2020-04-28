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
    letter: { label: "Input letter text", placeholder: "Input letter text", fullwidth: false, ...controlProps.onlyLettersAndRequired},
    letterNumber: { label: "Input letters and numbers text", placeholder: "Input letters and numbers text", fullwidth: false, ...controlProps.onlyLettersNumbersAndRequired},  
    normal: { label: "Input normal text", placeholder: "Input normal text", fullwidth: false, ...controlProps.normalTextAndRequired},
    date: { label: "Input date", placeholder: "Input date", fullwidth: false, ...controlProps.dateAndRequired},
    addressState: { label: "Input select state", placeholder: "Input select state", fullwidth: false, ...controlProps.selectAndRequired,
              options: [{id: "165146541654hjvjh", name: "Lara"}, {id: "165146wfw254hjvjh", name: "Yaracuy"}]},
    addressMunicipality: { label: "Input select municipality", placeholder: "Input select municipality", fullwidth: false, ...controlProps.selectAndRequired,
              options: [{id: "dgisgsd64646464", name: "Iribarren", state: {id: "165146541654hjvjh", name: "Lara"}}, 
                        {id: "tdjsgshdge8791654", name: "Palavecinos", state: {id: "165146541654hjvjh", name: "Lara"}},
                        {id: "jgisgsd64646464", name: "Cocorote", state: {id: "165146wfw254hjvjh", name: "Yaracuy"}}, 
                        {id: "bdjsgshdge8791654", name: "Bruzual", state: {id: "165146wfw254hjvjh", name: "Yaracuy"}}]},
    email: { label: "Input email text", placeholder: "Input email text", fullwidth: false, ...controlProps.emailAndRequired},
    number: { label: "Input number text", placeholder: "Input number text", fullwidth: false, ...controlProps.numberAndRequired},
    phone: { label: "Input phone text", placeholder: "Input phone text", fullwidth: false, ...controlProps.phoneAndRequired},
}