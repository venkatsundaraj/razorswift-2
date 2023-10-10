import styled from '@emotion/styled';
import { Stack, TextField } from '@mui/material';
import { FormControl } from '@mui/material';
import React from 'react';
import SubtitleHeading from '@/components/headingComponents/SubtitleHeading';
import { useField } from 'formik';

const Input = styled(TextField)(({ theme }) => ({}));

function InputField({ error, ...props }) {
  const [field, meta] = useField(props.name);

  return (
    <FormControl fullWidth>
      <Stack flexDirection="column" gap={1}>
        <Input
          {...field}
          {...props}
          InputProps={{
            sx: {
              color: `${error ? 'pinkPalette.light' : 'primaryColor.black'}`,
            },
          }}
        />
        {meta && meta.error && meta.touched && (
          <SubtitleHeading sx={{ color: 'pinkPalette.light' }}>
            {meta.error}
          </SubtitleHeading>
        )}
      </Stack>
    </FormControl>
  );
}

export default InputField;
