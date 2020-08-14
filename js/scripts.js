
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
var gender; //0 male, 1 female so as to map correctly to the matrix below.
var stringGender;
const nameWeekdayMapping = [
  ["Kwasi","Akosua","Sunday"],
  ["Kwadwo","Adwoa", "Monday"],
  ["Kwabena","Abenaa","Tuesday"],
  ["Kwaku","Akua","Wednesday"],
  ["Yaw","Yaa","Thursday"],
  ["Kofi","Afua","Friday"],
  ["Kwame","Ama","Saturday"]
];


//element 0 is for Sunday,
// element 0,0 is male name
//element 0,1 is female name and so forth for the rest of the weeks
//element 1 is Monday, 1,0 male, 1,1 female names


//prompt prompt_user
candidateEnglishName = prompt_user("Please enter your Surname: [max 20 characters]\n\n");

if (!candidateEnglishName) candidateEnglishName = "Candidate";
if (candidateEnglishName.length >20) candidateEnglishName = candidateEnglishName.substr(0,20);

dayOfBirth = prompt_user(candidateEnglishName + ",\n\nWhich DATE of the month were your Born [ 1 - 31 ]?\n\n");
monthofBirth = prompt_user(candidateEnglishName + ",\n\nWhich MONTH were you born [ 1 - 12 ]?\n\n");
yearOfBirth = prompt_user(candidateEnglishName + ",\n\nWhich YEAR were you born? [ 1000 - 9999 ]\n\n");
gender = confirm("Please Press OK if you are FEMALE....");


//set the gender parameters
if(gender) {
  gender = 1;
  stringGender = "FEMALE";
} else {
  gender = 0;
  stringGender = "MALE";
}

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
      var bioData;


      //extract CC
      scrapvar = yearOfBirth.toString();
      //capture the first two charactwrs
      myCC = parseInt (scrapvar[0] + scrapvar[1]);
      //capture the last two charactwrs
      myYY = parseInt (scrapvar[2] + scrapvar[3]);

      dayOfWeek = computeDayOfWeek (myCC,myYY,monthofBirth,dayOfBirth);
      dayOfWeek = parseInt(dayOfWeek.toFixed());



      bioData = "Based on the data you have provided, we have come to the following Akon cultural deduction for you: " +
                "\n\nSurname: " + candidateEnglishName + " - " + stringGender +
                "\nDate of Birth: " + fullDateEntered +
                "\nDay of Week Born: " + nameWeekdayMapping[dayOfWeek][2] +
                "\n\nAkon Baptism Name: " + nameWeekdayMapping[dayOfWeek][gender] +
                "\n\nTHANK YOU FOR SHOWING INTEREST IN OUR AKON CULTURE!" ;

      alert (bioData);

}
else {
  alert(candidateEnglishName + ", \n\nYou have entered and Invalid date: " + fullDateEntered + "\n\nExpected Output: DD/MM/YYYY \nExample: 23/4/2019\n\n");
}




























//end of file
