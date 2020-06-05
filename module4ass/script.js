//var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
//var ans= function(names){
//for(var i=0;i<names.length;i++)
//{
	
//	if (names[i].startsWith("J") || names[i].startsWith("j"))
//	{
//		console.log("Goodbye "+names[i])
//	}
//	else{
//		console.log("Hello "+names[i])
//	}
//}
//
//};
//ans(names);

(function () {

var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];


for (var i = 0; i < names.length; i++) {

  var firstLetter = names[i].charAt(0).toLowerCase();

 
  if (firstLetter === 'j') {
    speakgood.speak(names[i]);
  } else {
    speakhello.speak(names[i]);
  }
}

})();
