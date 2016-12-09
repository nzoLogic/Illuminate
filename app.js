console.log('app.js loaded');
$(document).ready(function() {

    console.log("jQuery online");
    var test = $('#one');
    $(test).data({
        square: 'hey'
    });
    $('.square').on('click', checkOrder);
    randomizeOrder($('main').children());
    blink(test);
    //function that randomizes key:value assignments for each child of main !!FIX THIS !!!!
    function blink(block){
      // console.log('blink function');
      $(block).delay(1000).addClass('lit');
    }
    function randomizeOrder(parent) {
        var box = parent[Math.floor(Math.random()* parent.length)];
        console.log($(this).data(dataMap));
    }

    function checkOrder() {
        console.log($(this).data('square') === 'hey');
    }
    function dataMap(){
      return
    }
});
