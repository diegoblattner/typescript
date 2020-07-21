// https://www.typescriptlang.org/docs/handbook/utility-types.html

interface Person {
  name: string;
  age?: number;
  address?: string;
}


// interface PersonRequired extends Required<Person> {}
type PersonRequired = Required<Person>; // makes all props required
const personRequired: PersonRequired = {

};


type PersonOptional = Partial<Person>; // makes all props optional
const personOptional: PersonOptional = {

};


type PersonReadonly = Readonly<Person>; // makes all props readonly
const personReadonly: PersonReadonly = {
  name: 'asdasda',
};


type NameOnly = Pick<Person, 'name'>;
const nameOnly: NameOnly = {};


type AgeOnly = Omit<Person, 'name' | 'address'>;
const ageOnly: AgeOnly = { age };



// Overriding one prop
interface Address {
  line1: string;
  line2: string;
  town: string;
  country: string;
}

// interface PersonFullAddress extends Person {
//   address: Address;
// }
interface PersonFullAddress extends Omit<Person, 'address'> {
  address: Address;
}

const person2: PersonFullAddress = {
  address: {

  }
}



// go to functions
