// IF Statement
document.getElementById('CheckAgeButton').addEventListener('click', function () {
    let birthYear = parseInt(document.getElementById('AgeInput').value);
    let adultStatus = document.getElementById('AdultStatus');
    let currentYear = 2568
    let age = currentYear - birthYear;

    if (age >= 18) {
        adultStatus.textContent = "บรรลุนิติภาวะ";
    } else if (!age) {
        adultStatus.textContent = "กรอกปีเกิด";
    } else {
        adultStatus.innerHTML = `<span class="text-danger">ยังไม่บรรลุนิติภาวะ</span>`;
    }
});

// Switch Statement
document.getElementById('CheckFruitButton').addEventListener('click', function () {
    let fruit = document.getElementById('FruitInput').value;
    let selectedFruit = document.getElementById('SelectedFruit');

    switch (fruit) {
        case "กล้วย":
            selectedFruit.textContent = "🍌";
            break;
        case "ส้ม":
            selectedFruit.textContent = "🍊";
            break;
        case "มะม่วง":
            selectedFruit.textContent = "🥭";
            break;
        default:
            selectedFruit.textContent = "เลือกผลไม้ที่อยู่ในลิสต์ (กล้วย, ส้ม, มะม่วง)";
    }
});

// JavaScript For Loops
document.getElementById('CheckNumberButton').addEventListener('click', function () {
    let number = parseInt(document.getElementById('NumberInput').value);
    let result = document.getElementById('bandai').innerHTML = "";

    for (let i = 1; i <= number; i++) {
        result += "*".repeat(i) + "<br>";
    }

    document.getElementById('bandai').innerHTML = result;
});

// JavaScript While Loops
document.getElementById('CheckNumber2Button').addEventListener('click', function () {
    let number = parseInt(document.getElementById('Number2Input').value);
    let result = document.getElementById('bandai2').innerHTML = "";
    let i = 1;

    while (i <= number) {
        result += "*".repeat(i) + "<br>";
        i++;
    }

    document.getElementById('bandai2').innerHTML = result;
});

// Arrays and Functions
document.getElementById('ArrayButton').addEventListener('click', function () {
    let fruits = ["กล้วย", "ส้ม", "มะม่วง"];

    function greet(fruit) {
        return fruit + "!";
    }

    alert(greet(fruits));
});