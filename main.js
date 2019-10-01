function fizzy(num) {
  let response = ' ';
  const fizz = (num%3===0);
  const buzz = (num%5===0);
if (fizz && buzz){
response ='FizzBuzz';
}
else if (fizz && !buzz) {
response = 'Fizz';
}
else if (!fizz && buzz){
  response = 'Buzz';
}
else if (!fizz && !buzz){
  response = num;
}
return response;
}


console.log(fizzy(9));


module.exports = {
  fizzy,
}