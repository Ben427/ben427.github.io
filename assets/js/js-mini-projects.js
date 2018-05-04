/*This function finds the longest word*/
function longestWord(e){
	e = e || window.event;
    if (e.keyCode == 13 || e.buttons ==0 || e.buttons==1 || e.buttons ==2)
    {
       
        var str = document.getElementById("userInput").value;
 var arr = str.split(" ");
  /*return str.length;
*/
  var longest = arr[0]; 
  /*var leng = arr.length;*/
 for (var i=0; i < arr.length; i++){
     if (arr[i].length >=
         longest.length){
       longest=arr[i];
       leng = longest.length;
     }
     
   }
  alert('The longest word is...' + longest);
	}
	
	else{
		return;
		
	}
      }


/*This function capitalizes the first letter of a sentence.*/
function titleCase(e) {
  /*
  Step 1: turn it all lower case
  Step 2: split it into individual words
  Step 3: capitalize the first letter of each word
  Step 4: rejoin the words into a sentence
  Step 5: Profit. 
  
  */
  e = e || window.event;
    if (e.keyCode == 13 || e.buttons ==0 || e.buttons==1 || e.buttons ==2)
    {
       
  
   var str = document.getElementById("userInput2").value;

  str = str.toLowerCase();
  var array = str.split(" ");
  for (i =0; i<array.length; i++){
   array[i] = array[i].charAt(0).toUpperCase() + array[i].substr(1);
  }
  str= array.join(" ");
  alert(str);
	}
	else {
		return;
	}
}

/*confirm ending thing...*/
function confirmEnding(e) {
  /*
  2 methods needed...one if it's a single word and another if it's a sentence. 
  
  1. check if it's a single word or a sentence
  2. if it's a character do what's already written down below
  3. if it's a sentence, split it into an array of words
  4. then compare the last word to the target 
  
  USE THE LENGTH OF TARGET TO DETERMINE HOW MANY LETTERS TO COMPARE..
  
  */
  e = e || window.event;
    if (e.keyCode == 13 || e.buttons ==0 || e.buttons==1 || e.buttons ==2)
    {
       
  var str = document.getElementById("userInput3").value;
  var target = document.getElementById("userInput4").value;
  var length = target.length;
  var testPhrase = str.substring(str.length - length,str.length);
  if (testPhrase == target){
	alert ("It matches!");
    return true;
  }
  else {
	alert ("It does not match!");
  }
	}
	else{
		return;
	}
}

function repeatStringNumTimes(e) {
  /*
  1. create a for loop
  2. append string to itself
  */
  e = e || window.event;
    if (e.keyCode == 13 || e.buttons ==0 || e.buttons==1 || e.buttons ==2)
    {
       
  var str=document.getElementById("userInput5").value;
  var num=document.getElementById("userInput6").value;
  var finalString=""; 
  
  for (i=0; i<num; i++){
    finalString = finalString.concat(str);
      
  }
  alert(finalString);
	}
	else{
		return;
	}
}

function truncateString(e) {
  /*
  1. Check and see if the string is longer than or equal to 3
  2. If less truncate and add ...
  3. If more, truncate by num and 3 and then add ...
  */
  e = e || window.event;
    if (e.keyCode == 13 || e.buttons ==0 || e.buttons==1 || e.buttons ==2)
    {
       
  var str = document.getElementById("userInput7").value;
  var num = document.getElementById("userInput8").value;
  if (num <= 3){
    if (str.length > num){
      str = str.slice(0, num);
       str = str.concat("...");
       alert(str);
    }
    
    
  }
  
  else if (str.length > num){
      str = str.slice(0, num-3);
       str = str.concat("...");
	   alert(str);

    }
  else if (str.length == num || str.length < num){
       alert(str);
    }
	}
	else{
		return;
	}
}


function slasher(e) {

	e = e || window.event;
    if (e.keyCode == 13 || e.buttons ==0 || e.buttons==1 || e.buttons ==2)
    {
        
	
    var arr = document.getElementById("userInput9").value;
	arr = arr.replace(/\s+/g, '');
	arr = arr.split("");
	var howMany = document.getElementById("userInput10").value;
  
  
  arr = arr.splice(0, howMany);
  
  alert (arr);
	}
	else {
		return;
	}
}

/*Code for hitting enter on submissions
function searchKeyPress(e, etner)
{
    // look for window.event in case event isn't passed in
    e = e || window.event;
    if (e.keyCode == 13 || e.buttons ==0 || e.buttons==1 || e.buttons ==2)
    {
        document.getElementById('etner').click();
        return false;
    }
    return true;
}
*/
