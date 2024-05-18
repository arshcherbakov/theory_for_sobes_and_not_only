// Как обратиться к полям объекта ? (длинные свойства и короткие свойства)

const testObj = {
  userName: "David",
  age: 18,
  "sur name": "Get",
};

console.log(testObj.age);
console.log(testObj["age"]);

testObj["user city"] = "Kalam Burg";
console.log(testObj["sur name"]);

// Как проверить что свойство объекта существует ?

const object1 = {
  color: "black",
  size: "20px",
  prop: null,
};

const object2 = {
  color: "black",
  color: "darck",
};

console.log("hasOwnProperty:");
console.log(object1.hasOwnProperty("color")); // true
console.log(object1.hasOwnProperty("size")); // true
console.log(object1.hasOwnProperty("position")); // false
console.log(object1.hasOwnProperty("prop")); // true
console.log(object2.hasOwnProperty("color")); // true
console.log(object2.hasOwnProperty("toString")); // false
console.log("hasOwn:");
console.log(Object.hasOwn(object1, "color")); // true
console.log(Object.hasOwn(object1, "size")); // true
console.log(Object.hasOwn(object1, "position")); // false
console.log(Object.hasOwn(object1, "prop")); // true
console.log(Object.hasOwn(object2, "color")); // true
console.log(Object.hasOwn(object2, "toString")); // false

// переопределение hasOwnProperty
const foo = {
  hasOwnProperty() {
    return false;
  },
  bar: "The dragons be out of office",
};

foo.hasOwnProperty("bar"); // false

console.log("Проблема Object.create(null)");
const objCreate = Object.create(null);
objCreate.prop = "call";
objCreate.hasOwnProperty("prop"); // TypeError: foo.hasOwnProperty is not a function
