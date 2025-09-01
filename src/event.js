let input = document.getElementById("name");
let output = document.getElementById("output");

// 1.
input.addEventListener("keyup", function () {
    output.textContent = "คุณพิมพ์: " + input.value;
});

// 2.
output.addEventListener("mouseover", function () {
    output.style.color = "red";
});

// 3.
output.addEventListener("mouseout", function () {
    output.style.color = "black";
});