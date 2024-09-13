import { OrganiserProps} from "./types";
import { faker } from '@faker-js/faker';

export const createMockOrganiser = (overrides: OrganiserProps = {}) => {
    return {
      title: overrides.title || faker.person.prefix(),
      firstName: overrides.firstName || faker.person.firstName(),
      lastName: overrides.lastName || faker.person.lastName(),
      dateOfBirth:
        overrides.dateOfBirth ||
        faker.date.birthdate({ min: 18, max: 95, mode: "age" }).toISOString().split("T")[0],
      email: overrides.email || faker.internet.email(),
      telephone: overrides.telephone || faker.phone.number(),
      postCode: overrides.postCode || faker.location.zipCode(),
      firstLineOfAddress: overrides.firstLineOfAddress || faker.location.streetAddress(),
      secondLineOfAddress: overrides.secondLineOfAddress || faker.location.secondaryAddress(),
      city: overrides.city || faker.location.city(),
      country: overrides.country || faker.location.countryCode(),
      travelling: overrides.travelling ?? faker.datatype.boolean(),
    };
  };