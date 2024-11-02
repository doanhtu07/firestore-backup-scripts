export type Companies = "SF" | "AA" | "C1" | "EB" | "FB";

export type Registration = {
  id: string;
  /**
   * A UNIX timestamp corresponding to when a hacker registered for the event.
   */
  timestamp: number;
  /**
   * Basic biographical user data
   */
  user: {
    id: string;
    permissions: string[];
    firstName: string;
    lastName: string;
    /**
     * The email used to contact the user.
     */
    preferredEmail: string;
    group?: string;
  };
  // TODO: Allow for qualifiers like "how old will you be at the day of the event?"
  // TODO: Allow this to be dynamically defined by the organizers
  // TODO: responses: { [questionId: string]: Question }
  age: number;
  gender: string;
  race: string;
  ethnicity: string;
  university: string;
  major: string;
  studyLevel: string;
  hackathonExperience: number;
  softwareExperience: string;
  heardFrom: string;
  size: string;
  dietary: string[];
  accomodations: string;
  github?: string;
  linkedin?: string;
  website?: string;
  resume?: string;
  companies: Companies[];
  status: string;
  //claims: []; //Array of Strings will be used to id any claims (lunch, merch, etc.) made by user
  teammate1: string;
  teammate2: string;
  teammate3: string;
  phoneNumber: string;
  country: string;
  whyAttend: string;
  hackathonNumber: string;
  hackathonFirstTimer: string;
  lookingForward: string;

  updatedAt: string;
  createdAt: string;

  disclaimer: string[];
  codeOfConduct: string[];
  // if currentRegistrationPage is undefined, then user already created profile before this field is being added
  // if currentRegistrationPage is less than 1,000,000,000, then user haven't finished creating profile yet
  // otherwise, user finished creating profile
  currentRegistrationPage?: number;
  majorManual?: string;
  universityManual?: string;
  heardFromManual?: string;
};

export type PartialRegistration = {
  id: string;
  /**
   * A UNIX timestamp corresponding to when a hacker registered for the event.
   */
  timestamp: number;
  /**
   * Basic biographical user data
   */
  firstName: string;
  lastName: string;
  /**
   * The email used to contact the user.
   */
  preferredEmail: string;
  age: number;
  gender: string;
  race: string;
  ethnicity: string;
  university: string;
  major: string;
  studyLevel: string;
  hackathonExperience: number;
  softwareExperience: string;
  heardFrom: string;
  size: string;
  dietary: string[];
  accomodations: string;
  github?: string;
  linkedin?: string;
  website?: string;
  resume?: string;
  companies: Companies[];
  status: string;
  //claims: []; //Array of Strings will be used to id any claims (lunch, merch, etc.) made by user
  teammate1: string;
  teammate2: string;
  teammate3: string;
  phoneNumber: string;
  country: string;
  whyAttend: string;
  hackathonNumber: string;
  hackathonFirstTimer: string;
  lookingForward: string;

  updatedAt: string;
  createdAt: string;

  disclaimer: string[];
  codeOfConduct: string[];
  mlhPrivacyPolicy: string[];

  // if currentRegistrationPage is undefined, then user already created profile before this field is being added
  // if currentRegistrationPage is less than 1,000,000,000, then user haven't finished creating profile yet
  // otherwise, user finished creating profile
  currentRegistrationPage?: number;
  majorManual?: string;
  universityManual?: string;
  heardFromManual?: string;
  permissions?: string[];
};
