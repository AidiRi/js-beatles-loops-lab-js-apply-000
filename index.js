// add solution here
function theBeatlesPlay(){
  const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
  const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];
  var beatlesArr = [];
  for(var i = 0; i < musicians.length; i ++){
    beatlesArr.push(musicians[i] + " plays " + instruments[i])
  }
  return beatlesArr;
}

function johnLennonFacts(
   var facts = [];){
  var i = 0;
  while(i < facts.length){
    facts[i] = facts[i]+ "!!!"; 
    i++;
  }
  return facts;
}