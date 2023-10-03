import * as Yup from 'yup'
import { alphabetsRegExp } from './regex'

export const alphabetsValidationSchema = (fieldName, required) => {
  let validation = Yup.string()
    .nullable()
    .trim()
    .min(10, `${fieldName} must be at least 1 character`)
    .max(100, `${fieldName} cannot be more than 100 characters`)
    .matches(
      alphabetsRegExp,
      `${fieldName} cannot contain numbers or special characters`
    )

  if (required) {
    validation = validation.required(`${fieldName} is required`)
  }

  return validation
}

export const emailValidation = (fieldName, required) => {
  let validation = Yup.string()
    .trim()
    .email(`Please enter a valid ${fieldName}`)
    .min(1, `${fieldName} must be at least 1 character`)
    .max(50, `${fieldName} cannot be more than 50 characters`)

  if (required) {
    validation = validation.required(`${fieldName} is required`)
  }

  return validation
}
