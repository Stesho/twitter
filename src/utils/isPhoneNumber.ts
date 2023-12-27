const phoneNumberRegExp = /^\+\d+$/;
export const isPhoneNumber = (phoneNumber: string) =>
  phoneNumber.match(phoneNumberRegExp);
