function calculate() {

let g1 = Number(document.getElementById("grade1").value);

let g2 = Number(document.getElementById("grade2").value);

let g3 = Number(document.getElementById("grade3").value);

let average = (g1 + g2 + g3) / 3;

document.getElementById("average").textContent =
"Average: " + average.toFixed(1);

if (average >= 60) {

document.getElementById("result").textContent =
"Result: Pass";

}

else {

document.getElementById("result").textContent =
"Result: Fail";

}

}