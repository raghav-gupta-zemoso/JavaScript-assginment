//An arrow function takes two arguments firstName and lastName and returns a 2 letter string that represents the first letter of both the arguments. For the arguments Roger and Waters, the function returns ‘RW’. Write this function.
//Submit the github link to the code


let myName= (firstName,lastName) => {
   let initials = firstName.charAt(0)+lastName.charAt(0);
   return initials;
}
console.log(myName('raghav','gupta'));
