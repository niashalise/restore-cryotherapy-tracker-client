export const cleanPhoneInput = (value) => {
  const phoneInput = String(value).replace(/\D/g, "");

  if (phoneInput.length === 11 && phoneInput.startsWith("1")) {
    const correctedPhone = phoneInput.slice(1);
    return correctedPhone;
  }

  return phoneInput.slice(0, 10);
}