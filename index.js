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

function johnLennonFacts(){
  const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];
  var i = 0;
  while(i < facts.length){
    facts[i] + "!!!"; 
    i++;
  }
}