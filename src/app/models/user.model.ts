export interface RandomUsers {
  results: User[];
}

export class User {
  name: Name;
  picture: Picture;
  phone: string;
  cell: string;
  dob: Dob;
  email: string;
  location: Location;
  registered: Registered;
}

export class Name {
  title: string;
  first: string;
  last: string;
}
export interface Picture {
  thumbnail: string;
  medium: string;
  large: string;
}

export interface Dob {
  age: number;
  date: Date;
}

export interface Location {
  street: Street;
  city: string;
  state: string;
  postcode: number;
  country: string;
}

export interface Street {
  name: string;
  number: number;
}

export interface Registered {
  age: number;
  date: Date;
}
