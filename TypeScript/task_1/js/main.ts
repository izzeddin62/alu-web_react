interface Teacher extends Record<string, any> {
  firstName: string;
  lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number
  location: string;
}