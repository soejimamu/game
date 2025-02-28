document.addEventListener("DOMContentLoaded", function() {
    let scoreElement = document.getElementById("score");
    let timeElement = document.getElementById("time");
    let clickButton = document.getElementById("clickButton");

    let score = 0;
    let timeLeft = 10;
    let timer;

    // ボタンのクリックイベント
    clickButton.addEventListener("click", function() {
        if (timeLeft > 0) {
            score++;
            scoreElement.textContent = score;
        }
    });

    // ゲーム開始
    function startGame() {
        console.log("ゲーム開始");

        timer = setInterval(function() {
            timeLeft--;
            timeElement.textContent = timeLeft;

            if (timeLeft <= 0) {
                clearInterval(timer);
                clickButton.disabled = true;
                alert("ゲーム終了！スコア: " + score);
            }
        }, 1000);
    }

    startGame();
});
