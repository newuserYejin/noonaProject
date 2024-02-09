
let randomNum = 0 //랜덤 숫자 변수
let goButton = document.getElementById("go")
let userInput = document.querySelector("#userInput")
let resultArea = document.querySelector("#result")

goButton.addEventListener("click", play)

function pickRandomNum() {
    randomNum = Math.floor(Math.random() * 100) + 1     // 1~100까지의 랜덤 수 출력
    console.log("목표 값: ", randomNum)
}

pickRandomNum()

function play() {
    let userVlaue = userInput.value
    if (userVlaue < randomNum) {
        resultArea.textContent = "UP"
    } else if (userVlaue > randomNum) {
        resultArea.textContent = "DOWN"
    } else {
        resultArea.textContent = "Collect!!!"
    }
}

