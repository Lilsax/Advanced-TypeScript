
// function returnWhatIPassIn(s: string): string;
// function returnWhatIPassIn(s: number): number;

function youSayHello(s: "hello"): "goodbye";
function youSayHello(s: "goodbye"): "hello";

function youSayHello(s:string) {
   return s ==  "hello" ? "goodbye" : "hello"
};

youSayHello("hello")    


interface AnonymousPrivileges {
  sitesCanVisit: string[];
}

interface UserPrivileges extends AnonymousPrivileges {
  sitesCanEdit: string[];
}

interface AdminPrivileges extends UserPrivileges {
  sitesCanDelete: string[];
}

function getRolePrivileges(role: "admin"): AdminPrivileges;
function getRolePrivileges(role: "user"): UserPrivileges;
function getRolePrivileges(role: string): AnonymousPrivileges;
function getRolePrivileges(
  role: string,
): AnonymousPrivileges | AdminPrivileges | UserPrivileges {
  switch (role) {
    case "admin":
      return {
        sitesCanDelete: [],
        sitesCanEdit: [],
        sitesCanVisit: [],
      };
    case "user":
      return {
        sitesCanEdit: [],
        sitesCanVisit: [],
      };
    default:
      return {
        sitesCanVisit: [],
      };
  }
}

getRolePrivileges("admin").sitesCanDelete.push("www.google.coms");

function runGenerator(generator: () => string): string;
function runGenerator(generator: { run: () => string }): string;
function runGenerator(generator: Record<string, () => string> | Function) {
  if (typeof generator === "function") {
    return generator();
  } 
  return generator.run();
}

const result1 = runGenerator({
  run: () => "hello",
});

const result = runGenerator(() => "hello");

{
  function returnWhatIPassInExceptFor1(t: 1): 2;
  function returnWhatIPassInExceptFor1<T>(t: T): T;
  function returnWhatIPassInExceptFor1(t: unknown): unknown {
    if (t === 1) {
      return 2;
    }
    return t;
  }

  const result = returnWhatIPassInExceptFor1(1);

  const a = returnWhatIPassInExceptFor1("a");
  const b = returnWhatIPassInExceptFor1("b");
  const c = returnWhatIPassInExceptFor1("c");
}


{
  const divElement = document.querySelector("div");
  const spanElement = document.querySelector("span");
  
  const divElement2 = document.querySelector< HTMLDivElement>("div.foo");
}


{

  function useData<T>(params: {
    fetchData: () => Promise<T>;
  }): {
    getData: () => T | undefined;
  }

  function useData<T>(params: {
    fetchData: () => Promise<T>;
    initialData?: T;
  }): {
    getData: () => T;
  }

  function useData<T>(params: {
    fetchData: () => Promise<T>;
    initialData: T;
  }): {
    getData: () => T | undefined;
  } {
    let data = params.initialData;

    params.fetchData().then((d) => {
      data = d;
    });

    return {
      getData: () => data,
    };
  }

  {
    const numData = useData({
      fetchData: () => Promise.resolve(1),
    });

    const data = numData.getData();
  }

  const numData = useData({
    fetchData: () => Promise.resolve(1),
    initialData: 2,
  });

  const data = numData.getData();
}