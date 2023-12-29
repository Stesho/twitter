export const ERROR_MESSAGES = {
  required: (field: string) => `${field} is required field`,
  min: (field: string, len: number) =>
    `${field} must be at least ${len} characters`,
  max: (field: string, len: number) =>
    `${field} must be at most ${len} characters`,
  phoneNumber: 'Invalid phone number',
  email: 'Invalid email',
  password:
    'Password should contain: at least one letter, at least one digit, at least one special character (!@#$%^&*)',
};
