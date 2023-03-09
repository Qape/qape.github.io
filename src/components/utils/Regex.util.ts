export const mobilePhoneNumberRegex =
  /(^((\+|00)?467|07)((\s?-?)+\d){8}$)|(^((\+|00)?4610|010)((\s?-?)+\d){7}$)/;
export const emailRegex =
  /^(([^åäöÅÄÖ<>()[\]\\.,;:\s@"]+(\.[^åäöÅÄÖ<>()[\]\\.,;:\s@"]+)*)|(".+"))@{1}((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
export const ssn = /^[0-9]{8}-?[0-9]{4}$/;
export const pin = /^\d{4}$/;
export const imei = /^\d{14,16}$/;
export const onlyNumbers = /^[0-9]+$/;

export const isEmail = (email: string | undefined): boolean =>
  email ? emailRegex.test(email) : false;

export const isMobilePhoneNumber = (phoneNumber: string | undefined): boolean =>
  phoneNumber ? mobilePhoneNumberRegex.test(phoneNumber) : false;
