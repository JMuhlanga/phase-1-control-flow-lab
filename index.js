function scuberGreetingForFeet(ride){
  // Write your code here!
  if(ride <= 400){
    return `This one is on me!`;
  }else if(ride > 2000 && ride < 2500){
    return `I will gladly take your thirty bucks.`;
  }else if(ride >= 2500){
    return `No can do.`;
  }
}

function ternaryCheckCity(someValue){
  // Write your code here!
 return  someValue === `NYC` ? "Ok, sounds good." : "No go." ; 
}

function switchOnCharmFromTip(someValue){
  // Write your code here!
  switch(someValue){
    case someValue = `generous`:
      return `Thank you so much.`;
      break;
    case someValue = `not as generous`:
      return `Thank you.`;
      break;
    default:
      return `Bye.`
  }
}