
function convertToRoman(num) {
  // M = 1000
  // D = 500
  // C = 100
  // L = 50
  // X = 10
  // V = 5
  // I = 1
  
  var roman = {M:1000, CM:900, D:500, CD:400, C:100, XC: 90, L:50, XL:40, X:10, IX:9, V:5, IV:4,I:1};
  var rom = "";
  
  for(var x of Object.keys(roman)){
    var y = Math.floor(num / roman[x]); // brings it to nearest low base value of the roman object.
    num -= y *roman[x]; // iterates by taking away that value 
    rom += x.repeat(y);
  }
  
  
 return rom;
}

convertToRoman(36);

