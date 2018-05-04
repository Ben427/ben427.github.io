---
layout: portfolio2
---

<html lang="en">
  <head>
      <script src="/assets/js/js-mini-projects.js"></script>
      <link rel="stylesheet" type="text/css" href="/assets/css/js-mini-projects.css">
  </head>
  <body>


  <h1>JavaScript Mini Projects</h1>

  <div id="page-container">

<!--Start Longest Word-->

  <div class="form-input one">
    Input a sentence and I'll tell you the longest word!
    <br>
    <input id="userInput" type="text" onkeypress="return longestWord(event);"/>
    <input id="btn1" type="button" value="Go!" onClick="return longestWord(event);"/>
</div>
  <!--End Longest Word-->
  

    <!--Start Capitalizing Sentence-->
  <div class="form-input two">
    Input a sentence and I'll capitalize each word for you!
  

  <br>
  <input id="userInput2" type="text" onkeypress="return titleCase(event);">
  <input type="button" value="Go!" onClick="titleCase()">
  </div>
  <!--End Capitalizing Sentence-->

  <!--Start last letter check-->
  <div class="form-input one">
    Input a word and a letter. I will tell you if the last letter of the word matches the letter you input!
  

  <br>
  <input id="userInput3" type="text">
  <input id="userInput4" type="text" onkeypress="return confirmEnding(event);">
  <input type="button" value="Go!" onClick="confirmEnding()">
  </div>
  <!--End last letter check-->
 
    <!--Start string repeater-->
  <div class="form-input two">
    Input a word and a number. I will repeat the string as many times as the number you put in!
  

  <br>
  <input id="userInput5" type="text">
  <input id="userInput6" type="number" onkeypress="return repeatStringNumTimes(event);">
  <input type="button" value="Go!" onClick="repeatStringNumTimes()">
  </div>
  <!--End string repeater-->
  
  <!--Start string truncator-->
  <div class="form-input one">
    Input a string and a number. The number will act as a max length. I will also include a "..." which will count towards the character count if the max number is greater than 3. 
  

  <br>
  <input id="userInput7" type="text">
  <input id="userInput8" type="number" onkeypress="return truncateString(event);">
  <input type="button" value="Go!" onClick="truncateString()">
  </div>
  <!--End string truncator-->
  
  <!--Start array slasher-->
  <div class="form-input two">
		 This is a function that takes your input, turns it into an array, then returns only as many characters as you input in the second box.
		<br> Please enter a series of letters/numbers that you'd like to put in the array and the length you'd like me keep. 
	

  <br>
  <input id="userInput9" type="text">
  <input id="userInput10" type="number" onkeypress="return slasher(event);">
  <input type="button" value="Go!" onClick="slasher()" >
  </div>
  <!--End array slasher-->
  </div>
</body>
  </html>
