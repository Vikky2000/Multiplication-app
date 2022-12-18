const num1 = Math.ceil(Math.random() * 10);
const num2 = Math.ceil(Math.random() * 10);
const questionE1 = document.getElementById("question");
const scoreE1 = document.getElementById("score");
const ans = num1 * num2;
console.log(ans);
let score = JSON.parse(localStorage.getItem(`score`));
if (!score) {
    score = 0;
}
questionE1.innerText = `What is ${num1} multiply by ${num2} ?`;
scoreE1.innerText = `Score : ${score}`;
function handleonClick() {
    var txt = document.getElementById("mytext");
    var currtext = txt.value;
    if (currtext == ans) {
        console.log("Well Done !");
        scoreE1.innerText = `Score : ${score++}`;
    } else {
        console.log(`You Loose ! `);
        scoreE1.innerText = `Score : ${score--}`;
    } 
};



