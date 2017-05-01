var _ = require('lodash');
var arrayValues = [1];
var concatArray = _.concat(arrayValues,2,3,9);
console.log("concatenation",concatArray);

const chunkArray = _.chunk(['a', 'b', 'c', 'd'], 2);
console.log("chunk",chunkArray);

const compactArray = _.compact([0, 1, false, 2, '', 3]);
console.log("compact",compactArray);

const diffArray = _.difference([2, 1], [2, 3]);
console.log("difference",diffArray);

const diffBy = _.differenceBy([{ 'x': 2 }, { 'x': 1 }], [{ 'x': 1 }], 'x');
console.log("differenceBy ",diffBy);

const dropArray1 = _.drop([1, 2, 3], 2);
const dropArray2 = _.drop([1, 2, 3]);
console.log("drop",dropArray1,dropArray2);

const indexofArray = _.indexOf([1, 2, 1, 2], 2, 2);
console.log("indexOf",indexofArray);

function square(n) {
    return n * n;
}

const mapArray = _.map([4, 8], square);
console.log("map",mapArray);

var users = [
    { 'user': 'barney', 'age': 36, 'active': true },
    { 'user': 'fred',   'age': 45, 'active': false },
    { 'user': 'fred',   'age': 48, 'active': true },
    { 'user': 'fred',   'age': 34, 'active': false }
];

const filterArray = _.filter(users, function(o) { return !o.active; });
console.log("filter",filterArray);

const findArray =_.find(users, function(o) { return o.age < 40; });
console.log("find",findArray);

var array = [
    { 'dir': 'left', 'code': 97 },
    { 'dir': 'right', 'code': 100 }
];

const keyByArray = _.keyBy(array, function(o) {
    return String.fromCharCode(o.code);
});
console.log("keyby",keyByArray);
console.log("keyBY",_.keyBy(array, 'dir'));
