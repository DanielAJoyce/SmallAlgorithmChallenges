
function palindrome(str) {
  
  //convert to lower case to ignore capitals and odd use cases.
  str = str.toLowerCase();
  //str = str.replace(/\d/gi,"");
  str = str.replace(/\s/gi,"");
  str = str.replace(/[,.]/gi,"");
  str = str.replace(/[/_-]/gi,"");
  str = str.replace(/[(:)]/gi,"");
  

 var reverseStr = str.split("");
  
 reverseStr.reverse("");
 reverseStr = reverseStr.join("");
  
  
  console.log(reverseStr);
 reverseStr.toString();
  
  if(str == reverseStr)
    {
      return true;
    }
  else{
     return false;
  }
  
}

palindrome("0_0 (: /-\ :) 0-0");
