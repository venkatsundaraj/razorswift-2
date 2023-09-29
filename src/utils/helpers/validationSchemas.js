import * as Yup from 'yup';
import { alphabetsRegExp } from './regex';

export const alphabetsValidationSchema = (fieldName, required) => {
  let validation = Yup.string()
    .nullable()
    .trim()
    .min(10, `${fieldName} must be at least 1 character`)
    .max(100, `${fieldName} cannot be more than 100 characters`)
    .matches(
      alphabetsRegExp,
      `${fieldName} cannot contain numbers or special characters`
    );

  if (required) {
    validation = validation.required(`${fieldName} is required`);
  }

  return validation;
};
