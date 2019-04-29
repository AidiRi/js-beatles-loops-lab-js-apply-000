// add solution here
function theBealelsPlay(){
  const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
  const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];
  var beatlesArr = [];
  for(var i = 0; i < musicians.length; i ++){
    beatlesArr.push(musicians[i] + " plays " + instruments[i])
  }
}