var result = '';
var a = 3;

if (a > 2) {
    result = a + ' is a greater than 2';
}
console.log(result);

var result = '';
var a = 1;

if (a > 2) {
    reuslt = a + ' is greater than 2'
} else {
    result = a + ' is NOT greater than 2'
}
console.log(result);

var result = '';
a = 0;
b = 1;

if (a > 2 || a < -2) {
    result = 'a is not between -2 and 2'
} else if (a === 0 && b === 0) {
    result = 'both a and b are zeros';
} else if (a === b) {
    result = 'a and b are equal'
} else {
    result = 'I give up';
}
console.log(result);

var result = '';
a = 0;
b = 1;

if (a === 1) {
    if (b === 2) {
        result = 'a is 1 and b is 2';
    } else {
        result = 'a is 1 but b is not 2';
    } 
} else {
        result = 'a is not 1, no idea about b';
}
console.log(result);

 