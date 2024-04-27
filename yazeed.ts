import { S } from "ts-toolbelt";


// ReturnType //

const myFunc = () => "this is a function";
type a = typeof myFunc;
type wow = ReturnType<typeof myFunc>;

/* **************************** */
// Parameters //

const myFuncV1 = (name: string, age: number) => name;
type av1 = typeof myFuncV1;
type wowv1 = Parameters<av1>;
type p = wowv1[1];

/* **************************** */
// Awaited //

const getUser = () => {
  return Promise.resolve({
    id: "1",
    name: "sleman",
    age: 26,
  });
};

type av2 = typeof getUser;
type wowv2 = Awaited<ReturnType<av2>>;

/* **************************** */
// keyof //

const myObject = {
  sleman: 13,
  yazeed: 14,
  alawneth: "15",
  shwaki: 17,
};

type av3 = (typeof myObject)[keyof typeof myObject];
type av4 = keyof typeof myObject;
type av5 = (typeof myObject)["yazeed"];
type av6 = (typeof myObject)["alawneth"];

/* **************************** */
// Extract //

type MyEvent =
  | {
      type: "click";
      event: "click";
      a: string;
    }
  | {
      type: "keyboard";
      event: "keyboard";
      a: string;
    }
  | {
      type: "mouse";
      event: "mouse";
    };

type av7 = Extract<MyEvent, { type: "click" }>;
type av8 = Extract<MyEvent, { a: string }>;

type Fruits = "apple" | "orange" | "pineapple";
type av9 = Extract<Fruits, "apple">;
type av10 = Extract<Fruits, "apple" | "orange">;

/* **************************** */
// Exclude //

type av11 = Exclude<MyEvent, { type: "click" }>;
type av12 = Exclude<Fruits, "apple" | "orange">;
type av13 = Exclude<Fruits, "apple">;

/* **************************** */
// To get the data of a dic union //

type a14 = MyEvent["event"]; // event must be in all the objects inside the dic union

/* **************************** */

// As const //

const programModel = {
  GROUP: "group",
  SINGLE: "single",
} as const; // in case i want to return the exact value from an object i should use as const cuz i need to grante to ts it's not goona change

type av15 = (typeof programModel)["GROUP"];
type av16 = (typeof programModel)["GROUP" | "SINGLE"];
type av17 = (typeof programModel)[Exclude<keyof typeof programModel, "GROUP">];
type av18 = (typeof programModel)[keyof typeof programModel];

/* **************************** */
// Arrays //

const students = ["shwaki", "alawneh", "yazeed", "sleman"] as const;
const studentsV2 = ["shwaki", "alawneh", "yazeed", 12];

type av19 = typeof students;
type av20 = (typeof students)[0];
type av21 = (typeof students)[number];
type av22 = typeof studentsV2;
type av23 = (typeof studentsV2)[0];
type av24 = (typeof studentsV2)[number];

/* **************************** */
// template literal

type route = `/${string}`;
const goToRoute = (route: route) => {};
goToRoute("/sleman");
goToRoute("sleman"); // this is an error

// generate dynamic object type using template literal
type TemplateLiteralKey = `${"user" | "post" | "comment"}${"Id" | "Name"}`;
type ObjectOfKeys = Record<TemplateLiteralKey, string>;

// output
// {
//   userId: string;
//   userName: string;
//   postId: string;
//   postName: string;
//   commentId: string;
//   commentName: string;
// }

/* **************************** */
// UpperCase and LowerCase

type av25 = Uppercase<"sleman">;
type av26 = Lowercase<"sleMAN">;

/* **************************** */

type opp = string | undefined;
type oppp = Extract<opp, string>;

type Solo = { name: string | undefined };

type SoloWithName = {
  [K in keyof Solo]: K extends "name" ? string : Solo[K];
};

// Example usage
const soloData: SoloWithName = { name: "John" };

type av27<T extends string> = T;
type av28 = av27<string>;
type av29 = av27<12>;

// this to give a default value for generic
type CreateDataShape<TData, TError = undefined> = {
  data: TData;
  error: TError;
};

type av30 = {}; // this is everything but null or undefined
const example: av30 = "sleman";
const examplev1: av30 = undefined;

// type for  non empty array
type av31<T> = [T, ...Array<T>];
const emptyArray: av31<number> = [];
const nonEmptyArray: av31<number> = [1];

/* **************************** */
// infer it infer a value inside an object

type av32<T> = T extends { data: infer TData } ? TData : never;
type av33 = av32<{
  data: "123123";
}>;

interface MyComplexInterface<Event, Context, Name, Point> {
  getEvent: () => Event;
  getContext: () => Context;
  getName: () => Name;
  getPoint: () => Point;
}

type Example = MyComplexInterface<
  "click",
  "window",
  "my-event",
  { x: 12; y: 14 }
>;

type GetPoint<T> = T extends MyComplexInterface<any, any, any, infer TPoint>
  ? TPoint
  : never;

type av34<T> = T extends `${infer First} ${infer Last}` ? Last : never;

const returnLastName = <T extends string>(name: T): av34<T> => {
  const lastName = name.split(" ").slice(-1)[0];
  return lastName as av34<T>;
};

returnLastName("Sleman Zaytoon");

const parser1 = {
  parse: () => 1,
};

const parser2 = () => "123";

const parser3 = {
  extract: () => true,
};

type GetParserResult<T> = T extends
  | {
      parse: () => infer TResult;
    }
  | {
      extract: () => infer TResult;
    }
  | (() => infer TResult)
  ? TResult
  : never;

// ************************************ //

type Route = "/" | "/about" | "/admin" | "/admin/users";

// this will loop through each item
type RoutesObject = {
  [R in Route]: R;
};

interface Attributes {
  firstName: string;
  lastName: string;
  age: number;
}

type AttributeGetters = {
  [K in keyof Attributes]: () => Attributes[K];
};

type AttributeGettersV2 = {
  [K in keyof Attributes as `get${Capitalize<K>}`]: () => Attributes[K];
};

interface Examplev2 {
  name: string;
  age: number;
  id: string;
  organisationId: string;
  groupId: string;
}

// in here never will not return anything and skip the value
// so only the data who isnt never will show

type OnlyIdKeys<T> = {
  [K in keyof T as K extends `${string}${"id" | "Id"}${string}`
    ? K
    : never]: T[K];
};

type av35 = OnlyIdKeys<Examplev2>;

type RouteV2 =
  | {
      route: "/";
      search: {
        page: string;
        perPage: string;
      };
    }
  | { route: "/about"; search: {} }
  | { route: "/admin"; search: {} }
  | { route: "/admin/users"; search: {} };

/**
 * Here, R represents the individual Route. The lesson here
 * is that the thing we're iterating DOESN'T have to be a
 * string | number | symbol, as long as the thing we cast it to
 * is.
 */
type RoutesObjectV2 = {
  [R in RouteV2 as R["route"]]: R["search"];
};

interface Values {
  email: string;
  firstName: string;
  lastName: string;
}

type ValuesAsUnionOfTuples = {
  [V in keyof Values]: [V, Values[V]];
}[keyof Values];

type av36 = "A" | "B";
type av37 = {
  [S in av36]: `Student_${S}`;
}[av36];

type Fruit =
  | {
      name: "apple";
      color: "red";
    }
  | {
      name: "banana";
      color: "yellow";
    }
  | {
      name: "orange";
      color: "orange";
    };

type TransformedFruit = {
  [F in Fruit as F["name"]]: `${F["name"]}:${F["color"]}`;
}[Fruit["name"]];

// ******************************* //

type UserPath = "/users/:id";

type UserOrganizationPath = "/users/:id/organisations/:organisationId";

type ExtractPathParams<TPath extends string> = {
  [K in S.Split<TPath, "/">[number] as K extends `:${infer P}`
    ? P
    : never]: string;
};

type av39 = ExtractPathParams<UserOrganizationPath>;

// { id: string }> output


interface Attributesv7 {
  id: string;
  email: string;
  username: string;
}
type av40 = {
  [T in keyof Attributesv7]: Record<T, string>;
}[keyof Attributesv7];



type RouteVv =
  | {
      route: "/";
      search: {
        page: string;
        perPage: string;
      };
    }
  | { route: "/about" }
  | { route: "/admin" }
  | { route: "/admin/users" };

type RoutesObjectV33 = {
  [R in RouteVv as R["route"]]: R extends { search: infer S } ? S : never;
};



type DeepPartial<T> = T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : { [K in keyof T]?: DeepPartial<T[K]> };

type MyType = {
  a: string;
  b: number;
  c: {
    d: string;
    e: {
      f: string;
      g: {
        h: string;
        i: string;
      }[];
    };
  };
};


type av41 = DeepPartial<MyType>;