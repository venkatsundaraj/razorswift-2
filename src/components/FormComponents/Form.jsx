import React from 'react'
import InputField from './FormUI/InputField/InputField'
import SubmitButton from './FormUI/SubmitButton/SubmitButton'

function Form() {
  return (
    <form>
      <InputField
        id="standard-basic"
        type="text"
        label="Full Name"
        variant="standard"
      />
      <input type="submit" />
    </form>
  )
}

export default Form
