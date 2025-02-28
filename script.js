// スコアの読み込み
let score = localStorage.getItem("highScore") || 0;
document.getElementById("highScore").textContent = score;

// ゲームのスコア
let currentScore = 0;
document.getElementById("clickButton").addEventListener("click", function() {
    currentScore++;
    document.getElementById("score").textContent = currentScore;
});

// ゲーム終了時にスコアを保存
function endGame() {
    if (currentScore > score) {
        localStorage.setItem("highScore", currentScore);
        document.getElementById("highScore").textContent = currentScore;
    }
    alert("ゲーム終了！スコア: " + currentScore);
}

setTimeout(endGame, 10000);
