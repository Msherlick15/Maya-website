var word = "miles";
var count = 5;
while (count > 0) {
 console.log (count + " " + word + " driven!");
 console.log ("You Have Pleanty Of Gas");
 count = count - 1;
 if (count > 0) {
 console.log (count + " " + word + " driven!");
 console.log ("You Have Pleanty Of Gas");
 } else {
 console.log ("No more " + word + " gas, find your neerest gas station quick!");
 }
}
