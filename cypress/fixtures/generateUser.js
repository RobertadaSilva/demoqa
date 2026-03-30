import { faker } from '@faker-js/faker';

export function generateUser() {
  const firstName = faker.person.firstName('male')
  const lastName = faker.person.lastName()
  return {
    firstName,
    lastName,
    email: `${firstName}${lastName}@gmail.com`.toLowerCase().replace(/[^a-z0-9@.]/g, ''),
    age: String(faker.number.int({ min: 18, max: 65 })),
    salary: String(faker.number.int({ min: 1000, max: 10000 })),
    department: faker.person.jobType(),
    mobile: faker.string.numeric(10),
    gender: 'Male',
    birthMonth: String(faker.number.int({ min: 0, max: 11 })),
    birthYear: String(faker.number.int({ min: 1980, max: 2005 })),
    subject: faker.helpers.arrayElement(['Maths', 'English', 'Physics', 'Chemistry']),
    hobby: faker.helpers.arrayElement(['Sports', 'Reading', 'Music']),
    address: faker.location.streetAddress(),
    fileContent: faker.lorem.paragraph(),
  };
}
