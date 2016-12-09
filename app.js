console.log('app.js loaded');
var userKeys = [1, 'a', 3];
$(document).ready(function() {
    var test = $('#one');
    $(test).data({
        'key': [1]
    });
  $('.game-board').on('click',function(event){
    // console.log($(event.target).data('key').shift());
    compareKeys($(event.target).data('key').shift());
  })
    blink(test);
    // function that randomizes key:value assignments for each child of main !!FIX THIS !!!!
    function blink(block) {
        $(block).delay(1000).addClass('lit');
    }
      //random number generator for numbers 0 through n amounts of blinks
          //used for amount of keys needed, and random selector for the squares
    function randomizeOrder(parent) {
        var box = parent[Math.floor(Math.random() * parent.length)];
        parent.each(function(child) {
            $(child).data({
                key: [1]
            });
            console.log($(child).data());
        })
    }

    function compareKeys(squareKey) {
      console.log(squareKey === userKeys.shift())
    }


});
