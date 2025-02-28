let score = 0;
let timeLeft = 10;
let timer;

document.getElementById("clickButton").addEventListener("click", function() {
    if (timeLeft > 0) {
        score++;
        document.getElementById("score").textContent = score;
    }
});

function startGame() {
    timer = setInterval(function() {
        timeLeft--;
        document.getElementById("time").textContent = timeLeft;

        if (timeLeft <= 0) {
            clearInterval(timer);
            document.getElementById("clickButton").disabled = true;
            alert("ゲーム終了！スコア: " + score);
        }
    }, 1000);
}

window.onload = startGame;
