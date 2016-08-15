$(document).ready(function(){
  var ranks = ['ace','2','3','4','5','6','7','8','9','10','Jack','Queen','King']
  var suits = ['Clubs','Spades','Hearts','Diamonds']
  var deck = [];
  suits.forEach(function(suit){
    ranks.forEach(function(rank){
      deck.push(rank + ' of ' + suit);
    });
  });


  deck.forEach(function(card){
    if (card.indexOf("Clubs") >= 0){
      $(".container").append("<div class='card clubs'>" + card + "</div>")
    } else if(card.indexOf("Hearts") >= 0){
      $(".container").append("<div class='card hearts'>" + card + "</div>")}
  });
    $(".card").click(function() {
      alert($(this).html());
    });

});
























  // var suit = 'clubs'
  // ranks.forEach(function(rank){
  //   deck.push(rank + ' of ' + suit);
  // })
  // suit = 'spades';
  // ranks.forEach(function(rank){
  //   deck.push(rank + ' of ' + suit);
  // })
  //





  //
  // var sentence = 'hello world world how how are how world';
  // var words = sentence.split(' ');
  // var uniqueWords = [];
  // words.forEach(function(word){
  //   if(uniqueWords.indexOf(word) < 0){
  //     uniqueWords.push(word);
  //
  //   }
  // })
  //
  // var count = 0;
  // uniqueWords.forEach(function(uniqueWord){
  //   words.forEach(function(word){
  //     if(word===uniqueWord){
  //       count+=1;
  //     }
  //     //console.log(uniqueWords);
  //     //if word equals unique word then increase count
  //   })
  //   //log word and count, reset count to 0
  //   console.log(uniqueWord + " " + count);
  //   count = 0;
  // })

  //
  // var summands = [1,43,62,45];
  // var sum = 0;
  // summands.forEach(function(summand){
  //   sum+=summand;
  // })
  // console.log(sum);
  // sum = summands.reduce(function(previousValue, currentValue){
  //   return previousValue + currentValue;
  // })
  // console.log(sum);
