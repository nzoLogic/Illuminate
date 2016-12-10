console.log('app.js loaded');
var userKeys = [];
$(document).ready(function() {
    var test = $('#one'),
        correctOrder = []
    randomIzer =

        $('.square').on('click', function(event) {
            // console.log($(event.target).data('key').shift());
            // compareKeys($(event.target).data('key').shift());
            console.log($(this), userKeys.shift());
        });
    // function Game(sequence){
    //   this.correctOrder = [],
    //   this.userKeys = [],
    //   this.level = 1,
    //   this.numOfBlinks = 3
    // };
    // var Round = new Game({});

    function blink(block) {
      console.log(block);
        $(block).addClass('lit');
        setTimeout(function() {
            $(block).removeClass('lit');
        }, 500);
    }

    //random number generator for numbers 0 through n amounts of blinks
    //used for amount of keys needed, and random selector for the squares
    randomizeOrder($('.game-board'));

    function randomizeOrder(parent) {
        var $box = parent.children();
        numberOfIterations($box, 4);
        //     blink($box);
        //     console.log(Game);
        //     console.log($box);
        //     console.log(correctOrder);
    }
    function randomNumber(){
      return Math.floor(Math.random() * $('.game-board').children().length);
    }

    function compareKeys(squareKey) {
        console.log(squareKey === userKeys.shift())
    }
    //navigator for blink, and div sequence ordering
    function numberOfIterations(element, n) {
      var child = element[randomNumber()];
        if (n === 0) {
            return;
        }
        sequenceAndUserKeys(child)
        setTimeout(function(){
          blink(child, n);
          console.log(userKeys);
          return numberOfIterations(element, n -1);
        }, 2000);
    }
    //asign value to keys
    function sequenceAndUserKeys(element){
      correctOrder.push(element);
      userKeys.push(element);
    }
});
