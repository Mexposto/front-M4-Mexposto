import validator from "validator"; //libreria para validad npm install validator, npm install @types/validator

export const isValid = (validation: string, value: string) => {
  if (validation === "email") {
    return validator.isEmail(value);
  }

  if (validation === "password") {
    return (
      validator.isAlphanumeric(value) &&
      validator.isLength(value, { min: 6, max: 10 })
    );
  }

  if (validation === "name") {
    return validator.isAlpha(value);
  }

  if (validation === "address") {
    return (
      validator.isAlphanumeric(value) &&
      validator.isLength(value, { min: 6, max: 10 })
    );
  }

  if (validation === "phone") {
    return (
      validator.isNumeric(value) &&
      validator.isLength(value, { min: 8, max: 12 })
    );
  }

  return true;
};
