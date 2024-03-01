console.log(Math.floor(15.5));

console.log("wow");

const age: number = 2;

type fuckin = 2 | 3;

const returnAge = (_age: fuckin): number => {
  return age;
};

console.log(returnAge(2));

interface User {
  id?: number;
  readonly username: string;
  country: String;
  sayHello(): string;
  sayWelcome: () => number;
  getDouble(num: number): number;
}

let user: User = {
  id: 20,
  username: "saxx",
  country: "jordan",
  sayHello() {
    return "asdasd";
  },
  sayWelcome: () => 12,
  getDouble: (num) => num + 2,
};

console.log(user.sayWelcome());
const getUserData = (data: User): User => {
  return { ...data, username: "asdasd" };
};

getUserData(user);

interface Employee {
  id: number;
  username: string;
  country: string;
}

interface Mod extends Employee {
  role: string | number;
}

interface Admin extends Employee, Mod {
  protect: string | number;
}

const sleman: Admin = {
  id: 20,
  username: "saxx",
  country: "jordan",
  role: "2",
  protect: 2,
};

class Toto {
  private static create: number = 0;
  constructor(private userName: string, public salary: number) {
    this.userName = userName;
    this.salary = salary;
  }

  getTotoData(): string {
    return `${this.userName} + ${this.salary}`;
  }
}

function returnType<GenericType>(val: GenericType): GenericType {
  return val;
}

function durkioo<T>(val: T): T {
    return val
}

returnType<number>(12);


const yazeed = <T>(name: T) : T => name;


const nigga = (name: number) : number => name;

const alawneh =  <T, S> (name: T, age: S) : string => `${name}`;


class Shwakii<T> {
  constructor(public value: T) {}

  show(msg: T): void {
    console.log("msg", msg);
  }
}