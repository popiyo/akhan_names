
//creating the function for asking the user to enter Data

function prompt_user(message){
  return prompt(message);
}

function computeDayOfWeek(myCC,myYY,myMM,myDD){
  return    ( ( (myCC/4)-2*myCC-1) + ((5*myYY/4)) + ((26*(myMM+1)/10)) + myDD ) % 7;
}




//ask user for all the inputs we need

//data capture variables
var dayOfBirth;
var monthofBirth;
var yearOfBirth;
var fullDateEntered;
var candidateEnglishName;
const nameWeekdayMapping = [
  ["Kwasi","Akosua"],
  ["Kwadwo","Adwoa"],
  ["Kwabena","Abenaa"],
  ["Kwaku","Akua"],
  ["Yaw","Yaa"],
  ["Kofi","Afua"],
  ["Kwame","Ama"]
];

//element 0 is for Sunday,
// element 0,0 is male name
//element 0,1 is female name and so forth for the rest of the weeks
//element 1 is Monday, 1,0 male, 1,1 female names


//prompt prompt_user
candidateEnglishName = prompt_user("Please enter your Surname: [max 20 characters]");

if (!candidateEnglishName) candidateEnglishName = "Candidate";
if (candidateEnglishName.length >20) candidateEnglishName = candidateEnglishName.substr(0,20);

dayOfBirth = prompt_user(candidateEnglishName + ", \nWhich DATE of the month were your Born [ 1 - 31 ]?\n");
monthofBirth =  prompt_user(candidateEnglishName + ", \nWhich MONTH were you born [ 1 - 12 ]?\n");
yearOfBirth = prompt_user(candidateEnglishName + ", \nWhich YEAR were you born? [ 1000 - 9999 ]\n");

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
      var scrapvar; //working variable
      var dayOfWeek; //the week day we are looking for

      //extract CC
      scrapvar = yearOfBirth.toString();
      //capture the first two charactwrs
      myCC = parseInt (scrapvar[0] + scrapvar[1]);
      //capture the last two charactwrs
      myYY = parseInt (scrapvar[2] + scrapvar[3]);

      dayOfWeek = computeDayOfWeek (myCC,myYY,monthofBirth,dayOfBirth);
      dayOfWeek = parseInt(dayOfWeek.toFixed());
      alert (dayOfWeek);

}
else {
  alert(candidateEnglishName + ", \nYou have entered and Invalid date: " + fullDateEntered + "\nExpected Output: DD/MM/YYYY \nExample: 23/4/2019");
}




























//end of file
