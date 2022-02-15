let myName= (firstName,lastName) => {
   let initials = firstName.charAt(0)+lastName.charAt(0);
   return initials;
}
console.log(myName('raghav','gupta'));
