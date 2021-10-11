var str = "adv.ffd.fff.wsw";

// var reg = /^(.{3}.){3}.{3}$/; // ok
// var reg = ^(...){3}...$;

// console.log(str.match(reg));

var reg = /(MM|MS)(\w{38})SID/;
var str ='bbbbMS3FF38BA6B7973AB6BC49D2B5F3E6594B6991E0SIDaaaa';

// str.test(reg);

// console.log(reg.test(str));

var results = str.match(reg); //只能匹配字符串中出现的首个数字，未使用全局匹配符g
console.log(222, results);
// [
//   'MS3FF38BA6B7973AB6BC49D2B5F3E6594B6991E0SID',
//   'MS',
//   '3FF38BA6B7973AB6BC49D2B5F3E6594B6991E0',
//   index: 4,
//   input: 'bbbbMS3FF38BA6B7973AB6BC49D2B5F3E6594B6991E0SIDaaaa',
//   groups: undefined
// ]

var myArray = reg.exec(str);

console.log(111, myArray);

// 111 [
//   'MS3FF38BA6B7973AB6BC49D2B5F3E6594B6991E0SID',
//   'MS',
//   '3FF38BA6B7973AB6BC49D2B5F3E6594B6991E0',
//   index: 4,
//   input: 'bbbbMS3FF38BA6B7973AB6BC49D2B5F3E6594B6991E0SIDaaaa',
//   groups: undefined
// ]