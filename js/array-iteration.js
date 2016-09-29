var array = [
  60,50,60,58,54,54,
  58,50,52,54,48,69,
  34,55,51,52,44,51,
  69,64,66,55,52,61,
  46,31,57,52,44,18,
  41,53,55,61,51,44
]

var highestValue = 0 ;
var topValuesIndex = [];

for(var i=0; i < array.length; i++){
  // display all of the array values the console
  console.log("Array index #"+ i +" value: "+array[i]);

  // get the highes value
  if(highestValue < array[i]){
      highestValue = array[i];
    // end of if statement
  }
  // end of for loop
}

// loo to find the all of the top values
for(var i=0; i < array.length; i++){
  if(highestValue === array[i]){
    topValuesIndex.push(i)
  }
}

// display the number of items in array
console.log("Number of items in array: " + array.length);

// display the highest value in array
console.log("Array highest value: " + highestValue);

// display the top values index in array
console.log("Top values index: " + topValuesIndex);
