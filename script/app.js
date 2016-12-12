console.log('app.js loaded');
var userKeys = [],
    correctOrder = [],
    colors = ['yellow', 'green', 'red'],
    level = 1,
    iterations = 3,
    time = 2000;
$(document).ready(function() {
    var children = $('.game-board').find('.circle');
    pageLoad();
    $('.begin').click(startGame);
    $('.restart').click(startGame);


    function pageLoad() {
        $('.intro-title').css('opacity', '1');
        setTimeout(function() {
            $('p.description').css('opacity', '1');
            $('.begin').delay(7000).css('opacity', '1');
        }, 2500);

    }

    function allowUserClick() {
        $('.game-board').on('click', function(event) {
            var selectedId = event.target.id;
            console.log(selectedId);
            compareKeys(selectedId);
        });
    }

    function blink(child) {
        $(child).addClass('red');
        // e.play();
        setTimeout(function() {
            $(child).removeClass('red');
        }, 500);
    }

    function startGame() {
        console.log('game started')
        hideScreen();
        levelDisplay(level);
        introLights(3);
    }

    function introLights(n) {
        if (n === 0) {
            blink(children);
            allowUserClick();
            numberOfIterations(iterations);
            return;
        } else {
            blink(children[3]);
            setTimeout(function() {
                return introLights(n - 1);
            }, 1500);
        }
    }



    function randomNumber() {
        console.log(this.length)
        return Math.floor(Math.random() * children.length);
    }

    function compareKeys(selectedId) {
        if (selectedId !== correctOrder[0].id) {
            console.log('wrong');
            gameOver();
            return;
        }
        else {
          correctOrder.shift();
        }
        if (roundWon()) {
            showVictory(level);
            setTimeout(function() {
              nextLevel();
            }, 1500);
            console.log('round won');
        }

        console.log(correctOrder);
    }

//the hub of functions that is responsible for calling the other functions
function numberOfIterations(n) {
    var child = children[randomNumber()];
    if (n === 0) {
        return;
    }
    console.log(child);
    sequenceAndUserKeys(child);
    setTimeout(function() {
        blink(child);
        // console.log(correctOrder);
        return numberOfIterations(n - 1);
    }, time);
}
//asign value to keys
function sequenceAndUserKeys(element) {
    correctOrder.push(element);
}
//resets game because of incorrect selection

function gameOver() {
    level = 1;
    iterations = 3;
    time = 1500,
    correctOrder = [];
    showScreen();
    $('.outcome').html('GAME OVER').fadeIn(2000).fadeOut(2000);
    setTimeout(function(){
      location.reload();
    }, 5000);
}
//advances level and complexity
function nextLevel() {
    level += 1;
    levelDisplay(level);
    hideScreen();
    // console.log(level);
    iterations += 1;
    // console.log(iterations);
    numberOfIterations(iterations);
}
function levelDisplay(level) {
    $('.insert').html(level);
}
//checks the condition of the round to see if victory is possible
function roundWon(id) {
    return correctOrder.length === 0;
}

function showVictory(level) {
    $('.content').css('height', '40%');
    $('.outcome').html('Success!');

}

function showScreen() {
    $('.content').css('height', '100%');
}

function hideScreen() {
    $('.display').css('height', '0');
    $('.content').css('height', '0');
}
});
