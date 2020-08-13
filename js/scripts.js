
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

      //variables for calculating the days of the week
      var myCC; //- is the century digits. For example 1989 has CC = 19
      var myYY; //- is the Year digits (1989 has YY = 89)
      var myMM; //-  is the Month
      var myDD; //- is the Day of the month


      myCC = yearOfBirth.toString();
      //capture the first two charactwrs
      myCC = parseInt (myCC[0] + myCC[1]);

      alert(myCC*2);





      //Day of the week (d) = ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) mod 7

      //calculate the day of the week
      //Day of the week (d) = ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) mod 7

}
else {
  alert("You have entered and Invalid date: " + fullDateEntered);
}




























//end of file
