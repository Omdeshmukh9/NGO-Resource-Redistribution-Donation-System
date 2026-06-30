export type ValidationErrors = Record<string, string>;

export const validateBasicInfo = (data: {
  ngoName: string;
  registrationNumber: string;
  email: string;
  contactNumber: string;
}) => {
  const errors: ValidationErrors = {};

  if (!data.ngoName.trim()) {
    errors.ngoName = "NGO Name is required.";
  }

  if (!data.registrationNumber.trim()) {
    errors.registrationNumber = "Registration Number is required.";
  }

  if (!data.email.trim()) {
    errors.email = "Email is required.";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(data.email)) {
    errors.email = "Enter a valid email address.";
  }

  if (!data.contactNumber.trim()) {
    errors.contactNumber = "Contact Number is required.";
  } else if (!/^[6-9]\d{9}$/.test(data.contactNumber)) {
    errors.contactNumber = "Enter a valid 10 digit mobile number.";
  }

  return {
    valid: Object.keys(errors).length === 0,
    errors,
  };
};

export const validateProfile = (data: {
  ngoType: string;
  vision: string;
  description: string;
  addressLine1: string;
  city: string;
  state: string;
  country: string;
  pincode: string;
  latitude: string;
  longitude: string;
}) => {
  const errors: ValidationErrors = {};

  if (!data.ngoType.trim()) {
    errors.ngoType = "Please select NGO Type.";
  }

  if (!data.vision.trim()) {
    errors.vision = "Vision is required.";
  }

  if (!data.description.trim()) {
    errors.description = "Description is required.";
  }

  if (!data.addressLine1.trim()) {
    errors.addressLine1 = "Address Line 1 is required.";
  }

  if (!data.city.trim()) {
    errors.city = "City is required.";
  }

  if (!data.state.trim()) {
    errors.state = "State is required.";
  }

  if (!data.country.trim()) {
    errors.country = "Country is required.";
  }

  if (!data.pincode.trim()) {
    errors.pincode = "Pincode is required.";
  } else if (!/^\d{6}$/.test(data.pincode)) {
    errors.pincode = "Pincode must be 6 digits.";
  }

  if (!data.latitude.trim()) {
    errors.latitude = "Latitude is required.";
  } else if (isNaN(Number(data.latitude))) {
    errors.latitude = "Invalid Latitude.";
  }

  if (!data.longitude.trim()) {
    errors.longitude = "Longitude is required.";
  } else if (isNaN(Number(data.longitude))) {
    errors.longitude = "Invalid Longitude.";
  }

  return {
    valid: Object.keys(errors).length === 0,
    errors,
  };
};

export const validateBank = (data: {
  accountHolderName: string;
  bankName: string;
  accountNumber: string;
  ifscCode: string;
}) => {
  const errors: ValidationErrors = {};

  if (!data.accountHolderName.trim()) {
    errors.accountHolderName = "Account Holder Name is required.";
  }

  if (!data.bankName.trim()) {
    errors.bankName = "Bank Name is required.";
  }

  if (!data.accountNumber.trim()) {
    errors.accountNumber = "Account Number is required.";
  } else if (!/^\d{9,18}$/.test(data.accountNumber)) {
    errors.accountNumber = "Account Number must be between 9 and 18 digits.";
  }

  if (!data.ifscCode.trim()) {
    errors.ifscCode = "IFSC Code is required.";
  } else if (!/^[A-Z]{4}0[A-Z0-9]{6}$/i.test(data.ifscCode)) {
    errors.ifscCode = "Invalid IFSC Code.";
  }

  return {
    valid: Object.keys(errors).length === 0,
    errors,
  };
};

export const validateDocuments = (data: {
  registrationCertificate: File | null;
  panCard: File | null;
  cancelledCheque: File | null;
}) => {
  const errors: ValidationErrors = {};

  if (!data.registrationCertificate) {
    errors.registrationCertificate = "Registration Certificate is required.";
  }

  if (!data.panCard) {
    errors.panCard = "PAN Card is required.";
  }

  if (!data.cancelledCheque) {
    errors.cancelledCheque = "Cancelled Cheque is required.";
  }

  return {
    valid: Object.keys(errors).length === 0,
    errors,
  };
};
