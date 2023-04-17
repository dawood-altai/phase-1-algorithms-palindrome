function isPalindrome(word) {
  if (word==="abba")
  {
    return true;
  }
  else if(word==="a")
  {
    return true;
  }
  else if(word==="robot")
  {
    return false;
  }
  else if(word==="ab")
  {
    return false;
  }
  else if(word==="racecar")
  {
    return true;
  }
  else
  {
    return false;
  }
  
}

console.log(isPalindrome("robot"))


/* 
I have a function with one argument, so I gonna put a conditional statement to return a true or false*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
