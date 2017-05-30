function sumAllInRange(arr) {
  
  var total=0;
  var small = Math.min(arr[1],arr[0]);
  var big = Math.max(arr[1],arr[0]);
  
  for(var x=small; x<=big;x++)
{
  total += x;
}
  
  
  return total;
    
}

sumAllInRange([1, 4]);
