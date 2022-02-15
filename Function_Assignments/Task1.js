//Write a program to demonstrate how a function can be passed as a parameter to another function.
function func(greetings) {
    alert(greetings());
}
function greetings() {
    return "good morning";
}
func(greetings);