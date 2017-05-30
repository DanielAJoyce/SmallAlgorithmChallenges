
function findLongestWord(str) {
  
  var strArray = str.split(" ");
  var longestWord="";
  
	for(var i = 0; i < strArray.length; i++)
	{
		if( strArray[i].length > longestWord.length)
			{ 
					longestWord = strArray[i];
			}
	}
  return longestWord.length;
}

findLongestWord("The quick brown fox jumped over the lazy dog");
