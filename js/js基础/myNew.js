function fatherFn(name, age) {
  this.name = name;
  this.age = age;

  this.introduce = function() {
    console.log(11111, this.name, this.age);
  }
}

// var son1 = new fatherFn('stephen', 14);
// var son2 = new fatherFn('jiang', 14);

// son1.introduce();
// son2.introduce();

// console.log(son1.__proto__); // fatherFn {}
// console.log(son1.prototype); // undefined
// console.log(fatherFn.prototype); // fatherFn {}

// 自建mynew
function myNew() {
  console.log(arguments);
  var obj = {};
  // console.log(obj.__proto__, obj.prototype);
  obj.__proto__ = arguments[0].prototype;
  // console.log(obj.__proto__, obj.prototype);
  // obj.call(arguments[0]);
  arguments[0].call(obj, arguments[1], arguments[2]);
  return obj;
}

var son3 = myNew(fatherFn, 'he', 25);

son3.introduce();

console.log(son3.__proto__, son3.prototype);