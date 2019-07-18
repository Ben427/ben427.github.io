function getQuote(){
  var ranNum = Math.random() * (10)+0;
  ranNum = Math.floor(ranNum);
  var array =
  [
    ["One time after Billy struck out, he whacked his aluminum bat against a wall with such violence that he bent it at a right angle. The next time he came to the plate he was still so furious with himself that he insisted on hitting with the crooked bat.", "Michael Lewis, Moneyball"],
    ["Consciousness is the context in which objects of experience appears.", "Sam Harris"],
    ["&quot;It’s looking at process rather than outcomes&quot;, Paul says. &quot;Too many people make decisions based on outcomes rather than process.&quot;", "Michale Lewis, Moneyball"],
    ["Life is chock-full of lies, but the biggest lie is math. That’s particularly clear in the discipline of probability, a field of study that’s completely and wholly fake. When push comes to shove—when you truly get down to the core essence of existence—there is only one mathematical possibility: Everything is 50-50. Either something will happen, or something will not.", "Chuck Klosterman, Sex, Drugs & Cocoa Puffs"],
    ["In plainer words: the endosymbiosis theory stipulates that we are all composite creatures, not purely and unambiguously individuals. Small wonder that it was slow to take hold. Nobody likes that Jason Bourne feeling of being told that you aren’t who you thought you were.", "David Quammen, The Tangled Tree"],
    ["Our entire lives, he [Eckhart Tolle] argued, are governed by a voice in our heads. This voice is engaged in a ceaseless stream of thinking — most of it negative, repetitive, and self-referential. It squawks away at us from the minute we open our eyes in the morning until the minute we fall asleep at night, if it allows us to sleep at all. Talk, talk, talk: the voice is constantly judging and labeling everything in its field of vision. Its targets aren’t just external; it often viciously taunts us, too.", "Dan Harris, 10% Happier"],
    ["Energy, not time, is the fundamental currency of high performance.", "Schwartz & Loehr"]
    ["He does not mean that it does not hurt. He does not mean that we are not frightened. Only that: we are here. This is what it means to swim in the tide, to walk the earth, and feel it touch your feet. This is what it means to be alive.", "Madeline Miller, Circe"],
    ["&quot;He’s not tacticaly rude,&quot; his wife explains. &quot;He’s sincerely rude.&quot;", "Michael Lewis, The Big Short"],
    ["I don’t know anyone who is wise who doesn’t read a lot.", "Charlie Munger"],
    ["Personally, I’ve gotten so that I now use a kind of two-track analysis. First, what are the factors that really govern the interests involved, rationally considered? And second, what are the subconscious influences where the brain at a subsconscious level is automatically doing these things- which by and large are useful, but which often disfunction. <br> One approach is rationality - the way you’d work out a bridge problem: by evaluating the real interests, the real probabilities and so forth. And the other is to evaluate the psychological factors that cause subconscious conclusions - many of which are wrong.", "Charlie Munger"],
    ["Avoiding stupidity is easier than seeking brilliance.", "Farnham Street"],
    ["In the short run, the market is a voting machine but in the long run it is a weighing machine.", "Ben Graham"]
  ];
  document.getElementById("quote").innerHTML= array[ranNum][0] + '<div id="author">- ' + array[ranNum][1]; +'</div>'
}
