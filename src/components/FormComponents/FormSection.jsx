'use client'

import React from 'react'
import InputField from './FormUI/InputField/InputField'
import SubmitButton from './FormUI/SubmitButton/SubmitButton'
import { Stack, Box } from '@mui/material'
import { Form, Formik } from 'formik'
import {
  alphabetsValidationSchema,
  validateContactNumber,
  emailValidation,
  messageValidation,
  nameValidationwithNoRegex,
} from '@/utils/helpers/validationSchemas'
import { reverseCheckAndSet } from '@/utils/helpers/CommonFunctions/Functions'
import * as Yup from 'yup'
import { callApi } from '@/utils/helpers/apiRequest'
import { AxiosError } from 'axios'
import SelectWrapper from './FormUI/Select/SelectWrapper'
import ExtraParagraphHeading from '../headingComponents/ExtraParagraphHeading'

const initialValues = {
  fullName: '',
  email: '',
  mobileNumber: '',
  companyName: '',
  moreInfo: '',
  reason: '',
}

const validationSchema = Yup.object().shape({
  fullName: alphabetsValidationSchema('fullName', true),
  email: emailValidation('Email', true),
  mobileNumber: validateContactNumber('Mobile Number', true),
  moreInfo: messageValidation('More Info', true),
  companyName: nameValidationwithNoRegex('Company Name', false),
})

function FormSection() {
  return (
    <Box sx={{ padding: '16px 0' }}>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={async (values, { resetForm, setSubmitting }) => {
          try {
            setSubmitting(true)
            const response = await callApi(
              'contactRequest',
              reverseCheckAndSet(values)
            )

            console.log(values)
          } catch (err) {
            if (err instanceof AxiosError) {
              console.log(err)
            }
          } finally {
            setSubmitting(false)
            // resetForm();
          }
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <Form onSubmit={handleSubmit}>
            <Stack
              flexDirection="row"
              alignItems="center"
              justifyContent="start"
              gap={2}
            >
              <ExtraParagraphHeading
                sx={{ color: 'violetPalette.dark', display: 'none' }}
              >
                I am an/a
              </ExtraParagraphHeading>
              <SelectWrapper
                placeholder="Looking for"
                name="reason"
                label="Reason"
                textLabel="Reason"
                noTextLabel
                required
              />
            </Stack>
            <Stack flexDirection="column" gap={3} alignItems="start">
              <InputField
                name="fullName"
                onChange={handleChange}
                onBlur={handleBlur}
                type="text"
                value={values.fullName}
                label="Full Name"
                variant="standard"
                required
                error={errors.fullName}
              />

              <InputField
                name="companyName"
                onChange={handleChange}
                onBlur={handleBlur}
                type="text"
                value={values.companyName}
                label="Company Name"
                variant="standard"
                error={errors.companyName}
              />

              <InputField
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                type="email"
                value={values.email}
                label="Email ID"
                variant="standard"
                required
                error={errors.email}
              />

              <InputField
                name="mobileNumber"
                onChange={handleChange}
                onBlur={handleBlur}
                required
                type="number"
                sx={{
                  '& input[type=number]::-webkit-outer-spin-button': {
                    WebkitAppearance: 'none',
                    margin: 0,
                  },
                  '& input[type=number]::-webkit-inner-spin-button': {
                    WebkitAppearance: 'none',
                    margin: 0,
                  },
                }}
                max={10}
                value={values.mobileNumber}
                label="Mobile Number"
                variant="standard"
                error={errors.mobileNumber}
              />

              <InputField
                name="moreInfo"
                onChange={handleChange}
                onBlur={handleBlur}
                required
                type="text"
                multiline
                rows={4}
                value={values.moreInfo}
                label="Your Message"
                variant="standard"
                error={errors.moreInfo}
              />

              <SubmitButton disabled={isSubmitting} type="submit">
                Submit
              </SubmitButton>
            </Stack>
          </Form>
        )}
      </Formik>
    </Box>
  )
}

export default FormSection
