function getQuote(){
  var ranNum = Math.random() * (10)+0;
  ranNum = Math.floor(ranNum);
  var array =
  [
    ["If they can get you asking the wrong questions, they don't have to worry about answers.", "Thomas Pynchon"],
    ["We judge others by their actions and ourselves by our intentions.", "Some Redditor"],
    ["The world is a comedy to those that think; a tragedy to those that feel.", "Horace Walpole"],
    ["Sometimes you never realize the value of a moment until it becomes a memory.", "Dr. Seuss"],
    ["It is the mark of an educated mind, to entertain a thought without accepting it.", "Aristotle"],
    ["A ship in harbor is safe, but that's not why ships are built.", "Fortune Cookie #342229"],
    ["Nothing of me is original. I am the combined efforts of everyone I've every known.", "Chuck Palahniuk"]
    ["Do not stand at my grave and weep I am not there. I do not sleep.", "Mary Elizabeth Frye"],
    ["In three words I can sum up everything I've learned about life: it goes on.", "Robert Frost"],
    ["Another flaw in the human character is that everyone wants to build and nobody wants to do maintenance.", "Kurt Vonnegut"],
    ["Another flaw in the human character is that everyone wants to build and nobody wants to do maintenance.", "Kurt Vonnegut"]
  ];
  document.getElementById("quote").innerHTML= array[ranNum][0] + '<div id="author">- ' + array[ranNum][1]; +'</div>'
}
