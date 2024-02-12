"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var returnWhatIsPassed = function (t) {
    return t;
};
console.log("1", returnWhatIsPassed("2"));
console.log("1", returnWhatIsPassed("matt"));
var r = function (a, b) {
    return { a: a, b: b };
};
console.log("2", r(1, 2));
var ta = function (params) {
    return {
        first: params.a,
        second: params.b,
    };
};
console.log("3", ta({ a: 1, b: true }));
var findSumOfArray = function (array, mapper) { return array.reduce(function (acc, item) { return acc + mapper(item); }, 0); };
console.log("4", findSumOfArray([
    1,
    2,
    3,
    4,
    5,
    {
        wow: 99,
    },
], function (item) {
    if (typeof item === "object" && "wow" in item) {
        return item.wow;
    }
    return item;
}));
// how to make class generic
var Sleman = /** @class */ (function () {
    function Sleman(props) {
        var _this = this;
        this.getProps = function () { return _this.props; };
        this.props = props;
    }
    return Sleman;
}());
var res = new Sleman({ 1: "2", 13: 13, age: 12 });
var cloneSleman = function (com) {
    return new Sleman(com.getProps());
};
console.log("5", res.getProps());
console.log("55", cloneSleman(res));
var concatenateFirstNameAndLastName = function (user) {
    return __assign(__assign({}, user), { fullName: "".concat(user.firstName, " ").concat(user.lastName), id: 12 });
};
var newUser = concatenateFirstNameAndLastName({
    firstName: "Sleman",
    lastName: "Zaytoon",
    age: 27,
});
console.log("6", newUser);
var createSet = function (arr) {
    return new Set(arr);
};
console.log("11", createSet(["1", "2", "3", "3"]));
console.log("12", createSet([1, 2, 3, 3]));
console.log("13", createSet(["1", 2, "3", "2"]));
var aww = [{ name: "john" }, { name: "Steve" }];
var obj = aww.reduce(function (acc, item) {
    acc[item.name] = item;
    return acc;
}, {});
var fetchData = function (uri) { return __awaiter(void 0, void 0, void 0, function () {
    var data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, fetch(uri).then(function (res) { return res.json(); })];
            case 1:
                data = _a.sent();
                return [2 /*return*/, data];
        }
    });
}); };
var getSomeData = function () { return __awaiter(void 0, void 0, void 0, function () {
    var data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, fetchData("https://swapi.dev/api/people/1")];
            case 1:
                data = _a.sent();
                console.log(data.name);
                console.log(data.height);
                return [2 /*return*/];
        }
    });
}); };
getSomeData();
var getHomePageFeatureFlags = function (config, override) {
    return override(config.rawConfig.featureFlags.homePage);
};
var example = {
    name: "tasneem",
    age: 23,
    rawConfig: {
        featureFlags: {
            homePage: {
                degree: "master",
                beauty: "cute",
                hello: "world"
            }
        }
    }
};
getHomePageFeatureFlags(example, function (data) {
    console.log("data", data);
    return data;
});
var typedObject = function (obj) {
    return Object.keys(obj);
};
console.log(typedObject({
    a: 1,
    b: 2,
}));
var typedObjectv2 = function (obj) {
    return Object.keys(obj);
};
console.log(typedObjectv2({
    a: 1,
    b: 2,
}));
var makeSafe = function (func) {
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        try {
            var result = func.apply(void 0, args);
            return {
                type: "Sucess",
                result: result,
            };
        }
        catch (e) {
            return {
                type: "Failre",
                error: e,
            };
        }
    };
};
var func = makeSafe(function () { return 1; });
var func2 = makeSafe(function (a, c) { return a + c; });
func2(2, 4);
var inferItemLiteral = function (t) {
    return {
        output: t,
    };
};
console.log(inferItemLiteral(1));
console.log(inferItemLiteral("1"));
var makeStatus = function (s) {
    return s;
};
console.log(makeStatus(["1", "2", "3", "4"]));
var makeStatusv2 = function (s) {
    return s;
};
makeStatusv2({
    "2": 12,
    "3": 22,
});
// "Type '\"goodbye\" | \"hello\"' is not assignable to type 'T extends \"goodbye\" ? \"hello\" : \"goodbye\"'.\n  Type '\"goodbye\"' is not assignable to type 'T extends \"goodbye\" ? \"hello\" : \"goodbye\"'."
var sayGreetings = function (s) {
    return (s == "goodbye" ? "hello" : "goodbye");
};
sayGreetings("hello");
var remapPerson = function (key, value) {
    if (key === "birthdate") {
        return (new Date());
    }
    return value;
};
remapPerson("birthdate", new Date());
var curryFunction = function (t) {
    return function (v) {
        return function (w) {
            return {
                t: t,
                v: v,
                w: w,
            };
        };
    };
};
curryFunction(1)(2)(3);
var createCashe = function (initialCache) {
    var cache = initialCache || {};
    return {
        get: function (key) { return cache[key]; },
        set: function (key, value) { return (cache[key] = value); },
        clone: function (transform) {
            var newCache = {};
            for (var sleman in cache) {
                newCache[sleman] = transform(cache[sleman]);
            }
            return newCache;
        },
    };
};
var numberCache = createCashe();
numberCache.set("a", 1);
console.log("pushing P", numberCache.get("a"));
// what i wrote 
var returnBothOfWhatIPassIn = function (params) {
    return [params.a, params.b];
};
// actual soluation 
var returnBothOfWhatIPassInV2 = function (params) {
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
var getValue = function (obj, key) {
    return obj[key];
};
var objw = {
    a: 1,
    b: "b",
    c: true,
};
var j = getValue(objw, "a");
var k = getValue(objw, "b");
var z = getValue(objw, "c");
// use case for global useState
var makeUseStyled = function () {
    var useStyled = function (func) {
        return {};
    };
    return useStyled;
};
var useStyled = makeUseStyled();
var buttonStyle = useStyled(function (theme) { return ({
    color: theme.color.primary,
    fontSize: theme.fontSize.small
}); });
var divStyle = useStyled(function (theme) { return ({
    backgroundColor: theme.color.primary,
}); });
