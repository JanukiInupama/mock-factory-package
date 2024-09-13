import { createMockOrganiser } from './functions';
import '@testing-library/jest-dom';  

describe('createMockOrganiser', () => {
  it('should return an organiser with default values', () => {
    const organiser = createMockOrganiser();

    expect(organiser.title).toBeDefined();
    expect(organiser.firstName).toBeDefined();
    expect(organiser.lastName).toBeDefined();
    expect(organiser.dateOfBirth).toBeDefined();
    expect(organiser.email).toBeDefined();
    expect(organiser.telephone).toBeDefined();
    expect(organiser.postCode).toBeDefined();
    expect(organiser.firstLineOfAddress).toBeDefined();
    expect(organiser.secondLineOfAddress).toBeDefined();
    expect(organiser.city).toBeDefined();
    expect(organiser.country).toBeDefined();
    expect(organiser.travelling).toBeDefined();
  });

  it('should allow overriding default values', () => {
    const customProps = {
      firstName: 'Januki',
      lastName: 'Inupama',
      email: 'januki@example.com',
    };
    const organiser = createMockOrganiser(customProps);

    expect(organiser.firstName).toBe('Januki');
    expect(organiser.lastName).toBe('Inupama');
    expect(organiser.email).toBe('januki@example.com');

    expect(organiser.title).toBeDefined();
    expect(organiser.dateOfBirth).toBeDefined();
  });
});
