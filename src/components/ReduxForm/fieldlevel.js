/* eslint-disable no-debugger */
/* eslint-disable no-unused-vars */
/* eslint-disable indent */
import React from 'react'
import { Field, reduxForm } from 'redux-form'
import validate from './validate'

const renderField = ({
  input,
  label,
  type,
  meta: { touched, error, warning }
}) => (
    <div>
      <label>{label}</label>
      <div>
        <input {...input} placeholder={label} type={type} />
        {touched &&
          ((error && <span style={{ color: 'red' }}>{error}</span>)
            // || (warning && <span>{warning}</span>)
          )}
      </div>
    </div>
  )

const FieldLevelValidationForm = props => {
  const { handleSubmit, pristine, reset, submitting, error } = props;
  debugger
  return (
    <form onSubmit={handleSubmit}>
      <Field
        name="username"
        type="text"
        component={renderField}
        label="Username"
      />
      <Field
        name="email"
        type="email"
        component={renderField}
        label="Email"
      />
      <Field
        name="age"
        type="number"
        component={renderField}
        label="Age (optionsal)"
      />
      <Field
        name="phone"
        type="number"
        component={renderField}
        label="Phone number"
      />
      <div>
        <button type="submit" disabled={submitting}>
          Submit
        </button>
        {/* prestine tells if any field is touched then enables the clear button */}
        <button type="button" disabled={pristine || submitting} onClick={reset}>
          Clear Values
        </button>
      </div>
    </form>
  )
}

export default reduxForm({
  form: 'fieldLevelValidation',
  validate
})(FieldLevelValidationForm)