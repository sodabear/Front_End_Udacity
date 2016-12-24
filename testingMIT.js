var MAX = 10;

var line = function (i, x) {

var l = i + " times " + x

+ " is " + (i * x);

return l;

}

var table = function (x) {

for (var i = 1; i <= MAX; i += 1) {
 console.log(line(i, x));
 //print(line(i,x));
 }

}

table(3);
