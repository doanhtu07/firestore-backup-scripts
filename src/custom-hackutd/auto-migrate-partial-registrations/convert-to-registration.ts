import { PartialRegistration, Registration } from "../types";

export const convertToRegistration = (
  srcData: PartialRegistration,
): Registration => {
  let result: Partial<Registration> = {};

  result.id = srcData.id;
  result.timestamp = srcData.timestamp;

  result.user = {
    id: srcData.id,
    permissions: ["hacker"],
    firstName: srcData.firstName,
    lastName: srcData.lastName,
    preferredEmail: srcData.preferredEmail,
    group: undefined,
  };

  result.age = srcData.age;
  result.gender = srcData.gender;
  result.race = srcData.race;
  result.ethnicity = srcData.ethnicity;
  result.university = srcData.university;
  result.major = srcData.major;
  result.studyLevel = srcData.studyLevel;
  result.hackathonExperience = srcData.hackathonExperience;
  result.softwareExperience = srcData.softwareExperience;
  result.heardFrom = srcData.heardFrom;
  result.size = srcData.size;
  result.dietary = srcData.dietary;
  result.accomodations = srcData.accomodations;
  result.github = srcData.github;
  result.linkedin = srcData.linkedin;
  result.website = srcData.website;
  result.resume = srcData.resume;
  result.companies = srcData.companies;
  result.status = srcData.status;
  result.teammate1 = srcData.teammate1;
  result.teammate2 = srcData.teammate2;
  result.teammate3 = srcData.teammate3;
  result.phoneNumber = srcData.phoneNumber;
  result.country = srcData.country;
  result.whyAttend = srcData.whyAttend;
  result.hackathonNumber = srcData.hackathonNumber;
  result.hackathonFirstTimer = srcData.hackathonFirstTimer;
  result.lookingForward = srcData.lookingForward;

  result.disclaimer = srcData.disclaimer;
  result.codeOfConduct = srcData.codeOfConduct;
  // result.currentRegistrationPage = srcData.currentRegistrationPage;
  // result.majorManual = srcData.majorManual;
  // result.universityManual = srcData.universityManual;
  // result.heardFromManual = srcData.heardFromManual;

  return result as Registration;
};
