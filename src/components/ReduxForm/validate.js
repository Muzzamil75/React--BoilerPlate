/* eslint-disable no-debugger */
/* eslint-disable no-unused-vars */
import React from 'react';
import _ from 'lodash';

const validate = values => {
  const errors = {};
  if (!_.get(values, 'username') || _.get(values, 'username').length < 1) {
    errors.username = 'USER NAME IS REUQIRED';
  }
  else if (!_.get(values, 'phone') || _.get(values, 'phone').length < 5) {
    errors.phone = 'phone number is required';
  }

  // else if (!values.get('companyName')) {
  //   errors.companyName = <FormattedMessage {...messages.required} />;
  // }
  // else if (!values.get('companyAddress')) {
  //   errors.companyAddress = <FormattedMessage {...messages.required} />;
  // }
  // else if (!values.get('postCode')) {
  //   errors.postCode = <FormattedMessage {...messages.required} />;
  // }
  // else if (!values.get('city')) {
  //   errors.city = <FormattedMessage {...messages.required} />;
  // }
  // else if (!values.get('country')) {
  //   errors.country = <FormattedMessage {...messages.required} />;
  // }
  console.log('errors', errors)
  return errors;
};

export default validate;
