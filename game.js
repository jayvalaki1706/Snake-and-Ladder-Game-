let tog = 1
let rollingSound = new Audio('rpg-dice-rolling-95182.mp3')
let winSound = new Audio('winharpsichord-39642.mp3')


let p1sum = 0
let p2sum = 0


function play(player, psum, correction, num) {
    let sum
    if (psum == 'p1sum') {

        p1sum = p1sum + num

        if (p1sum > 100) {
            p1sum = p1sum - num
        }

        if (p1sum == 1) {
            p1sum = 38
        }
        if (p1sum == 4) {
            p1sum = 14
        }
        if (p1sum == 8) {
            p1sum = 30
        }
        if (p1sum == 21) {
            p1sum = 42
        }
        if (p1sum == 28) {
            p1sum = 76
        }
        if (p1sum == 32) {
            p1sum = 10
        }
        if (p1sum == 36) {
            p1sum = 6
        }
        if (p1sum == 48) {
            p1sum = 26
        }
        if (p1sum == 50) {
            p1sum = 67
        }
        if (p1sum == 62) {
            p1sum = 18
        }
        if (p1sum == 71) {
            p1sum = 92
        }
        if (p1sum == 80) {
            p1sum = 99
        }
        if (p1sum == 88) {
            p1sum = 24
        }
        if (p1sum == 95) {
            p1sum = 56
        }
        if (p1sum == 97) {
            p1sum = 78
        }

        sum = p1sum

    }

    if (psum == 'p2sum') {

        p2sum = p2sum + num

        if (p2sum > 100) {
            p2sum = p2sum - num
        }
        

        if (p2sum == 1) {
            p2sum = 38
        }
        if (p2sum == 4) {
            p2sum = 14
        }
        if (p2sum == 8) {
            p2sum = 30
        }
        if (p2sum == 21) {
            p2sum = 42
        }
        if (p2sum == 28) {
            p2sum = 76
        }
        if (p2sum == 32) {
            p2sum = 10
        }
        if (p2sum == 36) {
            p2sum = 6
        }
        if (p2sum == 48) {
            p2sum = 26
        }
        if (p2sum == 50) {
            p2sum = 67
        }
        if (p2sum == 62) {
            p2sum = 18
        }
        if (p2sum == 71) {
            p2sum = 92
        }
        if (p2sum == 80) {
            p2sum = 99
        }
        if (p2sum == 88) {
            p2sum = 24
        }
        if (p2sum == 95) {
            p2sum = 56
        }
        if (p2sum == 97) {
            p2sum = 78
        }

        sum = p2sum
    }

    document.getElementById(`${player}`).style.transition = `linear all .5s`

    if (sum < 10) {

        document.getElementById(`${player}`).style.left = `${(sum - 1) * 62}px`
        document.getElementById(`${player}`).style.top = `${-0 * 62 - correction}px`

    }
    else if (sum == 100) {
        winSound.play();
        var won1 = sessionStorage.username1;
        var won2 = sessionStorage.username2;
        if (player == 'p1') {
            alert(won1+" Won !!")
        }
        else if (player == 'p2') {
            alert(won2+" Won !!")
        }
        location.reload()
    }
    else {

        numarr = Array.from(String(sum))
        n1 = eval(numarr.shift())
        n2 = eval(numarr.pop())
        // console.log(n1, n2)

        if (n1 % 2 != 0) {

            if (n2 == 0) {
                document.getElementById(`${player}`).style.left = `${(9) * 62}px`
                document.getElementById(`${player}`).style.top = `${(-n1 + 1) * 62 - correction}px`
            }
            else {
                document.getElementById(`${player}`).style.left = `${(9 - (n2 - 1)) * 62}px`
                document.getElementById(`${player}`).style.top = `${-n1 * 62 - correction}px`
            }
        }
        else if (n1 % 2 == 0) {
            if (n2 == 0) {

                document.getElementById(`${player}`).style.left = `${(0) * 62}px`
                document.getElementById(`${player}`).style.top = `${(-n1 + 1) * 62 - correction}px`
            }
            else {

                document.getElementById(`${player}`).style.left = `${(n2 - 1) * 62}px`
                document.getElementById(`${player}`).style.top = `${-n1 * 62 - correction}px`
            }

        }
    }
}

function rollDice(num) {
            // var input = document.getElementById("number").value;
        var image = document.getElementById("dice-img");
        num = Number(num);
        console.log(typeof num);
        switch(num) 
        {
        case 1:
            image.src = "one.png";
            break;
        case 2:
            image.src = "two.png";
            break;
        case 3:
            image.src = "three.png";
            break;
        case 4:
            image.src = "four.png";
            break;
        case 5:
            image.src = "five.png";
            break;
        case 6:
            image.src = "six.png";
            break;
        case 0:
            image.src = "start.png";
            break;
        }

}

document.getElementById('tog').innerText = sessionStorage.username1 + "'s Turn";

document.getElementById("diceBtn").addEventListener("click", function () {
    
    rollingSound.play()
    // rollanimation.play()
    num = Math.floor(Math.random() * (6 - 1 + 1) + 1)
    rollDice(num);
    document.getElementById("dice").innerText = num
    
    if (tog % 2 != 0) {
        document.getElementById('tog').innerText =  sessionStorage.username2 + "'s Turn";
        play('p1', 'p1sum', 0, num)
    }
    else if (tog % 2 == 0) {
        document.getElementById('tog').innerText = sessionStorage.username1 + "'s Turn";
        play('p2', 'p2sum', 55, num)
    }

    tog = tog + 1
})