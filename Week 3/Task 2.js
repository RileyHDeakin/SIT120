////reverse array order
const tdf_teams = ["Ineos Granadiers", "Jumbo Visma", "UAE Emirates"];
var reversed = tdf_teams.reverse();
console.log(reversed);

//join an array
var joined = tdf_teams.join();
console.log(joined);

//remove the first number in the array
const numbers = [10, 65, 73, 5, 8];
var spliced = numbers.splice(1);
console.log(spliced);

//add 14 to the array
var pushed = numbers.push(14);
console.log(pushed);

//returns as a string
var string_array = numbers.toString();
console.log(string_array);