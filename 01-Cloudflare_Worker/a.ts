interface User {
    name: string;
    age: number;
  }
  
  const person = {
    name: 'Alice',
    age: 30,
    extra: 'not needed',
    extra1: 'not needed',
  };
  
  const validPerson: User = person
 
  console.log(validPerson.extra);
  