import { CSSProperties } from 'react';

const returnWhatIsPassed = <T extends string>(t: T) => {
  return t;
};

type ReturnWhatIsPassed<T> = T;
type one = ReturnWhatIsPassed<1>;

console.log("1", returnWhatIsPassed("2"));
console.log("1", returnWhatIsPassed("matt"));

const r = <A, B>(a: A, b: B) => {
  return { a, b };
};

type ReturnWhatIsPassedd<T, W> = {
  a: W;
  b: W;
};
type onee = ReturnWhatIsPassedd<1, 2>;

console.log("2", r(1, 2));

// this for work types as well

interface Params<T1, T2> {
  a: T1;
  b: T2;
}
const ta = <T1, T2>(params: Params<T1, T2>) => {
  return {
    first: params.a,
    second: params.b,
  };
};

console.log("3", ta({ a: 1, b: true }));

const findSumOfArray = <T>(
  array: readonly T[],
  mapper: (item: T) => number
): number => array.reduce((acc, item) => acc + mapper(item), 0);

console.log(
  "4",
  findSumOfArray(
    [
      1,
      2,
      3,
      4,
      5,
      {
        wow: 99,
      },
    ],
    (item) => {
      if (typeof item === "object" && "wow" in item) {
        return item.wow;
      }

      return item;
    }
  )
);

// how to make class generic

class Sleman<TProps> {
  private props: TProps;

  constructor(props: TProps) {
    this.props = props;
  }

  getProps = () => this.props;
}

const res = new Sleman({ 1: "2", 13: 13, age: 12 });

const cloneSleman = <T> (com : Sleman<T>): Sleman<T> =>  {
    return new Sleman(com.getProps());
}

console.log("5", res.getProps());
console.log("55", cloneSleman(res));

interface User {
  firstName: string;
  lastName: string;
}

const concatenateFirstNameAndLastName = <
  TUser extends {
    firstName: string;
    lastName: string;
  }
>(
  user: TUser
): TUser & {
  fullName: string;
  id: number;
} => {
  return {
    ...user,
    fullName: `${user.firstName} ${user.lastName}`,
    id: 12,
  };
};

const newUser = concatenateFirstNameAndLastName({
  firstName: "Sleman",
  lastName: "Zaytoon",
  age: 27,
});

console.log("6", newUser);

const createSet = <T = string>(arr: T[]): Set<T> => {
  return new Set<T>(arr);
};

console.log("11", createSet<string>(["1", "2", "3", "3"]));
console.log("12", createSet<number>([1, 2, 3, 3]));
console.log("13", createSet(["1", 2, "3", "2"]));



const aww = [{ name: "john" }, { name: "Steve" }];

const  obj =  aww.reduce((acc: Record<string, {name: string}>, item) => {
  acc[item.name] = item;
  return acc;
}, {});


const fetchData = async <TData>(uri: string) => {
  const data: TData = await fetch(uri).then((res) => res.json());
  return data;
};

interface Zaid  {
    name: string,
    height: string
}

  
const getSomeData = async () => {
  const data = await fetchData<Zaid>(
    "https://swapi.dev/api/people/1"
  );
  console.log(data.name);
  console.log(data.height)
};

getSomeData();



const getHomePageFeatureFlags = <TData>(config: {
    rawConfig: {
        featureFlags: {
            homePage: TData
        }
    }
}, override: (flags: TData) => TData) => {
    return override(config.rawConfig.featureFlags.homePage);
}



const example = {
    name: "tasneem",
    age: 22,
    rawConfig: {
        featureFlags: {
            homePage: {
                degree: "master",
                beauty: "cute",
                hello: "world"
            }
        }
    }
}

getHomePageFeatureFlags(example , (data) => {
    console.log("data", data)
    return data
});


const typedObject = <T extends object> (obj: T) => {
  return Object.keys(obj) as Array<keyof T>;
};

console.log(
  typedObject({
    a: 1,
    b: 2,
  })
);

const typedObjectv2 = <TKey extends string> (obj: Record<TKey, any>) => {
  return Object.keys(obj) as Array<TKey>;
};

console.log(
  typedObjectv2({
    a: 1,
    b: 2,
  })
);


const makeSafe =
  <TParams extends any[], TReturn>(func: (...args: TParams) => TReturn) =>
  (
    ...args: TParams
  ):
    | {
        type: "Sucess";
        result: TReturn;
      }
    | {
        type: "Failre";
        error: Error;
      } => {
    try {
      const result = func(...args);
      return {
        type: "Sucess",
        result,
      };
    } catch (e: any) {
      return {
        type: "Failre",
        error: e,
      };
    }
  };

  const func = makeSafe(() => 1);
  const func2 = makeSafe((a: number, c: number) => a + c);
  func2(2,4)


  const inferItemLiteral = <T extends number | string>(t: T) => {
    return {
      output: t,
    };
  };

  console.log(inferItemLiteral(1));
  console.log(inferItemLiteral("1"));

  const makeStatus = <TStatus extends string>(s: TStatus[]) => {
    return s;
  };

  console.log(makeStatus(["1", "2", "3", "4"]));

  const makeStatusv2 = <T extends string, B extends number>(s: Record<T, B>) => {
    return s;
  };

  makeStatusv2({
    "2": 12,
    "3": 22,
  });


  // helper that takes a generic and return another genertic
  type THelper<T> = T extends "goodbye" ? "hello" : "goodbye";

  // "Type '\"goodbye\" | \"hello\"' is not assignable to type 'T extends \"goodbye\" ? \"hello\" : \"goodbye\"'.\n  Type '\"goodbye\"' is not assignable to type 'T extends \"goodbye\" ? \"hello\" : \"goodbye\"'."
  
  const sayGreetings = <T extends "goodbye" | "hello">(
    s: T
  ): T extends "goodbye" ? "hello" : "goodbye " => {
    return (s == "goodbye" ? "hello" : "goodbye") as THelper<T>;
  };

  sayGreetings("hello");


  type Person = {
    name: string;
    age: number;
    birthdate: Date;
  }


  const remapPerson = <Key extends keyof Person>(
    key: Key,
    value: Person[Key]
  ): Person[Key] => {
    if (key === "birthdate") {
      return(new Date()) as Person[Key];
    }

    return value;
  };

  remapPerson("birthdate", new Date());



  const curryFunction =
    <T>(t: T) =>
    <V>(v: V) =>
    <W>(w: W) => {
      return {
        t,
        v,
        w,
      };
    };

  curryFunction(1)(2)(3);

  interface Cachee<T> {
    get: (key: string) => T | undefined;
    set: (key: string, value: T) => void;
    clone: <U>(transform: (elem: T) => U) => Cachee<U>;
  }

  const createCashe = <T>(initialCache?: Record<string, T>): Cachee<T> => {
    const cache: Record<string, T> = initialCache || {};

    return {
      get: (key) => cache[key],
      set: (key, value) => (cache[key] = value),

      clone: (transform) => {
        const newCache: Record<string, any> = {};

        for (const sleman in cache) {
          newCache[sleman] = transform(cache[sleman]);
        }

        return newCache;
      },
    };
  };

  const numberCache = createCashe<number>();

  numberCache.set("a", 1);
  console.log("pushing P", numberCache.get("a"));



  // what i wrote 
  const returnBothOfWhatIPassIn = <T extends string | number>(
    params: Record<string, T> & {
      a: T;
      b: T;
    }
  ): Array< T> => {
    return [params.a, params.b];
  };

  // actual soluation 

  const returnBothOfWhatIPassInV2 = <
    T extends {
      a: unknown;
      b: unknown;
    }
  >(
    params: T
  ): [T["a"], T["b"]] => {
    return [params.a, params.b];
  };

  returnBothOfWhatIPassIn({
    a: 1,
    b: "2",
  });

  returnBothOfWhatIPassInV2({
    a: 1,
    b: "2",
  });


console.log("another one");


const getValue = <T, B extends keyof T>(obj: T, key: B): T[B] => {
  return obj[key];
};

const objw = {
  a: 1,
  b: "b",
  c: true,
};

const j = getValue(objw, "a");
const k = getValue(objw, "b");
const z = getValue(objw, "c");




// use case for global useState

const makeUseStyled = <TTheme = {}> () => {
  const useStyled =(func: (theme: TTheme) => CSSProperties) => {
    return {} as CSSProperties 
 } 

 return useStyled
}


interface MyTheme {
  color:  {
    primary: string
  };
  fontSize: {
    small: string
  }
}

const useStyled = makeUseStyled<MyTheme>();

const buttonStyle = useStyled((theme) => ({
  color: theme.color.primary,
  fontSize: theme.fontSize.small
}))

const divStyle = useStyled((theme) => ({
  backgroundColor: theme.color.primary,
}))



const o = <T extends string>(obj: Record<string, T> & {
  a: T
}): T => {
  return obj.a as T;
};

const p = <T>(obj: T & {
  a: string
}) => {
  return obj.a;
};

const owias = o({ a: "2" });
const owiasV2 = p({ a: "1" });


console.log("ASDDASDD");


const makeSelector =
  <Source>() =>
  <TSource extends Record<string, (source: Source) => any>>(
    selector: TSource
  ) => {
    return selector;
  };

interface Source {
  firstName: string;
  middleName: string;
  lastName: string;
} 

const selector = makeSelector<Source>()({
  getFullName: (src) => `${src.firstName} ${src.middleName} ${src.lastName}`,
  getFirstNameAndLastName: (src) => `${src.firstName}  ${src.lastName}`,
  getFirstNameLength: (src) => src.firstName.length,
}); 

const uwu  =  selector.getFullName({
  firstName: "sleman",
  middleName:  "Saamer",
  lastName: "Zaitoun"
})

console.log("uwu", uwu);


function returnWhatIPassIn(s: string): string;
function returnWhatIPassIn(s: number): number;

function returnWhatIPassIn(s: unknown)  {
  return  s;
}

const matt =  returnWhatIPassIn("matt")
const one =  returnWhatIPassIn(1)