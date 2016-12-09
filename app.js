console.log('app.js loaded');
$(document).ready(function(){

  console.log("jQuery online");
  var test = $('#one');
  $(test).data({square: 'hey'});
  console.log(test.data(), test);

  $('.square').on('click', checkOrder);
  console.log($('.game-board').children());
  function checkOrder(){
    console.log($(this).data('square') === 'hey');
  }

  function randomizeOrder(){

  }
});
