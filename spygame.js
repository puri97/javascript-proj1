alert("Hello visitor");
var name=prompt("Enter your name");
const splitString = name.split(" ");
console.log(splitString);
var fname=splitString[0];
var lname=splitString[1];
if(fname[0]==lname[0])
{var age=prompt("Would you mind letting me know your age?");
  if(age>20&&age<30)
  {
	  var ht=prompt("Great,and how tall are you?(I only understand centimeters lol!)");
	  if(ht>=170){
		  var petn=prompt("Hey what is your petname!^-^");
		  
		  if(petn[petn.length-1]=='y')
			  console.log("Caught you!!")
	  }
  }
}

else{
	alert("Welcome!!")
}
