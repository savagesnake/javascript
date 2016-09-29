function makePhrase(){
  // set some static words in three different arrays
  var words1 = ["norm", "canyon", "balloon", "everyone", "blowtorch"]
  var words2 = ["critical", "adventure", "beholder", "ark", "homesick"]
  var words3 = ["disciple", "grab", "lonesome", "barber" ,"pattern"]

// generate three random numbers 0 - 4 based on the array ,length
  var rand1 = Math.floor( Math.random() * words1.length );
  var rand2 = Math.floor( Math.random() * words2.length );
  var rand3 = Math.floor( Math.random() * words3.length );

//gnerate a phras, use the random number generated to get a word by its index
  var phrase = words1[rand1]+" "+words2[rand2]+" "+words3[rand3]

  alert(phrase)

}

makePhrase();
