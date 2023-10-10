'use client';

import React from 'react';
import InputField from './FormUI/InputField/InputField';
import SubmitButton from './FormUI/SubmitButton/SubmitButton';
import { Stack, Box } from '@mui/material';
import { Form, Formik } from 'formik';
import {
  alphabetsValidationSchema,
  validateContactNumber,
  emailValidation,
  messageValidation,
} from '@/utils/helpers/validationSchemas';
import * as Yup from 'yup';

const initialValues = {
  fullName: '',
  email: '',
  mobileNumber: '',
  message: '',
};

const validationSchema = Yup.object().shape({
  fullName: alphabetsValidationSchema('fullName', true),
  email: emailValidation('Email', true),
  mobileNumber: validateContactNumber('Mobile Number', true),
  message: messageValidation('Message', true),
});

function FormSection() {
  return (
    <Box sx={{ padding: '16px 0' }}>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting }) => {
          console.log(values);
          setSubmitting(false);
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
            <Stack flexDirection="column" gap={3} alignItems="start">
              <InputField
                name="fullName"
                onChange={handleChange}
                onBlur={handleBlur}
                type="text"
                value={values.fullName}
                label="Full Name"
                variant="standard"
                error={errors.fullName}
              />

              <InputField
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                type="email"
                value={values.email}
                label="Email ID"
                variant="standard"
                error={errors.email}
              />

              <InputField
                name="mobileNumber"
                onChange={handleChange}
                onBlur={handleBlur}
                type="number"
                sx={{
                  '& input[type=number]': {
                    '-moz-appearance': 'textfield',
                  },
                  '& input[type=number]::-webkit-outer-spin-button': {
                    '-webkit-appearance': 'none',
                    margin: 0,
                  },
                  '& input[type=number]::-webkit-inner-spin-button': {
                    '-webkit-appearance': 'none',
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
                name="message"
                onChange={handleChange}
                onBlur={handleBlur}
                type="text"
                multiline
                rows={4}
                value={values.message}
                label="Your Message"
                variant="standard"
                error={errors.message}
              />

              <SubmitButton disabled={isSubmitting} type="submit">
                Submit
              </SubmitButton>
            </Stack>
          </Form>
        )}
      </Formik>
    </Box>
  );
}

export default FormSection;
