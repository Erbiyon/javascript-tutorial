// อ่านค่าข้อมูลจาก HTML

// 1.
// let title = document.getElementById("title");
// console.log(title.textContent);

// 2.
// let texts = document.getElementsByClassName("text");
// console.log(texts[0].textContent);
// console.log(texts[1].textContent);

// 3.
// let paragraphs = document.getElementsByTagName("p");
// for (let i = 0; i < paragraphs.length; i++) {
//     console.log(paragraphs[i].textContent);
// }

// 4.
// let firstText = document.querySelector(".text");
// console.log(firstText.textContent);

// 5.
// let allTexts = document.querySelectorAll(".text");
// for (let i = 0; i < allTexts.length; i++) {
//     console.log(allTexts[i].textContent);
// }

// แก้ไขเนื้อหาหรือคุณสมบัติ

// 1.
// let box = document.getElementById("box");
// box.innerHTML = "<b>Hi</b> <i>World</i>";

// 2.
// let d = document.getElementById("demo");
// console.log(d.innerText);

// 3.
// let d2 = document.getElementById("demo2");
// console.log(d2.textContent);

// 4.
// let msg = document.getElementById("msg");
// msg.style.color = "red";
// msg.style.fontSize = "20px";

// 5.
// let link = document.getElementById("link");

// console.log(link.getAttribute("href"));

// link.setAttribute("href", "https://openai.com");
// link.setAttribute("target", "_blank");

// สร้างหรือลบ Elements

// 1.
// let box2 = document.getElementById("box2");

// let newP = document.createElement("p");
// newP.textContent = "เพิ่มเข้ามาใหม่";

// box2.appendChild(newP);

// 2.
// let list = document.getElementById("list");
// let itemB = document.getElementById("itemB");

// let newLi = document.createElement("li");
// newLi.textContent = "New Item";

// list.insertBefore(newLi, itemB);

// 3.
// let list = document.getElementById("myList");
// let second = list.children[1]; // <li>Two</li>

// list.removeChild(second);

// 4.
function addItem() {
    let ul = document.getElementById("myList2");
    let li = document.createElement("li");
    li.textContent = "New Item";
    ul.appendChild(li);
}

function removeItem() {
    let ul = document.getElementById("myList2");
    if (ul.lastElementChild) {
        ul.removeChild(ul.lastElementChild);
    }
}