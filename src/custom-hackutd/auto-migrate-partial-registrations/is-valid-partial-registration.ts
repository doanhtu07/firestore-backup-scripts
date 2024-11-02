import { PartialRegistration } from "../types";

// Check if partial registration has completed all required fields
export const isValidPartialRegistration = (
  partialRegistration: Partial<PartialRegistration>,
) => {
  /*
   * firstName
   * lastName
   * preferredEmail
   * phoneNumber
   * age
   * country
   * gender
   * race
   * ethnicity
   * university
   * major
   * studyLevel
   * hackathonExperience
   * softwareExperience
   * heardFrom
   * whyAttend
   * hackathonNumber
   * hackathonFirstTimer
   * lookingForward
   * size
   * --- --- ---
   * disclaimer
   * codeOfConduct
   * mlhPrivacyPolicy
   */

  const fields = [
    partialRegistration.firstName,
    partialRegistration.lastName,
    partialRegistration.preferredEmail,
    partialRegistration.phoneNumber,
    partialRegistration.age,
    partialRegistration.country,
    partialRegistration.gender,
    partialRegistration.race,
    partialRegistration.ethnicity,
    partialRegistration.university,
    partialRegistration.major,
    partialRegistration.studyLevel,
    partialRegistration.hackathonExperience,
    partialRegistration.softwareExperience,
    partialRegistration.heardFrom,
    partialRegistration.whyAttend,
    partialRegistration.hackathonNumber,
    partialRegistration.hackathonFirstTimer,
    partialRegistration.lookingForward,
    partialRegistration.size,
  ];

  const yesFields = [
    partialRegistration.disclaimer,
    partialRegistration.codeOfConduct,
    partialRegistration.mlhPrivacyPolicy,
  ];

  for (let field of fields) {
    if (checkNullOrUndefined(field)) {
      return false;
    }
  }

  for (let field of yesFields) {
    if (
      checkNullOrUndefined(field) ||
      checkEmpty(field) ||
      JSON.stringify(["Yes"]) !== JSON.stringify(field)
    ) {
      return false;
    }
  }

  return true;
};

const checkNullOrUndefined = (val: any): val is null | undefined => {
  return val === null || val === undefined;
};

const checkEmpty = (val: any) => {
  if (isIterable(val)) {
    return val.length === 0;
  }
  return false;
};

function isIterable(obj: any) {
  // Check if the object is null or undefined
  if (obj == null) {
    return false;
  }
  // Check if the object has the Symbol.iterator method
  return typeof obj[Symbol.iterator] === "function";
}
