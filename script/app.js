console.log('app.js loaded');
var userKeys = [],
    correctOrder = [],
    level = 1,
    iterations = 3,
    time = 2000;
$(document).ready(function() {
  ///new children with circles. fix this
    var children = $('.game-board').children().hasAttribute('id');
    console.log(children);
    var e = new Audio('./sounds/68443__pinkyfinger__piano-e.wav');
    e.playbackRate = 2.0;
    //section for event listeners
    $('.begin').click(startGame);
    //constructor for making the game more modular **proto phase//implement later
    function Game(obj) {
        this.game = 'Illumination Theory'
        this.level = 1,
            this.blinks = 3,
            this.correctOrder = [],
            this.children = $('.game-board').children(),
            this.time = 2000
          }
    var Illuminate = new Game({});
    Game.prototype.randomNumber = function(){
      return Math.floor(Math.random() * children.length);

    }

    console.log(Illuminate.randomNumber());
    function allowUserClick(){
      $('.game-board').on('click', function(event) {
          var selectedId = event.target.id;
          compareKeys(selectedId);
      });
    }

    function blink(block) {
        $(block).addClass('lit');
        // e.play();
        setTimeout(function() {
            $(block).removeClass('lit');
        }, 500);
    }

    //random number generator for numbers 0 through n amounts of blinks
    //used for amount of keys needed, and random selector for the squares
    function startGame() {
        levelDisplay(level);
        allowUserClick();
        numberOfIterations(iterations);
    }

    function randomNumber() {
        return Math.floor(Math.random() * children.length);
    }

    function compareKeys(selectedId) {
        if (selectedId !== correctOrder[0].id) {
            console.log('wrong');
            gameOver();
        } else {
            console.log('Correct', correctOrder);
            correctOrder.shift();
            if (roundWon()) {
                console.log('round won');
                nextLevel();
            }
            console.log(correctOrder);
        }
    }
    //the hub of functions that is responsible for calling the other integral functions
    function numberOfIterations(n) {
        var child = children[randomNumber()];
        if (n === 0) {
            return;
        }
        sequenceAndUserKeys(child);
        setTimeout(function() {
            blink(child, n);
            console.log(correctOrder);
            return numberOfIterations(n - 1);
        }, time);
    }
    //asign value to keys
    function sequenceAndUserKeys(element) {
        correctOrder.push(element);
    }
    //resets game because of incorrect selection
    function gameOver() {
        console.log('game over')
        level = 1;
        iterations = 3;
        correctOrder = [],
        time = 1500;
    }
    //advances level and complexity
    function nextLevel() {
        level += 1;
        levelDisplay(level);
        // console.log(level);
        iterations += 2;
        // console.log(iterations);
        numberOfIterations(iterations);
    }
    function levelDisplay(level){
      $('.insert').html(level);
    }
    //checks the condition of the round to see if victory is possible
    function roundWon() {
        return correctOrder.length === 0;
    }
    function showVictory(){

    }
});
