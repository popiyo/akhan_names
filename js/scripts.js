
//creating the function for asking the user to enter Data

function prompt_user(message){
  return prompt(message);
}


//ask user for all the inputs we need

//data capture variables
var dayOfBirth;
var monthofBirth;
var yearOfBirth;
var fullDateEntered;


//prompt prompt_user

dayOfBirth = prompt_user("Which DATE of the month were your Born [ 1 - 31 ]?");
monthofBirth =  prompt_user("Which MONTH were you born [ 1 - 12 ]?");
yearOfBirth = prompt_user("Which YEAR were you born? [ 1000 - 9999 ]");

fullDateEntered = dayOfBirth + "/" + monthofBirth + "/" + yearOfBirth;

dayOfBirth = parseInt(dayOfBirth);
monthofBirth = parseInt(monthofBirth);
yearOfBirth = parseInt(yearOfBirth);

//check that the date values are correct

var validdayOfBirth = (dayOfBirth > 0) && (dayOfBirth < 32);
var validmonthofBirth = (monthofBirth > 0) && (monthofBirth < 13);
var validyearOfBirth =(yearOfBirth > 999) && (yearOfBirth < 10000);

if ( validdayOfBirth &&   validmonthofBirth &&  validyearOfBirth) {

      //this is not a valid date to work with
      alert("GOOD: " + fullDateEntered);

}
else {
  alert("You have entered and Invalid date: " + fullDateEntered);
}
