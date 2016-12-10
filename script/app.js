console.log('app.js loaded');
var userKeys = [],
    correctOrder = [],
    level = 1,
    iterations = 3;
$(document).ready(function() {
    var children = $('.game-board').children();
    //section for event listeners

    $('.begin').click(startGame);
    //constructor for making the game more modular **proto phase//implement later
    function Game(obj) {
        this.game = 'Illumination Theory'
        this.level = 1,
            this.blinks = 3,
            this.correctOrder = [],
            this.gameBoard = $('.game-board')
    }
    var Illuminate = new Game({});
    function allowUserClick(){
      $('.game-board').on('click', function(event) {
          var selectedId = event.target.id;
          compareKeys(selectedId);
      });
    }
    function blink(block) {
        $(block).addClass('lit');
        setTimeout(function() {
            $(block).removeClass('lit');
        }, 500);
    }

    //random number generator for numbers 0 through n amounts of blinks
    //used for amount of keys needed, and random selector for the squares
    // randomizeOrder($('.game-board'));

    function startGame() {
        allowUserClick();
        numberOfIterations(iterations);
    }

    function randomNumber() {
        return Math.floor(Math.random() * $('.game-board').children().length);
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
    //navigator for blink, and div sequence ordering
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
        }, 2000);
    }
    //asign value to keys
    function sequenceAndUserKeys(element) {
        correctOrder.push(element);
    }
    //resets game because of incorrect selection
    // TODO//
    function gameOver() {
        console.log('game over')
    }
    //advances level and complexity
    function nextLevel() {
        level += 1;
        console.log(level);
        iterations += 2;
        console.log(iterations);
        numberOfIterations(iterations);
    }

    function roundWon() {
        return correctOrder.length === 0;
    }
});
